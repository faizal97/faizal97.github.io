'use client';

import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

/**
 * Hook for triggering animations when an element comes into view
 * @param threshold - Percentage of the element that needs to be visible to trigger (0-1)
 * @param triggerOnce - Whether to trigger animation only once or every time element comes into view
 * @returns Object containing ref and animation controls
 */
export function useScrollAnimation(
  threshold: number = 0.1,
  triggerOnce: boolean = true
) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: '-100px 0px -100px 0px', // Trigger animation 100px before element enters viewport
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  return { ref, controls, isInView };
}

/**
 * Hook for staggered animations of multiple elements
 * @param threshold - Percentage of the element that needs to be visible to trigger
 * @param staggerDelay - Delay between each child animation in seconds
 * @returns Object containing ref and animation controls
 */
export function useStaggerAnimation(
  threshold: number = 0.1,
  staggerDelay: number = 0.1
) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    margin: '-50px 0px -50px 0px',
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
}

/**
 * Hook for animating progress bars or counters
 * @param threshold - Percentage of the element that needs to be visible to trigger
 * @param delay - Delay before starting animation in seconds
 * @returns Object containing ref, controls, and in-view state
 */
export function useProgressAnimation(
  threshold: number = 0.3,
  delay: number = 0.5
) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    margin: '-50px 0px -50px 0px',
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        controls.start('visible');
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, controls, delay]);

  return { ref, controls, isInView };
}

/**
 * Hook for scroll-based parallax effects
 * @param speed - Speed of parallax effect (0-1, where 0.5 is half speed)
 * @returns Transform value for parallax effect
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        ref.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
