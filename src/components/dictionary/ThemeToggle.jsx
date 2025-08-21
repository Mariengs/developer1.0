import { SunMedium, Moon } from "lucide-react";
import { useI18n } from "../../i18n/useI18n.js";

export default function ThemeToggle({ theme, setTheme }) {
  const { t } = useI18n();
  const isDark = theme === "dark";
  const next = isDark ? "light" : "dark";

  const onClick = () => {
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      void e;
    }
  };

  // Bruk i18n-tekst kun som tooltip/aria-label (ikke synlig i UI)
  const label = isDark ? t("btn.light") : t("btn.dark");

  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        border: "1px solid var(--card-border)",
        borderRadius: 10,
        background: "var(--surface)",
        color: "var(--text)",
        cursor: "pointer",
        lineHeight: 0,
      }}
    >
      {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
