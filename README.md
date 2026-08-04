# CAH Health

The source for [cahhealth.com](https://cahhealth.com), an English-language
wellness publication built with Next.js, TypeScript, and Tailwind CSS.

## Local development

Use Node.js 22 and install the locked dependencies:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The project uses Next.js static export. A production build is written to the
`out` directory for deployment to Cloudflare Pages.

## Content structure

- `src/app/page.tsx` controls the home page and featured articles.
- `src/app/posts/<slug>/page.tsx` contains each article.
- `src/data/articles.ts` is the article index used by category pages.
- `src/app/category/[slug]/page.tsx` generates Nutrition, Fitness, and Lifestyle
  category pages.
- `public` contains local images, favicons, and Cloudflare Pages redirects.

When publishing an article, add its page, register its metadata in
`src/data/articles.ts`, verify its category, links, image alt text, and metadata,
then run all quality checks before requesting a deployment. Set `featured` to
`true` in the article index only when the story should also appear on the home
page.

## Deployment

Cloudflare Pages should use:

- Build command: `npm run build`
- Build output directory: `out`

Pushing or deploying is intentionally a separate step from editing and testing.
