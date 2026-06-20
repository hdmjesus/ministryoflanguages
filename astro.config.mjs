import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build
export default defineConfig({
  server: { host: true },
  integrations: [
    // astro-icon + Iconify: build-time inlined, tree-shaken SVGs.
    // Icons are pulled on demand from the installed Lucide set (@iconify-json/lucide).
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
