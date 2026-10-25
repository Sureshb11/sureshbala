import React from "react";
import { FileText, FileDown, ExternalLink, CheckCircle, Shield } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative bg-[#070B14] border-t border-[rgba(148,163,184,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Executive summary &"
          highlightedWord="resume download."
          description="A complete record of technical leadership, cloud DevOps accomplishments, and healthcare software architecture."
        />

        <div className="rounded-3xl glass-panel p-8 sm:p-12 relative overflow-hidden border border-[rgba(148,163,184,0.15)] shadow-2xl">
          {/* Subtle Top Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2A8AF6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#31D7F5]">
                  Official Document Preview
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  Suresh Bala — AI Developer & Systems Engineer
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  10+ years specializing in end-to-end development and deployment of intelligent healthcare web and mobile applications, multi-tenant enterprise ERP systems, and cloud infrastructure on AWS and Azure.
                </p>
              </div>

              {/* Quick Resume Highlights */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F8FAFC]">
                  <CheckCircle className="w-4 h-4 text-[#31D7F5] shrink-0" />
                  <span>Lead Networking, DevOps & AI Developer for 500+ hospital endpoints</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F8FAFC]">
                  <CheckCircle className="w-4 h-4 text-[#31D7F5] shrink-0" />
                  <span>B.E. in Electrical & Electronics Engineering, Anna University</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F8FAFC]">
                  <CheckCircle className="w-4 h-4 text-[#31D7F5] shrink-0" />
                  <span>Certified: MDSA, AWS Cloud Practitioner & AI for Healthcare</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F8FAFC]">
                  <CheckCircle className="w-4 h-4 text-[#31D7F5] shrink-0" />
                  <span>Available for UAE, Kuwait, India, and global remote opportunities</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={profile.resumePath}
                  download="SureshBala_AI_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2A8AF6] to-[#31D7F5] text-white shadow-lg shadow-[#2A8AF6]/25 hover:shadow-[#2A8AF6]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full Resume (PDF)</span>
                </a>

                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-[rgba(148,163,184,0.2)] bg-[#0D1524] text-white hover:bg-[#111C2F] hover:border-[#31D7F5]/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-[#31D7F5]" />
                  <span>View in Browser</span>
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Visual Resume Sheet Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#070B14] border border-[rgba(148,163,184,0.15)] shadow-xl relative space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)] text-xs font-mono text-[#94A3B8]">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#31D7F5]" />
                    SureshBala_AI_Resume.pdf
                  </span>
                  <span>146 KB</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#31D7F5]">Primary Focus:</span>
                    <p className="text-white font-medium mt-0.5">AI Engineering & Full-Stack Cloud Architecture</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#31D7F5]">Core Methodologies:</span>
                    <p className="text-[#94A3B8] mt-0.5">HIPAA / FHIR EHR Interoperability, CI/CD Automation, Prompt Engineering</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#31D7F5]">Verified Channels:</span>
                    <div className="flex items-center gap-3 mt-2">
                      <a
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#2A8AF6] hover:underline"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#31D7F5] hover:underline"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full py-2 px-3 rounded-lg bg-[#111C2F] border border-[rgba(148,163,184,0.1)] text-center text-[11px] font-mono text-emerald-400">
                    ✓ Verified Document Available for Immediate Download
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
