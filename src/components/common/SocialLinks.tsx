'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem, hoverScale } from '@/lib/animations';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface SocialLinksProps {
  className?: string;
  variant?: 'default' | 'footer';
  showLabels?: boolean;
}

export function SocialLinks({
  className,
  variant = 'default',
  showLabels = false,
}: SocialLinksProps) {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/faizal97',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/faizal-ardian-putra',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      href: 'mailto:faizal97@example.com',
      icon: Mail,
      color: 'hover:text-red-500',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/faizal97',
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
  ];

  const handleLinkClick = (href: string, name: string) => {
    // Analytics tracking could be added here
    console.log(`Social link clicked: ${name}`);

    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className={cn(
        'flex gap-4',
        variant === 'footer' ? 'justify-center' : 'justify-start',
        className
      )}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(link => {
        const IconComponent = link.icon;

        return (
          <motion.div
            key={link.name}
            variants={staggerItem}
            whileHover={hoverScale}
            whileTap={{ scale: 0.9 }}
          >
            {showLabels ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleLinkClick(link.href, link.name)}
                className={cn('transition-colors duration-200', link.color)}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {link.name}
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLinkClick(link.href, link.name)}
                className={cn(
                  'w-10 h-10 p-0 transition-all duration-200 hover:bg-primary/10',
                  link.color
                )}
                aria-label={`Visit ${link.name} profile`}
              >
                <IconComponent className="w-5 h-5" />
              </Button>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
