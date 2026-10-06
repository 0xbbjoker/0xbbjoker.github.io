// Single source of truth for the CV. Web page and print resume both read this.
// Hard rule: never describe Auto as using or built on elizaOS. They are separate.

export const identity = {
  name: "Benjamin Berta",
  handle: "0xbbjoker",
  eyebrow: "CTO · Web3 × AI",
  headline: "Engineering lead for web3 and AI products.",
  // Long-form role for <title> / meta / print header.
  roleFull: "CTO · Engineering Lead — Web3 & AI Agents",
  location: "Remote · Croatia (CET)",
  availability: "Open to lead & senior roles",
  lede:
    "CTO at Autonomous, where I lead the team behind Auto — an AI trading agent live on 12+ chains with 1,700+ users. Hands-on: 600+ merged PRs this year.",
  // elizaOS credibility (kept entirely separate from Auto).
  heroNote:
    "Previously a core engineer on elizaOS, the open-source AI agent framework — ranked #11 of 1,800+ contributors. Building in crypto since 2020.",
};

export const stats = [
  { label: "Engineering", value: "7+ yrs" },
  { label: "Crypto since", value: "2020" },
  { label: "elizaOS rank", value: "#11 / 1,800+" },
] as const;

export const contact = {
  email: "0xbbjoker@proton.me",
  github: "https://github.com/0xbbjoker",
  githubLabel: "github.com/0xbbjoker",
  linkedin: "https://www.linkedin.com/in/berta-benjamin",
  linkedinLabel: "linkedin.com/in/berta-benjamin",
  x: "https://x.com/0xbbjoker",
  xLabel: "x.com/0xbbjoker",
  auto: "https://auto.fun",
  autoLabel: "auto.fun",
  pdf: "/assets/Benjamin_Berta_CV_2026.pdf",
};

export const profile = {
  title: "I lead from the codebase.",
  // Auto and elizaOS are kept on separate lines/paragraphs — never the same
  // sentence — so neither the copy nor the guard-grep links the two.
  paragraphs: [
    "Engineering leader with 7+ years building backend, fintech, and crypto systems, and the last two focused on AI agents. As CTO at Autonomous I own the architecture and engineering team for Auto, from zero to production — and still ship a large share of the code myself.",
    "Before that I was a core engineer on elizaOS, ranked #11 of 1,800+ contributors on its public leaderboard, owning the database layer and the Knowledge/RAG plugin.",
    "I also built and run Orion, a subscription AI coaching product with 600+ active subscribers.",
  ],
  lookingFor:
    "Tech lead, engineering manager, or senior engineer roles in web3, AI agents, or both. Remote, long-term.",
};

export const strengths = [
  {
    title: "Technical leadership",
    body: "Own architecture and roadmap, run a small team end to end — planning, code review, releases, and incidents. Took Auto from zero to production as CTO.",
  },
  {
    title: "Web3 execution",
    body: "Embedded wallets, multi-chain swaps and bridges, perps, prediction markets, lending, gas sponsorship, and indexers across Solana, EVM, and Hyperliquid.",
  },
  {
    title: "AI agents in production",
    body: "Agent runtimes, LLM tool-use, MCP, RAG, memory, evals, and guardrails — shipped to paying users, not demos.",
  },
  {
    title: "Production engineering",
    body: "TypeScript/Node/Bun backends, PostgreSQL, Redis, realtime data, provider failover, observability, and cost control.",
  },
];

export interface Role {
  title: string;
  org: string;
  period: string;
  /** Optional link chips shown in the role header (e.g. live product + docs). */
  links?: { label: string; href: string }[];
  bullets: string[];
  stack?: string;
}

