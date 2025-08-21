import { Link, NavLink } from "react-router-dom";
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx";

export default function Nav() {
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
          fontWeight: 700,
          color: "var(--text)",
          textDecoration: "none",
          marginRight: "auto",
        }}
      >
        Developer Help
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
      <div style={{ marginLeft: 8 }}>
        <LanguageToggle />
      </div>
    </nav>
  );
}
