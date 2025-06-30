import { useQuery } from '@tanstack/react-query';
import {
  fetchGitHubRepositories,
  fetchRepositoryLanguages,
  fetchRepositoryTopics,
  RepositoryFilters,
} from '@/lib/github-api';

export function useGitHubRepositories(
  username: string,
  filters?: RepositoryFilters
) {
  return useQuery({
    queryKey: ['repositories', username, filters],
    queryFn: () => fetchGitHubRepositories(username, filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}

export function useRepositoryLanguages(username: string) {
  return useQuery({
    queryKey: ['repository-languages', username],
    queryFn: () => fetchRepositoryLanguages(username),
    staleTime: 15 * 60 * 1000, // 15 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    retry: 2,
  });
}

export function useRepositoryTopics(username: string) {
  return useQuery({
    queryKey: ['repository-topics', username],
    queryFn: () => fetchRepositoryTopics(username),
    staleTime: 15 * 60 * 1000, // 15 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    retry: 2,
  });
}
