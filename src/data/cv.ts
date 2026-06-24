// Single source of truth for the CV. Web page and print resume both read this.
// Hard rule: never describe Auto as using or built on elizaOS. They are separate.

export const identity = {
  name: "Benjamin Berta",
  handle: "0xbbjoker",
  eyebrow: "Benjamin Berta · B2B contractor",
  headline: "Senior AI Agent & TypeScript Platform Engineer",
  // Long-form role for <title> / meta only.
  roleFull:
    "Senior AI Agent, Workflow Automation, and TypeScript Platform Engineer",
  location: "Croatia / EU timezone",
  availability: "Available for B2B contracts",
  lede:
    "I build production AI agents, RAG and MCP/tool-use systems, TypeScript backends, and crypto-native execution — and operate them, not just demo them.",
  // elizaOS credibility (kept entirely separate from Auto).
  heroNote:
    "Previously an early core engineer on elizaOS, one of the most-used open-source AI agent frameworks.",
};

export const stats = [
  { label: "Experience", value: "7+ yrs" },
  { label: "AI focus", value: "2+ yrs" },
  { label: "Engagement", value: "B2B · EU" },
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
  // Auto and elizaOS are kept on separate lines/paragraphs — never the same
  // sentence — so neither the copy nor the guard-grep links the two.
  paragraphs: [
    "Senior AI agent and backend platform engineer with 7+ years of software experience and 2+ years focused on AI agents, RAG, tool-use systems, and agentic workflow automation. I build production-grade agent runtimes and TypeScript backends — and operate them: logging, tracing, retries, cost controls, queues, and admin tooling. Currently founder and lead engineer at Autonomous, building Auto (auto.fun).",
    "Earlier, as an early core engineer on elizaOS, I contributed agent orchestration, plugin architecture, MCP integrations, knowledge/RAG, and memory systems across an open-source framework used widely in crypto and AI.",
  ],
};

