/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules',
      'dist',
      '.next',
      'out',
      'playwright-tests',
      '**/*.e2e.{test,spec}.{js,ts,jsx,tsx}',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.{js,ts,mjs}',
        '**/types/**',
        'src/app/layout.tsx',
        'src/app/page.tsx',
        '.next/**',
        'out/**',
        'public/**',
        'backup-static-site/**',
        'playwright-tests/**',
        '**/*.spec.ts',
        '**/*.test.tsx',
        '**/__tests__/**',
        '**/build/**',
        '**/dist/**',
        '**/.cache/**',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    testTimeout: 10000,
    hookTimeout: 10000,
    teardownTimeout: 10000,
    maxConcurrency: 5,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
      '@/lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
      '@/hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
  },
});
