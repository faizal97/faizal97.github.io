import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero
        name="Faizal Ardian Putra"
        title="Backend Developer"
        description="Backend Developer with 5+ years of experience specializing in PHP and Laravel framework. Proven expertise in building scalable web applications, REST APIs, and integrating third-party services for travel, government, and educational sectors."
        profileImage={{
          src: '/profile_photo.webp',
          alt: 'Faizal Ardian Putra',
        }}
      />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
