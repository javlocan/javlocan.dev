import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  integrations: [react()],
  allowImportingTsExtensions: true,
  site: "https://astrojs-portfolio.vercel.app/",
});
