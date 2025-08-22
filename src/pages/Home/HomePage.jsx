import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { I18nContext } from "../../i18n/I18nContext.js";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { t } = useContext(I18nContext);

  useEffect(() => {
    // Valgfritt: oppdater dokumenttittel pr. språk
    document.title = t("home.title");
  }, [t]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <header className={styles.hero}>
          <span className={styles.kicker}>{t("home.kicker")}</span>
          <h1 className={styles.title}>{t("home.title")}</h1>
          <p className={styles.subtitle}>{t("home.subtitle")}</p>

          <div className={styles.ctaRow}>
            <Link to="/dictionary" className={styles.cta}>
              {t("home.cta.dictionary")}
            </Link>
            <Link to="/vscode" className={styles.ghost}>
              {t("home.cta.vscode")}
            </Link>
          </div>
        </header>

        <div className={styles.grid}>
          <Link to="/dictionary" className={styles.card}>
            <h3 className={styles.cardTitle}>
              {t("home.card.dictionary.title")}
            </h3>
            <p className={styles.cardText}>{t("home.card.dictionary.text")}</p>
          </Link>

          <Link to="/vscode" className={styles.card}>
            <h3 className={styles.cardTitle}>{t("home.card.vscode.title")}</h3>
            <p className={styles.cardText}>{t("home.card.vscode.text")}</p>
          </Link>

          <a
            className={styles.card}
            href="https://github.com/Mariengs/developer1.0"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className={styles.cardTitle}>{t("home.card.repo.title")}</h3>
            <p className={styles.cardText}>{t("home.card.repo.text")}</p>
          </a>
        </div>
      </section>
    </div>
  );
}
