// Structured Data (JSON-LD) for SEO
// This provides rich snippets and better search engine understanding

// Structured Data (JSON-LD) generation for SEO
export interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  email: string;
  sameAs: string[];
  worksFor: {
    '@type': 'Organization';
    name: string;
  };
  knowsAbout: string[];
  address: {
    '@type': 'PostalAddress';
    addressCountry: string;
    addressRegion: string;
  };
}

export interface WebsiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  inLanguage: string;
  copyrightYear: number;
  genre: string[];
}

export interface ProfessionalServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'ProfessionalService';
  name: string;
  description: string;
  url: string;
  serviceType: string;
  provider: {
    '@type': 'Person';
    name: string;
  };
  areaServed: string;
  availableLanguage: string[];
}

export interface SoftwareApplicationSchema {
  '@context': 'https://schema.org';
  '@type': 'SoftwareApplication';
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  programmingLanguage: string[];
  author: {
    '@type': 'Person';
    name: string;
  };
  dateCreated: string;
  dateModified: string;
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export interface FAQSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}

// Generate Person schema for Faizal Ardian Putra
export const generatePersonSchema = (): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Faizal Ardian Putra',
  jobTitle: 'API Architect & Travel Technology Specialist',
  description:
    'API Architect & Travel Technology Specialist with 5+ years experience. Expert in PHP/Laravel, building scalable travel booking systems, government applications, and business travel management solutions.',
  url: 'https://faizal97.github.io',
  image: 'https://faizal97.github.io/profile_photo.webp',
  email: 'faizal97@example.com',
  sameAs: [
    'https://github.com/faizal97',
    'https://linkedin.com/in/faizal-ardian-putra',
    'https://twitter.com/faizal97',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance Developer',
  },
  knowsAbout: [
    'PHP Development',
    'Laravel Framework',
    'API Architecture',
    'Travel Technology',
    'Government Applications',
    'Business Travel Management',
    'Backend Development',
    'Web Development',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Indonesia',
    addressRegion: 'Indonesia',
  },
});

// Generate Website schema
export const generateWebsiteSchema = (): WebsiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Faizal Ardian Putra - Portfolio',
  url: 'https://faizal97.github.io',
  description:
    'Portfolio website of Faizal Ardian Putra, API Architect & Travel Technology Specialist with expertise in PHP/Laravel development.',
  author: {
    '@type': 'Person',
    name: 'Faizal Ardian Putra',
  },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  genre: ['Portfolio', 'Professional Services', 'Technology'],
});

// Generate Professional Service schema
export const generateProfessionalServiceSchema =
  (): ProfessionalServiceSchema => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'API Architecture & Travel Technology Development',
    description:
      'Professional API architecture and travel technology development services specializing in PHP/Laravel, scalable booking systems, and government applications.',
    url: 'https://faizal97.github.io',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Person',
      name: 'Faizal Ardian Putra',
    },
    areaServed: 'Global',
    availableLanguage: ['English', 'Indonesian'],
  });

// Generate Software Application schema for projects
export const generateSoftwareApplicationSchema = (
  name: string,
  description: string,
  url: string,
  programmingLanguages: string[],
  dateCreated: string,
  dateModified: string
): SoftwareApplicationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  description,
  url,
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web',
  programmingLanguage: programmingLanguages,
  author: {
    '@type': 'Person',
    name: 'Faizal Ardian Putra',
  },
  dateCreated,
  dateModified,
});

// Generate Breadcrumb schema
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Generate FAQ schema
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): FAQSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Generate Article schema
export const generateArticleSchema = (
  headline: string,
  description: string,
  datePublished: string,
  dateModified: string,
  imageUrl: string,
  articleUrl: string
): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  author: {
    '@type': 'Person',
    name: 'Faizal Ardian Putra',
  },
  datePublished,
  dateModified,
  image: imageUrl,
  url: articleUrl,
});

// Utility function to inject structured data into page head
export const injectStructuredData = (schema: any): void => {
  if (typeof window === 'undefined') return;

  const existingScript = document.querySelector('script[data-structured-data]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-structured-data', 'true');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Multiple schemas injection
export const injectMultipleStructuredData = (schemas: any[]): void => {
  if (typeof window === 'undefined') return;

  const existingScript = document.querySelector('script[data-structured-data]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-structured-data', 'true');
  script.textContent = JSON.stringify(schemas);
  document.head.appendChild(script);
};

// Default structured data for homepage
export const getDefaultStructuredData = () => [
  generatePersonSchema(),
  generateWebsiteSchema(),
  generateProfessionalServiceSchema(),
];

// Structured data for repositories page
export const getRepositoriesStructuredData = () => [
  generatePersonSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://faizal97.github.io' },
    { name: 'Repositories', url: 'https://faizal97.github.io/repositories' },
  ]),
];

// FAQ data for common questions
export const getCommonFAQs = () => [
  {
    question: 'What technologies does Faizal specialize in?',
    answer:
      'Faizal specializes in PHP/Laravel development, API architecture, travel technology systems, and government applications with 5+ years of experience.',
  },
  {
    question: 'What type of projects has Faizal worked on?',
    answer:
      'Faizal has worked on scalable travel booking systems, government applications, business travel management solutions, and various web applications handling millions of API requests daily.',
  },
  {
    question: 'How can I contact Faizal for work opportunities?',
    answer:
      'You can contact Faizal through email, LinkedIn, or GitHub. Contact information is available on the website.',
  },
  {
    question: "What makes Faizal's approach to API architecture unique?",
    answer:
      'Faizal focuses on scalable, secure, and maintainable API architectures with expertise in travel industry requirements and government compliance standards.',
  },
];
