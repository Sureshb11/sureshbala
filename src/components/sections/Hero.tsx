"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, FileDown, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { profile } from "@/content/profile";
import CanvasHeroAnimation from "@/components/ui/CanvasHeroAnimation";

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % profile.animatedTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden tech-grid-pattern">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2A8AF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#8855FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Cycling Text, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[rgba(148,163,184,0.18)] bg-[#0D1524]/80 backdrop-blur-md text-xs font-mono text-[#F8FAFC]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[#94A3B8] font-medium">{profile.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] font-[family-name:var(--font-space-grotesk)]">
                {profile.headline}
              </h1>

              {/* Animated Cycling Subheadline */}
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#94A3B8] flex flex-wrap items-center gap-x-2">
                <span>Building intelligent</span>
                <span className="relative inline-block overflow-hidden h-[1.3em] min-w-[280px]">
                  <span
                    key={currentTitleIndex}
                    className="inline-block text-gradient-cyan-blue font-bold animate-in slide-in-from-bottom-2 fade-in duration-300"
                  >
                    {profile.animatedTitles[currentTitleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2A8AF6] to-[#31D7F5] text-white shadow-lg shadow-[#2A8AF6]/25 hover:shadow-[#2A8AF6]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={profile.resumePath}
                download="SureshBala_AI_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-[rgba(148,163,184,0.2)] bg-[#111C2F]/80 text-[#F8FAFC] hover:bg-[#111C2F] hover:border-[#31D7F5]/50 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[#31D7F5]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0D1524] transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Compact Floating Technology Badges */}
            <div className="pt-4 border-t border-[rgba(148,163,184,0.12)]">
              <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                Core Engineering Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.floatingTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-[#0D1524] border border-[rgba(148,163,184,0.14)] text-[#F8FAFC] hover:border-[#2A8AF6]/40 transition-colors shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-End WebGL / Canvas Technical Visualization */}
          <div className="lg:col-span-5 relative">
            <CanvasHeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
