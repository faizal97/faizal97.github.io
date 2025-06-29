import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Skills } from '../Skills';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

// Mock the Badge component
vi.mock('@/components/ui/badge', () => ({
  Badge: ({ children, ...props }: any) => (
    <span data-testid="skill-badge" {...props}>
      {children}
    </span>
  ),
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      whileHover,
      whileTap,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <div {...props}>{children}</div>,
    h2: ({
      children,
      whileHover,
      whileTap,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <h2 {...props}>{children}</h2>,
    section: ({
      children,
      whileHover,
      whileTap,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <section {...props}>{children}</section>,
  },
}));

// Mock the scroll animation hook
vi.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    controls: {},
  }),
}));

const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {component}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

describe('Skills Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders skills section with correct title', () => {
    renderWithProviders(<Skills />);

    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
  });

  it('displays all skill badges', () => {
    renderWithProviders(<Skills />);

    // Check for key skills
    expect(screen.getByText('PHP')).toBeInTheDocument();
    expect(screen.getByText('Laravel')).toBeInTheDocument();
    expect(screen.getByText('MySQL')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    renderWithProviders(<Skills />);

    const skillsSection = screen
      .getByRole('heading', { name: 'Skills & Technologies' })
      .closest('section');
    expect(skillsSection).toBeInTheDocument();
    expect(skillsSection).toHaveAttribute('id', 'skills');
  });

  it('renders skill badges with proper styling', () => {
    renderWithProviders(<Skills />);

    const skillBadges = screen.getAllByTestId('skill-badge');
    expect(skillBadges.length).toBeGreaterThan(0);
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<Skills />);

    const heading = screen.getByRole('heading', {
      name: 'Skills & Technologies',
    });
    expect(heading).toBeInTheDocument();

    const skillsSection = heading.closest('section');
    expect(skillsSection).toBeInTheDocument();
  });

  it('displays skills in responsive layout', () => {
    const { container } = renderWithProviders(<Skills />);

    const skillsContainer = container.querySelector('.flex-wrap');
    expect(skillsContainer).toBeInTheDocument();
  });

  it('renders all skill badges', () => {
    renderWithProviders(<Skills />);

    const skillBadges = screen.getAllByTestId('skill-badge');
    expect(skillBadges.length).toBeGreaterThan(10); // We have 16 skills
  });

  it('has proper section structure', () => {
    const { container } = renderWithProviders(<Skills />);

    const section = container.querySelector('section#skills');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'skills');
    expect(section).toHaveClass('py-section', 'bg-muted/50');
  });
});
