# Frontend Redesign Brief

## Objective

Create a sharper public CV site for Benjamin Berta that helps him win B2B contractor clients in AI agents, workflow automation, TypeScript backend platforms, and crypto/DeFi execution systems.

The site is already deployed, but the frontend should be redesigned by a stronger frontend/design agent. Keep the content honest and professional.

## Target Audience

- Founders hiring senior AI agent contractors.
- Engineering leads needing production LLM workflows, RAG, MCP/tool-use, backend reliability, or DeFi integrations.
- Recruiters sourcing EU-timezone B2B contractors.

## Desired Impression

Benjamin should read as:

- Senior and practical.
- Production-focused rather than demo-only.
- Strong in TypeScript/Node/Bun backend systems.
- Strong in AI agent workflows, RAG, memory, MCP/tool-use, evals, and operated automation.
- Comfortable with crypto-native execution and DeFi product surfaces.

## Visual Direction

- Vercel-inspired black, white, and neutral gray.
- No avatar, no portrait, no profile-picture card.
- No green illustrated profile art.
- No loud hero headline. Use confident, compact hierarchy.
- Avoid marketing fluff and decorative gradients.
- Use clean sections, thin borders, tight spacing, restrained cards only where useful.
- Make the first viewport immediately show name, role, availability, value proposition, and actions.

## Content Constraints

- Never state or imply Auto uses elizaOS.
- Auto / auto.fun should be framed as a separate current company/product.
- elizaOS should be framed as a previous/core open-source AI agent framework role.
- Keep `7+ years` total software engineering experience.
- Keep `2+ years` focused AI agents/RAG/tool-use experience.
- Keep Benjamin available for B2B contract work, Croatia / EU timezone.

## Current Stack

This is intentionally simple:

- Static `index.html`
- Plain `styles.css`
- Tiny `script.js`
- Playwright PDF export in `scripts/export-pdf.mjs`
- GitHub Pages deployment from `main`

Do not add a framework unless it clearly improves the result. GitHub Pages must remain easy to deploy.

## Source Material

- Canonical CV markdown: `content/Benjamin_Berta_CV_B2B_2026.md`
- Word CV: `content/Benjamin_Berta_CV_B2B_2026.docx`
- Current PDF: `assets/Benjamin_Berta_CV_2026.pdf`
- Job-target notes: `content/Benjamin_Berta_B2B_Job_Targets_2026-06-24.md`

## Suggested Site Structure

1. Compact hero:
   - Benjamin Berta
   - Senior AI Agent / Workflow Automation / TypeScript Platform Engineer
   - B2B contractor, Croatia / EU timezone
   - short value statement
   - actions: Email, GitHub, Download PDF

2. Capability proof:
   - AI agent workflows
   - RAG / knowledge / memory
   - MCP/tool-use systems
   - TypeScript backend platforms
   - DeFi/onchain execution

3. Recent experience:
   - Autonomous / Auto
   - Eliza Labs / elizaOS
   - Thentia
   - Barrage

4. Selected systems:
   - Orion Project
   - Polymarket Indexer
   - Agent plugin ecosystems
   - Earlier web3 systems

5. Skills and contact:
   - tighter, scannable skills matrix
   - direct contact links

## PDF Requirement

The exported PDF must look intentional, not like a browser print dump.

Keep or improve the existing Playwright export:

```bash
npm run export:pdf
```

The output path must stay:

```text
assets/Benjamin_Berta_CV_2026.pdf
```

## Quality Checklist

- Desktop and mobile screenshots look polished.
- Text does not overflow buttons, cards, sidebars, or mobile layout.
- Hero is not oversized.
- No profile image appears anywhere.
- PDF export works.
- Live GitHub Pages deployment succeeds.
- `rg -i "auto.*eliza|eliza.*auto|profile.png|5\\+ years|bbopar"` has no real content matches.

