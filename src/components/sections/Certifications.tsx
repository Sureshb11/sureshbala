import React from "react";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, educations } from "@/content/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials & Education"
          title="Verified certifications &"
          highlightedWord="academic foundation."
          description="Recognized industry certifications and accredited engineering education."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#31D7F5]" />
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#31D7F5]">
                          {cert.issuer}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[rgba(148,163,184,0.3)]" />
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                          {cert.status}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {cert.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-[#2A8AF6]" />
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-1">
                    <span>{edu.institution}</span>
                    <span className="text-[#31D7F5]">{edu.year}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#2A8AF6] mt-0.5 font-medium">
                    {edu.specialization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
