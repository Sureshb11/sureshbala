export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  timeline?: string;
  role: string;
  client?: string;
  industry: string;
  technologies: string[];
  summary: string;
  keyFeatures: string[];
  architectureOverview: string;
  engineeringChallenges: {
    challenge: string;
    solution: string;
  }[];
  aiComponents?: {
    name: string;
    description: string;
    capabilities: string[];
    disclaimer?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  media: {
    heroImage?: string;
    mockupType: "mobile" | "desktop" | "dashboard" | "system";
    previewImage?: string;
    gallery?: string[];
  };
  architectureFlow?: {
    from: string;
    to: string;
    label: string;
  }[];
  isConfidential?: boolean;
  confidentialNotice?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
    level?: string;
    badge?: string;
  }[];
}

export interface CareerExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  department?: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export interface EngineeringStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface AiExperiment {
  id: string;
  title: string;
  category: "RAG & Semantic Search" | "Intelligent Document Processing" | "LLM Agents" | "Computer Vision" | "Model Serving & Evaluation";
  status: "Planned" | "Experimental" | "In Development";
  description: string;
  technologies: string[];
  intendedOutcome: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  status: string;
  description: string;
}

export interface Education {
  degree: string;
  specialization: string;
  institution: string;
  year: string;
}
