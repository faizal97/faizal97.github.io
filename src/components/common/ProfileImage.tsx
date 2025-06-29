'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  enableHover?: boolean;
  enableGlow?: boolean;
}

export function ProfileImage({
  src,
  alt,
  width = 320,
  height = 320,
  className,
  priority = false,
  enableHover = true,
  enableGlow = true,
}: ProfileImageProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        enableHover && 'cursor-pointer',
        className
      )}
      whileHover={
        enableHover
          ? {
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3, ease: 'easeOut' },
            }
          : undefined
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover transition-all duration-300"
        sizes="(max-width: 768px) 240px, 320px"
      />

      {/* Glow effect on hover */}
      {enableGlow && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            boxShadow: '0 0 30px rgba(0, 212, 170, 0.4)',
            transition: { duration: 0.3 },
          }}
        />
      )}

      {/* Overlay gradient for better text contrast if needed */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 pointer-events-none"
        whileHover={{
          opacity: enableHover ? 1 : 0,
          transition: { duration: 0.3 },
        }}
      />
    </motion.div>
  );
}
