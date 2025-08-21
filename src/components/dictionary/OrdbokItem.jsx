import { useState } from "react";
import {
  Tag,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
} from "lucide-react";
import Card from "./Card.jsx";
import { getDomain } from "../../lib/domains.js";
import { linkClassFor } from "../../lib/categoryStyles.js";

export default function OrdbokItem({ item, isDark }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const domain = item.link ? getDomain(item.link) : "";

  async function copyExample() {
    if (!item.example) return;
    try {
      await navigator.clipboard.writeText(item.example);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <Card isDark={isDark}>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{item.term}</h3>
            <div
              className={`mt-1 flex flex-wrap items-center gap-2 text-xs ${
                isDark ? "text-zinc-500" : "text-zinc-600"
              }`}
            >
              <span className="inline-flex items-center gap-1">
                <Tag className="size-3" /> {item.category}
              </span>
              {item.aliases?.length ? (
                <span>Alias: {item.aliases.join(", ")}</span>
              ) : null}
            </div>
          </div>

          {item.example && (
            <button
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-xl border px-3 py-1 text-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-zinc-600 ${
                isDark
                  ? "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
                  : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100"
              }`}
              aria-expanded={open}
              aria-controls={`desc-${item.term}`}
            >
              {open ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
              {open ? "Skjul" : "Vis"}
            </button>
          )}
        </div>

        <p
          id={`desc-${item.term}`}
          className={`text-sm ${isDark ? "text-zinc-200" : "text-zinc-800"}`}
        >
          {item.description}
        </p>

        {item.link && (
          <div className="mt-1">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassFor(item.category)}
            >
              <ExternalLink className="size-3" />
              Les mer {domain && <span className="opacity-80">({domain})</span>}
            </a>
          </div>
        )}

        {item.example && open && (
          <div className="mt-2">
            <div className="mb-1 flex items-center justify-between">
              <div
                className={`inline-flex items-center gap-2 text-xs uppercase tracking-wide ${
                  isDark ? "text-zinc-500" : "text-zinc-600"
                }`}
              >
                <BookOpen className="size-3" /> Eksempel
              </div>
              <button
                onClick={copyExample}
                className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs transition focus:outline-none focus:ring-2 focus:ring-zinc-600 ${
                  isDark
                    ? "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
                    : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100"
                }`}
                title="Kopier eksempel"
              >
                {copied ? (
                  <Check className="size-3" />
                ) : (
                  <Copy className="size-3" />
                )}
                {copied ? "Kopiert!" : "Kopier"}
              </button>
            </div>
            <pre
              className={`overflow-auto rounded-xl p-3 text-sm ${
                isDark
                  ? "bg-zinc-900 text-zinc-100"
                  : "bg-zinc-100 text-zinc-900"
              }`}
            >
              <code>{item.example}</code>
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
