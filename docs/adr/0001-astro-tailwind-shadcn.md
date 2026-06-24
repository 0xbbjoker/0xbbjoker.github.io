# Build the CV on Astro + Tailwind + shadcn instead of vanilla HTML/CSS

The redesign brief asked to avoid a framework, but Benjamin wanted Vercel-quality
"finished components." We adopted Astro (static output) + Tailwind v4 + shadcn-style
neutral tokens + Geist fonts: it ships zero-runtime static HTML to GitHub Pages (deploy
stays trivial) and keeps the Playwright PDF deterministic via a dedicated `/cv` route,
while giving the polished Vercel look the vanilla stack couldn't.

## Considered options

- **Stay vanilla HTML/CSS** — rejected: couldn't reach the desired polish with reusable,
  consistent components.
- **Next.js static export + shadcn** — rejected: heavier React runtime and `output: export`
  quirks for a content-first CV.
- **Astro + Tailwind + shadcn (chosen)** — static HTML, content in the markup (good for
  PDF/print/SEO), shadcn block markup ported to `.astro` with no shipped React.

## Consequences

- A build step now runs in CI (`npm ci && npm run build`, publishing `dist/`).
- The PDF is generated from `/cv` and committed at `public/assets/Benjamin_Berta_CV_2026.pdf`.
