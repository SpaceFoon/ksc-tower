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

## Deploy

```bash
npm run deploy
```

Custom domains `ksctower.com` and `www.ksctower.com` are declared in `wrangler.json`. The domain must already be on your Cloudflare account.

## Related repos

- Mod / game stack: https://github.com/SpaceFoon/ksctower
- This site: https://github.com/SpaceFoon/ksc-tower
