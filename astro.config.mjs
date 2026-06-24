// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// User Pages site (https://0xbbjoker.github.io/) deploys at the domain root,
// so no `base` prefix is needed.
export default defineConfig({
  site: "https://0xbbjoker.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
