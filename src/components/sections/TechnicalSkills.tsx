import React from "react";
import {
  Brain,
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Compass,
  Building2,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/content/skills";

export default function TechnicalSkills() {
  const categoryIcons: Record<string, React.ElementType> = {
    "AI & Intelligent Systems": Brain,
    "Programming Languages": Code2,
    "Frontend & Mobile": Layout,
    "Backend Engineering": Server,
    "Databases & Storage": Database,
    "Cloud & DevOps": Cloud,
    "Tools & AI IDEs": Compass,
    "Enterprise Systems & Standards": Building2,
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Battle-tested engineering"
          highlightedWord="competencies."
          description="A comprehensive inventory of programming languages, modern frameworks, cloud infrastructure, and intelligent AI toolchains used across production systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#111C2F] text-[#31D7F5] flex items-center justify-center border border-[rgba(148,163,184,0.12)] group-hover:border-[#31D7F5]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#31D7F5] transition-colors font-[family-name:var(--font-space-grotesk)]">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[#111C2F] text-[#F8FAFC] border border-[rgba(148,163,184,0.1)] hover:border-[#2A8AF6]/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A8AF6]" />
                        <span>{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[9px] text-[#94A3B8] opacity-75">
                            • {skill.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
