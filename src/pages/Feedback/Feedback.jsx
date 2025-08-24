import { useEffect } from "react";
import { useI18n } from "../../i18n/useI18n.js";
import styles from "./Feedback.module.css";

export default function Feedback() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("feedback.title") || "Feedback";
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
