import { SunMedium, Moon, Laptop } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({ theme, setTheme }) {
  const apply = (k) => {
    setTheme(k);
    try {
      localStorage.setItem("theme", k);
    } catch (e) {
      void e;
    }
  };

  return (
    <div className={styles.row}>
      <button
        className={styles.btn}
        onClick={() => apply("light")}
        aria-pressed={theme === "light"}
      >
        <SunMedium className={styles.icon} /> Lys
      </button>
      <button
        className={styles.btn}
        onClick={() => apply("dark")}
        aria-pressed={theme === "dark"}
      >
        <Moon className={styles.icon} /> Mørk
      </button>
      <button
        className={styles.btn}
        onClick={() => apply("system")}
        aria-pressed={theme === "system"}
      >
        <Laptop className={styles.icon} /> System
      </button>
    </div>
  );
}
