import { EngineeringStep } from "@/types";

export const engineeringProcess: EngineeringStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Understand requirements & business challenges",
    description:
      "Engage deeply with clinical and business stakeholders to uncover core workflows, operational friction, compliance constraints, and quantitative objectives before writing code.",
    deliverables: [
      "Technical Requirements Specification",
      "User Persona & Workflow Mapping",
      "Compliance & Security Audit Checklist",
      "Feasibility & Architecture Scope",
    ],
  },
  {
    step: "02",
    title: "Architect",
    tagline: "Design secure, maintainable system architecture",
    description:
      "Craft modular, decoupled architectures with clean data contracts. Plan database schemas, API boundaries, multi-cloud services, and safe AI integration patterns with strict error isolation.",
    deliverables: [
      "System Architecture Diagrams",
      "ERD & Relational Data Schemas",
      "API & Event Interface Contracts",
      "Multi-Cloud & Security Architecture",
    ],
  },
  {
    step: "03",
    title: "Develop",
    tagline: "Build frontend, backend, APIs & intelligent integrations",
    description:
      "Write clean, type-safe code using Next.js, React Native, Node.js, and TypeScript. Leverage AI IDEs (Cursor & Antigravity) for rapid iteration, prompt engineering, and deterministic error handling.",
    deliverables: [
      "Responsive Web & Mobile Interfaces",
      "High-Throughput Microservice APIs",
      "LLM Integration & Prompt Guardrails",
      "Comprehensive Code Documentation",
    ],
  },
  {
    step: "04",
    title: "Test",
    tagline: "Validate functionality, performance, reliability & security",
    description:
      "Rigorously test at unit, integration, and end-to-end levels. Verify FHIR/HL7 schema conformance, stress-test high-concurrency database queries, and audit for edge-case vulnerabilities.",
    deliverables: [
      "Automated Unit & Integration Suites",
      "Load & Concurrency Stress Reports",
      "FHIR Schema Interoperability Verification",
      "Security & Penetration Audit Passes",
    ],
  },
  {
    step: "05",
    title: "Deploy",
    tagline: "Release using cloud infrastructure & CI/CD workflows",
    description:
      "Automate zero-downtime releases via Azure DevOps and GitHub Actions pipelines to AWS and Azure environments. Enforce containerization with Docker, SSL encryption, and blue-green rollouts.",
    deliverables: [
      "Automated CI/CD Deployment Pipelines",
      "Multi-Cloud Infrastructure as Code",
      "Environment Secret & Config Isolation",
      "Zero-Downtime Blue/Green Release",
    ],
  },
  {
    step: "06",
    title: "Improve",
    tagline: "Monitor, optimize & iterate based on real-world feedback",
    description:
      "Continuously observe telemetry, APM traces, error rates, and user feedback. Fine-tune database query indexes, optimize prompt tokens, and proactively enhance UX.",
    deliverables: [
      "Telemetry & Application Tracing",
      "Query Performance Tuning",
      "Prompt Optimization & Cost Reduction",
      "Iterative Feature Enhancements",
    ],
  },
];
