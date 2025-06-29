'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { pulse } from '@/lib/animations';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 rounded';
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
      default:
        return 'rounded';
    }
  };

  const skeletonStyle = {
    width: width
      ? typeof width === 'number'
        ? `${width}px`
        : width
      : undefined,
    height: height
      ? typeof height === 'number'
        ? `${height}px`
        : height
      : undefined,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              'bg-muted animate-pulse',
              getVariantClasses(),
              index === lines - 1 && 'w-3/4' // Last line is shorter
            )}
            style={skeletonStyle}
            variants={pulse}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn('bg-muted animate-pulse', getVariantClasses(), className)}
      style={skeletonStyle}
      variants={pulse}
      initial="initial"
      animate="animate"
    />
  );
}

// Pre-built skeleton components for common use cases
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} />
      <div className="flex space-x-2">
        <Skeleton width={60} height={24} />
        <Skeleton width={80} height={24} />
        <Skeleton width={70} height={24} />
      </div>
    </div>
  );
}

export function SkeletonAvatar({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function SkeletonButton({
  width = 100,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <Skeleton
      width={width}
      height={40}
      className={cn('rounded-md', className)}
    />
  );
}
