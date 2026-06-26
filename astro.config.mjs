import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.seusite.com.br",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
