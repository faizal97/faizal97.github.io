'use client';

import { useState } from 'react';
import {
  useGitHubRepositories,
  useRepositoryLanguages,
} from '@/hooks/useGitHubRepos';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Search,
  Filter,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, fadeInUp } from '@/lib/animations';
import { RepositoryFilters } from '@/lib/github-api';

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'name'>('updated');
  const [showFilters, setShowFilters] = useState(false);

  const filters: RepositoryFilters = {
    searchQuery,
    languages: selectedLanguages,
    sortBy,
    excludeForks: true,
    minStars: 0,
  };

  const {
    data: repos,
    isLoading,
    error,
  } = useGitHubRepositories('faizal97', filters);
  const { data: availableLanguages } = useRepositoryLanguages('faizal97');

  const handleLanguageToggle = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLanguages([]);
    setSortBy('updated');
  };

  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          My Code Repositories
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          A complete collection of my public projects on GitHub, showcasing
          various technologies and programming languages.
        </motion.p>
      </motion.div>

      {/* Search and Filter Controls */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter Toggle */}
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-card border rounded-lg p-6 space-y-4"
          >
            {/* Sort Options */}
            <div>
              <label className="text-sm font-medium mb-2 block">Sort by:</label>
              <div className="flex gap-2 flex-wrap">
                {(['updated', 'stars', 'name'] as const).map(option => (
                  <Button
                    key={option}
                    variant={sortBy === option ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy(option)}
                  >
                    {option === 'updated'
                      ? 'Recently Updated'
                      : option === 'stars'
                        ? 'Most Stars'
                        : 'Alphabetical'}
                  </Button>
                ))}
              </div>
            </div>

            {/* Language Filters */}
            {availableLanguages && availableLanguages.length > 0 && (
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Languages:
                </label>
                <div className="flex gap-2 flex-wrap">
                  {availableLanguages.map(language => (
                    <Badge
                      key={language}
                      variant={
                        selectedLanguages.includes(language)
                          ? 'default'
                          : 'outline'
                      }
                      className="cursor-pointer hover:bg-primary/20"
                      onClick={() => handleLanguageToggle(language)}
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Clear Filters */}
            <div className="flex justify-center">
              <Button variant="ghost" onClick={clearFilters} size="sm">
                Clear All Filters
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Repository Count */}
      {repos && (
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center text-muted-foreground mb-8"
        >
          {repos.length} repositories found
        </motion.p>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center">
          <LoadingSpinner label="Loading repositories..." />
        </div>
      )}

      {/* Error State */}
      {error && (
        <motion.div
          variants={fadeIn}
          className="text-center text-red-500 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-8"
        >
          <p>Failed to load repositories. Please try again later.</p>
        </motion.div>
      )}

      {/* Repositories Grid */}
      {repos && repos.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map(repo => (
            <motion.div
              key={repo.id}
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="bg-card border-card-border h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start justify-between">
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
                  <CardDescription className="text-sm leading-relaxed">
                    {repo.description || 'No description available'}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    <span className="text-xs">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
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

      {/* No Results */}
      {repos && repos.length === 0 && !isLoading && (
        <motion.div
          variants={fadeIn}
          className="text-center text-muted-foreground p-12"
        >
          <p className="text-lg">
            No repositories found matching your criteria.
          </p>
          <Button variant="ghost" onClick={clearFilters} className="mt-4">
            Clear filters to see all repositories
          </Button>
        </motion.div>
      )}
    </main>
  );
}
