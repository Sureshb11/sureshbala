import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { engineeringProcess } from "@/content/process";

export default function EngineeringProcess() {
  return (
    <section id="process" className="py-24 relative bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Methodology"
          title="Rigorous end-to-end"
          highlightedWord="execution."
          description="A systematic six-stage process transforming ambiguous enterprise challenges into resilient, maintainable, and high-impact digital systems."
        />

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringProcess.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all flex flex-col justify-between group shadow-sm relative overflow-hidden"
            >
              {/* Giant Watermark Step Number */}
              <div className="absolute top-2 right-4 text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#111C2F] select-none pointer-events-none group-hover:text-[#2A8AF6]/10 transition-colors">
                {step.step}
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#31D7F5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#31D7F5]" />
                  <span>Stage {step.step}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#31D7F5] transition-colors font-[family-name:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#2A8AF6] mt-0.5">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.08)] relative z-10 space-y-1.5">
                <span className="text-[11px] font-mono text-[#94A3B8] uppercase block mb-1">
                  Key Deliverables:
                </span>
                {step.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-2 text-xs text-[#F8FAFC]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#31D7F5] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
