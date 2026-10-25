"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Globe,
  Loader2,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage("Your message has been sent successfully. I will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.errors
            ? data.errors.map((err: any) => err.message).join(", ")
            : data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error occurred. Please reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070B14]">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#2A8AF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Engagement"
          title="Have an interesting challenge?"
          highlightedWord="Let's build something extraordinary."
          description="Whether you're looking for an AI Engineer, a Lead Full-Stack Architect, or Cloud DevOps leadership, let's explore how we can collaborate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details & Availability Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel space-y-6">
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)] hover:border-[#31D7F5]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#111C2F] text-[#31D7F5] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#94A3B8] block">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#31D7F5] transition-colors">
                      {profile.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)] hover:border-[#2A8AF6]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#111C2F] text-[#2A8AF6] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#94A3B8] block">Direct Phone / WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#2A8AF6] transition-colors">
                      {profile.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.1)]">
                  <div className="p-2.5 rounded-lg bg-[#111C2F] text-[#8855FF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#94A3B8] block">Current Location</span>
                    <span className="text-sm font-semibold text-white">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Target Markets */}
              <div className="pt-4 border-t border-[rgba(148,163,184,0.1)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-2">
                  Market Availability:
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                  Open to international relocation and remote contracts across the UAE, Kuwait, India, and global technology hubs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.targetMarkets.map((m) => (
                    <span
                      key={m.name}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.2)]"
                    >
                      {m.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-[rgba(148,163,184,0.1)] flex items-center gap-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#111C2F] text-white hover:bg-[#2A8AF6]/20 border border-[rgba(148,163,184,0.15)] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#2A8AF6]" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#111C2F] text-white hover:bg-[#31D7F5]/20 border border-[rgba(148,163,184,0.15)] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#31D7F5]" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel relative">
              <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#94A3B8] mb-6">
                All inquiries are received directly. Strictly confidential, zero spam.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-[#94A3B8]">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.15)] text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#2A8AF6] focus:ring-1 focus:ring-[#2A8AF6] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-[#94A3B8]">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.15)] text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#2A8AF6] focus:ring-1 focus:ring-[#2A8AF6] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-[#94A3B8]">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Engineering Lead / Full-Stack Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.15)] text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#2A8AF6] focus:ring-1 focus:ring-[#2A8AF6] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-[#94A3B8]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, technical requirements, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.15)] text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#2A8AF6] focus:ring-1 focus:ring-[#2A8AF6] transition-colors resize-none"
                  />
                </div>

                {/* Status Alerts */}
                {status === "success" && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2A8AF6] to-[#31D7F5] text-white shadow-lg shadow-[#2A8AF6]/25 hover:shadow-[#2A8AF6]/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
