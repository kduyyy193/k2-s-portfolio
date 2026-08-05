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
    "Software Engineer with 3+ years of experience building production systems across AI agent platforms, POS, social products, and ERP. Skilled in NestJS, React/Next.js, and data-intensive backends—with focus on hybrid retrieval (Knowledge Graph + vector search), multi-tenant architecture, and real-time, resilient workflows.",
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
  "Docker",
  "RabbitMQ",
  "Git",
  "Jenkins",
  "Unit Testing",
];

export const achievements = [
  { icon: "work", text: "3+ years experience" },
  { icon: "deploy", text: "Production multi-tenant AI agent platform" },
  { icon: "apps", text: "ERP delivered across construction, legal & education" },
  { icon: "code", text: "Hybrid Knowledge Graph + vector retrieval" },
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
      "Designed hybrid retrieval architecture combining Knowledge Graph and vector search, optimized with caching and parallel processing to balance answer accuracy and response speed.",
      "Built internal multi-agent AI framework with role-based workflows, enabling teams to build projects collaboratively with AI agents.",
      "Designed multi-tenant architecture and enterprise-grade license/role management, ensuring secure data isolation across workspaces.",
    ],
    highlights: [
      "Hybrid Knowledge Graph + vector retrieval",
      "Multi-agent framework with role-based workflows",
      "Multi-tenant, secure data isolation",
    ],
  },
  {
    id: "levinci-pos",
    title: "POS Systems",
    subtitle: "Levinci Co., Ltd · Retail & F&B",
    accentColor: "#EA580C",
    built: [
      "Implemented local state persistence for cart/order data, allowing POS to continue operating during network interruptions and auto-sync once reconnected.",
      "Built optimistic UI updates for cart and checkout actions, giving instant visual feedback while confirming with server in the background.",
      "Structured frontend state management to handle multiple concurrent orders/tables without UI lag or state conflicts.",
    ],
    highlights: [
      "Offline-first with auto-sync",
      "Optimistic UI for cart & checkout",
      "Concurrent multi-table order handling",
    ],
  },
  {
    id: "levinci-social",
    title: "Social Platforms",
    subtitle: "Levinci Co., Ltd · Software Engineer",
    accentColor: "#DB2777",
    built: [
      "Built timestamp-based product tagging for masterclass video content, enabling in-video shopping tied to lesson context.",
      "Developed CV builder with dynamic Canvas rendering, generating resumes from user data across multiple customizable templates.",
      "Optimized news feed delivery with Redis caching and cursor-based pagination, reducing database load under high-traffic conditions.",
    ],
    highlights: [
      "In-video shopping via timestamp tagging",
      "Canvas-based CV builder",
      "Redis-cached, cursor-paginated news feed",
    ],
  },
  {
    id: "levinci-erp",
    title: "ERP Systems",
    subtitle: "Levinci Co., Ltd · Software Engineer",
    accentColor: "#059669",
    built: [
      "(Construction) Built cost-tracking module comparing budgeted vs. actual spend per work item, surfacing overruns before end-of-phase reporting.",
      "(Legal) Automated legal deadline reminders, reducing risk of missed filing/procedural dates.",
      "(Education) Built room allocation system for dormitory check-in/check-out cycles, automating bed assignment based on capacity and eligibility rules.",
    ],
    highlights: [
      "Multi-domain ERP: construction, legal, education",
      "Automated compliance & deadline tracking",
      "Rules-based room/bed allocation",
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
