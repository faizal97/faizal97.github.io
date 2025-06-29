import { Repository } from '@/types/github';

export async function fetchGitHubRepositories(
  username: string
): Promise<Repository[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
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

  const repos: Repository[] = await response.json();
  return repos.filter(repo => !repo.private && !repo.fork);
}
