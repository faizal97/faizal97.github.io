module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
};
