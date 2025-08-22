import { useContext, useEffect } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";

export default function Feedback() {
  const { t } = useContext(I18nContext);

  useEffect(() => {
    document.title = t("feedback.title");
  }, [t]);

  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>{t("feedback.title")}</h1>
      <p>{t("feedback.lead")}</p>
      <ul>
        <li>
          <a href="mailto:you@example.com?subject=Developer%20Help%20Feedback">
            {t("feedback.method.email")}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mariengs/developer1.0/issues"
            target="_blank"
            rel="noreferrer"
          >
            {t("feedback.method.github")}
          </a>
        </li>
      </ul>
    </section>
  );
}
