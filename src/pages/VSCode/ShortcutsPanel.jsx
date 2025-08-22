import { useContext, useMemo, useState } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";
import { SHORTCUTS } from "../Shortcuts/shortcuts.data.js"; // eller flytt datafila til VSCode/

const PLATFORM_ORDER = ["mac", "win", "linux"];

function detectPlatform() {
  const p = (navigator?.platform || navigator?.userAgent || "").toLowerCase();
  if (p.includes("mac")) return "mac";
  if (p.includes("win")) return "win";
  return "linux";
}

export default function ShortcutsPanel() {
  const { t } = useContext(I18nContext);
  const [platform, setPlatform] = useState(detectPlatform);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => ["all", "navigation", "search", "edit", "cursor", "view"],
    []
  );

  const filtered = useMemo(() => {
    return SHORTCUTS.filter((s) => {
      const matchesCategory = category === "all" || s.category === category;
      const name = t(`shortcuts.items.${s.id}.name`).toLowerCase();
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || name.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query, t]);

  return (
    <section>
      {/* Controls */}
      <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1rem" }}>
        <input
          type="search"
          placeholder={t("shortcuts.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t("shortcuts.searchAria")}
          style={{
            padding: "0.6rem 0.8rem",
            borderRadius: 10,
            border: "1px solid var(--card-border)",
            background: "var(--surface)",
            color: "var(--text)",
            outline: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <label>
            {t("shortcuts.category")}{" "}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                marginLeft: ".5rem",
                background: "var(--surface)",
                border: "1px solid var(--card-border)",
                color: "var(--text)",
                padding: ".4rem .6rem",
                borderRadius: 8,
              }}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {t(`shortcuts.categories.${c}`)}
                </option>
              ))}
            </select>
          </label>

          <fieldset
            style={{
              border: "1px solid var(--card-border)",
              borderRadius: 12,
              padding: ".4rem .6rem",
              display: "flex",
              gap: ".5rem",
            }}
          >
            <legend style={{ padding: "0 .25rem" }}>
              {t("shortcuts.platform")}
            </legend>
            {PLATFORM_ORDER.map((p) => (
              <label
                key={p}
                style={{
                  display: "inline-flex",
                  gap: ".25rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  name="platform"
                  value={p}
                  checked={platform === p}
                  onChange={() => setPlatform(p)}
                />
                {t(`shortcuts.platforms.${p}`)}
              </label>
            ))}
          </fieldset>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          overflow: "auto",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          background: "var(--card-bg)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "var(--surface-2)" }}>
            <tr>
              <th style={thStyle}>{t("shortcuts.table.action")}</th>
              <th style={thStyle}>{t("shortcuts.table.keys")}</th>
              <th style={thStyle}>{t("shortcuts.table.category")}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => {
              const name = t(`shortcuts.items.${s.id}.name`);
              const keys = s[platform];
              const catLabel = t(`shortcuts.categories.${s.category}`);
              return (
                <tr
                  key={s.id}
                  style={{ borderTop: "1px solid var(--card-border)" }}
                >
                  <td style={tdStyle}>{name}</td>
                  <td style={tdStyleMono}>
                    <kbd style={kbdStyle}>{keys}</kbd>
                  </td>
                  <td style={tdStyle}>{catLabel}</td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td style={tdStyle} colSpan={3}>
                  {t("shortcuts.empty")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const thStyle = {
  textAlign: "left",
  padding: ".75rem",
  borderBottom: "1px solid var(--card-border)",
};
const tdStyle = { padding: ".6rem .75rem", verticalAlign: "top" };
const tdStyleMono = { ...tdStyle, whiteSpace: "nowrap" };
const kbdStyle = {
  background: "var(--surface-2)",
  border: "1px solid var(--card-border)",
  borderRadius: 8,
  padding: ".15rem .4rem",
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};
