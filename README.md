# 🚀 Faizal Ardian Putra - Portfolio Website

[![Deploy to GitHub Pages](https://github.com/faizal97/faizal97.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/faizal97/faizal97.github.io/actions/workflows/deploy.yml)
[![CI/CD Pipeline](https://github.com/faizal97/faizal97.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/faizal97/faizal97.github.io/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

> Modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. Features advanced animations, PWA capabilities, and comprehensive testing.

🌐 **Live Site**: [https://faizal97.github.io](https://faizal97.github.io)

## ✨ Features

### 🎨 **User Experience**

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Dark/Light Theme** - Automatic system detection with manual toggle
- **Smooth Animations** - 15+ Framer Motion variants for enhanced UX
- **Progressive Web App** - Offline support, caching, and app-like experience
- **Optimized Performance** - 190kB main bundle with Core Web Vitals optimization

### 🛠️ **Technical Highlights**

- **Modern Stack** - Next.js 15.3.4, React 19, TypeScript 5+
- **Component Architecture** - Reusable components with shadcn/ui
- **State Management** - Zustand + TanStack Query for optimal data flow
- **Form Handling** - React Hook Form + Zod validation
- **Analytics Integration** - Vercel Analytics + Google Analytics 4
- **SEO Optimized** - Structured data, meta tags, and sitemap

### 🧪 **Quality Assurance**

- **42/42 Unit Tests Passing** - Comprehensive Vitest + React Testing Library coverage
- **E2E Testing** - Playwright configuration for cross-browser testing
- **Type Safety** - TypeScript strict mode with zero errors
- **Code Quality** - ESLint + Prettier + Husky pre-commit hooks
- **Security** - 0 vulnerabilities with automated dependency scanning

## 🏗️ **Tech Stack**

<table>
<tr>
<td>

**Frontend**

- [Next.js 15.3.4](https://nextjs.org/) - React framework with App Router
- [React 19](https://reactjs.org/) - UI library with Server Components
- [TypeScript 5+](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS 3.4.17](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - High-quality component library

</td>
<td>

**Development**

- [Framer Motion 12.19.2](https://www.framer.com/motion/) - Animation library
- [Zustand 5.0.6](https://zustand-demo.pmnd.rs/) - Lightweight state management
- [TanStack Query 5.81.5](https://tanstack.com/query) - Data fetching & caching
- [React Hook Form 7.59.0](https://react-hook-form.com/) - Form handling
- [Zod 3.25.67](https://zod.dev/) - Schema validation

</td>
</tr>
<tr>
<td>

**Testing**

- [Vitest 3.2.4](https://vitest.dev/) - Unit testing framework
- [React Testing Library 16.3.0](https://testing-library.com/react) - Component testing
- [Playwright 1.53.1](https://playwright.dev/) - E2E testing
- [@vitest/coverage-v8](https://vitest.dev/guide/coverage.html) - Coverage reporting

</td>
<td>

**Deployment**

- [GitHub Pages](https://pages.github.com/) - Static site hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD pipeline
- [pnpm 10.12.4](https://pnpm.io/) - Fast package manager
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring

</td>
</tr>
</table>

## 🚀 **Quick Start**

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [pnpm 10+](https://pnpm.io/) (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/faizal97/faizal97.github.io.git
cd faizal97.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio in action! 🎉

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & theme variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage with all sections
│   └── repositories/      # Dynamic GitHub repositories page
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui base components
│   ├── layout/            # Navigation, Footer, Providers
│   ├── sections/          # Main page sections
│   │   ├── Hero.tsx       # Landing section with profile
│   │   ├── About.tsx      # About me with statistics
│   │   ├── Skills.tsx     # Technical skills showcase
│   │   ├── Experience.tsx # Professional experience
│   │   ├── Projects.tsx   # Portfolio projects
│   │   └── Contact.tsx    # Contact information & form
│   └── common/            # Shared components
├── hooks/                 # Custom React hooks
│   ├── useScrollAnimation.ts  # Scroll-triggered animations
│   ├── useActiveSection.ts    # Navigation state
│   └── useGitHubRepos.ts      # GitHub API integration
├── lib/                   # Utilities & configurations
│   ├── animations.ts      # Framer Motion variants
│   ├── github-api.ts      # GitHub API client
│   ├── analytics.ts       # Analytics configuration
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript definitions
    ├── components.ts      # Component prop types
    ├── github.ts          # GitHub API types
    └── contact.ts         # Form validation types
```

## 🧪 **Development Commands**

```bash
# Development
pnpm dev                    # Start development server
pnpm build                  # Production build + static export
pnpm start                  # Start production server

# Quality Assurance
pnpm lint                   # ESLint checks
pnpm lint:fix              # Fix ESLint issues
pnpm format                # Format code with Prettier
pnpm format:check          # Check formatting
pnpm type-check            # TypeScript validation

# Testing
pnpm test                   # Unit tests with Vitest
pnpm test:watch            # Watch mode for development
pnpm test:coverage         # Coverage report
pnpm test:e2e              # E2E tests with Playwright
pnpm test:e2e:ui           # Playwright UI mode

# Analysis & Maintenance
pnpm audit                 # Security vulnerability scan
pnpm analyze               # Bundle size analysis
pnpm clean                 # Clean build artifacts
```

## 🎨 **Customization**

### **Theme Configuration**

The design system is built with CSS custom properties and Tailwind CSS:

```css
/* src/app/globals.css */
:root {
  --primary: 200 100% 40%; /* Primary brand color */
  --secondary: 160 60% 45%; /* Secondary accent */
  --background: 0 0% 100%; /* Light background */
  --foreground: 240 10% 3.9%; /* Text color */
}

[data-theme='dark'] {
  --background: 240 10% 3.9%; /* Dark background */
  --foreground: 0 0% 98%; /* Light text */
}
```

### **Content Updates**

Personal information is centralized in component props and can be easily updated:

- **Hero Section**: `src/components/sections/Hero.tsx`
- **About Content**: `src/components/sections/About.tsx`
- **Skills**: `src/components/sections/Skills.tsx`
- **Experience**: `src/components/sections/Experience.tsx`
- **Projects**: `src/components/sections/Projects.tsx`

### **Animation Customization**

Framer Motion variants are defined in `src/lib/animations.ts`:

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};
```

## 🚀 **Deployment**

### **Automatic Deployment**

The site automatically deploys to GitHub Pages on every push to `main`:

1. **Push to main branch** → GitHub Actions trigger
2. **CI/CD Pipeline runs** → Linting, testing, building
3. **Deployment** → Static files published to GitHub Pages
4. **Live at** → [https://faizal97.github.io](https://faizal97.github.io)

### **Manual Deployment**

```bash
# Build for production
pnpm build

# Deploy to GitHub Pages (automatically handled by Actions)
# Files are generated in the 'out' directory
```

## 📊 **Performance**

### **Bundle Analysis**

- **Main Page**: 41.6 kB + 190 kB First Load JS
- **Repositories Page**: 4.76 kB + 158 kB First Load JS
- **Shared Chunks**: 102 kB (optimized)

### **Core Web Vitals**

- **LCP**: < 2.5s (optimized images & lazy loading)
- **FID**: < 100ms (minimal JavaScript on initial load)
- **CLS**: < 0.1 (stable layout with proper sizing)

### **Lighthouse Scores**

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🧪 **Testing**

### **Unit Tests** (42/42 passing ✅)

```bash
pnpm test:coverage
# Components/Sections: 94.39% coverage
# Overall: 39.56% coverage with exclusions
```

### **E2E Tests**

```bash
pnpm test:e2e
# Cross-browser testing with Playwright
# Mobile and desktop viewport testing
```

### **Type Safety**

```bash
pnpm type-check
# TypeScript strict mode: 0 errors ✅
```

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Workflow**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### **Code Standards**

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Consistent code formatting
- **Testing**: Maintain test coverage above 90% for critical components

## 📝 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📧 **Contact**

**Faizal Ardian Putra**  
API Architect & Travel Tech Specialist

- 🌐 Website: [https://faizal97.github.io](https://faizal97.github.io)
- 💼 LinkedIn: [linkedin.com/in/faizal-ardian-putra](https://linkedin.com/in/faizal-ardian-putra)
- 📧 Email: [faizal.ardian.putra@gmail.com](mailto:faizal.ardian.putra@gmail.com)
- 💻 GitHub: [@faizal97](https://github.com/faizal97)

---

<div align="center">

**Built with ❤️ using Next.js, React, and TypeScript**

⭐ **Star this repo if you find it helpful!** ⭐

</div>
