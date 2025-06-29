'use client';

import { motion } from 'framer-motion';
import { HeroProps } from '@/types/components';
import { ProfileImage } from '@/components/common/ProfileImage';
import { SocialLinks } from '@/components/common/SocialLinks';
import { ResumeButtons } from '@/components/common/ResumeButtons';
import { heroContainer, heroTitle, staggerItem } from '@/lib/animations';

export function Hero({ name, title, description, profileImage }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-16" id="hero">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={staggerItem}>
            <motion.h1
              className="text-hero font-bold text-gradient-primary"
              variants={heroTitle}
            >
              {name}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground"
              variants={staggerItem}
            >
              {title}
            </motion.p>

            <motion.p
              className="text-body-lg text-muted-foreground max-w-lg"
              variants={staggerItem}
            >
              {description}
            </motion.p>

            {/* Social Links */}
            <motion.div variants={staggerItem}>
              <SocialLinks />
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={staggerItem}>
              <ResumeButtons />
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center" variants={staggerItem}>
            <ProfileImage
              src={profileImage.src}
              alt={profileImage.alt}
              width={320}
              height={320}
              priority
              enableHover
              enableGlow
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
