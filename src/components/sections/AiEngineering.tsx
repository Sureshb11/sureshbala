"use client";

import React, { useState } from "react";
import {
  Brain,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Bot,
  Terminal,
  Send,
  RefreshCw,
  AlertCircle,
  FileCheck2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AiEngineering() {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [selectedDemoPrompt, setSelectedDemoPrompt] = useState<number>(0);

  const pipelineSteps = [
    {
      step: "01",
      name: "User Interface",
      sub: "Patient / Doctor App",
      detail:
        "Client interfaces capture structured clinical intake questionnaires and conversational inquiries with local validation, sanitizing input before transmission.",
      tech: "React Native / React.js",
    },
    {
      step: "02",
      name: "Backend API Gateway",
      sub: "Authentication & Guardrails",
      detail:
        "Node.js gateway validates JWT sessions, strips PII/sensitive tokens, verifies rate-limits, and wraps prompts in strict safety constraints.",
      tech: "Node.js / Express / HIPAA Guard",
    },
    {
      step: "03",
      name: "LLM Reasoning Service",
      sub: "Orchestration & System Prompts",
      detail:
        "Structured system instructions anchor the LLM to predefined clinical reference documents, preventing autonomous diagnostic hallucinations.",
      tech: "OpenAI API / Prompt Engineering",
    },
    {
      step: "04",
      name: "Business Logic Verification",
      sub: "Schema Validator & Rules Engine",
      detail:
        "Raw model output is parsed through deterministic JSON schema validators, validating triage categories against verified clinical business rules.",
      tech: "Zod / TypeScript Engine",
    },
    {
      step: "05",
      name: "Safe Formatted Response",
      sub: "Actionable Patient Guidance",
      detail:
        "Delivers structured triage recommendations, appointment pre-fill summaries, and clear medical disclaimer notices back to the client interface.",
      tech: "JSON Payload with Disclaimer",
    },
  ];

  const demoScenarios = [
    {
      label: "Clinical Note Summarization",
      input: "Patient presents with persistent cough for 4 days, mild fever 100.2F, no dyspnea, history of seasonal bronchitis.",
      systemPrompt: "Summarize into clinical SOAP format. Output structured JSON. Do not prescribe medication.",
      output: {
        subjective: "4-day persistent cough, subjective fever (100.2F), history of seasonal bronchitis.",
        objective: "Afebrile/low-grade, no shortness of breath reported.",
        assessment: "Suspected upper respiratory tract irritation / seasonal flare.",
        planRecommendation: "Recommend in-person general physician evaluation; symptom diary; hydration.",
        disclaimer: "Informational summary for attending physician review only. Not a medical diagnosis.",
      },
    },
    {
      label: "Multilingual Patient Triage",
      input: "Patient inquiry (Tamil): 'எனக்கு 2 நாட்களாக கடுமையான தலைவலி உள்ளது, என்ன செய்ய வேண்டும்?'",
      systemPrompt: "Translate symptom query, categorize urgency level, provide structured appointment options.",
      output: {
        translatedQuery: "Severe headache persisting for 2 days. Requesting medical consultation advice.",
        urgencyTriage: "Non-Emergency / Urgent Care Appointment Recommended",
        recommendedSpecialty: "General Medicine / Neurology Consultation",
        actionableNextStep: "Pre-book priority clinic slot with Dr. Ramanathan (Today 4:30 PM)",
        disclaimer: "If accompanied by visual aura or stiffness, seek immediate hospital emergency care.",
      },
    },
  ];

  const capabilities = [
    {
      title: "LLM API Integration & Orchestration",
      description: "Direct integration of frontier language models via REST APIs with resilient retry, timeout, and token streaming logic.",
      icon: Cpu,
    },
    {
      title: "Prompt Engineering & Guardrails",
      description: "Few-shot calibration, structured JSON outputs, deterministic system personas, and defense against prompt injection.",
      icon: Sparkles,
    },
    {
      title: "Conversational Healthcare Assistants",
      description: "Engineering conversational agents like Dhanvi that guide patients through clinical intake without autonomous diagnostic overreach.",
      icon: Bot,
    },
    {
      title: "AI-Assisted Engineering Workflows",
      description: "Accelerating modern software architecture and debugging using AI IDEs including Cursor and Antigravity.",
      icon: Terminal,
    },
  ];

  return (
    <section id="ai-engineering" className="py-24 relative bg-[#070B14] border-t border-[rgba(148,163,184,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AI Engineering & Architecture"
          title="Building practical intelligence into"
          highlightedWord="software systems."
          description="Bridging modern language models with hardened backend APIs, deterministic business logic, and responsible healthcare safeguards."
        />

        {/* 1. Interactive Conceptual Architecture Pipeline */}
        <div className="mb-20">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#31D7F5] block mb-1">
                  Interactive System Pipeline
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  Production AI Orchestration Architecture
                </h3>
              </div>
              <div className="text-xs font-mono text-[#94A3B8] px-3 py-1.5 rounded-lg bg-[#0D1524] border border-[rgba(148,163,184,0.12)]">
                Click any node to inspect data contracts
              </div>
            </div>

            {/* Pipeline Step Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
              {pipelineSteps.map((step, idx) => {
                const isSelected = activePipelineStep === idx;
                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActivePipelineStep(idx)}
                    className={`p-4 rounded-xl text-left transition-all relative border ${
                      isSelected
                        ? "bg-[#111C2F] border-[#2A8AF6] shadow-lg shadow-[#2A8AF6]/20"
                        : "bg-[#0D1524]/80 border-[rgba(148,163,184,0.1)] hover:border-[#31D7F5]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#31D7F5] font-bold">
                        {step.step}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#31D7F5] animate-ping" />
                      )}
                    </div>
                    <div className="text-xs font-bold text-white">
                      {step.name}
                    </div>
                    <div className="text-[11px] text-[#94A3B8] mt-0.5 truncate">
                      {step.sub}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details Card */}
            <div className="p-5 rounded-xl bg-[#0D1524] border border-[#2A8AF6]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#2A8AF6]/20 text-[#31D7F5] border border-[#2A8AF6]/30">
                    Step {pipelineSteps[activePipelineStep].step} Specification
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {pipelineSteps[activePipelineStep].name}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
                  {pipelineSteps[activePipelineStep].detail}
                </p>
              </div>

              <div className="shrink-0 font-mono text-xs px-3.5 py-2 rounded-lg bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.2)]">
                {pipelineSteps[activePipelineStep].tech}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Realistic Demonstration: Dhanvi Clinical Assistant Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-[rgba(136,85,255,0.25)] bg-[#111C2F] text-[#8855FF]">
              <Brain className="w-3.5 h-3.5" />
              <span>Realistic AI Experience Simulation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              Dhanvi Healthcare Assistant Workflow
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Demonstrating the exact prompt-to-response transformation utilized in healthcare environments. Raw natural-language input is anchored through system guardrails to produce deterministic, safe medical guidance.
            </p>

            {/* Scenario Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#94A3B8] uppercase block">
                Select Demonstration Scenario:
              </span>
              <div className="flex flex-col gap-2">
                {demoScenarios.map((scenario, idx) => (
                  <button
                    key={scenario.label}
                    type="button"
                    onClick={() => setSelectedDemoPrompt(idx)}
                    className={`p-3 rounded-lg text-left text-xs font-medium transition-all border ${
                      selectedDemoPrompt === idx
                        ? "bg-[#111C2F] text-[#31D7F5] border-[#31D7F5]/50 shadow-sm"
                        : "bg-[#0D1524] text-[#94A3B8] border-[rgba(148,163,184,0.1)] hover:text-white"
                    }`}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Strict Disclaimer Notice */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-amber-200/90 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-amber-300">Responsible AI Design:</span>
                All clinical prompts enforce strict boundaries: triage information only, zero prescription authorization, and mandatory physician oversight.
              </div>
            </div>
          </div>

          {/* Interactive Simulation Console */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 border border-[rgba(148,163,184,0.15)] space-y-4">
            {/* Console Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(148,163,184,0.1)] text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-white font-semibold">Dhanvi Runtime Console</span>
              </div>
              <span>Latency: ~340ms (Cached)</span>
            </div>

            {/* Input Inquiry */}
            <div>
              <span className="text-[11px] font-mono text-[#94A3B8] block mb-1">
                Raw Input Received:
              </span>
              <div className="p-3 rounded-lg bg-[#0D1524] border border-[rgba(148,163,184,0.12)] text-xs text-[#F8FAFC] font-mono">
                &ldquo;{demoScenarios[selectedDemoPrompt].input}&rdquo;
              </div>
            </div>

            {/* Guardrail Policy */}
            <div>
              <span className="text-[11px] font-mono text-[#8855FF] block mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Active Safety Guardrail System Prompt:
              </span>
              <div className="p-2.5 rounded-lg bg-[#070B14] border border-[rgba(136,85,255,0.2)] text-[11px] text-[#94A3B8] font-mono">
                {demoScenarios[selectedDemoPrompt].systemPrompt}
              </div>
            </div>

            {/* Structured Output */}
            <div>
              <span className="text-[11px] font-mono text-[#31D7F5] block mb-1 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                Validated JSON Output:
              </span>
              <pre className="p-3.5 rounded-lg bg-[#070B14] border border-[rgba(49,215,245,0.2)] text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                {JSON.stringify(demoScenarios[selectedDemoPrompt].output, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* 3. Core AI Engineering Competencies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-5 rounded-xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#111C2F] text-[#31D7F5] flex items-center justify-center mb-4 border border-[rgba(148,163,184,0.12)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
