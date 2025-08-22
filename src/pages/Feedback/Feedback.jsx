import { useContext, useEffect } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";
import styles from "./Feedback.module.css";

export default function Feedback() {
  const { t } = useContext(I18nContext);

  useEffect(() => {
    document.title = t("feedback.title");
  }, [t]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>{t("feedback.title")}</h1>
        <p className={styles.lead}>{t("feedback.lead")}</p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className={styles.button}
              href="mailto:you@example.com?subject=Developer%20Help%20Feedback"
            >
              {t("feedback.method.email")}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
