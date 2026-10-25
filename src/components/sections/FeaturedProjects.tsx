"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  Monitor,
  Activity,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { aiExperiments } from "@/content/experiments";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Healthcare & AI", "Enterprise SaaS", "Mobile & Real-Time", "Desktop & Tools"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Healthcare & AI") return project.category.includes("Healthcare") || project.category.includes("AI");
    if (activeCategory === "Enterprise SaaS") return project.category.includes("SaaS") || project.category.includes("Enterprise");
    if (activeCategory === "Mobile & Real-Time") return project.category.includes("Mobile") || project.category.includes("Sports");
    if (activeCategory === "Desktop & Tools") return project.category.includes("Desktop") || project.category.includes("Tools");
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#070B14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#2A8AF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered for impact &"
          highlightedWord="architectural excellence."
          description="Flagship production systems spanning healthcare AI assistants, multi-tenant enterprise ERPs, and industrial mission-critical applications."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#2A8AF6] to-[#31D7F5] text-white shadow-md shadow-[#2A8AF6]/20 font-semibold"
                  : "bg-[#0D1524] text-[#94A3B8] border border-[rgba(148,163,184,0.12)] hover:text-white hover:border-[#2A8AF6]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group relative border border-[rgba(148,163,184,0.12)]"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-[#2A8AF6] via-[#31D7F5] to-[#8855FF] opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 sm:p-8 space-y-6">
                {/* Header: Category Badge + Confidentiality pill */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-md bg-[#0D1524] text-[#31D7F5] border border-[rgba(49,215,245,0.2)]">
                    {project.category.split("/")[0].trim()}
                  </span>

                  {project.isConfidential ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Confidential Enterprise
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {project.timeline}
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#31D7F5] transition-colors font-[family-name:var(--font-space-grotesk)]">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#2A8AF6] mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1 font-mono">
                    Role: {project.role}
                  </p>
                </div>

                {/* Project Summary */}
                <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* AI Spotlight if applicable */}
                {project.aiComponents && (
                  <div className="p-3.5 rounded-xl bg-[#0D1524]/90 border border-[rgba(136,85,255,0.25)] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8855FF]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Component: {project.aiComponents.name}</span>
                    </div>
                    <p className="text-xs text-[#94A3B8]">
                      {project.aiComponents.description}
                    </p>
                  </div>
                )}

                {/* Confidentiality Notice Box if applicable */}
                {project.isConfidential && (
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-amber-200/90 leading-relaxed">
                    <span className="font-semibold block mb-0.5 text-amber-300">Confidentiality Protocol:</span>
                    Proprietary field operational data, telemetry, and internal source code are strictly withheld. Showcased through architectural patterns.
                  </div>
                )}

                {/* Metrics Badges */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[rgba(148,163,184,0.08)]">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="p-2 rounded-lg bg-[#0D1524] text-center border border-[rgba(148,163,184,0.08)]">
                        <div className="text-base font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-[#94A3B8] font-mono truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#111C2F] text-[#94A3B8] border border-[rgba(148,163,184,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 rounded text-[11px] font-mono bg-[#111C2F] text-[#31D7F5]">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[rgba(148,163,184,0.08)] mt-auto bg-[#070B14]/40">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#31D7F5] group-hover:text-white transition-colors"
                >
                  <span>Explore Architectural Deep Dive</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0D1524] text-[#94A3B8] hover:text-white hover:border-[#2A8AF6] border border-[rgba(148,163,184,0.12)] transition-colors"
                      aria-label="View Project on GitHub"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Engineering Experiments Showcase */}
        <div className="mt-16 pt-16 border-t border-[rgba(148,163,184,0.12)]">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-3 border border-[rgba(136,85,255,0.25)] bg-[rgba(136,85,255,0.08)] text-[#8855FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Research & Exploration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              AI Engineering Experiments & Prototypes
            </h3>
            <p className="text-sm text-[#94A3B8] mt-2">
              Genuine future exploration areas spanning RAG pipelines, multimodal document reasoning, and local agent orchestration. Categorically labeled as experimental research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiExperiments.map((exp) => (
              <div
                key={exp.id}
                className="p-5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#8855FF]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#8855FF] tracking-wider">
                      {exp.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        exp.status === "Experimental"
                          ? "bg-purple-500/10 text-purple-300 border border-purple-500/30"
                          : exp.status === "In Development"
                          ? "bg-blue-500/10 text-blue-300 border border-blue-500/30"
                          : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white">
                    {exp.title}
                  </h4>

                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[rgba(148,163,184,0.08)]">
                  <div className="text-[11px] text-[#94A3B8]">
                    <span className="text-white font-medium">Outcome Target: </span>
                    {exp.intendedOutcome}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.15)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
