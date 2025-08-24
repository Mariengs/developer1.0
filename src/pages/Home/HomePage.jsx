import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n.js";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("home.title") || "Home";
  }, [t]);

  return (
    <div className={styles.wrapper}>
      <section
        className={styles.container}
        aria-labelledby="home-title"
        role="region"
      >
        <header className={styles.hero}>
          <span className={styles.kicker}>
            {t("home.kicker") || "Developer Help"}
          </span>
          <h1 id="home-title" className={styles.title}>
            {t("home.title") || "Home"}
          </h1>
          <p className={styles.subtitle}>
            {t("home.subtitle") || "Your quick start hub."}
          </p>

          <div
            className={styles.ctaRow}
            aria-label={t("home.cta.aria") || "Quick actions"}
          >
            <Link
              to="/dictionary"
              className={styles.cta}
              aria-label={
                (t("home.cta.dictionary") || "Open dictionary") +
                " — " +
                (t("home.card.dictionary.text") || "")
              }
            >
              {t("home.cta.dictionary") || "Open dictionary"}
            </Link>
            <Link
              to="/vscode"
              className={styles.ghost}
              aria-label={
                (t("home.cta.vscode") || "Open VSCode guide") +
                " — " +
                (t("home.card.vscode.text") || "")
              }
            >
              {t("home.cta.vscode") || "Open VSCode guide"}
            </Link>
          </div>
        </header>

        <div className={styles.grid}>
          <Link
            to="/dictionary"
            className={styles.card}
            aria-describedby="card-dict-text"
          >
            <h3 id="card-dict-title" className={styles.cardTitle}>
              {t("home.card.dictionary.title") || "Dictionary"}
            </h3>
            <p id="card-dict-text" className={styles.cardText}>
              {t("home.card.dictionary.text") ||
                "Key frontend terms with examples."}
            </p>
          </Link>

          <Link
            to="/vscode"
            className={styles.card}
            aria-describedby="card-vscode-text"
          >
            <h3 id="card-vscode-title" className={styles.cardTitle}>
              {t("home.card.vscode.title") || "VSCode"}
            </h3>
            <p id="card-vscode-text" className={styles.cardText}>
              {t("home.card.vscode.text") || "Setup, shortcuts and tips."}
            </p>
          </Link>

          {/* Repo-kort – valgfritt
          <a
            className={styles.card}
            href="https://github.com/Mariengs/developer1.0"
            target="_blank"
            rel="noreferrer"
            aria-describedby="card-repo-text"
          >
            <h3 id="card-repo-title" className={styles.cardTitle}>{t("home.card.repo.title")}</h3>
            <p id="card-repo-text" className={styles.cardText}>{t("home.card.repo.text")}</p>
          </a>
          */}
        </div>
      </section>
    </div>
  );
}
