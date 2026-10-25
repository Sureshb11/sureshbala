import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AiEngineering from "@/components/sections/AiEngineering";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import EngineeringProcess from "@/components/sections/EngineeringProcess";
import GitHubShowcase from "@/components/sections/GitHubShowcase";
import Certifications from "@/components/sections/Certifications";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

function GitHubSkeleton() {
  return (
    <section className="py-24 relative bg-[#070B14] border-t border-[rgba(148,163,184,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="h-6 w-32 bg-[#111C2F] rounded-full mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-[#111C2F] rounded-lg mx-auto mb-3 animate-pulse" />
          <div className="h-4 w-96 bg-[#111C2F] rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] h-48 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <Hero />
      <About />
      <FeaturedProjects />
      <AiEngineering />
      <TechnicalSkills />
      <ExperienceTimeline />
      <EngineeringProcess />
      <Suspense fallback={<GitHubSkeleton />}>
        <GitHubShowcase />
      </Suspense>
      <Certifications />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
