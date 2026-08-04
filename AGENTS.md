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
- Keep articles evergreen by omitting visible publication and update dates unless
  the user changes this policy. Do not add hidden date fields to structured data
  when no corresponding date is shown to readers.

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
- Every article must have unique metadata, a canonical URL, an editorial byline,
  Article JSON-LD, relevant internal links, and source links for factual health
  or safety claims.

## Verification

- Use Node.js 22 and install dependencies with `npm ci` when a lock file exists.
- Before considering code or content work complete, run:
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`
- Confirm internal links resolve to an existing page or a documented redirect.

## Git and deployment safety

- Article publishing requests are pre-authorized for production: after the
  article work and all required checks pass, commit the completed article changes,
  push `main`, wait for Cloudflare Pages, and verify the live URLs.
- If the user asks for a draft, review, preview, or explicitly says not to deploy,
  keep the work local and do not push.
- Non-article work still requires explicit user authorization before pushing,
  merging, changing Cloudflare settings, or deploying to production.
