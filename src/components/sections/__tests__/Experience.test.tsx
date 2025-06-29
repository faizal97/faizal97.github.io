import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Experience } from '../Experience';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

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

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      whileHover,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <div {...props}>{children}</div>,
    h2: ({
      children,
      whileHover,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <h2 {...props}>{children}</h2>,
    span: ({
      children,
      whileHover,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <span {...props}>{children}</span>,
  },
}));

// Mock the scroll animation hook
vi.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    controls: {},
  }),
}));

describe('Experience Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders experience section with correct title', () => {
    renderWithProviders(<Experience />);

    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('displays all experience entries', () => {
    renderWithProviders(<Experience />);

    // Check for job titles
    expect(screen.getByText('Senior Backend Developer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();

    // Check for company names
    expect(screen.getByText(/Travel Tech Solutions/)).toBeInTheDocument();
    expect(screen.getByText(/Government Digital Services/)).toBeInTheDocument();

    // Check for periods
    expect(screen.getByText(/2022 - Present/)).toBeInTheDocument();
    expect(screen.getByText(/2020 - 2022/)).toBeInTheDocument();
  });

  it('displays job descriptions', () => {
    renderWithProviders(<Experience />);

    expect(
      screen.getByText(/scalable travel booking APIs serving 10M\+/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/citizen-facing web applications/)
    ).toBeInTheDocument();
  });

  it('displays technology tags', () => {
    renderWithProviders(<Experience />);

    // Check for technology tags (some appear multiple times across jobs)
    const phpTags = screen.getAllByText('PHP');
    const laravelTags = screen.getAllByText('Laravel');

    expect(phpTags.length).toBeGreaterThan(0);
    expect(laravelTags.length).toBeGreaterThan(0);
    expect(screen.getByText('MySQL')).toBeInTheDocument();
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    renderWithProviders(<Experience />);

    const experienceSection = screen
      .getByRole('heading', { name: 'Experience' })
      .closest('section');
    expect(experienceSection).toBeInTheDocument();
    expect(experienceSection).toHaveAttribute('id', 'experience');
  });

  it('renders experience cards with proper structure', () => {
    const { container } = renderWithProviders(<Experience />);

    // Check for card structure
    const cards = container.querySelectorAll('[class*="bg-card"]');
    expect(cards.length).toBeGreaterThanOrEqual(2);
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<Experience />);

    const heading = screen.getByRole('heading', { name: 'Experience' });
    expect(heading).toBeInTheDocument();

    const experienceSection = heading.closest('section');
    expect(experienceSection).toBeInTheDocument();
  });
});
