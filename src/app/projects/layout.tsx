import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Faizal Ardian Putra - Backend Developer Portfolio',
  description:
    'Explore my professional projects and open-source contributions. Featured work includes enterprise travel APIs, government systems, and Laravel applications.',
  keywords:
    'Laravel, PHP, Backend Development, Government Systems, Travel API, REST API, MySQL, Redis, AWS, Vue.js, PostgreSQL',
  openGraph: {
    title: 'Projects | Faizal Ardian Putra',
    description:
      'Professional projects and open-source contributions by a senior backend developer',
    url: '/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Faizal Ardian Putra',
    description:
      'Professional projects and open-source contributions by a senior backend developer',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
