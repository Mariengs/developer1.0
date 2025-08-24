import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../dictionary/ThemeToggle.jsx";
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx";
import logo from "../../assets/logo.svg";
import styles from "./Nav.module.css";

export default function Nav({ theme, setTheme }) {
  return (
    <nav className={styles.nav} aria-label="nav.label">
      {/* Logo / brand */}
      <Link to="/" className={styles.brand}>
        <img src={logo} alt="Developer Help" />
        <span>Developer Help</span>
      </Link>

      {/* Lenker + toggles (wrap’er på mobil) */}
      <div className={styles.links}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.item} ${styles.itemActive}` : styles.item
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dictionary"
          className={({ isActive }) =>
            isActive ? `${styles.item} ${styles.itemActive}` : styles.item
          }
        >
          Dictionary
        </NavLink>

        <NavLink
          to="/vscode"
          className={({ isActive }) =>
            isActive ? `${styles.item} ${styles.itemActive}` : styles.item
          }
        >
          VSCode
        </NavLink>

        <div className={styles.controls}>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
