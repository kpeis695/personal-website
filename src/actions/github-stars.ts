"use server";

import { cacheLife } from "next/cache";
import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
// throws on failure: errors aren't cached, so bad fetch retries next request
export async function getGithubStars(): Promise<number> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) {
      console.warn(`GitHub API responded with ${res.status} - rate limit likely exceeded`);
      return 0; // Return 0 stars when rate limited
    }

    const data = await res.json();
    if (typeof data.stargazers_count !== "number") {
      console.warn("Unexpected GitHub API response shape");
      return 0;
    }
    return data.stargazers_count;
  } catch (error) {
    console.warn("Failed to fetch GitHub stars:", error);
    return 0; // Fail gracefully
  }
}
