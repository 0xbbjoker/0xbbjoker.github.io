# Claude Handoff

This repo is Benjamin Berta's public CV and B2B contractor profile site.

Live site: https://0xbbjoker.github.io/
GitHub repo: https://github.com/0xbbjoker/0xbbjoker.github.io

## Current Goal

Redesign the frontend into a stronger, more professional CV site for a senior AI agent / workflow automation / TypeScript platform engineer seeking B2B contract clients.

The previous pass is functional but not final. Benjamin explicitly wants a better frontend agent to improve the design.

## Non-Negotiable Content Rules

- Never state or imply that Auto / auto.fun uses elizaOS.
- Auto and elizaOS may both appear as separate experience entries.
- Position Benjamin as a professional AI agent engineer with production workflow, RAG, MCP/tool-use, TypeScript backend, and DeFi execution experience.
- Use `7+ years` total software engineering experience.
- Use `2+ years` AI agents / RAG / tool-use focus.
- No profile photo or avatar in the hero.
- Do not reintroduce the old green/dark illustrated profile-card design.

## Design Direction

- Follow a Vercel-like black/white/neutral system: crisp, restrained, high-contrast, low ornament.
- Reduce oversized typography; the first viewport should feel premium, not loud.
- Prioritize scanning for recruiters/founders hiring a B2B contractor.
- Keep layout polished on desktop and mobile.
- The PDF export must remain clean and readable.

## Important Files

- `index.html` - full static CV page.
- `styles.css` - visual system, responsive layout, print styles.
- `script.js` - print/copy interactions.
- `scripts/export-pdf.mjs` - Playwright PDF export.
- `assets/Benjamin_Berta_CV_2026.pdf` - downloadable PDF used by the site.
- `content/Benjamin_Berta_CV_B2B_2026.md` - canonical CV source text.
- `content/Benjamin_Berta_CV_B2B_2026.docx` - Word CV source.
- `content/Benjamin_Berta_B2B_Job_Targets_2026-06-24.md` - job-search positioning notes.
- `docs/frontend-redesign-brief.md` - redesign brief for the next frontend pass.

## Local Commands

```bash
npm install
npm run serve
npm run export:pdf
```

Open `http://localhost:4173` after `npm run serve`.

## Verification Before Shipping

- Check desktop around `1440x900`.
- Check mobile around `390x844`.
- Run `npm run export:pdf` and open the generated PDF.
- Search the repo for forbidden or stale wording:

```bash
rg -i "auto.*eliza|eliza.*auto|profile.png|5\\+ years|bbopar"
```

Expected: no matches, except docs may mention the rule itself.

## Deployment

GitHub Pages deploys via `.github/workflows/pages.yml` from `main`.

