import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { I18nContext } from "../../i18n/I18nContext.js";
import ThemeToggle from "../dictionary/ThemeToggle.jsx"; // sjekk casing/sti
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx";
import logo from "../../assets/logo.svg";

export default function Nav({ theme, setTheme }) {
  const { t } = useContext(I18nContext);

  const baseItemStyle = {
    padding: "6px 10px",
    borderRadius: 8,
    textDecoration: "none",
    color: "var(--text)",
  };

  return (
    <nav
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        padding: "12px 16px",
        borderBottom: "1px solid var(--card-border)",
        background: "var(--surface)",
      }}
      aria-label="Main"
    >
      {/* Logo = Home */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontWeight: 700,
          color: "var(--text)",
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        <img
          src={logo}
          alt="Developer Help"
          width={28}
          height={28}
          style={{ display: "block" }}
        />
        <span>Developer Help</span>
      </Link>

      {/* Home */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          ...baseItemStyle,
          background: isActive ? "var(--surface-2)" : "transparent",
        })}
      >
        {t("nav.home")}
      </NavLink>

      {/* Dictionary */}
      <NavLink
        to="/dictionary"
        style={({ isActive }) => ({
          ...baseItemStyle,
          background: isActive ? "var(--surface-2)" : "transparent",
        })}
      >
        {t("nav.dictionary")}
      </NavLink>

      {/* VSCode */}
      <NavLink
        to="/vscode"
        style={({ isActive }) => ({
          ...baseItemStyle,
          background: isActive ? "var(--surface-2)" : "transparent",
        })}
      >
        {t("nav.vscode")}
      </NavLink>

      {/* Toggles */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}
      >
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LanguageToggle />
      </div>
    </nav>
  );
}
