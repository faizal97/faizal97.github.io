'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-section" id="about">
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
            About Me
          </motion.h2>

          <motion.div className="max-w-4xl mx-auto" variants={staggerItem}>
            <motion.p
              className="text-body-lg text-muted-foreground text-center leading-relaxed"
              variants={fadeInUp}
            >
              Backend Developer with 5+ years of experience specializing in PHP
              and Laravel framework. I have proven expertise in building
              scalable web applications, REST APIs, and integrating third-party
              services for travel, government, and educational sectors. Strong
              background in system architecture, database optimization, and team
              collaboration.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={staggerItem}>
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  variants={fadeInUp}
                >
                  5+
                </motion.div>
                <motion.p className="text-muted-foreground" variants={fadeInUp}>
                  Years Experience
                </motion.p>
              </motion.div>

              <motion.div className="text-center" variants={staggerItem}>
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  variants={fadeInUp}
                >
                  50+
                </motion.div>
                <motion.p className="text-muted-foreground" variants={fadeInUp}>
                  API Integrations
                </motion.p>
              </motion.div>

              <motion.div className="text-center" variants={staggerItem}>
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  variants={fadeInUp}
                >
                  15+
                </motion.div>
                <motion.p className="text-muted-foreground" variants={fadeInUp}>
                  Projects Completed
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
