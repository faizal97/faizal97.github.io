import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Backend Developer',
      company: 'Travel Tech Solutions',
      period: '2022 - Present',
      description:
        'Lead development of scalable travel booking APIs serving 10M+ requests daily.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'AWS'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Government Digital Services',
      period: '2020 - 2022',
      description:
        'Built citizen-facing web applications and government internal systems.',
      technologies: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    },
  ];

  return (
    <section className="py-section" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-heading-1 text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-card-border">
              <CardHeader>
                <CardTitle className="text-heading-3">{exp.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
