import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "nalam-healthcare",
    title: "Nalam Healthcare Platform",
    tagline: "Intelligent Hospital Information & Patient Care Ecosystem",
    category: "Healthcare Technology / AI Integration / Web & Mobile",
    featured: true,
    timeline: "2022 — Present",
    role: "Lead Full-Stack & AI Application Engineer",
    client: "Nalam Healthcare IT Solutions",
    industry: "Healthcare & Telemedicine",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Azure Cloud",
      "AWS S3 & EC2",
      "OpenAI API",
      "FHIR / HL7 Standards",
      "WebRTC",
      "Docker",
    ],
    summary:
      "A comprehensive, FHIR-compliant multi-tier healthcare ecosystem uniting patient mobile apps, physician portals, EHR records, and an intelligent clinical conversational assistant.",
    keyFeatures: [
      "Cross-platform Patient and Doctor mobile applications built in React Native",
      "Clinical appointment scheduling with real-time slot synchronization",
      "Secure WebRTC-powered video consultations and telemedicine sessions",
      "Digital health records with FHIR/HL7 hospital interoperability",
      "Medicine ordering, e-prescription generation, and pharmacy workflows",
      "Dhanvi AI healthcare information assistant with multilingual conversational support",
      "Vitals monitoring integration and telemetry tracking",
      "Role-based hospital administrative portal with multi-clinic tenancy",
    ],
    architectureOverview:
      "Microservices architecture orchestrated on Azure and AWS. React Native mobile clients and Next.js/React web dashboards interface through an API Gateway to Node.js backend services. Data is persisted in PostgreSQL with encrypted health record stores, while an isolated LLM reasoning proxy orchestrates clinical note summarization and triage assistance.",
    engineeringChallenges: [
      {
        challenge: "Real-time EHR interoperability across heterogeneous hospital management legacy systems.",
        solution:
          "Engineered a standardized FHIR HL7 JSON translation bridge with message queues that safely ingest and parse clinical schemas without vendor lock-in.",
      },
      {
        challenge: "Safe, non-hallucinatory AI guidance for patient symptom triage.",
        solution:
          "Implemented strict guardrails, prompt structuring, and reference-anchored system prompts in Dhanvi, strictly presenting health education while categorically forbidding autonomous medical diagnosis.",
      },
      {
        challenge: "High availability across multi-region hospital deployments.",
        solution:
          "Configured Azure and AWS multi-cloud automated CI/CD pipelines with automated failover, blue-green deployment switches, and automated database replication achieving 99.9% uptime.",
      },
    ],
    aiComponents: {
      name: "Dhanvi Conversational Healthcare Assistant",
      description:
        "An AI-enabled healthcare information assistant supporting natural-language interactions, clinical appointment guidance, and multilingual patient experiences.",
      capabilities: [
        "Patient intake symptom gathering & automated structured summary for doctors",
        "Clinical note drafting and consultation summary generation",
        "Multilingual medical terminology clarification in plain language",
        "Contextual pre-appointment preparation guidelines",
      ],
      disclaimer:
        "Medical Disclaimer: Dhanvi operates strictly as a health informational assistant and operational triage aid. It is deliberately engineered not to provide definitive medical diagnosis, prescription advice, or autonomous treatment plans.",
    },
    metrics: [
      { label: "Intake Processing Time", value: "-40%" },
      { label: "Clinical Note Documentation", value: "-50%" },
      { label: "Hospital Deployments", value: "20+" },
      { label: "System Uptime", value: "99.9%" },
    ],
    media: {
      mockupType: "mobile",
      previewImage: "/projects/nalam-cloud.svg",
      gallery: ["/projects/nalam-cloud.svg", "/projects/nalam-report.jpeg"],
    },
    architectureFlow: [
      { from: "Patient / Doctor Apps", to: "API Gateway", label: "HTTPS / WSS" },
      { from: "API Gateway", to: "Node.js Core Microservices", label: "JWT Auth & Routing" },
      { from: "Node.js Core Microservices", to: "PostgreSQL Database", label: "Encrypted Records" },
      { from: "Node.js Core Microservices", to: "Dhanvi AI Gateway", label: "Sanitized Prompts" },
      { from: "Dhanvi AI Gateway", to: "LLM Inference Service", label: "Strict Guardrails" },
      { from: "Node.js Core Microservices", to: "FHIR / HL7 Connector", label: "Hospital HIS Sync" },
    ],
    githubUrl: "https://github.com/Sureshb11",
  },
  {
    slug: "bizally-erp",
    title: "BizAlly — Enterprise ERP Platform",
    tagline: "Multi-Tenant Cloud ERP & Workflow Automation System",
    category: "SaaS / Multi-Tenant ERP / Enterprise Automation",
    featured: true,
    timeline: "2023 — 2024",
    role: "Full-Stack System Architect & Engineer",
    industry: "Enterprise SaaS & Supply Chain",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Vercel",
      "Tailwind CSS",
      "Prisma ORM",
      "Docker",
    ],
    summary:
      "A modern, modular multi-tenant enterprise resource planning (ERP) platform designed for mid-market manufacturing, distribution, and commercial trade businesses.",
    keyFeatures: [
      "Multi-tenant schema architecture with strict tenant data isolation",
      "End-to-end sales lifecycle: Quotations, Proforma Invoices, Delivery Challans, and Tax Invoices",
      "Dynamic inventory tracking with multi-warehouse transfer management and SKU batch tracing",
      "Automated PDF document generation with dynamic regional currency and tax configurations",
      "Granular Role-Based Access Control (RBAC) with fine-grained department permission matrices",
      "Real-time analytics dashboard with revenue trajectory, margin analysis, and stock velocity",
      "Automated notifications and workflow status triggers powered by Redis pub/sub",
    ],
    architectureOverview:
      "Built with a Next.js App Router frontend communicating with a high-throughput NestJS microservice layer. Employs Redis for caching and distributed rate-limiting, alongside PostgreSQL with row-level security and schema isolation for multi-tenancy. Deployed with automated preview environments on Vercel.",
    engineeringChallenges: [
      {
        challenge: "Tenant isolation and high performance across complex reporting queries.",
        solution:
          "Partitioned critical ledger tables and implemented Redis query caching with automated cache invalidation upon invoice mutation events.",
      },
      {
        challenge: "High-concurrency stock allocation during flash quotation conversions.",
        solution:
          "Implemented atomic PostgreSQL transactions with optimistic concurrency controls and distributed locks to eliminate race conditions.",
      },
    ],
    metrics: [
      { label: "Invoice Generation Speed", value: "< 250ms" },
      { label: "Tenant Data Isolation", value: "100%" },
      { label: "Stock Discrepancy Reduction", value: "98%" },
    ],
    media: {
      mockupType: "dashboard",
      previewImage: "/projects/nalam-report.jpeg",
    },
    architectureFlow: [
      { from: "Tenant Client Dashboard", to: "Vercel Edge Network", label: "Next.js SSR" },
      { from: "Vercel Edge Network", to: "NestJS Backend API", label: "Tenant Context Header" },
      { from: "NestJS Backend API", to: "Redis Cache", label: "Session & Fast Ledger" },
      { from: "NestJS Backend API", to: "PostgreSQL Database", label: "Row-Level Security" },
    ],
    githubUrl: "https://github.com/Sureshb11",
  },
  {
    slug: "otec-asset-management",
    title: "OTEC Asset Management System",
    tagline: "Industrial-Grade Asset Lifecycle & Field Operations Platform",
    category: "Enterprise Software / Oil & Gas",
    featured: true,
    timeline: "2023 — 2024",
    role: "Enterprise Solutions & Backend Engineer",
    client: "Oil Technology Company (OTEC)",
    industry: "Energy, Oil & Gas Field Services",
    isConfidential: true,
    confidentialNotice:
      "Confidential Enterprise Project: In compliance with non-disclosure and security policies, proprietary industrial schematics, client internal operational data, telemetry coordinates, and internal source code are strictly withheld. The overview below highlights public architectural patterns and engineering methodology.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Enterprise Web APIs",
      "Cloud Deployment",
      "Docker",
    ],
    summary:
      "A ruggedized industrial asset lifecycle and tools movement tracking platform engineered for high-stakes oilfield service logistics and equipment maintenance compliance.",
    keyFeatures: [
      "Rig and tool asset registry with serialized tool string tracking",
      "Field tools movement dispatching between central yard, transit hubs, and drilling sites",
      "Job lifecycle tracking from mobilization, field deployment, inspection, to demobilization",
      "Operational duty-cycle logging, run-hours tracking, and preventive maintenance triggers",
      "Chain-of-custody digital sign-offs for yard supervisors and field engineers",
      "Comprehensive asset utilization and readiness analytics reporting",
    ],
    architectureOverview:
      "Designed with an offline-tolerant architecture suitable for harsh field environments. Frontend state is cached locally and synchronized with the central Node.js REST API upon connection re-establishment, persisting audited event streams to PostgreSQL.",
    engineeringChallenges: [
      {
        challenge: "Offline synchronization for remote drilling locations with intermittent satellite connectivity.",
        solution:
          "Engineered an event-driven sync engine that queues field audit events locally in IndexedDB and commits idempotent transactions upon network recovery.",
      },
      {
        challenge: "Zero tolerance for equipment loss or undocumented tool movement.",
        solution:
          "Built an immutable audit trail system where every equipment transfer requires multi-party digital verification.",
      },
    ],
    metrics: [
      { label: "Asset Visibility", value: "Real-Time" },
      { label: "Dispatch Verification Time", value: "-60%" },
      { label: "Audit Compliance", value: "100%" },
    ],
    media: {
      mockupType: "system",
      previewImage: "/projects/otec-logo-hori.png",
      gallery: ["/projects/otec-logo.png", "/projects/otec-logo-hori.png"],
    },
    architectureFlow: [
      { from: "Field Handheld / Rig Tablet", to: "Local Sync Queue", label: "IndexedDB / Offline" },
      { from: "Local Sync Queue", to: "Secure Enterprise Gateway", label: "Encrypted Batch Sync" },
      { from: "Secure Enterprise Gateway", to: "Central Node.js API", label: "Idempotent Event Log" },
      { from: "Central Node.js API", to: "PostgreSQL Database", label: "Audited Ledger" },
    ],
  },
  {
    slug: "toss2play",
    title: "Toss2Play — Multi-Sport Platform",
    tagline: "High-Performance Mobile Scoring & League Management App",
    category: "Sports Technology / Mobile Application",
    featured: true,
    timeline: "2023",
    role: "Lead Mobile App Engineer",
    industry: "Sports & Consumer Mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "REST APIs",
      "Tailwind CSS",
      "iOS & Android",
    ],
    summary:
      "A dynamic, real-time sports scoring, league orchestration, and player analytics mobile application delivering ball-by-ball precision and spectator updates.",
    keyFeatures: [
      "Real-time ball-by-ball cricket scoring engine supporting customized local league rules",
      "Instant push updates and live spectator scoreboard feeds powered by WebSockets",
      "Automated tournament fixture scheduling, group stages, and knockout bracket calculations",
      "In-depth player profiles with historical batting strike rates, bowling averages, and MVP metrics",
      "Multi-sport extensible architecture with modular rule engines",
      "Offline scoring support with automatic catch-up sync to central leaderboards",
    ],
    architectureOverview:
      "React Native cross-platform client with an event-driven WebSocket pipeline. Ball events are dispatched as lightweight payloads to Node.js socket servers and broadcast to thousands of concurrent spectator listeners in sub-50ms latency.",
    engineeringChallenges: [
      {
        challenge: "Sub-second live match updates to concurrent spectators on cellular connections.",
        solution:
          "Engineered binary-delta state compression and WebSocket channel multiplexing, minimizing bandwidth by over 70%.",
      },
      {
        challenge: "Handling complex cricket edge cases (super overs, DLS, penalty runs, retrospective scoring edits).",
        solution:
          "Implemented an immutable state-machine pattern where each ball is an event that can be rolled back or replayed cleanly without corrupting the match history.",
      },
    ],
    metrics: [
      { label: "Live Update Latency", value: "< 50ms" },
      { label: "Data Payload Compression", value: "70%" },
      { label: "Supported Platforms", value: "iOS + Android" },
    ],
    media: {
      mockupType: "mobile",
      previewImage: "/projects/toss2play-preview.png",
      gallery: ["/projects/toss2play-preview.png"],
    },
    architectureFlow: [
      { from: "Scorer Device", to: "WebSocket Gateway", label: "Ball Event Payload" },
      { from: "WebSocket Gateway", to: "State Machine Engine", label: "Rules Validation" },
      { from: "State Machine Engine", to: "Spectator Clients", label: "Pub/Sub Broadcast (<50ms)" },
      { from: "State Machine Engine", to: "Database Store", label: "Match Archive" },
    ],
    githubUrl: "https://github.com/Sureshb11",
  },
  {
    slug: "nalamrd",
    title: "NalamRD — Remote Desktop Application",
    tagline: "Secure Peer-to-Peer Remote Desktop & Support Tool",
    category: "Developer Tools / Desktop Software",
    featured: true,
    timeline: "2022 — 2023",
    role: "Desktop Systems & Network Engineer",
    industry: "Remote IT Infrastructure & Support",
    technologies: [
      "Electron",
      "WebRTC",
      "Node.js",
      "WebSocket",
      "TypeScript",
      "C++ Native Addons",
      "Windows & macOS",
    ],
    summary:
      "A cross-platform desktop remote access tool designed for hospital network administrators and remote IT support technicians requiring low-latency screen control across secure subnets.",
    keyFeatures: [
      "Peer-to-peer screen streaming with WebRTC media channels and hardware acceleration",
      "End-to-end encrypted session negotiation and one-time connection tokens",
      "Smooth remote mouse and keyboard event dispatching with sub-frame responsiveness",
      "Cross-platform desktop packaging for Windows and macOS environments",
      "File transfer channel and integrated technician chat",
      "NAT traversal via automated STUN/TURN relay fallbacks for restrictive hospital firewalls",
    ],
    architectureOverview:
      "Built with Electron on the frontend and WebRTC data/media streams. Employs lightweight signaling servers over WebSocket. Direct peer-to-peer connection is negotiated using ICE/STUN, streaming encoded desktop frames with hardware VP8/H.264 codecs.",
    engineeringChallenges: [
      {
        challenge: "Negotiating connections through strict hospital enterprise firewalls and deep packet inspection.",
        solution:
          "Configured dynamic ICE candidates with automated relay failover via TLS-wrapped TURN servers on standard port 443.",
      },
      {
        challenge: "Input synchronization and zero mouse latency over jittery connections.",
        solution:
          "Utilized low-overhead binary WebRTC DataChannels for input dispatching with local cursor extrapolation.",
      },
    ],
    metrics: [
      { label: "Screen Streaming Latency", value: "< 60ms" },
      { label: "Firewall Traversal Rate", value: "99.4%" },
      { label: "Supported OS", value: "Win & Mac" },
    ],
    media: {
      mockupType: "desktop",
      previewImage: "/projects/nalam-cloud.svg",
    },
    architectureFlow: [
      { from: "Support Host (Electron)", to: "Signaling Server", label: "SDP Handshake (WSS)" },
      { from: "Remote Client (Electron)", to: "Signaling Server", label: "SDP Handshake (WSS)" },
      { from: "Support Host", to: "Remote Client", label: "WebRTC P2P (Video + Data)" },
      { from: "Support Host", to: "TURN Relay (Fallback)", label: "TLS Port 443" },
    ],
    githubUrl: "https://github.com/Sureshb11",
  },
];
