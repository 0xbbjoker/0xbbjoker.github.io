# Benjamin Berta CV Site

Static CV and B2B contractor profile for Benjamin Berta.

Live site: https://0xbbjoker.github.io/

Built with Astro + Tailwind v4 + shadcn-style tokens (neutral) and Geist fonts.
Ships as static HTML to GitHub Pages with no React runtime. The downloadable PDF is
a Playwright render of the dedicated `/cv` route.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output to dist/
npm run preview  # serve the build at http://localhost:4173
```

## Export PDF

```bash
npm run export:pdf
```

Writes `public/assets/Benjamin_Berta_CV_2026.pdf` (committed and bundled into the
build). Commit the regenerated PDF whenever CV content changes.

## Content

All copy lives in `src/data/cv.ts` — edit there and both the web page and the PDF
update. See `CLAUDE.md` for structure and `CONTEXT.md` for canonical wording rules.
