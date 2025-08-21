// src/i18n/I18nProvider.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const translations = {
  no: {
    "app.title": "Interaktiv frontend-ordbok",
    "app.subtitle":
      "Søk etter begreper innen React, JavaScript, CSS, web og backend. Klikk «Vis» for eksempler og «Les mer».",
    "search.placeholder": "Søk: f.eks. props, useEffect, grid …",
    "categories.all": "Alle",
    "results.label": "Treff",
    "sort.by": "Sorter etter",
    "sort.term": "Term",
    "sort.category": "Kategori",
    "sort.domain": "Kilde (domene)",
    "sort.asc": "Stigende",
    "sort.desc": "Synkende",
    "btn.show": "Vis",
    "btn.hide": "Skjul",
    "link.readMore": "Les mer",
    "example.label": "Eksempel",
    "copy.copy": "Kopier",
    "copy.copied": "Kopiert!",
    "empty.noResults":
      "Ingen treff. Prøv et annet søkeord eller velg en annen kategori.",
  },
  en: {
    "app.title": "Interactive frontend glossary",
    "app.subtitle":
      "Search for concepts across React, JavaScript, CSS, web and backend. Click “Show” for examples and “Read more” for docs.",
    "search.placeholder": "Search: e.g. props, useEffect, grid …",
    "categories.all": "All",
    "results.label": "Matches",
    "sort.by": "Sort by",
    "sort.term": "Term",
    "sort.category": "Category",
    "sort.domain": "Source (domain)",
    "sort.asc": "Ascending",
    "sort.desc": "Descending",
    "btn.show": "Show",
    "btn.hide": "Hide",
    "link.readMore": "Read more",
    "example.label": "Example",
    "copy.copy": "Copy",
    "copy.copied": "Copied!",
    "empty.noResults": "No results. Try a different query or category.",
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const detect = () => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "no" || saved === "en") return saved;
      const nav = navigator?.language?.toLowerCase() || "";
      if (nav.startsWith("nb") || nav.startsWith("nn") || nav.startsWith("no"))
        return "no";
      return "en";
    } catch {
      return "en";
    }
  };

  const [lang, setLang] = useState(detect);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      void e;
    }
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang] || translations.en;
    return (key) => dict[key] ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}
