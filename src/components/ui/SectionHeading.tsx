import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlightedWord,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border border-[rgba(148,163,184,0.15)] bg-[rgba(17,28,47,0.6)] text-[#31D7F5]")}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#31D7F5] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] font-[family-name:var(--font-space-grotesk)]">
        {title}{" "}
        {highlightedWord && (
          <span className="text-gradient-cyan-blue">{highlightedWord}</span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
