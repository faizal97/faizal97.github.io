'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
} from '@/lib/animations';

export function Experience() {
  const { ref, controls } = useScrollAnimation();

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'TruTrip',
      period: 'January 2020 - Present',
      description:
        'Developed and maintained REST API applications supporting core business operations for travel services. Built COVID-19 case tracking system (CEC) for global pandemic data monitoring.',
      technologies: [
        'PHP',
        'Laravel',
        'REST APIs',
        'MySQL',
        'Third-party APIs',
      ],
    },
    {
      title: 'PHP Programmer',
      company: 'Docotel Group',
      period: 'November 2018 - December 2019',
      description:
        'Developed web applications following project specifications and architectural designs. Focused on government sector applications for Ministry of Law and Human Rights.',
      technologies: ['PHP', 'Web Development', 'DevOps', 'Database Design'],
    },
    {
      title: 'Assistant Lecturer',
      company: 'Bina Sarana Informatika (BSI)',
      period: 'September 2017 - October 2018',
      description:
        'Assisted with course instruction and practical laboratory sessions. Mentored students through hands-on learning exercises and technical coursework.',
      technologies: [
        'Teaching',
        'Mentoring',
        'Programming Education',
        'Technical Training',
      ],
    },
  ];

  return (
    <section className="py-section" id="experience">
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
            Experience
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={cardHover}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card border-card-border cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-heading-3">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body mb-4">{exp.description}</p>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={staggerContainer}
                    >
                      {exp.technologies.map((tech, techIndex) => (
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
