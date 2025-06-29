import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Hero } from '../Hero';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { HeroProps } from '@/types/components';

const mockHeroProps: HeroProps = {
  name: 'Faizal Ardian Putra',
  title: 'API Architect & Travel Tech Specialist',
  description:
    'API Architect & Travel Technology Specialist with 5+ years experience. Expert in PHP/Laravel, building scalable travel booking systems, government applications, and business travel management solutions.',
  profileImage: {
    src: '/profile_photo.webp',
    alt: 'Faizal Ardian Putra',
  },
};

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

describe('Hero Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('renders hero section with correct content', () => {
    renderWithProviders(<Hero {...mockHeroProps} />);

    expect(screen.getByText('Faizal Ardian Putra')).toBeInTheDocument();
    expect(
      screen.getByText(/API Architect & Travel Tech Specialist/)
    ).toBeInTheDocument();
    expect(screen.getByText(/5\+ years experience/)).toBeInTheDocument();
  });

  it('renders profile image with correct attributes', () => {
    renderWithProviders(<Hero {...mockHeroProps} />);

    const profileImage = screen.getByAltText('Faizal Ardian Putra');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src');
  });

  it('renders social links', () => {
    renderWithProviders(<Hero {...mockHeroProps} />);

    // Check for GitHub button
    const githubButton = screen.getByRole('button', { name: /github/i });
    expect(githubButton).toBeInTheDocument();

    // Check for LinkedIn button
    const linkedinButton = screen.getByRole('button', { name: /linkedin/i });
    expect(linkedinButton).toBeInTheDocument();

    // Check for Email button
    const emailButton = screen.getByRole('button', { name: /mail/i });
    expect(emailButton).toBeInTheDocument();
  });

  it('renders resume buttons', () => {
    renderWithProviders(<Hero {...mockHeroProps} />);

    expect(
      screen.getByRole('button', { name: /download resume/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /view projects/i })
    ).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<Hero {...mockHeroProps} />);

    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Faizal Ardian Putra');
  });

  it('renders responsive layout classes', () => {
    const { container } = renderWithProviders(<Hero {...mockHeroProps} />);

    const heroSection = container.querySelector('section');
    expect(heroSection).toHaveClass('min-h-screen');

    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('lg:grid-cols-2');
  });
});
