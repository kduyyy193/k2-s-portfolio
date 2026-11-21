import type { Period } from "../utils/period";

export type { Period };

export type ExperienceGroup = {
  company: string;
  role: string;
  period: Period;
};

export type Experience = {
  id: string;
  company: string;
  title: string;
  subtitle?: string;
  period?: Period;
  periodLabel?: string;
  accentColor?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  screenshots?: { src: string; alt: string; aspect: "4/3" | "9/16" }[];
  applications?: string[];
  built?: string[];
  users?: string[];
  team?: string[];
  highlights?: string[];
  stats?: { value: string; label: string }[];
  statsNote?: string;
};

export type SideProject = {
  id: string;
  title: string;
  period?: Period;
  periodLabel?: string;
  details?: string[];
  responsibilities?: string[];
  links?: { label: string; url: string }[];
};

export const profile = {
  name: "Nguyen Khanh Duy",
  title: "Full-Stack Software Engineer",
  titleNote: "Nearly 4 years experience",
  avatar: "/images/me.jpg",
  avatarPosition: "50% 20%",
  about:
    "Full-stack Software Engineer with nearly 4 years of experience building multi-tenant SaaS and AI agent platforms in TypeScript, from React to NestJS, with a focus on reliability under concurrent load and failures. Currently an Agentic Engineer at Dream Talent, building a durable multi-agent platform for a real estate marketplace and a large-scale search indexing pipeline. Owned products end to end, from design to production.",
  phone: "+84 985 308 170",
  phoneTel: "tel:+84985308170",
  linkedin: "https://linkedin.com/in/kduyyy193",
  github: "https://github.com/kduyyy193",
  email: "kduyyy193.for.dev@gmail.com",
  mailto: "mailto:kduyyy193.for.dev@gmail.com",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent("kduyyy193.for.dev@gmail.com"),
  location: "Binh Trung, Ho Chi Minh City, Vietnam",
  cvViewUrl: "/NKDCV.pdf",
  cvDownloadUrl: "/NKDCV.pdf",
  cvDownloadName: "Nguyen-Khanh-Duy-CV.pdf",
};

export const skills = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "FastAPI",
  "Zod",
  "OpenAPI",
  "Prisma",
  "Drizzle ORM",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "OpenSearch",
  "Pinecone",
  "Kafka",
  "RabbitMQ",
  "Multi-tenancy",
  "RBAC",
  "Concurrency Control",
  "Idempotency",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TanStack Query",
  "TanStack Table",
  "Zustand",
  "Streaming UI",
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "Jest",
  "Vitest",
  "Docker",
  "Nx (Monorepo)",
  "Git",
  "GitHub Actions",
  "Linux",
];

export const achievements = [
  { icon: "work", text: "Nearly 4 years experience" },
  { icon: "deploy", text: "Durable AI agent workflows: no inquiry lost or sent twice" },
  { icon: "apps", text: "Billing & credit quotas: exactly-once grants, no overspend under concurrency" },
  { icon: "code", text: "Indexing pipeline: 5M segments, ~1,050/sec, ~200 ms p95" },
  { icon: "deploy", text: "Multi-tenant isolation via backend + PostgreSQL Row-Level Security" },
];

export const education = {
  degree: "Information Technology (Distance Learning)",
  school: "Can Tho University — Can Tho, Vietnam",
  periodLabel: "2025 – 2029",
};

export const experienceGroups: ExperienceGroup[] = [
  {
    company: "Dream Talent Co., Ltd",
    role: "Agentic Engineer",
    period: { start: "07/2026", end: "Present" },
  },
  {
    company: "Levinci Co., Ltd",
    role: "Software Engineer",
    period: { start: "01/2023", end: "07/2026" },
  },
];

