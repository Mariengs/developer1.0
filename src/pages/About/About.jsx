import { useContext, useEffect } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";

export default function About() {
  const { t } = useContext(I18nContext);

  useEffect(() => {
    document.title = t("about.title");
  }, [t]);

  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 900, margin: "0 auto" }}>
      <h1>{t("about.title")}</h1>
      <p>{t("about.lead")}</p>
      <h2>{t("about.sections.features")}</h2>
      <ul>
        <li>{t("about.features.dictionary")}</li>
        <li>{t("about.features.vscode")}</li>
        <li>{t("about.features.i18n")}</li>
      </ul>
      <p>
        <a
          href="https://github.com/Mariengs/developer1.0"
          target="_blank"
          rel="noreferrer"
        >
          {t("about.link.repo")}
        </a>
      </p>
    </section>
  );
}
