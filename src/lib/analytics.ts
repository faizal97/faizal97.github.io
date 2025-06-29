import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Core Web Vitals tracking
export interface WebVitalsMetric {
  name: 'FCP' | 'LCP' | 'CLS' | 'FID' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

// Google Analytics 4 configuration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initializeGA = () => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  // Create script element for gtag
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_title: title || document.title,
    page_location: url,
  });
};

// Custom event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Social link tracking
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('social_click', 'Social Media', platform);
  console.log(`Analytics: Social link clicked - ${platform}`);
};

// Resume tracking
export const trackResumeAction = (action: 'download' | 'view') => {
  trackEvent('resume_action', 'Resume', action);
  console.log(`Analytics: Resume ${action}`);
};

// Contact tracking
export const trackContactAction = (method: 'email' | 'phone' | 'linkedin') => {
  trackEvent('contact_action', 'Contact', method);
  console.log(`Analytics: Contact via ${method}`);
};

// Project tracking
export const trackProjectClick = (
  projectName: string,
  type: 'demo' | 'github'
) => {
  trackEvent('project_click', 'Projects', `${projectName}_${type}`);
  console.log(`Analytics: Project clicked - ${projectName} (${type})`);
};

// Performance thresholds (Core Web Vitals)
const PERFORMANCE_THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

// Rating calculation
const getRating = (
  name: WebVitalsMetric['name'],
  value: number
): WebVitalsMetric['rating'] => {
  const thresholds = PERFORMANCE_THRESHOLDS[name];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

// Core Web Vitals reporting
export const reportWebVitals = (metric: any) => {
  const { name, value, delta, id, navigationType } = metric;

  if (!['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'].includes(name)) return;

  const rating = getRating(name, value);

  const webVitalsMetric: WebVitalsMetric = {
    name,
    value,
    rating,
    delta,
    id,
    navigationType,
  };

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}:`, {
      value: `${Math.round(value)}${name === 'CLS' ? '' : 'ms'}`,
      rating,
      delta: `${Math.round(delta)}${name === 'CLS' ? '' : 'ms'}`,
    });
  }

  // Send to Google Analytics
  if (GA_TRACKING_ID && typeof window !== 'undefined') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      custom_map: {
        metric_rating: rating,
        metric_delta: Math.round(name === 'CLS' ? delta * 1000 : delta),
      },
    });
  }

  // Send to your own analytics endpoint (optional)
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webVitalsMetric),
    }).catch(console.error);
  }
};

// Performance budget monitoring
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined') return;

  // Check if performance budget is exceeded
  const navigation = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;

  if (navigation) {
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    const domContentLoaded =
      navigation.domContentLoadedEventEnd - navigation.fetchStart;

    if (loadTime > 3000) {
      console.warn('Performance Budget: Load time exceeded 3s:', loadTime);
      trackEvent(
        'performance_budget_exceeded',
        'Performance',
        'load_time',
        loadTime
      );
    }

    if (domContentLoaded > 1500) {
      console.warn(
        'Performance Budget: DOM ready time exceeded 1.5s:',
        domContentLoaded
      );
      trackEvent(
        'performance_budget_exceeded',
        'Performance',
        'dom_ready',
        domContentLoaded
      );
    }
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: string) => {
  console.error('Application Error:', error, errorInfo);

  if (GA_TRACKING_ID && typeof window !== 'undefined') {
    window.gtag('event', 'exception', {
      description: `${error.name}: ${error.message}`,
      fatal: false,
    });
  }
};

// Search tracking
export const trackSearch = (query: string, results: number) => {
  trackEvent('search', 'Search', query, results);
};

// Scroll depth tracking
let maxScrollDepth = 0;
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;

  const scrollDepth = Math.round(
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );

  if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
    maxScrollDepth = scrollDepth;
    trackEvent('scroll_depth', 'Engagement', `${scrollDepth}%`);
  }
};

// Initialize analytics on page load
export const initializeAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Initialize Google Analytics
  initializeGA();

  // Set up scroll tracking
  let scrollTimeout: NodeJS.Timeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(trackScrollDepth, 100);
  });

  // Performance budget check
  window.addEventListener('load', () => {
    setTimeout(checkPerformanceBudget, 1000);
  });
};

// Analytics provider components
export { Analytics as VercelAnalytics, SpeedInsights as VercelSpeedInsights };
