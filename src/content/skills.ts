import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    description: "Building production-grade LLM workflows, guardrails, and conversational experiences",
    skills: [
      { name: "LLM Integration", badge: "Production", iconName: "Brain" },
      { name: "OpenAI API", badge: "Core", iconName: "Cpu" },
      { name: "Prompt Engineering", badge: "Specialized", iconName: "Sparkles" },
      { name: "Conversational AI", badge: "Production", iconName: "MessageSquare" },
      { name: "AI-Assisted Development", badge: "Advanced", iconName: "Bot" },
      { name: "LangChain & RAG Basics", badge: "Active Research", iconName: "Layers" },
      { name: "Responsible AI Guardrails", badge: "Healthcare Grade", iconName: "ShieldAlert" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Robust type-safe and performant languages across frontend, backend, and systems",
    skills: [
      { name: "TypeScript", badge: "Primary", iconName: "Code2" },
      { name: "JavaScript (ES6+)", badge: "Expert", iconName: "Code" },
      { name: "Python", badge: "AI & Scripting", iconName: "FileCode2" },
      { name: "SQL (Postgres / MySQL)", badge: "Advanced", iconName: "Database" },
      { name: "C# / .NET Basics", badge: "Enterprise", iconName: "Terminal" },
    ],
  },
  {
    title: "Frontend & Mobile",
    description: "Responsive, accessible, and high-performance user interfaces for web and mobile",
    skills: [
      { name: "React.js", badge: "Core", iconName: "Layout" },
      { name: "Next.js (App Router)", badge: "Production", iconName: "Globe" },
      { name: "React Native (iOS/Android)", badge: "Cross-Platform", iconName: "Smartphone" },
      { name: "Tailwind CSS", badge: "Advanced", iconName: "Palette" },
      { name: "HTML5 & Semantic Web", badge: "Standard", iconName: "FileText" },
      { name: "Modern CSS & Animations", badge: "Aesthetic", iconName: "Sparkles" },
    ],
  },
  {
    title: "Backend Engineering",
    description: "Scalable API gateways, event-driven architectures, and microservices",
    skills: [
      { name: "Node.js", badge: "Core Runtime", iconName: "Server" },
      { name: "NestJS", badge: "Enterprise", iconName: "Boxes" },
      { name: "Express.js", badge: "High-Throughput", iconName: "Workflow" },
      { name: "REST APIs", badge: "Standard", iconName: "Network" },
      { name: "Microservices", badge: "Distributed", iconName: "Component" },
      { name: "WebSockets & WebRTC", badge: "Real-Time", iconName: "Radio" },
      { name: "GraphQL Basics", badge: "Modern Query", iconName: "Share2" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational integrity, transactional security, in-memory caching, and document models",
    skills: [
      { name: "PostgreSQL", badge: "Primary Relational", iconName: "Database" },
      { name: "Redis", badge: "In-Memory & Pub/Sub", iconName: "Zap" },
      { name: "MySQL", badge: "Production", iconName: "Table" },
      { name: "MongoDB", badge: "Document Store", iconName: "HardDrive" },
      { name: "Prisma & SQL ORMs", badge: "Type-Safe", iconName: "Link" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Resilient cloud infrastructure, container orchestration, and continuous delivery",
    skills: [
      { name: "Azure (VMs, Blob, AKS, DevOps)", badge: "Production", iconName: "Cloud" },
      { name: "AWS (EC2, S3, Lambda, ACM)", badge: "Cloud Practitioner", iconName: "CloudSun" },
      { name: "Vercel", badge: "Edge Deployments", iconName: "Triangle" },
      { name: "Docker", badge: "Containerization", iconName: "Container" },
      { name: "CI/CD & GitHub Actions", badge: "Automation", iconName: "GitMerge" },
      { name: "Infrastructure as Code", badge: "DevOps", iconName: "FileCheck" },
    ],
  },
  {
    title: "Tools & AI IDEs",
    description: "Modern developer ergonomics, AI-native editors, and inspection toolchains",
    skills: [
      { name: "Antigravity IDE", badge: "Power User", iconName: "Orbit" },
      { name: "Cursor AI", badge: "AI Pair Coding", iconName: "Compass" },
      { name: "VS Code", badge: "Primary Editor", iconName: "Code2" },
      { name: "Git & GitHub", badge: "Version Control", iconName: "GitBranch" },
      { name: "Postman", badge: "API Testing", iconName: "Send" },
      { name: "Docker Desktop", badge: "Local Containers", iconName: "Box" },
    ],
  },
  {
    title: "Enterprise Systems & Standards",
    description: "Multi-tenant software, healthcare protocols, and enterprise IT infrastructure",
    skills: [
      { name: "SaaS Multi-Tenancy", badge: "Architecture", iconName: "Building2" },
      { name: "FHIR / HL7 Interoperability", badge: "Healthcare", iconName: "HeartPulse" },
      { name: "Role-Based Access Control (RBAC)", badge: "Security", iconName: "KeyRound" },
      { name: "Active Directory & Microsoft 365", badge: "500+ Endpoints", iconName: "ShieldCheck" },
      { name: "TCP/IP & Cisco Routing", badge: "Networking", iconName: "Router" },
      { name: "HIPAA-Aligned Safeguards", badge: "Compliance", iconName: "Lock" },
    ],
  },
];
