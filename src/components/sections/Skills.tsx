import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skills = [
    'PHP',
    'Laravel',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS',
    'Git',
    'RESTful APIs',
    'GraphQL',
    'JavaScript',
    'Vue.js',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
  ];

  return (
    <section className="py-section bg-muted/50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-heading-1 text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map(skill => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 px-4 bg-card border-card-border"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
