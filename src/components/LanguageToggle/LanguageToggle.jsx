import styles from "./LanguageToggle.module.css";
import { useI18n } from "../../i18n/useI18n.js";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const apply = (k) => {
    setLang(k);
    try {
      localStorage.setItem("lang", k);
    } catch (e) {
      void e;
    }
  };
  return (
    <div className={styles.row}>
      <button
        className={styles.btn}
        onClick={() => apply("no")}
        aria-pressed={lang === "no"}
      >
        NO
      </button>
      <button
        className={styles.btn}
        onClick={() => apply("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
