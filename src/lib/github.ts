export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  isFallback?: boolean;
}

export const FEATURED_REPOS: Partial<GitHubRepo>[] = [
  {
    name: "nalam-healthcare-core",
    description: "Architectural blueprint and FHIR-compliant API integration module for hospital systems.",
    language: "TypeScript",
    topics: ["healthcare", "fhir", "nextjs", "react-native"],
    html_url: "https://github.com/Sureshb11",
  },
  {
    name: "dhanvi-ai-assistant",
    description: "Conversational healthcare triage and clinical appointment preparation assistant.",
    language: "Python",
    topics: ["ai", "llm", "healthcare", "fastapi", "prompt-engineering"],
    html_url: "https://github.com/Sureshb11",
  },
  {
    name: "bizally-erp-suite",
    description: "Multi-tenant cloud ERP platform with role-based access control and invoice automation.",
    language: "TypeScript",
    topics: ["nestjs", "nextjs", "postgresql", "redis", "erp"],
    html_url: "https://github.com/Sureshb11",
  },
  {
    name: "toss2play-app",
    description: "Real-time multi-sport tournament and ball-by-ball cricket scoring mobile application.",
    language: "TypeScript",
    topics: ["react-native", "websockets", "mobile", "state-machine"],
    html_url: "https://github.com/Sureshb11",
  },
];

export async function fetchGitHubRepos(username: string = "Sureshb11"): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "SureshBala-Portfolio",
      },
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Falling back to curated public showcase.`);
      return getFallbackRepos();
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return getFallbackRepos();
    }

    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count || 0,
      forks_count: repo.forks_count || 0,
      language: repo.language,
      topics: repo.topics || [],
      updated_at: repo.updated_at,
    }));
  } catch (error) {
    console.warn("Error fetching GitHub repositories:", error);
    return getFallbackRepos();
  }
}

function getFallbackRepos(): GitHubRepo[] {
  return FEATURED_REPOS.map((repo, idx) => ({
    id: idx + 1,
    name: repo.name || "repository",
    full_name: `Sureshb11/${repo.name}`,
    description: repo.description || "Public repository showcase.",
    html_url: repo.html_url || "https://github.com/Sureshb11",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: repo.language || "TypeScript",
    topics: repo.topics || [],
    updated_at: "2026-10-25T00:00:00Z",
    isFallback: true,
  }));
}
