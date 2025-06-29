import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { About } from '../About';
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

describe('About Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders about section with correct content', () => {
    renderWithProviders(<About />);

    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(
      screen.getByText(/API Architect and Travel Technology/)
    ).toBeInTheDocument();
    expect(screen.getByText(/5 years of experience/)).toBeInTheDocument();
  });

  it('displays statistics correctly', () => {
    renderWithProviders(<About />);

    // Check for statistic numbers
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();

    expect(screen.getByText('10M+')).toBeInTheDocument();
    expect(screen.getByText('API Requests Daily')).toBeInTheDocument();

    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    renderWithProviders(<About />);

    const aboutSection = screen
      .getByRole('heading', { name: 'About Me' })
      .closest('section');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection).toHaveAttribute('id', 'about');
  });

  it('renders responsive grid layout', () => {
    const { container } = renderWithProviders(<About />);

    const statsGrid = container.querySelector('.md\\:grid-cols-3');
    expect(statsGrid).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<About />);

    const heading = screen.getByRole('heading', { name: 'About Me' });
    expect(heading).toBeInTheDocument();

    // Check for semantic HTML structure
    const aboutSection = heading.closest('section');
    expect(aboutSection).toBeInTheDocument();
  });
});
