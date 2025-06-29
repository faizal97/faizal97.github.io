'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { hoverScale, staggerContainer, staggerItem } from '@/lib/animations';

interface ResumeButtonsProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  resumeUrl?: string;
  downloadFilename?: string;
  showViewButton?: boolean;
}

export function ResumeButtons({
  className,
  variant = 'horizontal',
  resumeUrl = '/resume.pdf',
  downloadFilename = 'Faizal_Ardian_Putra_Resume.pdf',
  showViewButton = true,
}: ResumeButtonsProps) {
  const handleDownload = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = downloadFilename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Analytics tracking
      console.log('Resume downloaded');
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const handleView = () => {
    try {
      // Open resume in new tab for viewing
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');

      // Analytics tracking
      console.log('Resume viewed');
    } catch (error) {
      console.error('Error viewing resume:', error);
    }
  };

  const handleViewProjects = () => {
    // Smooth scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const yOffset = -80; // Account for fixed navigation
      const y =
        projectsSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }

    // Analytics tracking
    console.log('View projects clicked');
  };

  return (
    <motion.div
      className={cn(
        'flex gap-4',
        variant === 'vertical' ? 'flex-col' : 'flex-wrap',
        className
      )}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Download Resume Button */}
      <motion.div
        variants={staggerItem}
        whileHover={hoverScale}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="bg-gradient-secondary hover:opacity-90 transition-all duration-200"
          onClick={handleDownload}
        >
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </motion.div>

      {/* View Resume Button */}
      {showViewButton && (
        <motion.div
          variants={staggerItem}
          whileHover={hoverScale}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleView}
            className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </motion.div>
      )}

      {/* View Projects Button */}
      <motion.div
        variants={staggerItem}
        whileHover={hoverScale}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={handleViewProjects}
          className="hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Projects
        </Button>
      </motion.div>
    </motion.div>
  );
}
