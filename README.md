# KSC Tower

Account sign-up site for the **KSC Tower** Kerbal Space Program plugin. Built with
[Astro](https://astro.build) on [Cloudflare Workers](https://developers.cloudflare.com/workers/),
using [Clerk](https://clerk.com) for authentication.

## Local development

```sh
npm install
npm run dev
```

## Required environment variables

Clerk credentials are read from environment variables. For local dev, put them in a
`.env` file (not committed):

```
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

For production, set them as Worker secrets:

```sh
npx wrangler secret put PUBLIC_CLERK_PUBLISHABLE_KEY
npx wrangler secret put CLERK_SECRET_KEY
```

Configure the site's domain in your Clerk dashboard (TBD — to be supplied).

## Deploy

```sh
npm run deploy
```
