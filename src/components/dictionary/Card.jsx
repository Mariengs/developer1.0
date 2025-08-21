// src/components/dictionary/Card.jsx
export default function Card({ children, isDark, className = "" }) {
  const base =
    "rounded-2xl border p-4 shadow-sm transition-colors duration-150";
  const light = "bg-white border-zinc-300 hover:bg-zinc-50";
  const dark = "bg-zinc-900 border-zinc-700 hover:bg-zinc-800";

  return (
    <div className={[base, isDark ? dark : light, className].join(" ")}>
      {children}
    </div>
  );
}
