export default function Card({ children, isDark }) {
  return (
    <div
      className={`rounded-2xl border shadow-sm p-4 ${
        isDark ? "border-zinc-800 bg-zinc-900" : "border-zinc-200 bg-white"
      }`}
    >
      {children}
    </div>
  );
}
