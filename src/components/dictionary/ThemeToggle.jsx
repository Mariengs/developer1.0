import { SunMedium, Moon, Laptop } from "lucide-react";

export default function ThemeToggle({ theme, setTheme, isDark }) {
  const cls = `inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm transition ${
    isDark
      ? "bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
      : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100"
  }`;

  return (
    <div className="flex items-center gap-2">
      <button
        className={cls}
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
      >
        <SunMedium className="size-4" /> Lys
      </button>
      <button
        className={cls}
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
      >
        <Moon className="size-4" /> Mørk
      </button>
      <button
        className={cls}
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
      >
        <Laptop className="size-4" /> System
      </button>
    </div>
  );
}
