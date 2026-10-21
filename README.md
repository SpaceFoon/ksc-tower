# KSC Tower — ksctower.com

Public marketing site for **KSC Tower Network**: multiplayer air-traffic control for Kerbal Space Program.

- Pilots fly in KSP with the mod + voice bridge
- Controllers work the tower desk in a browser
- Operators host the API, web app, and LiveKit project

Built with Astro and deployed on Cloudflare Workers.

Use Node 24.22.1 LTS for local development and builds (`.nvmrc`). Cloudflare Workers runs the deployed site using its own runtime compatibility settings.

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

## Product screen preview

The homepage embeds the actual flightwall interface from the KSCTower web app.
The static files in `public/product-preview/` are built from
`KSCTowerNetwork-dev/web/src/components/TowerRadarScope.tsx` through the
`FlightWallPreview.tsx` harness. The displayed aircraft and telemetry are
sample data, not a live KSP session. Refresh the bundle when the product UI
changes; do not replace missing captures with drawn interface stand-ins.

`ShotFrame.astro` renders only a real image found at
`public/shots/<id>.{webp,png,jpg,jpeg}`. If no capture exists, it renders
nothing.

## Deploy

```bash
npm run deploy
```

Custom domains `ksctower.com` and `www.ksctower.com` are declared in `wrangler.json`. The domain must already be on your Cloudflare account.

## Related repos

- Mod / game stack: https://github.com/SpaceFoon/ksctower
- This site: https://github.com/SpaceFoon/ksc-tower
