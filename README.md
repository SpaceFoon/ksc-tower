# KSC Tower — ksctower.com

Public marketing site for **KSC Tower Network**: multiplayer air-traffic control for Kerbal Space Program.

- Pilots fly in KSP with the mod + voice bridge
- Controllers work the tower desk in a browser
- Operators host the API, web app, and LiveKit project

Built with Astro and deployed on Cloudflare Workers.

## Develop

```bash
npm install
npm run dev
```

## Analytics

GA4 and PostHog load only when public env vars are set (see `.env.example`). Scripts live in `src/components/Analytics.astro` and match the sitebase public-site injector (`site_click`, shared PostHog project, per-site GA4 ID).

| Var | Source |
|---|---|
| `PUBLIC_GA_MEASUREMENT_ID` | GA4 web stream for `ksctower.com` (create when ready; leave empty to skip GA) |
| `PUBLIC_POSTHOG_PROJECT_TOKEN` | Shared PostHog project API token (same project as the other public sites) |
| `PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com` |

Copy `.env.example` → `.env` for local builds. Astro inlines `PUBLIC_*` at **build** time, so production deploys need the same vars in the environment that runs `npm run build` / `npm run deploy` (and optionally as Cloudflare Worker vars).

## Deploy

```bash
npm run deploy
```

Custom domains `ksctower.com` and `www.ksctower.com` are declared in `wrangler.json`. The domain must already be on your Cloudflare account.

## Related repos

- Mod / game stack: https://github.com/SpaceFoon/ksctower
- This site: https://github.com/SpaceFoon/ksc-tower
