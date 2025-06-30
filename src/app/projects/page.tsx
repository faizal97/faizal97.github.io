'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Projects } from '@/components/sections/Projects';
import { useGitHubRepositories } from '@/hooks/useGitHubRepos';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { staggerContainer, fadeIn, fadeInUp } from '@/lib/animations';

export default function ProjectsPage() {
  const { data: repos, isLoading, error } = useGitHubRepositories('faizal97');

  const filteredRepos = repos
    ?.filter(
      repo =>
        !repo.fork &&
        repo.stargazers_count >= 0 &&
        repo.name !== 'faizal97.github.io'
    )
    .slice(0, 9); // Show top 9 repositories

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        {/* Page Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          >
            My Projects
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my professional work and open-source contributions,
            spanning enterprise systems, government platforms, and personal
            projects.
          </motion.p>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <Projects />
        </motion.section>

        {/* Open Source Projects Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            Open Source Contributions
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            A selection of my public repositories showcasing various
            technologies and programming approaches.
          </motion.p>

          {isLoading && (
            <div className="flex justify-center">
              <LoadingSpinner label="Loading repositories..." />
            </div>
          )}

          {error && (
            <motion.div
              variants={fadeIn}
              className="text-center text-red-500 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg"
            >
              <p>Failed to load repositories. Please try again later.</p>
            </motion.div>
          )}

          {filteredRepos && filteredRepos.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredRepos.map(repo => (
                <motion.div
                  key={repo.id}
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-card border-card-border h-full flex flex-col hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-start justify-between">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex-1 mr-2"
                        >
                          {repo.name}
                        </a>
                        <div className="flex gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed flex-1">
                        {repo.description || 'No description available'}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        {repo.language && (
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                            {repo.language}
                          </span>
                        )}
                        <span className="text-xs">
                          Updated{' '}
                          {new Date(repo.updated_at).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                        >
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>

                        {repo.homepage && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1 hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                          >
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* View All Repositories Button */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
            >
              <a href="/repositories">
                <Github className="w-4 h-4 mr-2" />
                View All Repositories
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
