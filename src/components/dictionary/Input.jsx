import { Search } from "lucide-react";

export default function Input({ value, onChange, placeholder, isDark }) {
  return (
    <div
      className={`search-row flex items-center gap-2 rounded-2xl border px-3 py-2 shadow-sm ${
        isDark ? "border-zinc-700 bg-zinc-800" : "border-zinc-300 bg-white"
      }`}
    >
      <Search className="w-4 h-4" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`search-field w-full bg-transparent outline-none ${
          isDark
            ? "text-white placeholder:text-zinc-400"
            : "text-zinc-900 placeholder:text-zinc-500"
        }`}
      />
    </div>
  );
}
