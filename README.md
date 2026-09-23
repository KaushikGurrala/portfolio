# Kaushik Gurrala Portfolio

A custom portfolio for an AI/ML Software Engineer, built around the theme **Intelligent Systems in Motion**. The experience presents selected work through system maps, case studies, verified outcomes, and organization-free professional summaries.

## Highlights

- Responsive editorial interface with dark and light themes
- Interactive AI delivery system map
- Three detailed project case studies
- Reduced-motion and keyboard-accessible behavior
- Dynamic Open Graph image
- Typed, centralized portfolio content
- Sitemap, robots metadata, and responsive navigation

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate

```bash
npm run typecheck
npm run build
```

## Content

Update portfolio details in:

```text
src/content/portfolio.ts
```

The résumé download remains disabled until an approved public PDF is added under `public/resume/` and linked in the profile configuration.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Keep the detected Next.js defaults.
3. Set `NEXT_PUBLIC_SITE_URL` to the final production URL.
4. Deploy.

## Privacy

This portfolio intentionally excludes organization names from work history and does not include proprietary source code, client data, PHI, credentials, or internal screenshots.
