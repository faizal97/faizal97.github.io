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
              I&apos;m a passionate API Architect and Travel Technology
              Specialist with over 5 years of experience building scalable web
              applications. I specialize in PHP/Laravel development and have a
              proven track record of delivering high-performance solutions for
              travel booking systems and government applications.
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
                  10M+
                </motion.div>
                <motion.p className="text-muted-foreground" variants={fadeInUp}>
                  API Requests Daily
                </motion.p>
              </motion.div>

              <motion.div className="text-center" variants={staggerItem}>
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  variants={fadeInUp}
                >
                  20+
                </motion.div>
                <motion.p className="text-muted-foreground" variants={fadeInUp}>
                  Projects Delivered
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
