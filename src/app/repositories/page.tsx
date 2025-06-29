'use client';

import { useGitHubRepositories } from '@/hooks/useGitHubRepos';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';

export default function RepositoriesPage() {
  const { data: repos, isLoading, error } = useGitHubRepositories('faizal97');

  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          My Code Repositories
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="mt-4 text-lg text-muted-foreground"
        >
          A collection of my public projects on GitHub.
        </motion.p>
      </motion.div>

      {isLoading && <LoadingSpinner label="Fetching repositories..." />}
      {error && (
        <p className="text-center text-red-500">
          Failed to load repositories. Please try again later.
        </p>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {repos?.map(repo => (
          <motion.div
            key={repo.id}
            variants={fadeIn}
            className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {repo.name}
              </a>
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              {repo.description}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{repo.language}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
