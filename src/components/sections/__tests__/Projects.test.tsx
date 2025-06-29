import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Projects } from '../Projects';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

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
    a: ({
      children,
      whileHover,
      whileTap,
      variants,
      initial,
      animate,
      transition,
      ...props
    }: any) => <a {...props}>{children}</a>,
    span: ({
      children,
      whileHover,
      whileTap,
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

// Mock window.open
const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

// Mock console.log
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

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

describe('Projects Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockWindowOpen.mockClear();
    mockConsoleLog.mockClear();
  });

  it('renders projects section with correct title', () => {
    renderWithProviders(<Projects />);

    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('displays all project cards', () => {
    renderWithProviders(<Projects />);

    // Check for project names
    expect(screen.getByText('Travel Booking API')).toBeInTheDocument();
    expect(screen.getByText('Government Portal')).toBeInTheDocument();
    expect(screen.getByText('Next.js Portfolio')).toBeInTheDocument();
  });

  it('displays project details correctly', () => {
    renderWithProviders(<Projects />);

    // Check descriptions
    expect(
      screen.getByText(/scalable rest api for travel bookings/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/citizen services portal/i)).toBeInTheDocument();
    expect(screen.getByText(/modern portfolio website/i)).toBeInTheDocument();

    // Check GitHub stats
    expect(screen.getByText('45')).toBeInTheDocument(); // stars for first project
    expect(screen.getByText('12')).toBeInTheDocument(); // forks for first project
  });

  it('displays technology tags for projects', () => {
    renderWithProviders(<Projects />);

    // Check for various technologies - use getAllByText for technologies that appear multiple times
    const laravelTags = screen.getAllByText('Laravel');
    const typescriptTags = screen.getAllByText('TypeScript');

    expect(laravelTags.length).toBeGreaterThan(0);
    expect(typescriptTags.length).toBeGreaterThan(0);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('MySQL')).toBeInTheDocument();
  });

  it('handles GitHub button clicks correctly', () => {
    renderWithProviders(<Projects />);

    const githubButtons = screen.getAllByText('Code');
    fireEvent.click(githubButtons[0]);

    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://github.com/faizal97/travel-booking-api',
      '_blank',
      'noopener,noreferrer'
    );
    expect(mockConsoleLog).toHaveBeenCalledWith(
      'GitHub link clicked: Travel Booking API'
    );
  });

  it('handles demo button clicks correctly', () => {
    renderWithProviders(<Projects />);

    const demoButtons = screen.getAllByText('Demo');
    fireEvent.click(demoButtons[0]);

    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://travel-api-demo.faizal.dev',
      '_blank',
      'noopener,noreferrer'
    );
    expect(mockConsoleLog).toHaveBeenCalledWith(
      'Demo link clicked: Travel Booking API'
    );
  });

  it('handles "View All Projects" button click', () => {
    renderWithProviders(<Projects />);

    const viewAllButton = screen.getByText('View All Projects');
    fireEvent.click(viewAllButton);

    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://github.com/faizal97',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('has proper section structure', () => {
    renderWithProviders(<Projects />);

    const projectsSection = screen
      .getByRole('heading', { name: 'Featured Projects' })
      .closest('section');
    expect(projectsSection).toBeInTheDocument();
    expect(projectsSection).toHaveAttribute('id', 'projects');
  });

  it('renders responsive grid layout', () => {
    const { container } = renderWithProviders(<Projects />);

    const projectsGrid = container.querySelector('.lg\\:grid-cols-3');
    expect(projectsGrid).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<Projects />);

    const heading = screen.getByRole('heading', { name: 'Featured Projects' });
    expect(heading).toBeInTheDocument();

    // Check for proper button labels
    const codeButtons = screen.getAllByRole('button', { name: /code/i });
    expect(codeButtons.length).toBeGreaterThan(0);

    const demoButtons = screen.getAllByRole('button', { name: /demo/i });
    expect(demoButtons.length).toBeGreaterThan(0);
  });
});
