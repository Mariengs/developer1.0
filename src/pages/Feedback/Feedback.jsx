// src/pages/Feedback/Feedback.jsx
import { useEffect, useMemo } from "react";
import { useI18n } from "../../i18n/useI18n.js";
import styles from "./Feedback.module.css";

export default function Feedback() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("feedback.title") || "Feedback";
  }, [t]);

  // Foran-encoder subject så mailto fungerer likt i alle klienter
  const mailtoHref = useMemo(() => {
    const subject = t("feedback.mail.subject") || "Developer Help – Feedback";
    return `mailto:you@example.com?subject=${encodeURIComponent(subject)}`;
  }, [t]);

  return (
    <section
      className={styles.wrapper}
      role="region"
      aria-labelledby="feedback-title"
    >
      <div className={styles.card}>
        <h1 id="feedback-title" className={styles.title}>
          {t("feedback.title") || "Feedback & contributions"}
        </h1>

        <p id="feedback-lead" className={styles.lead}>
          {t("feedback.lead") ||
            "Suggest new terms, fix mistakes or share ideas."}
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              className={styles.button}
              href={mailtoHref}
              aria-describedby="feedback-lead"
            >
              {t("feedback.method.email") || "Send email"}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
