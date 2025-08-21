import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>
        Developer Help
      </Link>
      <div className={styles.links}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Dictionary
        </NavLink>
        <NavLink
          to="/vscode"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          VSCode
        </NavLink>
      </div>
    </nav>
  );
}
