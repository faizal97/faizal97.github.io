'use client';

import { useEffect, useState } from 'react';

/**
 * Hook for tracking which section is currently active in the viewport
 * and handling smooth scrolling navigation
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'skills',
      'experience',
      'projects',
      'contact',
    ];

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px', // Account for fixed navigation
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  /**
   * Smooth scroll to a specific section
   * @param sectionId - ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for fixed navigation height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return {
    activeSection,
    scrollToSection,
  };
}