export const experiences: Experience[] = [
  {
    id: "dreamtalent-agentic",
    company: "Dream Talent Co., Ltd",
    title: "AI Agent Platform for a Real Estate Marketplace",
    subtitle: "Dream Talent Co., Ltd · Agentic Engineer",
    accentColor: "#2563EB",
    built: [
      "Built a durable workflow where the AI messages a property owner on the customer's behalf and waits up to 24 hours for a reply. It survives worker restarts: duplicate events are dropped and stalled jobs are reclaimed, so no inquiry is lost or sent twice.",
      "Architected the multi-agent orchestration: code-driven routing sends each request to specialized agents that run in parallel, a failing worker does not fail the turn, and only a lead agent streams the answer.",
      "Designed a risk-tiered action gate that lets agents operate 100+ product APIs safely: reads run immediately, bookings and payments wait for user confirmation, irreversible actions are deep-linked; every action uses the user's own token with an idempotency key and audit log.",
      "Created an internal skill and workflow system that standardizes how a 5-person team works with AI, keeping implementation consistent across engineers.",
    ],
    highlights: [
      "24h durable workflow: survives restarts, no duplicates",
      "Parallel multi-agent routing, fault-tolerant turns",
      "Risk-tiered gate over 100+ product APIs",
      "Skill & workflow system for a 5-person team",
    ],
  },
  {
    id: "dreamtalent-knowledge",
    company: "Dream Talent Co., Ltd",
    title: "Enterprise Knowledge & Productivity Platform",
    subtitle: "Dream Talent Co., Ltd · Payload CMS, PostgreSQL, OpenSearch",
    accentColor: "#0891B2",
    built: [
      "Migrated ~100 GB of documents through a resumable, checkpointed process that never rescans a file after an interruption.",
      "Built an indexing pipeline for 5M text segments (~1,050/sec, ~200 ms p95): edits become a new version switched in atomically, so search never goes down and stale jobs cannot overwrite newer data.",
    ],
    highlights: [
      "~100 GB migrated, resumable & checkpointed",
      "5M segments, ~1,050/sec, ~200 ms p95",
      "Atomic version switch: zero search downtime",
    ],
  },
  {
    id: "levinci-ai",
    company: "Levinci Co., Ltd",
    title: "Enterprise Multi-Tenant AI Agent Platform",
    subtitle: "Levinci Co., Ltd · Software Engineer",
    accentColor: "#7C3AED",
    built: [
      "Built subscription billing that grants monthly credits exactly once per paid invoice, even if the payment provider resends events or a worker crashes; failures are retried, then flagged for manual review.",
      "Built monthly credit quotas for AI usage: credits are reserved before each agent run and settled against actual usage, so tenants cannot overspend under concurrent requests.",
      "Owned the multi-tenant architecture: per-business agents and private knowledge bases, with tenant isolation enforced in the backend and by PostgreSQL Row-Level Security, plus role- and license-based access.",
      "Secured the platform's APIs: request validation, rate limiting, signature-verified payment webhooks and tenant-scoped authorization, following common OWASP practices.",
      "Built the streaming chat UI, rendering answers progressively with source citations.",
    ],
    highlights: [
      "Exactly-once credit grants per paid invoice (Stripe)",
      "Reserve-then-settle quotas: no overspend",
      "Tenant isolation: backend + PostgreSQL RLS",
      "Streaming chat UI with source citations",
    ],
  },
  {
    id: "levinci-pos",
    company: "Levinci Co., Ltd",
    title: "POS System (Retail & F&B)",
    subtitle: "Levinci Co., Ltd · React.js, TanStack Query",
    accentColor: "#EA580C",
    built: [
      "Engineered an offline-first POS: orders persist locally and reconcile with the server on reconnect, with optimistic checkout that rolls back on failure.",
      "Redesigned order state for high concurrency, keeping many open orders isolated and the UI responsive.",
    ],
    highlights: [
      "Offline-first, reconciles on reconnect",
      "Optimistic checkout with rollback",
      "Isolated state across many open orders",
    ],
  },
  {
    id: "levinci-social",
    company: "Levinci Co., Ltd",
    title: "Social Platforms",
    subtitle: "Levinci Co., Ltd · Software Engineer",
    accentColor: "#DB2777",
    built: [
      "Built timestamp-based product tagging applied across 100+ masterclass videos, enabling in-video shopping tied to lesson context.",
      "Developed CV builder with dynamic Canvas rendering, generating resumes from user data across 5+ customizable templates.",
      "Optimized news feed delivery with Redis caching and cursor-based pagination, reducing database load by ~35% and cutting average feed load time from ~1s to ~400ms under high-traffic conditions.",
    ],
    highlights: [
      "In-video shopping across 100+ videos",
      "Canvas-based CV builder, 5+ templates",
      "Feed load time: ~1s → ~400ms, −35% DB load",
    ],
  },
  {
    id: "levinci-erp",
    company: "Levinci Co., Ltd",
    title: "ERP Systems",
    subtitle: "Levinci Co., Ltd · Software Engineer",
    accentColor: "#059669",
    built: [
      "(Construction) Built cost-tracking module comparing budgeted vs. actual spend per work item, surfacing overruns 2–3 weeks earlier, applied across 10+ construction projects.",
      "(Legal) Automated legal deadline reminders, reducing missed filing/procedural deadlines by ~80%.",
      "(Education) Built room allocation system for dormitory check-in/check-out cycles, automating bed assignment for 300+ dormitory rooms and cutting manual processing time by ~60%.",
    ],
    highlights: [
      "Cost overruns surfaced 2–3 weeks earlier, 10+ projects",
      "Legal deadline misses cut by ~80%",
      "300+ dorm rooms automated, −60% manual work",
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    period: { start: "2024", end: "Present" },
    details: [
      "Astro + Tailwind static portfolio",
      "Sidebar profile & experience timeline",
    ],
    responsibilities: [
      "Designed a recruiter-friendly layout with collapsible experience cards.",
      "Structured content as data-driven modules for easy updates.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/kduyyy193" }],
  },
];
