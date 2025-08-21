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

  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        gap: 8,
        alignItems: "center",
        border: "1px solid var(--card-border)",
        borderRadius: 12,
        padding: "8px 12px",
        background: "var(--surface)",
        color: "var(--text)",
        cursor: "pointer",
      }}
      aria-pressed={isDark}
      title={isDark ? t("btn.light") : t("btn.dark")}
    >
      {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
      {isDark ? t("btn.light") : t("btn.dark")}
    </button>
  );
}
