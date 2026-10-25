import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { careerTimeline } from "@/content/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[#070B14] border-t border-[rgba(148,163,184,0.08)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="A decade of engineering"
          highlightedWord="evolution."
          description="From hardware, campus networking, and enterprise systems to modern cloud DevOps and AI application development."
        />

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-[rgba(148,163,184,0.15)] space-y-12 sm:space-y-16">
          {careerTimeline.map((item, index) => (
            <div key={`${item.company}-${item.period}`} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  item.isCurrent
                    ? "bg-[#31D7F5] border-[#070B14] ring-4 ring-[#2A8AF6]/30"
                    : "bg-[#0D1524] border-[#2A8AF6]"
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all shadow-sm">
                {/* Header: Role, Period, Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#31D7F5] transition-colors font-[family-name:var(--font-space-grotesk)]">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#2A8AF6] mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.2)]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#94A3B8]">
                      <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Major Responsibilities */}
                <div className="space-y-2 mb-6">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]/90">
                      <ChevronRight className="w-4 h-4 text-[#31D7F5] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-[rgba(148,163,184,0.08)] flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#111C2F] text-[#94A3B8] border border-[rgba(148,163,184,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
