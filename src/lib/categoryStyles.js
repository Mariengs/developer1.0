export const categoryStyles = {
  Web: "border-sky-700 bg-sky-800 hover:bg-sky-700 text-white",
  "Web API": "border-cyan-700 bg-cyan-800 hover:bg-cyan-700 text-white",
  React: "border-violet-700 bg-violet-800 hover:bg-violet-700 text-white",
  "React Framework":
    "border-indigo-700 bg-indigo-800 hover:bg-indigo-700 text-white",
  CSS: "border-emerald-700 bg-emerald-800 hover:bg-emerald-700 text-white",
  JavaScript: "border-amber-700 bg-amber-800 hover:bg-amber-700 text-white",
  "State Management":
    "border-fuchsia-700 bg-fuchsia-800 hover:bg-fuchsia-700 text-white",
  Backend: "border-orange-700 bg-orange-800 hover:bg-orange-700 text-white",
  Database: "border-teal-700 bg-teal-800 hover:bg-teal-700 text-white",
  DevOps: "border-rose-700 bg-rose-800 hover:bg-rose-700 text-white",
  Testing: "border-lime-700 bg-lime-800 hover:bg-lime-700 text-white",
  Verktøy: "border-slate-700 bg-slate-800 hover:bg-slate-700 text-white",
  Arkitektur: "border-stone-700 bg-stone-800 hover:bg-stone-700 text-white",
};

export function linkClassFor(category) {
  return `inline-flex items-center gap-1 text-xs rounded-lg border px-2 py-1 transition focus:outline-none focus:ring-2 focus:ring-zinc-600 ${
    categoryStyles[category] ||
    "border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white"
  }`;
}
