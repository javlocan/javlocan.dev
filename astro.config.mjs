import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [react()],
  allowImportingTsExtensions: true,
  site: "https://astrojs-portfolio.vercel.dev",
});
