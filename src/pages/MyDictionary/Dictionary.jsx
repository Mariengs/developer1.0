import React, { useEffect, useMemo, useState } from "react";
import { DATA } from "../../data/dictionary.js";
import Badge from "../../components/dictionary/Badge.jsx";
import Input from "../../components/dictionary/Input.jsx";
import SortBar from "../../components/dictionary/SortBar.jsx";
import ThemeToggle from "../../components/dictionary/ThemeToggle.jsx";
import OrdbokItem from "../../components/dictionary/OrdbokItem.jsx";
import styles from "./Dictionary.module.css";

export default function MyDictionary() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Alle");
  const [theme, setTheme] = useState("system");

  const isSystemDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = theme === "system" ? isSystemDark : theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const [sortKey, setSortKey] = useState("term");
  const [sortDir, setSortDir] = useState("asc");

  const CATEGORIES = useMemo(
    () => ["Alle", ...Array.from(new Set(DATA.map((d) => d.category))).sort()],
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
      const inCat = cat === "Alle" || d.category === cat;
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
    <div
      className={`${styles.wrapper} ${
        isDark ? "bg-zinc-900 text-zinc-50" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-4xl p-6 md:p-10">
        <header className={`${styles.header} flex flex-col gap-2`}>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Interaktiv frontend-ordbok
          </h1>
          <p
            className={`mt-1 text-sm ${
              isDark ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            Søk etter begreper innen React, JavaScript, CSS, web og backend.
            Klikk «Vis» for eksempler og «Les mer».
          </p>
          <div className="flex flex-wrap gap-2 justify-between mt-2">
            <ThemeToggle theme={theme} setTheme={setTheme} isDark={isDark} />
          </div>
        </header>

        <div className="mb-4">
          <Input
            value={q}
            onChange={setQ}
            placeholder="Søk: f.eks. props, useEffect, grid …"
            isDark={isDark}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-2xl px-3 py-2 text-sm border transition focus:outline-none focus:ring-2 focus:ring-zinc-600 ${
                cat === c
                  ? isDark
                    ? "bg-zinc-700 text-white border-zinc-600"
                    : "bg-zinc-200 text-zinc-900 border-zinc-300"
                  : isDark
                  ? "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
                  : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100"
              }`}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <div
            className={`${styles.count} ${
              isDark ? "text-zinc-300" : "text-zinc-700"
            }`}
          >
            <span className="mr-2">Treff:</span>
            <Badge isDark={isDark}>{results.length}</Badge>
          </div>
          <SortBar
            sortKey={sortKey}
            sortDir={sortDir}
            setSortKey={setSortKey}
            setSortDir={setSortDir}
            isDark={isDark}
          />
        </div>

        {results.length === 0 ? (
          <div
            className={`rounded-2xl border p-4 ${
              isDark
                ? "border-zinc-800 bg-zinc-900"
                : "border-zinc-200 bg-white"
            }`}
          >
            <p
              className={`text-sm ${
                isDark ? "text-zinc-200" : "text-zinc-700"
              }`}
            >
              Ingen treff. Prøv et annet søkeord eller velg en annen kategori.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {results.map((item) => (
              <OrdbokItem key={item.term} item={item} isDark={isDark} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
