import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://alexandremassoterapeuta.pages.dev",
  integrations: [sitemap()],

  build: {
    format: "directory",
    inlineStylesheets: "always"
  },

  adapter: cloudflare()
});