import React from "react";
import { CheckCircle2, Shield, Layers, Cpu, Server, HeartPulse, Building2, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export default function About() {
  const highlightIcons = [
    Layers,
    Cpu,
    Server,
    HeartPulse,
    Building2,
    Shield,
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070B14] border-t border-[rgba(148,163,184,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About & Background"
          title="Engineering ideas into"
          highlightedWord="real-world products."
          description="A decade of engineering progression bridging enterprise infrastructure, cloud automation, and AI-enabled software systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#94A3B8] leading-relaxed text-base sm:text-lg">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#2A8AF6] to-[#31D7F5]" />
              <div className="space-y-4">
                {profile.editorialAbout.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-[#F8FAFC] font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Target Markets Strip */}
              <div className="mt-6 pt-6 border-t border-[rgba(148,163,184,0.12)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-2">
                  Target Locations & Availability:
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile.targetMarkets.map((m) => (
                    <span
                      key={m.name}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#0D1524] border border-[rgba(148,163,184,0.15)] text-[#31D7F5] flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#31D7F5]" />
                      {m.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Experience Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  10+
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-mono">Years in IT & Software</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)]">
                <div className="text-2xl sm:text-3xl font-bold text-[#31D7F5] font-[family-name:var(--font-space-grotesk)]">
                  500+
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-mono">Hospital Endpoints Supported</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)] col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#2A8AF6] font-[family-name:var(--font-space-grotesk)]">
                  Multi-Cloud
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-mono">AWS & Azure Architecture</div>
              </div>
            </div>
          </div>

          {/* Pillars & Competency Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {profile.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <div
                  key={highlight.label}
                  className="p-4 sm:p-5 rounded-xl bg-[#0D1524]/90 border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all flex items-start gap-3.5 group shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-[#111C2F] text-[#31D7F5] border border-[rgba(148,163,184,0.12)] group-hover:scale-105 group-hover:border-[#31D7F5]/40 transition-transform shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#31D7F5] transition-colors">
                      {highlight.label}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
