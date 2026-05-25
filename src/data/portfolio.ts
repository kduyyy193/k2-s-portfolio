import type { Period } from "../utils/period";

export type { Period };

export type Experience = {
  id: string;
  title: string;
  subtitle?: string;
  period?: Period;
  periodLabel?: string;
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
    "Fullstack Software Engineer with 3+ years of experience building production systems across AI platforms, POS, social products, and ERP. Strong in NestJS, React, Next.js, and data-intensive backends—with focus on scalability, multi-tenant design, and low-latency real-time workflows.",
  phone: "+84 879 901 903",
  phoneTel: "tel:+84879901903",
  linkedin: "",
  github: "https://github.com/kduyyy193",
  email: "kduyyy193.for.dev@gmail.com",
  mailto: "mailto:kduyyy193.for.dev@gmail.com",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent("kduyyy193.for.dev@gmail.com"),
  location: "Tan Binh, Ho Chi Minh City, Vietnam",
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
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Weaviate",
  "Pinecone",
  "Docker",
  "RabbitMQ",
  "WebSocket",
  "Socket.IO",
  "Git",
  "Jenkins",
  "Unit Testing",
];

export const achievements = [
  { icon: "work", text: "3+ years experience" },
  { icon: "apps", text: "1000+ orders/hour POS throughput" },
  { icon: "code", text: "~40% latency reduction on POS flows" },
  { icon: "deploy", text: "Multi-tenant AI platform in production" },
];

export const education = {
  degree: "Bachelor of Information Technology",
  school: "Can Tho University — Can Tho, Vietnam",
  period: "2025 - Present",
};

export const experiences: Experience[] = [
  {
    id: "levinci-ai",
    title: "Internal AI Agent Platforms",
    subtitle: "Levinci Co., Ltd · Fullstack Developer",
    period: { start: "07/2025", end: "Present" },
    applications: [
      "Semantic search & contextual Q&A",
      "Multi-tenant workspace platform",
      "License & role management",
      "SaaS billing & subscriptions",
    ],
    built: [
      "Built semantic search and contextual understanding with Weaviate, Pinecone, OpenAI APIs, and DeepSeek (self-hosted).",
      "Designed multi-tenant architecture with PostgreSQL + Redis, ensuring efficient data isolation and workspace scalability.",
      "Implemented license & role management with NestJS, enabling secure enterprise operations.",
      "Integrated SaaS billing with Paddle Checkout—subscription plans, license activation, and automated payment handling.",
    ],
    users: [
      "Enterprise teams",
      "Workspace administrators",
      "Licensed end users",
    ],
    highlights: [
      "Production AI agent stack",
      "Secure multi-tenant data isolation",
      "Automated billing & licensing",
    ],
  },
  {
    id: "levinci-pos",
    title: "POS Systems",
    subtitle: "Levinci Co., Ltd · Retail & F&B",
    period: { start: "05/2024", end: "07/2025" },
    applications: [
      "Point-of-sale (tablet / counter)",
      "Menu & order management",
      "Multi-device sync layer",
    ],
    built: [
      "Developed synchronized order and menu updates across multiple devices using WebSocket + Redis Pub/Sub.",
      "Optimized transaction flows for data consistency and reliability during peak hours (1000+ orders/hour).",
      "Reduced operational latency by ~40%, delivering a smoother experience in fast-paced retail and F&B environments.",
    ],
    users: [
      "Retail & F&B operators",
      "Cashiers and store staff",
      "Peak-hour order workflows",
    ],
    stats: [
      { value: "1000+", label: "orders/hour" },
      { value: "~40%", label: "latency reduced" },
      { value: "Real-time", label: "device sync" },
    ],
    statsNote: "WebSocket + Redis Pub/Sub for cross-device consistency.",
  },
  {
    id: "levinci-erp",
    title: "ERP Systems",
    subtitle: "Levinci Co., Ltd · Fullstack Developer",
    period: { start: "08/2024", end: "03/2025" },
    applications: [
      "Workflow automation",
      "Modular service architecture",
      "External API integrations",
    ],
    built: [
      "Automated enterprise workflows using NestJS + Redis queues, streamlining complex processes.",
      "Refactored monolithic services into modular components, improving scalability and maintainability.",
      "Integrated external APIs (payment, logistics) with secure token-based authentication.",
    ],
    users: [
      "Enterprise operations teams",
      "Internal admins",
      "Integrated third-party services",
    ],
    highlights: [
      "Queue-based workflow automation",
      "Modular, maintainable services",
    ],
  },
  {
    id: "goodlaw",
    title: "GoodLaw",
    subtitle: "Legal Tech · Fullstack Developer",
    period: { start: "01/2024", end: "05/2024" },
    applications: [
      "React.js admin dashboard",
      "Case management UI",
      "Consultation booking flows",
    ],
    built: [
      "Developed and maintained the responsive React.js admin website for managing legal cases and consultations.",
      "Implemented fullstack features for authentication, case management, and consultation booking across web clients.",
      "Integrated REST and GraphQL APIs for data synchronization between front-end and backend services.",
      "Built reusable UI components and API-facing modules for lawyers, case managers, and admin staff.",
    ],
    users: [
      "Legal clients",
      "Lawyers",
      "Legal advisors",
      "Case managers",
      "Admin staff",
    ],
    stats: [
      { value: "1K+", label: "downloads" },
      { value: "500+", label: "active users" },
      { value: "100+", label: "cases managed" },
    ],
    statsNote: "Legal platform used in production across mobile and web.",
    team: [
      "2 Fullstack Developers",
      "2 Backend Developers",
      "1 QA",
      "1 Designer",
      "1 BA",
    ],
  },
  {
    id: "levinci-social",
    title: "Social Platforms",
    subtitle: "Levinci Co., Ltd · Fullstack Developer",
    period: { start: "01/2023", end: "01/2024" },
    applications: [
      "Real-time messaging",
      "Push notifications",
      "SEO-driven content delivery",
      "CV builder",
    ],
    built: [
      "Built real-time messaging and notifications with Socket.IO, supporting large-scale user interactions.",
      "Operated on a high-traffic Node.js server architecture optimized for SEO-driven content delivery.",
      "Developed a CV builder that generated resumes from user data using customizable templates and dynamic layout rendering with Canvas.",
    ],
    users: [
      "Platform end users",
      "Content consumers",
      "Job seekers using CV builder",
    ],
    highlights: [
      "Large-scale real-time interactions",
      "SEO-optimized Node.js architecture",
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
