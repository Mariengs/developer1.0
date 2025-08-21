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
import { getDomain, linkClassFor } from "../../lib/categoryStyles.js";
import { useI18n } from "../../i18n/useI18n.js";
import { categoryLabel } from "../../lib/categoryLabel.js";
import styles from "./OrdbokItem.module.css";

export default function OrdbokItem({ item }) {
  const { t, lang } = useI18n();

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const domainKey = item.link ? getDomain(item.link) : "default";

  async function copyExample() {
    if (!item.example) return;
    try {
      await navigator.clipboard.writeText(item.example);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = item.example;
        ta.readOnly = true;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch (fallbackErr) {
        void fallbackErr;
      }
    }
  }

  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 16 }}
        >
          <div>
            <h3 className={styles.title}>{item.term}</h3>
            <div className={styles.meta}>
              <span className={styles.metaRow}>
                <Tag size={12} /> {categoryLabel(item.category, lang)}
              </span>
              {item.aliases?.length ? (
                <span>
                  {t("label.alias")}: {item.aliases.join(", ")}
                </span>
              ) : null}
            </div>
          </div>

          {item.example && (
            <button
              onClick={() => setOpen((v) => !v)}
              className={styles.actions}
              aria-expanded={open}
              aria-controls={`desc-${item.term}`}
            >
              {open ? (
                <ChevronUp className={styles.iconSm} />
              ) : (
                <ChevronDown className={styles.iconSm} />
              )}
              {open ? t("btn.hide") : t("btn.show")}
            </button>
          )}
        </div>

        <p id={`desc-${item.term}`} className={styles.desc}>
          {item.description}
        </p>

        {item.link && (
          <div className={styles.linkWrap}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassFor(item.category, domainKey)}
            >
              <ExternalLink style={{ width: 12, height: 12 }} />
              {t("link.readMore")} {domainKey && `(${domainKey})`}
            </a>
          </div>
        )}

        {item.example && open && (
          <div className={styles.codeWrap}>
            <div className={styles.codeHead}>
              <div className={styles.codeLabel}>
                <BookOpen size={12} /> {t("example.label")}
              </div>
              <button
                onClick={copyExample}
                className={styles.copyBtn}
                title={t("copy.copy")}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? t("copy.copied") : t("copy.copy")}
              </button>
            </div>
            <pre className={styles.pre}>
              <code>{item.example}</code>
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
