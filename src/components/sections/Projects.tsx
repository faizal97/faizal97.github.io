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
      name: 'TruTrip API',
      description:
        'Enterprise travel booking REST API with real-time inventory management and multi-currency support',
      technologies: ['Laravel', 'MySQL', 'Redis', 'AWS', 'Docker'],
      liveUrl: 'https://app.trutrip.co',
      status: 'confidential',
      scale: 'Enterprise travel platform',
      role: 'Lead Backend Developer',
      githubUrl: undefined,
      demoUrl: 'https://app.trutrip.co',
    },
    {
      name: 'AHU Beneficial Owner System',
      description:
        'Government beneficial ownership transparency system for Indonesian Ministry of Law and Human Rights',
      technologies: ['Laravel', 'PostgreSQL', 'Vue.js', 'Government APIs'],
      liveUrl: 'https://bo.ahu.go.id/site/login',
      status: 'confidential',
      scale: 'National government system',
      role: 'Senior Backend Developer',
      githubUrl: undefined,
      demoUrl: 'https://bo.ahu.go.id/site/login',
    },
    {
      name: 'AHU Koperasi Management',
      description:
        'Cooperative management system for Indonesian cooperative registration and compliance monitoring',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Government Integration'],
      liveUrl: 'https://koperasi.ahu.go.id/site/login',
      status: 'confidential',
      scale: 'National cooperative system',
      role: 'Backend Developer',
      githubUrl: undefined,
      demoUrl: 'https://koperasi.ahu.go.id/site/login',
    },
  ];

  const handleLiveClick = (url: string | undefined, projectName: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      console.log(`Live project clicked: ${projectName}`);
    }
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
                          <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs font-medium">
                            {project.status === 'confidential'
                              ? 'Confidential'
                              : 'Open Source'}
                          </span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs">{project.scale}</span>
                        </motion.div>
                      </div>
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                    {project.role && (
                      <div className="text-sm text-muted-foreground mt-2">
                        <strong>Role:</strong> {project.role}
                      </div>
                    )}
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
                      {project.status === 'confidential' ? (
                        <motion.div
                          whileHover={hoverScale}
                          whileTap={{ scale: 0.95 }}
                          className="w-full"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleLiveClick(project.liveUrl, project.name)
                            }
                            className="w-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live System
                          </Button>
                        </motion.div>
                      ) : (
                        <>
                          {project.githubUrl && (
                            <motion.div
                              whileHover={hoverScale}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1"
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleLiveClick(
                                    project.githubUrl,
                                    project.name
                                  )
                                }
                                className="w-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </motion.div>
                          )}

                          {project.demoUrl && (
                            <motion.div
                              whileHover={hoverScale}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1"
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleLiveClick(project.demoUrl, project.name)
                                }
                                className="w-full hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </Button>
                            </motion.div>
                          )}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View Open Source Projects Button */}
          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('/repositories', '_self')}
                className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
              >
                <Github className="w-4 h-4 mr-2" />
                View Open Source Projects
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
