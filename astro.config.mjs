import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  integrations: [react()],
  //allowImportingTsExtensions: true,
});
