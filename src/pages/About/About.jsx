// src/pages/About/About.jsx
import { useEffect } from "react";
import { useI18n } from "../../i18n/useI18n.js";

export default function About() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("about.title") || "About";
  }, [t]);

  return (
    <section
      aria-labelledby="about-title"
      style={{ padding: "2rem 1rem", maxWidth: 900, margin: "0 auto" }}
    >
      <h1 id="about-title">{t("about.title") || "About"}</h1>
      <p style={{ color: "var(--muted)" }}>
        {t("about.lead") || "About this project."}
      </p>

      <h2>{t("about.sections.features") || "Features"}</h2>
      <ul>
        <li>{t("about.features.dictionary") || "Interactive dictionary"}</li>
        <li>{t("about.features.vscode") || "VSCode setup & shortcuts"}</li>
        <li>{t("about.features.i18n") || "NO/EN localization"}</li>
      </ul>

      <p>
        <a
          href="https://github.com/Mariengs/developer1.0"
          target="_blank"
          rel="noreferrer"
        >
          {t("about.link.repo") || "View the repository on GitHub"}
        </a>
      </p>
    </section>
  );
}
