import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  Terminal,
  ExternalLink,
  ChevronRight,
  Calendar,
  Building2,
  AlertCircle,
} from "lucide-react";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Suresh Bala Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: project.media.previewImage || "/projects/nalam-cloud.svg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProjectIndex = (projects.findIndex((p) => p.slug === slug) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="py-28 bg-[#070B14] min-h-screen text-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#31D7F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-xs font-mono text-[#94A3B8] px-3 py-1 rounded-full bg-[#0D1524] border border-[rgba(148,163,184,0.12)]">
            Case Study • {project.industry}
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-md text-xs font-mono bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.25)]">
              {project.category}
            </span>
            {project.timeline && (
              <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-space-grotesk)]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#2A8AF6] font-medium">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Role & Client Meta Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">My Role</span>
              <span className="text-sm font-semibold text-white mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">Industry</span>
              <span className="text-sm font-semibold text-white mt-1 block">{project.industry}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">Deployment</span>
              <span className="text-sm font-semibold text-[#31D7F5] mt-1 block">Production</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">Integrations</span>
              <span className="text-sm font-semibold text-white mt-1 block">{project.technologies.length} Technologies</span>
            </div>
          </div>
        </div>

        {/* Confidentiality Alert if applicable */}
        {project.isConfidential && (
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-800/30 text-amber-200/90 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-amber-300 block">Confidentiality Protocol Enforced:</span>
              <p>{project.confidentialNotice}</p>
            </div>
          </div>
        )}

        {/* Verified Outcomes / Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              Verified Outcomes & Engineering Metrics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#31D7F5] font-[family-name:var(--font-space-grotesk)]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#94A3B8] font-mono mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Component Spotlight */}
        {project.aiComponents && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#111C2F] to-[#0D1524] border border-[#8855FF]/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8855FF]">
              <Sparkles className="w-4 h-4" />
              <span>AI Integration Deep Dive</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              {project.aiComponents.name}
            </h3>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {project.aiComponents.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.aiComponents.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-[#8855FF] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {project.aiComponents.disclaimer && (
              <div className="p-4 rounded-xl bg-[#070B14] border border-[rgba(136,85,255,0.2)] text-xs text-[#94A3B8] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{project.aiComponents.disclaimer}</span>
              </div>
            )}
          </div>
        )}

        {/* Key Features Implemented */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            Core Features & Functional Deliverables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat) => (
              <div
                key={feat}
                className="p-4 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)] flex items-start gap-3 text-xs sm:text-sm text-[#F8FAFC]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#31D7F5] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Overview */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              System Architecture & Data Flow
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Architecture Flow Diagram */}
          {project.architectureFlow && (
            <div className="p-6 rounded-2xl glass-panel space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#31D7F5] block">
                Architectural Data Pipeline
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureFlow.map((flow, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#070B14] border border-[rgba(148,163,184,0.12)] flex items-center justify-between text-xs"
                  >
                    <div className="font-semibold text-white">{flow.from}</div>
                    <div className="flex flex-col items-center px-2">
                      <span className="text-[10px] font-mono text-[#31D7F5]">{flow.label}</span>
                      <span className="text-[#2A8AF6]">→</span>
                    </div>
                    <div className="font-semibold text-white text-right">{flow.to}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Engineering Challenges & Concrete Solutions */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            Key Engineering Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.engineeringChallenges.map((ec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] space-y-3"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 block mb-1">
                    Engineering Challenge {idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {ec.challenge}
                  </h4>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                    Architectural Solution
                  </span>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {ec.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            Technologies Applied
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0D1524] text-[#31D7F5] border border-[rgba(49,215,245,0.2)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-12 border-t border-[rgba(148,163,184,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Back to Featured Projects Showcase
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#0D1524] border border-[#2A8AF6]/30 text-white hover:border-[#31D7F5] transition-all"
          >
            <span>Next Project: {nextProject.title}</span>
            <ChevronRight className="w-4 h-4 text-[#31D7F5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
