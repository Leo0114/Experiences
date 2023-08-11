import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/Experiences",
  experimental: { assets: true, viewTransitions: true },
  integrations: [tailwind(), preact()],
});
