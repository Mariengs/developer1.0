import { SortAsc, SortDesc } from "lucide-react";

export default function SortBar({
  sortKey,
  sortDir,
  setSortKey,
  setSortDir,
  isDark,
}) {
  const keys = [
    { value: "term", label: "Term" },
    { value: "category", label: "Kategori" },
    { value: "domain", label: "Kilde (domene)" },
  ];

  return (
    <div className="flex items-center gap-2">
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className={`rounded-xl px-3 py-2 text-sm border transition ${
          isDark
            ? "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
            : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100"
        }`}
      >
        {keys.map((k) => (
          <option key={k.value} value={k.value}>
            Sorter etter: {k.label}
          </option>
        ))}
      </select>

      <button
        onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
        className={`inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm transition ${
          isDark
            ? "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
            : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100"
        }`}
        aria-label="Bytt sorteringsretning"
      >
        {sortDir === "asc" ? (
          <SortAsc className="size-4" />
        ) : (
          <SortDesc className="size-4" />
        )}
        {sortDir === "asc" ? "Stigende" : "Synkende"}
      </button>
    </div>
  );
}
