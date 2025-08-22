import { useContext, useMemo, useState } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";
import { SHORTCUTS } from "./shortcuts.data.js";
import styles from "./VSCodeShortcutsPanel.module.css";

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

  const categories = ["all", "navigation", "search", "edit", "cursor", "view"];

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
      <div className={styles.controls}>
        <input
          type="search"
          placeholder={t("shortcuts.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t("shortcuts.searchAria")}
          className={styles.input}
        />

        <div className={styles.row}>
          <label>
            {t("shortcuts.category")}{" "}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.select}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {t(`shortcuts.categories.${c}`)}
                </option>
              ))}
            </select>
          </label>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{t("shortcuts.platform")}</legend>
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
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>{t("shortcuts.table.action")}</th>
              <th className={styles.th}>{t("shortcuts.table.keys")}</th>
              <th className={styles.th}>{t("shortcuts.table.category")}</th>
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
                  <td className={styles.td}>{name}</td>
                  <td className={styles.td}>
                    <kbd className={styles.kbd}>{keys}</kbd>
                  </td>
                  <td className={styles.td}>{catLabel}</td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td className={styles.td} colSpan={3}>
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
