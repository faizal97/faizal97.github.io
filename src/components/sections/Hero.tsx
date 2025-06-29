import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { HeroProps } from '@/types/components';

export function Hero({ name, title, description, profileImage }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-16" id="hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-hero font-bold text-gradient-primary">
              {name}
            </h1>
            <p className="text-xl text-muted-foreground">{title}</p>
            <p className="text-body-lg text-muted-foreground max-w-lg">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-secondary">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
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
                priority
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 240px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
