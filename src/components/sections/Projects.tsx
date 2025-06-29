import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      name: 'Travel Booking API',
      description:
        'Scalable REST API for travel bookings with real-time inventory management',
      technologies: ['Laravel', 'MySQL', 'Redis', 'AWS'],
      githubUrl: 'https://github.com/faizal97',
      stars: 45,
      forks: 12,
    },
    {
      name: 'Government Portal',
      description:
        'Citizen services portal with secure authentication and document management',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/faizal97',
      stars: 23,
      forks: 8,
    },
  ];

  return (
    <section className="py-section bg-muted/50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-heading-1 text-center mb-12">Featured Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-card-border hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-heading-3 flex items-center justify-between">
                  {project.name}
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>⭐ {project.stars}</span>
                    <span>🍴 {project.forks}</span>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
