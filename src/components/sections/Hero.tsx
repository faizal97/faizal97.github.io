'use client';

import { HeroProps } from '@/types/components';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

export function Hero({ name, title, description, profileImage }: HeroProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Faizal_Ardian_Putra_Resume.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center pt-16"
      id="hero"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-hero font-bold text-primary" id="hero-heading">
              {name}
            </h1>

            <p className="text-xl text-muted-foreground">{title}</p>

            <p className="text-body-lg text-muted-foreground max-w-lg">
              {description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open('https://github.com/faizalardian', '_blank')
                }
                className="w-10 h-10 p-0"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open('https://linkedin.com/in/faizalardian', '_blank')
                }
                className="w-10 h-10 p-0"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  (window.location.href =
                    'mailto:faizalardianputra@yahoo.co.id')
                }
                className="w-10 h-10 p-0"
                aria-label="Mail Contact"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" onClick={handleViewProjects}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={profileImage.src}
                alt={profileImage.alt}
                width={320}
                height={320}
                priority={true}
                className="object-cover"
                sizes="(max-width: 768px) 240px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
