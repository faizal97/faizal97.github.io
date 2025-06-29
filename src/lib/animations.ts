/**
 * Animation utilities and constants for Framer Motion
 * Provides consistent animation patterns across the application
 */

import { Variants } from 'framer-motion';

// Animation duration constants
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  very_slow: 0.8,
} as const;

// Easing functions
export const EASING = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  spring: { type: 'spring', damping: 25, stiffness: 120 },
  bouncy: { type: 'spring', damping: 15, stiffness: 100 },
} as const;

// Fade animations
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.spring,
    },
  },
};

// Stagger animations for children
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: EASING.easeOut,
  },
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(0, 212, 170, 0.4)',
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: EASING.easeOut,
  },
};

// Progress bar animation
export const progressBar: Variants = {
  hidden: {
    width: 0,
  },
  visible: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.easeOut,
      delay: 0.2,
    },
  }),
};

// Card animations
export const cardHover = {
  y: -5,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: EASING.easeOut,
  },
};

// Button animations
export const buttonPress = {
  scale: 0.95,
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: EASING.easeInOut,
  },
};

// Loading animations
export const spin = {
  rotate: 360,
  transition: {
    duration: 1,
    ease: 'linear',
    repeat: Infinity,
  },
};

export const pulse: Variants = {
  initial: {
    opacity: 0.6,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: EASING.easeInOut,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

// Page transition animations
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeIn,
    },
  },
};

// Hero section specific animations
export const heroContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.spring,
    },
  },
};

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.spring,
    },
  },
};