export const experience: Role[] = [
  {
    title: "Chief Technology Officer",
    org: "Autonomous — Auto (auto.fun)",
    period: "Jan 2026 – present",
    links: [
      { label: "auto.fun", href: "https://auto.fun" },
      { label: "docs.auto.fun", href: "https://docs.auto.fun" },
    ],
    bullets: [
      "Lead engineering at a VC-backed startup building Auto, an AI trading agent that executes trades across crypto, perps, prediction markets, tokenized stocks, and DeFi from natural-language chat.",
      "Own architecture, roadmap, and delivery for a 3-engineer team — sprint planning, code review, release process, and incident response.",
      "Took the product from zero to production and 1,700+ users, personally shipping 600+ merged PRs.",
      "Built the execution layer across 12+ chains and 10+ venues (Hyperliquid, Polymarket, Aave, Morpho, CoW, Jupiter, Enso, Uniswap, 0x), with Privy embedded wallets and gas sponsorship on most chains.",
      "Hardened reliability: bridge-provider failover, stale-token recovery, position reads, and request fanout; built a Hyperliquid indexer and internal admin tooling for users, agent state, and wallets.",
    ],
    stack:
      "TypeScript, Bun, Convex, React, Next.js, Privy, Redis, Vercel, Solana, EVM, Hyperliquid",
  },
  {
    title: "Core Engineer",
    org: "elizaOS (Eliza Labs)",
    period: "Jan 2025 – Apr 2026",
    links: [
      { label: "github.com/elizaOS/eliza", href: "https://github.com/elizaOS/eliza" },
      { label: "contributor leaderboard", href: "https://elizaos.github.io/leaderboard" },
    ],
    bullets: [
      "Ranked #11 of 1,800+ contributors (top 1%) to elizaOS, a widely used open-source AI agent framework — 187 merged PRs and 114 code reviews.",
      "Owned the database layer: PostgreSQL/PGlite adapters, migrations, and connection handling (#4 contributor in database work).",
      "Led monorepo modularization, extracting 10+ plugins from core into standalone packages.",
      "Primary maintainer of the Knowledge/RAG plugin; built MCP integrations, long-term memory, batch embeddings, and Telegram/Discord connectors.",
      "Shipped release-credited fixes, including CLI secret-leakage prevention.",
    ],
    stack: "TypeScript, Bun, Node.js, PostgreSQL, PGlite, MCP SDK, React, RAG, plugin architecture",
  },
  {
    title: "Co-creator & Lead Engineer",
    org: "Orion (oriontaraban.ai)",
    period: "2025 – present",
    links: [{ label: "oriontaraban.ai", href: "https://oriontaraban.ai" }],
    bullets: [
      "Architected and run a subscription AI coaching product built on a psychologist-creator's content library — 600+ active subscribers.",
      "Built the content-to-skill pipeline, progressive memory, goal tracking, safety gating, subscriptions, and Telegram/iMessage delivery.",
      "Sole engineer: build, operate, and support it in production.",
    ],
    stack: "TypeScript, Convex, LLM tool-use, RAG, Telegram, iMessage",
  },
  {
    title: "Software Engineer",
    org: "Thentia",
    period: "Oct 2023 – Nov 2024",
    bullets: [
      "Backend engineer on a regulated SaaS platform used by government licensing bodies.",
      "Led the migration of legacy PHP services to Node.js/TypeScript, improving performance and maintainability.",
      "Designed Redis caching and microservice boundaries within a compliance-driven release process.",
    ],
    stack: "Node.js, TypeScript, Redis, PHP, microservices",
  },
  {
    title: "Software Engineer",
    org: "Barrage",
    period: "Nov 2020 – Oct 2023",
    bullets: [
      "Built backend services for fintech and crypto products: trading flows, crypto wallet services, authentication/2FA, KYC, and notifications.",
      "Developed real-time data services and dashboard APIs on Node.js/TypeScript microservices and Next.js.",
      "Delivered in a Scrum team alongside product and QA, including production support.",
    ],
    stack: "Node.js, TypeScript, Next.js, microservices, realtime data",
  },
];

export interface SkillGroup {
  label: string;
  items: string;
}

export const skills: SkillGroup[] = [
  {
    label: "Leadership",
    items: "Architecture ownership, technical roadmap, code review, release & incident process, Scrum delivery",
  },
  {
    label: "Web3",
    items: "Solana, EVM/L2s, Hyperliquid, Polymarket, Privy wallets, gas sponsorship, Jupiter, 0x, CoW, Enso, Uniswap, Aave, Morpho, bridges, indexers",
  },
  {
    label: "AI / Agents",
    items: "Agent runtimes, LLM tool-use, MCP, RAG, vector search, memory systems, evals, guardrails",
  },
  {
    label: "Backend",
    items: "TypeScript, Node.js, Bun, Rust (working), Convex, PostgreSQL, Drizzle, Redis, Hono, REST/GraphQL, Docker",
  },
  {
    label: "Frontend / Ops",
    items: "React, Next.js, Astro, Tailwind CSS, Vercel, CI/CD, test automation",
  },
];

export const workingModel =
  "Remote from Croatia (CET), with a good overlap with US East. Long-term, full-time engagements through my registered Croatian company (B2B) — no visa or payroll setup needed. Open to relocating for the right role.";

export const credentials = [
  "Hedera Certified Developer — The Hashgraph Association (2023)",
];

export const education = [
  "M.Sc. & B.Sc., Electrical & Electronics Engineering — FERIT, Osijek",
  "Croatian (native) · English (professional working proficiency)",
];

export const updated = "October 2026";
