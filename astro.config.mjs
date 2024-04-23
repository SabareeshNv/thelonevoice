import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://lonevoice.in",
  build: {
    assets: "_assets"
  },
  integrations: [icon(), sitemap(), pagefind()]
});