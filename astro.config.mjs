// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
output: "server",
integrations: [clerk()],
adapter: cloudflare({
platformProxy: {
enabled: true,
},
}),
});
