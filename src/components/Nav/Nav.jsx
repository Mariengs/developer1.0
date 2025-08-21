import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../dictionary/ThemeToggle.jsx";
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx";
import logo from "../../assets/logo.svg";

export default function Nav({ theme, setTheme }) {
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
    >
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

      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          padding: "6px 10px",
          borderRadius: 8,
          textDecoration: "none",
          color: "var(--text)",
          background: isActive ? "var(--surface-2)" : "transparent",
        })}
      >
        Dictionary
      </NavLink>

      <NavLink
        to="/vscode"
        style={({ isActive }) => ({
          padding: "6px 10px",
          borderRadius: 8,
          textDecoration: "none",
          color: "var(--text)",
          background: isActive ? "var(--surface-2)" : "transparent",
        })}
      >
        VSCode
      </NavLink>

      {/* Knapperekke: Theme først, så språk */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}
      >
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LanguageToggle />
      </div>
    </nav>
  );
}
