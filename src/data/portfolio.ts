import type { Period } from "../utils/period";

export type { Period };

export type Experience = {
  id: string;
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
  title: "Software Engineer",
  titleNote: "3+ years experience",
  avatar: "/images/avatar.png",
  avatarPosition: "50% 20%",
  about:
    "Software Engineer with 3+ years of experience building production systems across AI agent platforms, POS, social products, and ERP. Skilled in NestJS, React/Next.js, and data-intensive backends—with focus on hybrid retrieval (Knowledge Graph + vector search), multi-agent orchestration, multi-tenant architecture, and real-time, resilient workflows.",
  phone: "+84 985 308 170",
  phoneTel: "tel:+84985308170",
  linkedin: "",
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
  "JavaScript",
  "TypeScript",
  "Python",
  "Node.js",
  "NestJS",
  "React",
  "Next.js",
  "FastAPI",
  "SQL",
  "NoSQL",
  "In-Memory DB",
  "Vector DB",
  "Graph DB",
  "RAG",
  "Knowledge Graph",
  "Vector Search",
  "Hybrid Retrieval Architecture",
  "Multi-Agent Orchestration",
  "Docker",
  "RabbitMQ",
  "Git",
  "Jenkins",
  "Unit Testing",
];

export const achievements = [
  { icon: "work", text: "3+ years experience" },
  { icon: "deploy", text: "5+ workspace multi-tenant AI platform, zero cross-tenant incidents" },
  { icon: "apps", text: "ERP delivered across construction, legal & education" },
  { icon: "code", text: "Hybrid retrieval: ~85–90% accuracy, ~1.5–2s TTFT" },
];

export const education = {
  degree: "Information Technology",
  school: "Can Tho University — Can Tho, Vietnam",
};

export const experienceGroup = {
  company: "Levinci Co., Ltd",
  role: "Software Engineer",
  period: { start: "01/2023", end: "Present" } as Period,
};

export const experiences: Experience[] = [
  {
    id: "levinci-ai",
    title: "Internal AI Agent Platforms",
    subtitle: "Levinci Co., Ltd · Software Engineer",
    accentColor: "#7C3AED",
    built: [
      "Designed hybrid retrieval architecture combining Knowledge Graph and vector search, optimized with caching and parallel processing to achieve ~1.5–2s time-to-first-token (TTFT) while maintaining ~85–90% retrieval accuracy.",
      "Built internal multi-agent AI framework with role-based workflows, reducing average task completion time by ~40% and achieving ~90% task success rate, enabling internal teams to collaboratively build projects with AI agents.",
      "Designed multi-tenant architecture and enterprise-grade license/role management, managing 5+ isolated workspaces with zero cross-tenant data incidents.",
      "Built AI Assistant for real-time chat support and fast information retrieval, applying the AIDA framework to guide user conversations toward action, with interactive map rendering to visualize location-based results, achieving ~2.5–3s average response time and ~85% query resolution accuracy.",
    ],
    highlights: [
      "Hybrid retrieval: ~1.5–2s TTFT, ~85–90% accuracy",
      "Multi-agent framework: +40% faster tasks, ~90% success",
      "5+ isolated workspaces, zero cross-tenant incidents",
      "AI chat assistant: ~85% query resolution accuracy",
    ],
  },
  {
    id: "levinci-pos",
    title: "POS Systems",
    subtitle: "Levinci Co., Ltd · Retail & F&B",
    accentColor: "#EA580C",
    built: [
      "Implemented local state persistence for cart/order data, allowing POS to continue operating during network interruptions with zero transaction loss, auto-syncing within seconds of reconnect.",
      "Built optimistic UI updates for cart and checkout actions, reducing perceived action latency from ~600ms to under 100ms while confirming with server in the background.",
      "Structured frontend state management to handle 30+ concurrent orders/tables without UI lag or state conflicts.",
    ],
    highlights: [
      "Offline-first, zero transaction loss, auto-sync",
      "Checkout latency: ~600ms → <100ms",
      "30+ concurrent orders/tables, no state conflicts",
    ],
  },
  {
    id: "levinci-social",
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
