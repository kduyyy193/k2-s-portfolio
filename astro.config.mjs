import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.k2.id.vn",
  integrations: [tailwind()],
  redirects: {
    "/about": "/",
    "/contact": "/",
    "/projects": "/",
  },
});