'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { spin } from '@/lib/animations';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export function LoadingSpinner({
  size = 'md',
  className,
  label = 'Loading...',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <motion.div
        animate={spin}
        className="flex items-center gap-2 text-primary"
      >
        <Loader2 className={cn(sizeClasses[size])} />
        {label && (
          <span className="text-sm text-muted-foreground">{label}</span>
        )}
      </motion.div>
    </div>
  );
}
