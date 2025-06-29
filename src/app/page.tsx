import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero
        name="Faizal Ardian Putra"
        title="API Architect & Travel Tech Specialist"
        description="Building scalable travel booking systems and government applications with 5+ years of expertise in PHP/Laravel development."
        profileImage={{
          src: '/profile_photo.webp',
          alt: 'Faizal Ardian Putra',
        }}
      />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
