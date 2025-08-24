import { NavLink } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label={t("nav.footer") || "Footer"}>
        <NavLink to="/" end className={styles.link}>
          {t("nav.home") || "Home"}
        </NavLink>
        <NavLink to="/dictionary" className={styles.link}>
          {t("nav.dictionary") || "Dictionary"}
        </NavLink>
        <NavLink to="/vscode" className={styles.link}>
          {t("nav.vscode") || "VSCode"}
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          {t("nav.about") || "About"}
        </NavLink>
        <NavLink to="/feedback" className={styles.link}>
          {t("nav.feedback") || "Feedback"}
        </NavLink>
      </nav>
      <p className={styles.copy}>© {new Date().getFullYear()} Developer Help</p>
    </footer>
  );
}
