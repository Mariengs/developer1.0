import React, { useEffect, useMemo, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider.jsx";
import { DATA } from "../../data/dictionary.js";
import Badge from "../../components/dictionary/Badge.jsx";
import Input from "../../components/dictionary/Input.jsx";
import SortBar from "../../components/dictionary/SortBar.jsx";
import ThemeToggle from "../../components/dictionary/ThemeToggle.jsx";
import OrdbokItem from "../../components/dictionary/OrdbokItem.jsx";
import styles from "./Dictionary.module.css";

// Intern “Alle”-verdi som ikke oversettes i filtreringslogikken
const ALL = "__ALL__";

export default function MyDictionary() {
  const { t } = useI18n();

  const [q, setQ] = useState("");
  const [cat, setCat] = useState(ALL);

  // Tema
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved === "light" || saved === "dark" || saved === "system"
        ? saved
        : "system";
    } catch {
      return "system";
    }
  });

  const [systemDark, setSystemDark] = useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setSystemDark(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  const isDark = theme === "system" ? systemDark : theme === "dark";
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      void e;
    }
  }, [theme]);

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
      const hay = [
        d.term,
        d.category,
        d._domain,
        ...(d.aliases || []),
        d.description || "",
        d.example || "",
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(text);
    });
  }, [q, cat, withDerived]);

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

          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <div style={{ marginBottom: 16 }}>
          <Input
            value={q}
            onChange={setQ}
            placeholder={t("search.placeholder")}
          />
        </div>

        <div className={styles.filters}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={styles.kbtn}
              aria-pressed={cat === c}
            >
              {c === ALL ? t("categories.all") : c}
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
