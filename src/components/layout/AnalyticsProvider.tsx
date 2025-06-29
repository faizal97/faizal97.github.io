'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  initializeAnalytics,
  trackPageView,
  reportWebVitals,
} from '@/lib/analytics';
import {
  injectMultipleStructuredData,
  getDefaultStructuredData,
} from '@/lib/structured-data';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount
    initializeAnalytics();

    // Inject structured data
    const structuredData = getDefaultStructuredData();
    injectMultipleStructuredData(structuredData);

    // Set up Web Vitals reporting
    if (typeof window !== 'undefined') {
      // Dynamic import for Next.js
      import('web-vitals')
        .then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
          onCLS(reportWebVitals);
          onFCP(reportWebVitals);
          onLCP(reportWebVitals);
          onTTFB(reportWebVitals);
          onINP(reportWebVitals);
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      trackPageView(window.location.href, document.title);
    }
  }, [pathname]);

  return <>{children}</>;
}
