import { useQuery } from '@tanstack/react-query';
import { fetchGitHubRepositories } from '@/lib/github-api';

export function useGitHubRepositories(username: string) {
  return useQuery({
    queryKey: ['repositories', username],
    queryFn: () => fetchGitHubRepositories(username),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
