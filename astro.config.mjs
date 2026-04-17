// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
// TODO: set to the production domain (e.g. "https://ksctower.example").
site: "https://example.com",
output: "server",
integrations: [clerk()],
adapter: cloudflare({
platformProxy: {
enabled: true,
},
}),
});
