import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // viktig for GitHub Pages – lokalt har det ingen effekt:
  base: "/developer1.0/",
});
