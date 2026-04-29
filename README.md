## JulTech AI Website

Marketing site and case-study platform for JulTech AI, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in production so metadata, `robots.txt`, and `sitemap.xml` use the correct public domain.

## Deploying To Vercel

This app is already a good fit for Vercel because it uses the Next.js App Router with static and server-rendered routes.

1. Push the repo to GitHub.
2. In Vercel, click `Add New...` -> `Project` and import the repository.
3. Keep the default framework preset as `Next.js`.
4. Add the production environment variable `NEXT_PUBLIC_SITE_URL` with your final domain, for example `https://www.jultechai.com`.
5. Deploy.
6. After the first deploy, add your custom domain in the Vercel project settings.

Notes:

- Preview deployments are set to `noindex`; production deployments are indexable.
- If Stripe is used for the strategy-call payment flow, make sure the Stripe hosted payment link success URL points back to your production domain, not localhost or a preview URL.
- After the domain is connected, redeploy once so generated metadata and sitemap URLs are guaranteed to use the final domain.
