import { SortAsc, SortDesc } from "lucide-react";
import styles from "./SortBar.module.css";
import { useI18n } from "../../i18n/I18nProvider.jsx";

export default function SortBar({ sortKey, sortDir, setSortKey, setSortDir }) {
  const { t } = useI18n();
  const keys = [
    { value: "term", label: t("sort.term") },
    { value: "category", label: t("sort.category") },
    { value: "domain", label: t("sort.domain") },
  ];
  return (
    <div className={styles.wrap}>
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className={styles.select}
      >
        {keys.map((k) => (
          <option key={k.value} value={k.value}>
            {t("sort.by")}: {k.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
        className={styles.btn}
        aria-label={t(sortDir === "asc" ? "sort.asc" : "sort.desc")}
      >
        {sortDir === "asc" ? (
          <>
            <SortAsc className={styles.icon} />
            {t("sort.asc")}
          </>
        ) : (
          <>
            <SortDesc className={styles.icon} />
            {t("sort.desc")}
          </>
        )}
      </button>
    </div>
  );
}
