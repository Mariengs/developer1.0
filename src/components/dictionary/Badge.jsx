export default function Badge({ children, isDark }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${
        isDark ? "border-zinc-700" : "border-zinc-300"
      }`}
    >
      {children}
    </span>
  );
}
