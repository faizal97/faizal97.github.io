/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    // Disable image optimization for export builds, enable for development
    unoptimized: !isDev,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: isProduction,
  },
  poweredByHeader: false,
  compress: true,
  // Only use export mode for production builds (GitHub Pages)
  ...(isProduction && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  }),
  // GitHub Pages deployment configuration
  basePath: '',
  assetPrefix: '',
};

module.exports = withPWA(nextConfig);
