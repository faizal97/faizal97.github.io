import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title:
    'Faizal Ardian Putra - API Architect & Travel Tech Specialist | PHP Laravel Expert',
  description:
    'API Architect & Travel Technology Specialist with 5+ years experience. Expert in PHP/Laravel, building scalable travel booking systems, government applications, and business travel management solutions.',
  keywords:
    'Backend Developer, PHP Developer, Laravel Expert, Web Development, API Integration, Faizal Ardian Putra',
  authors: [{ name: 'Faizal Ardian Putra' }],
  creator: 'Faizal Ardian Putra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizal97.github.io',
    title: 'Faizal Ardian Putra - API Architect & Travel Tech Specialist',
    description:
      'API Architect & Travel Technology Specialist with 5+ years experience. Expert in PHP/Laravel, building scalable travel booking systems, government applications, and business travel management solutions.',
    siteName: 'Faizal Ardian Putra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizal Ardian Putra - API Architect & Travel Tech Specialist',
    description:
      'API Architect & Travel Technology Specialist with 5+ years experience. Expert in PHP/Laravel, building scalable travel booking systems, government applications, and business travel management solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
