import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Contact } from '../Contact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

// Mock window methods
const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

Object.defineProperty(window, 'location', {
  writable: true,
  value: {
    href: '',
  },
});

// Mock console.log
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

// Mock the ContactForm component
vi.mock('@/components/common/ContactForm', () => ({
  ContactForm: () => (
    <form data-testid="contact-form">
      <input placeholder="Your Name" />
      <input placeholder="Your Email" />
      <input placeholder="Subject" />
      <textarea placeholder="Your Message" />
      <button type="submit">Send Message</button>
    </form>
  ),
}));

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

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockWindowOpen.mockClear();
    mockConsoleLog.mockClear();
  });

  it('renders contact section with correct title', () => {
    render(<Contact />);

    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('displays contact form', () => {
    render(<Contact />);

    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
  });

  it('has accessible form structure', () => {
    render(<Contact />);

    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    const { container } = render(<Contact />);

    const section = container.querySelector('section#contact');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'contact');
    expect(section).toHaveClass('py-section', 'bg-muted/50');
  });

  it('has centered layout', () => {
    render(<Contact />);

    const container = screen.getByText('Get In Touch').closest('.container');
    expect(container).toHaveClass('mx-auto', 'px-4');
  });

  it('renders with proper responsive layout', () => {
    const { container } = renderWithProviders(<Contact />);

    const maxWidthContainer = container.querySelector('.max-w-lg');
    expect(maxWidthContainer).toBeInTheDocument();
  });
});
