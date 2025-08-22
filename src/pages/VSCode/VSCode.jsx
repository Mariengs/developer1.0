import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { I18nContext } from "../../i18n/I18nContext.js";
import ShortcutsPanel from "./ShortcutsPanel.jsx";

export default function VSCode() {
  const { t } = useContext(I18nContext);
  const [tab, setTab] = useState("overview");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    document.title = t("vscode.title");
  }, [t]);

  // Deep-link: /#/vscode?section=shortcuts
  useEffect(() => {
    const section = params.get("section");
    if (section === "shortcuts") {
      setTab("shortcuts");
      // valgfritt: scroll til panelet
      setTimeout(() => {
        document
          .getElementById("shortcuts")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [params]);

  const switchTab = (next) => {
    setTab(next);
    params.set("section", next);
    setParams(params, { replace: true });
  };

  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>{t("vscode.title")}</h1>

      <div
        role="tablist"
        aria-label="VSCode sections"
        style={{ display: "flex", gap: 8, marginBottom: 16 }}
      >
        <button
          role="tab"
          aria-selected={tab === "overview"}
          onClick={() => switchTab("overview")}
          style={tabButtonStyle(tab === "overview")}
        >
          {t("vscode.tab.overview")}
        </button>
        <button
          role="tab"
          aria-selected={tab === "shortcuts"}
          onClick={() => switchTab("shortcuts")}
          style={tabButtonStyle(tab === "shortcuts")}
        >
          {t("vscode.tab.shortcuts")}
        </button>
      </div>

      {tab === "overview" && (
        <div>
          <p style={{ color: "var(--muted)" }}>{t("vscode.overview.lead")}</p>
          {/* evt. innhold om extensions, settings, tips osv. */}
        </div>
      )}

      {tab === "shortcuts" && (
        <div id="shortcuts">
          <ShortcutsPanel />
        </div>
      )}
    </section>
  );
}

const tabButtonStyle = (active) => ({
  padding: "0.5rem 0.9rem",
  borderRadius: 10,
  border: "1px solid var(--card-border)",
  background: active ? "var(--surface-2)" : "var(--surface)",
  color: "var(--text)",
  cursor: "pointer",
});
