import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'public/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
      'backup-static-site/**',
      'playwright-tests/**',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
    },
  },
];