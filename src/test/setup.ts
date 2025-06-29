import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with React Testing Library matchers
expect.extend(matchers);

// Run cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    reload: vi.fn(),
    prefetch: vi.fn(),
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}));

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js Image component
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { createElement } = require('react');
    return createElement('img', props);
  },
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(callback => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  trigger: (entries: any[]) => callback(entries),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
});

// Mock analytics
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  trackSocialClick: vi.fn(),
  trackResumeAction: vi.fn(),
  trackContactMethod: vi.fn(),
  trackProjectClick: vi.fn(),
  reportWebVitals: vi.fn(),
  initializeAnalytics: vi.fn(),
}));

// Mock framer-motion
vi.mock('framer-motion', () => {
  const { createElement } = require('react');
  return {
    motion: {
      div: ({ children, ...props }: any) =>
        createElement('div', props, children),
      section: ({ children, ...props }: any) =>
        createElement('section', props, children),
      h1: ({ children, ...props }: any) => createElement('h1', props, children),
      h2: ({ children, ...props }: any) => createElement('h2', props, children),
      h3: ({ children, ...props }: any) => createElement('h3', props, children),
      p: ({ children, ...props }: any) => createElement('p', props, children),
      span: ({ children, ...props }: any) =>
        createElement('span', props, children),
      button: ({ children, ...props }: any) =>
        createElement('button', props, children),
      a: ({ children, ...props }: any) => createElement('a', props, children),
      img: ({ children, ...props }: any) =>
        createElement('img', props, children),
      nav: ({ children, ...props }: any) =>
        createElement('nav', props, children),
      ul: ({ children, ...props }: any) => createElement('ul', props, children),
      li: ({ children, ...props }: any) => createElement('li', props, children),
    },
    AnimatePresence: ({ children }: any) => children,
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
      set: vi.fn(),
    }),
    useInView: () => true,
  };
});

// Global test utilities
(globalThis as any).testUtils = {
  createMockEvent: (overrides = {}) => ({
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
    target: { value: '' },
    ...overrides,
  }),
  createMockRef: (value = null) => ({ current: value }),
};

// Declare global types for TypeScript
declare global {
  const testUtils: {
    createMockEvent: (overrides?: any) => any;
    createMockRef: (value?: any) => any;
  };
}