export const engagementFit = [
  {
    title: "Agent workflow delivery",
    body: "Planning loops, tool routing, MCP servers/clients, RAG, memory, prompt pipelines, evals, guardrails, and human-in-the-loop controls.",
  },
  {
    title: "Prototype to production",
    body: "Logging, tracing, retries, timeouts, idempotency, cost controls, queues, admin dashboards, and production debugging.",
  },
  {
    title: "TypeScript backend platforms",
    body: "Node.js/Bun services, Convex/Next.js, realtime subscriptions, PostgreSQL, Redis, REST/GraphQL APIs, CI, and deployment workflows.",
  },
  {
    title: "Crypto-native execution",
    body: "Solana/EVM wallets, Privy auth, swaps, bridges, Hyperliquid, Polymarket, DeFi data, and execution-provider abstractions.",
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
    title: "Founder & Lead AI Engineer",
    org: "Autonomous — Auto (auto.fun)",
    period: "2026 – present",
    links: [
      { label: "auto.fun", href: "https://auto.fun" },
      { label: "docs.auto.fun", href: "https://docs.auto.fun" },
    ],
    bullets: [
      "Building Auto, an AI trading agent that executes trades across crypto, tokenized stocks, prediction markets, and DeFi from natural-language conversation.",
      "Designed and operate a production agent runtime: Convex realtime backend, React frontend, Privy-managed embedded wallets, and provider abstractions for swaps, bridges, perps, and market actions.",
      "Built multi-step execution workflows spanning intent parsing, wallet state, market data, protocol actions, transaction preparation, and result reporting.",
      "Coverage spans 12+ chains and 10+ DeFi protocols/venues (Hyperliquid, Polymarket, Aave, Morpho, CoW, Jupiter, Enso, Uniswap, 0x), with gas sponsorship on most chains.",
      "Hardened reliability: wallet identity, gas sponsorship, position reads, bridge-provider failover, stale-token recovery, and request fanout.",
      "Built backoffice tooling for users, conversations, message processing, scheduled tasks, agent state, logs, and wallet data.",
    ],
    stack:
      "TypeScript, Bun, Convex, React, Next.js, Privy, Redis, Vercel, multi-chain Solana/EVM",
  },
  {
    title: "Early Core Engineer",
    org: "elizaOS (Eliza Labs)",
    period: "Jan 2025 – Apr 2026",
    bullets: [
      "Early core developer on elizaOS, an open-source AI agent framework used across crypto and AI projects; high-volume contributor as @0xbbjoker.",
      "Worked across the full agent stack: orchestration, plugin architecture, runtime behavior, entity/request context, CLI behavior, logging, and production safety fixes.",
      "Shipped public fixes credited in elizaOS releases, including CLI secret-leakage prevention and dev-watch rebuild-loop prevention.",
      "Built and maintained major plugin surfaces: MCP, Knowledge/RAG, Memory, web search, social/channel integrations, and onchain tooling.",
      "Improved plugin deployment modes, dynamic MCP tool actions, per-user MCP connections, batch embeddings, PDF parsing, long-term memory extraction, and adaptive context.",
    ],
    stack:
      "TypeScript, Bun, Node.js, elizaOS core, MCP SDK, Vite/React, RAG, memory systems, plugin architecture",
  },
  {
    title: "AI Engineer",
    org: "Orion (oriontaraban.ai)",
    period: "B2B contract",
    links: [{ label: "oriontaraban.ai", href: "https://oriontaraban.ai" }],
    bullets: [
      "Delivered an end-to-end production AI coaching agent for a client — detailed in Selected work below.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Thentia",
    period: "Oct 2023 – Nov 2024",
    bullets: [
      "Backend engineer on a regulated SaaS platform, focused on Node.js service development and maintainability.",
      "Led backend work to refactor legacy PHP toward Node.js services, improving performance and long-term maintainability.",
      "Worked with Redis, caching, microservice boundaries, and production backend workflows in a compliance-heavy environment.",
    ],
    stack: "Node.js, TypeScript, Redis, microservices, SaaS backend engineering",
  },
  {
    title: "Software Engineer",
    org: "Barrage",
    period: "Nov 2020 – Oct 2023",
    bullets: [
      "Built backend services across fintech and crypto-adjacent systems, focused on Node.js/TypeScript microservices and real-time data.",
      "Developed services for trading workflows, authentication, 2FA, KYC, crypto wallet services, notifications, and dashboard-facing APIs.",
      "Worked across backend and web surfaces using Node.js, Next.js, databases, external APIs, and production support.",
    ],
    stack: "Node.js, TypeScript, Next.js, microservices, fintech systems, realtime data",
  },
];

export interface Work {
  name: string;
  href?: string;
  hrefLabel?: string;
  tag?: string;
  featured?: boolean;
  body: string;
}

export const selectedWork: Work[] = [
  {
    name: "Orion",
    href: "https://oriontaraban.ai",
    hrefLabel: "oriontaraban.ai",
    tag: "Client delivery · Live",
    featured: true,
    body: "Production AI coaching agent that turns an expert's content library into a conversational coach. TypeScript content-to-skill pipeline, Convex state, Telegram/iMessage delivery, progressive memory, goal-lifecycle tracking, subscriptions, safety gating, and admin tooling — delivered end to end for the client.",
  },
  {
    name: "Polymarket Indexer",
    tag: "Data / infra",
    body: "Monorepo with API, workers, test suites, and integrity checks, plus a Python data-reconstruction pipeline, MCP/plugin surfaces, and production deployment setup.",
  },
  {
    name: "elizaOS plugin ecosystem",
    tag: "Open source",
    body: "Knowledge, MCP, Memory, Sourcegraph, EVM, Twitter, and Discord plugin work — production configuration, runtime isolation, batch embeddings, per-user MCP connections, and developer ergonomics.",
  },
];

export const earlierWork =
  "Earlier web3: Hedera, Ethereum dApps, token swaps, private blockchain systems, wallet connections, and trading-automation experiments.";

export interface SkillGroup {
  label: string;
  items: string;
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Node.js, Bun, Rust, Solidity",
  },
  {
    label: "AI / Agents",
    items: "Agent runtimes, multi-step workflows, LLM tool-use, MCP, RAG/knowledge, vector retrieval, memory systems, prompt pipelines, evals, guardrails",
  },
  {
    label: "Backend / Data",
    items: "Convex, Next.js APIs, Hono, PostgreSQL, Drizzle, Redis, Docker, queues, realtime subscriptions, REST/GraphQL",
  },
  {
    label: "Crypto / DeFi",
    items: "Solana, Anchor, EVM L2s, wallets, Privy, Hyperliquid, Polymarket, Jupiter, Enso, Aave, Morpho, CoW Swap, Raydium",
  },
  {
    label: "Frontend / Ops",
    items: "React, Next.js, Astro, Vite, Tailwind CSS, Vercel, CI/CD, type-checking, test automation",
  },
];

export const engagement =
  "Independent founder-engineer, available now for select B2B engagements. Remote, Croatia / EU timezone. Best fit: AI-agent workflow delivery, TypeScript platform work, and DeFi execution products.";

export const credentials = [
  "Early core contributor — elizaOS",
  "Hedera Certified Developer — The Hashgraph Association (Jan 2023)",
];

export const education = [
  "M.Sc. & B.Sc., Electrical & Electronics Engineering — FERIT, Osijek",
  "Croatian (native) · English (professional working proficiency)",
];

export const updated = "June 2026";
