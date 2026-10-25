import React from "react";
import { Star, GitFork, ArrowUpRight, Code, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";
import { profile } from "@/content/profile";

export default async function GitHubShowcase() {
  const repos: GitHubRepo[] = await fetchGitHubRepos();

  return (
    <section id="github" className="py-24 relative bg-[#070B14] border-t border-[rgba(148,163,184,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source & Repositories"
          title="Explore my code on"
          highlightedWord="GitHub."
          description="Curated public repositories, architectural prototypes, and engineering building blocks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-2xl bg-[#0D1524] border border-[rgba(148,163,184,0.12)] hover:border-[#2A8AF6]/40 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                {/* Repo Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-[#31D7F5]" />
                    <span className="text-xs font-mono text-[#94A3B8]">
                      public repository
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-[#94A3B8] hover:text-white hover:bg-[#111C2F] transition-colors"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Repo Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#31D7F5] transition-colors font-[family-name:var(--font-space-grotesk)]">
                  {repo.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                  {repo.description || "Public software repository by Suresh Bala."}
                </p>

                {/* Topics / Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111C2F] text-[#31D7F5] border border-[rgba(49,215,245,0.15)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Repo Footer */}
              <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.08)] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2A8AF6]" />
                    <span>{repo.language}</span>
                  </div>
                )}

                {repo.stargazers_count > 0 ? (
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-[#94A3B8]/60">Verified Source</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Explore CTA Box */}
        <div className="p-8 rounded-2xl glass-panel text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-4">
          <Github className="w-10 h-10 text-[#31D7F5]" />
          <div>
            <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              Explore Full Repository Archive
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              Inspect modular templates, utility scripts, and system architectures on GitHub.
            </p>
          </div>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs bg-[#0D1524] border border-[#2A8AF6]/40 text-white hover:bg-[#111C2F] hover:border-[#31D7F5] transition-all shadow-md"
          >
            <span>Visit @bsb-suresh11 on GitHub</span>
            <ExternalLink className="w-4 h-4 text-[#31D7F5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
