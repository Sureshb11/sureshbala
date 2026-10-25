"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileDown, Terminal } from "lucide-react";
import { profile } from "@/content/profile";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "AI Architecture", href: "#ai-engineering" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/85 backdrop-blur-md border-b border-[rgba(148,163,184,0.12)] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Suresh Bala Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2A8AF6] to-[#31D7F5] flex items-center justify-center font-bold text-white shadow-md shadow-[#2A8AF6]/20 transition-transform duration-300 group-hover:scale-105">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#F8FAFC] group-hover:text-[#31D7F5] transition-colors font-[family-name:var(--font-space-grotesk)]">
              {profile.name}
            </span>
            <span className="text-[11px] font-mono text-[#94A3B8] tracking-wider">
              sureshbala.dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111C2F]/50 border border-[rgba(148,163,184,0.1)] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#2A8AF6]/20 text-[#31D7F5] border border-[#2A8AF6]/30 font-semibold shadow-sm"
                    : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111C2F]/80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.resumePath}
            download="SureshBala_AI_Resume.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border border-[rgba(148,163,184,0.2)] bg-[#0D1524] text-[#F8FAFC] hover:bg-[#111C2F] hover:border-[#2A8AF6]/40 transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-[#31D7F5]" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-[#2A8AF6] to-[#31D7F5] text-white shadow-md shadow-[#2A8AF6]/20 hover:shadow-[#2A8AF6]/40 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={profile.resumePath}
            download="SureshBala_AI_Resume.pdf"
            className="sm:hidden p-2 rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#0D1524] text-[#F8FAFC]"
            aria-label="Download Resume"
          >
            <FileDown className="w-4 h-4 text-[#31D7F5]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#111C2F] text-[#F8FAFC] hover:text-[#31D7F5] focus:outline-none focus:ring-2 focus:ring-[#2A8AF6]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[rgba(148,163,184,0.12)] bg-[#070B14]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-[#111C2F] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[rgba(148,163,184,0.12)] flex flex-col gap-2">
            <a
              href={profile.resumePath}
              download="SureshBala_AI_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-[rgba(148,163,184,0.2)] bg-[#0D1524] text-white"
            >
              <FileDown className="w-4 h-4 text-[#31D7F5]" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#2A8AF6] to-[#31D7F5] text-white shadow-md shadow-[#2A8AF6]/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
