import { useEffect, useState } from "react";

/** Prøv web-bundle først, fallback til root */
async function loadShiki() {
  try {
    return await import("shiki/bundle/web"); // har ofte codeToHtml
  } catch {
    return await import("shiki"); // fallback
  }
}

function useThemeMode() {
  const get = () =>
    document.documentElement.getAttribute("data-theme") || "light";
  const [mode, setMode] = useState(get);
  useEffect(() => {
    const obs = new MutationObserver((m) => {
      for (const x of m) {
        if (x.attributeName === "data-theme") {
          setMode(get());
          break;
        }
      }
    });
    obs.observe(document.documentElement, { attributes: true });
    return () => obs.disconnect();
  }, []);
  return mode;
}

// Fallback-kandidat for språk Shiki ikke har i bundelen
const FALLBACKS = {
  ini: ["properties", "toml", "conf", "bash", "text"],
};

async function codeToHtmlCompat(api, code, lang, theme) {
  // Web-bundle har ofte codeToHtml direkte
  if (typeof api.codeToHtml === "function") {
    return await api.codeToHtml(code, { lang, theme });
  }
  // Root-API med getHighlighter
  if (typeof api.getHighlighter === "function") {
    const hl = await api.getHighlighter({ themes: [theme], langs: [lang] });
    return hl.codeToHtml(code, { lang, theme });
  }
  throw new Error("No compatible Shiki API found");
}

export default function CodeBlock({ children, lang = "json" }) {
  const code =
    typeof children === "string" ? children.trim() : String(children);
  const theme = useThemeMode() === "dark" ? "dark-plus" : "light-plus";
  const [html, setHtml] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const api = await loadShiki();

        // Sett CDN om tilgjengelig (for de som støtter dynamisk lasting)
        if (typeof api.setCDN === "function") {
          api.setCDN("https://unpkg.com/shiki/");
        }

        // Prøv ønsket språk først
        let out;
        try {
          if (typeof api.loadLanguage === "function") {
            try {
              await api.loadLanguage(lang);
            } catch (a) {
              console.warn("Shiki failed to load language:", lang, a);
            }
          }
          out = await codeToHtmlCompat(api, code, lang, theme);
        } catch (primaryErr) {
          // Prøv fallbacks uten å spamme konsollen
          const fallbacks = FALLBACKS[lang] || [];
          for (const fb of fallbacks) {
            try {
              if (typeof api.loadLanguage === "function") {
                try {
                  await api.loadLanguage(fb);
                } catch (a) {
                  console.warn("Shiki failed to load language:", fb, a);
                }
              }
              out = await codeToHtmlCompat(api, code, fb, theme);
              if (out) break;
            } catch {
              /* prøv neste */
            }
          }
          if (!out) throw primaryErr;
        }

        if (!cancelled) setHtml(out);
      } catch (e) {
        // Logg kun i dev
        if (import.meta?.env?.DEV) console.warn("Shiki failed:", e);
        if (!cancelled) setHtml("");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code, lang, theme]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (e) {
      void e;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "0.5rem 0 1rem",
        maxWidth: "100%",
      }}
    >
      <button
        onClick={copy}
        aria-label="Copy code"
        style={{
          position: "absolute",
          right: 8,
          top: 8,
          fontSize: 12,
          padding: "4px 8px",
          borderRadius: 8,
          border: "1px solid var(--card-border)",
          background: "var(--surface-2)",
          color: "var(--text)",
          cursor: "pointer",
        }}
      >
        Copy
      </button>

      {html ? (
        <div
          style={{ maxWidth: "100%" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre
          style={{
            margin: 0,
            padding: "0.75rem 1rem",
            overflowX: "auto",
            overflowY: "hidden",
            maxWidth: "100%",
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 12,
          }}
        >
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
