# CAH Health repository guidance

## Site and content

- This is an English-language wellness publication. All visitor-facing copy,
  metadata, image alt text, navigation labels, and calls to action must be in
  polished English.
- Keep the editorial tone clear, measured, practical, and evidence-aware.
- Do not invent study citations, medical claims, testimonials, product testing,
  affiliate destinations, or credentials. Flag missing source material instead.
- Health content is informational and must not be framed as individualized
  medical advice.

## Project structure

- The site uses the Next.js App Router and static export.
- Article pages live at `src/app/posts/<slug>/page.tsx`.
- Register every published article in `src/data/articles.ts` so it appears in the
  appropriate category.
- The home page reads the same index; set an article's `featured` field to control
  whether it appears under Featured Articles.
- Supported categories are `nutrition`, `fitness`, and `lifestyle`.
- Store local images in `public` and always provide useful English alt text.
- Cloudflare Pages redirects live in `public/_redirects`.

## Verification

- Use Node.js 22 and install dependencies with `npm ci` when a lock file exists.
- Before considering code or content work complete, run:
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`
- Confirm internal links resolve to an existing page or a documented redirect.

## Git and deployment safety

- Do not push, merge, alter Cloudflare settings, or deploy to production unless
  the user explicitly requests that action.
- Prefer a feature branch and Cloudflare preview deployment before production
  changes when the user requests publishing.
