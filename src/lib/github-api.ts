import { Repository } from '@/types/github';

export interface RepositoryFilters {
  languages?: string[];
  topics?: string[];
  sortBy?: 'updated' | 'stars' | 'name' | 'created';
  searchQuery?: string;
  excludeForks?: boolean;
  minStars?: number;
}

export async function fetchGitHubRepositories(
  username: string,
  filters: RepositoryFilters = {}
): Promise<Repository[]> {
  const {
    languages = [],
    topics = [],
    sortBy = 'updated',
    searchQuery = '',
    excludeForks = true,
    minStars = 0,
  } = filters;

  // Build API URL with sorting
  const sortParam =
    sortBy === 'stars'
      ? 'stargazers_count'
      : sortBy === 'created'
        ? 'created_at'
        : sortBy === 'name'
          ? 'name'
          : 'updated_at';

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=${sortParam}&direction=desc`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  let repos: Repository[] = await response.json();

  // Apply filters
  repos = repos.filter(repo => {
    // Filter out private repos
    if (repo.private) return false;

    // Filter out forks if requested
    if (excludeForks && repo.fork) return false;

    // Filter by minimum stars
    if (repo.stargazers_count < minStars) return false;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = repo.name.toLowerCase().includes(query);
      const matchesDescription =
        repo.description?.toLowerCase().includes(query) || false;
      if (!matchesName && !matchesDescription) return false;
    }

    // Filter by languages
    if (languages.length > 0 && repo.language) {
      if (!languages.includes(repo.language)) return false;
    }

    // Filter by topics (if available)
    if (topics.length > 0 && repo.topics) {
      const hasMatchingTopic = topics.some(topic =>
        repo.topics.includes(topic)
      );
      if (!hasMatchingTopic) return false;
    }

    return true;
  });

  return repos;
}

export async function fetchRepositoryLanguages(
  username: string
): Promise<string[]> {
  const repos = await fetchGitHubRepositories(username);
  const languages = new Set<string>();

  repos.forEach(repo => {
    if (repo.language) {
      languages.add(repo.language);
    }
  });

  return Array.from(languages).sort();
}

export async function fetchRepositoryTopics(
  username: string
): Promise<string[]> {
  const repos = await fetchGitHubRepositories(username);
  const topics = new Set<string>();

  repos.forEach(repo => {
    if (repo.topics) {
      repo.topics.forEach(topic => topics.add(topic));
    }
  });

  return Array.from(topics).sort();
}
