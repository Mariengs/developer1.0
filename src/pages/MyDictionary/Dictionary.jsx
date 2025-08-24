import React, { useEffect, useMemo, useState } from "react";
import { useI18n } from "../../i18n/useI18n.js";
import { DATA } from "../../data/dictionary.js";
import Badge from "../../components/dictionary/Badge.jsx";
import Input from "../../components/dictionary/Input.jsx";
import SortBar from "../../components/dictionary/SortBar.jsx";
import OrdbokItem from "../../components/dictionary/OrdbokItem.jsx";
import { categoryLabel } from "../../lib/categoryLabel.js";
import { pickDescription } from "../../lib/localeUtils.js";
import styles from "./Dictionary.module.css";

const ALL = "__ALL__";

export default function MyDictionary() {
  const { t, lang } = useI18n();

  // Søk/kategori
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(ALL);

  // Sort/filter
  const [sortKey, setSortKey] = useState("term");
  const [sortDir, setSortDir] = useState("asc");

  const CATEGORIES = useMemo(
    () => [ALL, ...Array.from(new Set(DATA.map((d) => d.category))).sort()],
    []
  );

  const withDerived = useMemo(
    () =>
      DATA.map((d) => ({
        ...d,
        _domain: d.link ? new URL(d.link).hostname.replace(/^www\./, "") : "",
      })),
    []
  );

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    return withDerived.filter((d) => {
      const inCat = cat === ALL || d.category === cat;
      if (!inCat) return false;
      if (!text) return true;

      const desc = pickDescription(d, lang);

      const hay = [
        d.term,
        d.category,
        d._domain,
        ...(d.aliases || []),
        desc || "",
        d.example || "",
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(text);
    });
  }, [q, cat, withDerived, lang]);

  const results = useMemo(() => {
    const arr = [...filtered];
    const key = sortKey === "domain" ? "_domain" : sortKey;
    arr.sort((a, b) => {
      const A = (a[key] || "").toString().toLowerCase();
      const B = (b[key] || "").toString().toLowerCase();
      const cmp = A.localeCompare(B);
      return sortDir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  // “/” for å fokusere søkefeltet – men ikke når man allerede skriver et sted
  useEffect(() => {
    const onKey = (e) => {
      const active = document.activeElement;
      const tag = active?.tagName;
      const typing =
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        active?.isContentEditable === true;
      if (!typing && e.key === "/") {
        e.preventDefault();
        document.getElementById("dict-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slashHint =
    lang === "no"
      ? "Trykk «/» for å fokusere søkefeltet"
      : "Press “/” to focus the search field";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1
            style={{
              margin: 0,
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: -0.2,
            }}
          >
            {t("app.title")}
          </h1>
          <p>{t("app.subtitle")}</p>
        </header>

        {/* Label for skjermlesere */}
        <label htmlFor="dict-search" className="sr-only">
          {t("search.placeholder")}
        </label>

        <div style={{ marginBottom: 16 }}>
          <Input
            id="dict-search"
            value={q}
            onChange={setQ}
            placeholder={t("search.placeholder")}
            aria-describedby="dict-hint dict-results-live"
          />
          {/* Hint for tastaturbrukere */}
          <div
            id="dict-hint"
            style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}
          >
            {slashHint}
          </div>
          {/* Live-opplesing av antall treff (skjult visuelt) */}
          <div
            id="dict-results-live"
            className="sr-only"
            aria-live="polite"
            role="status"
          >
            {t("results.label")}: {results.length}
          </div>
        </div>

        <div className={styles.filters}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={styles.kbtn}
              aria-pressed={cat === c}
            >
              {c === ALL ? t("categories.all") : categoryLabel(c, lang)}
            </button>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.count}>
            <span>{t("results.label")}:</span>
            <Badge>{results.length}</Badge>
          </div>
          <SortBar
            sortKey={sortKey}
            sortDir={sortDir}
            setSortKey={setSortKey}
            setSortDir={setSortDir}
          />
        </div>

        {results.length === 0 ? (
          <div className={styles.empty}>{t("empty.noResults")}</div>
        ) : (
          <div className={styles.grid}>
            {results.map((item) => (
              <OrdbokItem key={item.term} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
