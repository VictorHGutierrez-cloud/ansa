import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local: ./  |  GitHub Pages: set VITE_BASE=/nome-do-repo/
const base = process.env.VITE_BASE || "./";

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5181,
    strictPort: true,
  },
});
