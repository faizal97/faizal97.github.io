'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
  hoverScale,
} from '@/lib/animations';

export function Projects() {
  const { ref, controls } = useScrollAnimation();

  const projects = [
    {
      name: 'Travel Booking API',
      description:
        'Scalable REST API for travel bookings with real-time inventory management serving 10M+ requests daily',
      technologies: ['Laravel', 'MySQL', 'Redis', 'AWS'],
      githubUrl: 'https://github.com/faizal97/travel-booking-api',
      demoUrl: 'https://travel-api-demo.faizal.dev',
      stars: 45,
      forks: 12,
    },
    {
      name: 'Government Portal',
      description:
        'Citizen services portal with secure authentication and document management system',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/faizal97/government-portal',
      demoUrl: 'https://gov-portal-demo.faizal.dev',
      stars: 23,
      forks: 8,
    },
    {
      name: 'Next.js Portfolio',
      description:
        'Modern portfolio website built with Next.js, TypeScript, and Framer Motion animations',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/faizal97/faizal97.github.io',
      demoUrl: 'https://faizal97.github.io',
      stars: 15,
      forks: 3,
    },
  ];

  const handleGithubClick = (url: string, projectName: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    console.log(`GitHub link clicked: ${projectName}`);
  };

  const handleDemoClick = (url: string, projectName: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    console.log(`Demo link clicked: ${projectName}`);
  };

  return (
    <section className="py-section" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-heading-1 text-center mb-12"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={cardHover}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card border-card-border h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-heading-3 flex flex-col gap-2">
                      <span>{project.name}</span>
                      <div className="flex gap-3 text-sm text-muted-foreground items-center">
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Star className="w-3 h-3" />
                          <span>{project.stars}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          <GitFork className="w-3 h-3" />
                          <span>{project.forks}</span>
                        </motion.div>
                      </div>
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      variants={staggerContainer}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { delay: techIndex * 0.1 },
                            },
                          }}
                          whileHover={{ scale: 1.1 }}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded transition-all duration-200 hover:bg-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <div className="flex gap-2">
                      <motion.div
                        whileHover={hoverScale}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleGithubClick(project.githubUrl, project.name)
                          }
                          className="w-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={hoverScale}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleDemoClick(project.demoUrl, project.name)
                          }
                          className="w-full hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    'https://github.com/faizal97',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
