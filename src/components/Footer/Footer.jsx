import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useContext(I18nContext);

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label="Footer">
        <NavLink to="/" end className={styles.link}>
          {t("nav.home")}
        </NavLink>
        <NavLink to="/dictionary" className={styles.link}>
          {t("nav.dictionary")}
        </NavLink>
        <NavLink to="/vscode" className={styles.link}>
          {t("nav.vscode")}
        </NavLink>
      </nav>
      <p className={styles.copy}>© {new Date().getFullYear()} Developer Help</p>
    </footer>
  );
}
