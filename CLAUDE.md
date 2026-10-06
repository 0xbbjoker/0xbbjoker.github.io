# Claude Handoff

This repo is Benjamin Berta's public CV site. Positioning and canonical wording live in `CONTEXT.md` — read it first.

Live site: https://0xbbjoker.github.io/
GitHub repo: https://github.com/0xbbjoker/0xbbjoker.github.io

## Current Goal

Land a tech lead / engineering manager / senior engineer role in web3 and/or AI (remote, B2B-contracted long-term).

## Non-Negotiable Content Rules

- Never state or imply that Auto / auto.fun uses elizaOS.
- Auto and elizaOS may both appear as separate experience entries.
- Position Benjamin as CTO / engineering lead for web3 and AI products (see `CONTEXT.md`).
- Use `7+ years` total software engineering experience.
- Never claim Solidity; never call him co-founder/founder of Autonomous (title is CTO).
- No profile photo or avatar in the hero.
- Do not reintroduce the old green/dark illustrated profile-card design.

## Design Direction

- Follow a Vercel-like black/white/neutral system: crisp, restrained, high-contrast, low ornament.
- Reduce oversized typography; the first viewport should feel premium, not loud.
- Prioritize scanning for hiring managers and recruiters.
- Keep layout polished on desktop and mobile.
- The PDF export must remain clean and readable.

## Stack

Astro (static) + Tailwind v4 + shadcn-style component tokens (neutral/grayscale) +
Geist fonts. Output is static HTML deployed to GitHub Pages. The PDF is a Playwright
render of the dedicated `/cv` route. No React runtime ships; the dark-mode toggle is a
tiny inline script.

## Important Files

- `src/data/cv.ts` - single source of truth for all CV content (web + PDF read this).
- `src/pages/index.astro` - the web CV page.
- `src/pages/cv.astro` - dedicated print resume rendered into the PDF.
- `src/layouts/Base.astro` - HTML head, meta, light/dark theme init.
- `src/components/` - Nav, Hero, Section, Experience, Sidebar, Footer, Button, Badge, ThemeToggle.
- `src/styles/global.css` - Tailwind v4 + shadcn (neutral) tokens + Geist fonts.
- `scripts/export-pdf.mjs` - Playwright PDF export (renders `/cv`).
- `public/assets/Benjamin_Berta_CV_2026.pdf` - generated, committed PDF served by the site.
- `CONTEXT.md` - canonical CV language / glossary (keeps Auto and elizaOS separate).
- `content/` - archived June 2026 B2B CV source + job-target notes (superseded by `src/data/cv.ts`).
- `docs/frontend-redesign-brief.md` - original redesign brief.

## Local Commands

```bash
npm install
npm run dev         # local dev at http://localhost:4321
npm run build       # static build to dist/
npm run preview     # serve the build at http://localhost:4173
npm run export:pdf  # build + render /cv to public/assets/Benjamin_Berta_CV_2026.pdf
```

## Verification Before Shipping

- Check desktop around `1440x900`.
- Check mobile around `390x844`.
- Run `npm run export:pdf` and open the generated PDF.
- Search the repo for forbidden or stale wording:

```bash
rg -i "auto.*eliza|eliza.*auto|profile.png|5\\+ years|bbopar|solidity|co-?founder"
```

Expected: no matches, except docs may mention the rule itself.

## Deployment

GitHub Pages deploys via `.github/workflows/pages.yml` from `main`: it runs
`npm ci`, `npm run build`, and publishes `dist/`. The committed
`public/assets/Benjamin_Berta_CV_2026.pdf` is bundled into the build, so regenerate
it with `npm run export:pdf` and commit when CV content changes.

