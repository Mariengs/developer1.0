import React, { useEffect, useMemo, useState } from "react";
import { I18nContext } from "./I18nContext.js";
import { translations } from "./translations.js";

export default function I18nProvider({ children }) {
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
    const base = translations.en || {};
    const dict = { ...base, ...(translations[lang] || {}) };
    return (key) => {
      if (!(key in dict) && import.meta.env.DEV) {
        // nyttig varsel i konsollen når du glemmer en nøkkel
        console.warn("Missing i18n key:", key);
      }
      return dict[key] ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
