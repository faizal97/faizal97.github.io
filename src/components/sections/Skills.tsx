'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverScale,
} from '@/lib/animations';

export function Skills() {
  const { ref, controls } = useScrollAnimation();

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
            Skills & Technologies
          </motion.h2>

          <motion.div className="max-w-4xl mx-auto" variants={staggerItem}>
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  whileHover={hoverScale}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-card border-card-border cursor-pointer transition-all duration-200 hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
