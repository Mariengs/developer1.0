import { SortAsc, SortDesc } from "lucide-react";
import styles from "./SortBar.module.css";

export default function SortBar({ sortKey, sortDir, setSortKey, setSortDir }) {
  const keys = [
    { value: "term", label: "Term" },
    { value: "category", label: "Kategori" },
    { value: "domain", label: "Kilde (domene)" },
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
            Sorter etter: {k.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
        className={styles.btn}
        aria-label="Bytt sorteringsretning"
      >
        {sortDir === "asc" ? (
          <>
            <SortAsc className={styles.icon} />
            Stigende
          </>
        ) : (
          <>
            <SortDesc className={styles.icon} />
            Synkende
          </>
        )}
      </button>
    </div>
  );
}
