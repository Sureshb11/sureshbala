"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/content/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[rgba(148,163,184,0.12)] bg-[#070B14] pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#2A8AF6]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[rgba(148,163,184,0.08)]">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2A8AF6] to-[#31D7F5] flex items-center justify-center font-bold text-white shadow-md shadow-[#2A8AF6]/20">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white font-[family-name:var(--font-space-grotesk)]">
                {profile.name}
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              AI Engineer & Full-Stack Cloud Architect with 10+ years engineering mission-critical applications across healthcare, multi-tenant enterprise ERPs, and distributed cloud systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D1524] border border-[rgba(148,163,184,0.15)] flex items-center justify-center text-[#94A3B8] hover:text-[#31D7F5] hover:border-[#31D7F5]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D1524] border border-[rgba(148,163,184,0.15)] flex items-center justify-center text-[#94A3B8] hover:text-[#2A8AF6] hover:border-[#2A8AF6]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-lg bg-[#0D1524] border border-[rgba(148,163,184,0.15)] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white/30 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold text-[#F8FAFC] tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><a href="#about" className="hover:text-[#31D7F5] transition-colors">About & Journey</a></li>
              <li><a href="#projects" className="hover:text-[#31D7F5] transition-colors">Flagship Projects</a></li>
              <li><a href="#ai-engineering" className="hover:text-[#31D7F5] transition-colors">AI Architecture</a></li>
              <li><a href="#skills" className="hover:text-[#31D7F5] transition-colors">Technical Stack</a></li>
              <li><a href="#experience" className="hover:text-[#31D7F5] transition-colors">Career Timeline</a></li>
            </ul>
          </div>

          {/* Col 3: Focus Markets */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold text-[#F8FAFC] tracking-wider uppercase">
              Opportunity Focus
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#94A3B8]">
              {profile.targetMarkets.map((market) => (
                <div key={market.name} className="flex items-center justify-between text-xs">
                  <span>{market.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.2)]">
                    {market.badge}
                  </span>
                </div>
              ))}
              <div className="pt-2 text-xs font-mono text-[#94A3B8]">
                <span>Status: </span>
                <span className="text-emerald-400">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 Suresh Bala.</span>
            <span className="text-[rgba(148,163,184,0.3)]">|</span>
            <span className="font-mono text-[#31D7F5]">sureshbala.dev</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs">
              Vercel • Next.js • TypeScript
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1524] border border-[rgba(148,163,184,0.15)] text-[#94A3B8] hover:text-white hover:border-[#2A8AF6] transition-all"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
