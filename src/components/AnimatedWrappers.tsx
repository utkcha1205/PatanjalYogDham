'use client';

import { ReactNode } from 'react';
import AnimateIn from '@/components/AnimateIn';

export function AnimatedSection({
  children,
  className = '',
  variant = 'default',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'from-left' | 'from-right' | 'scale-up' | 'from-bottom';
  delay?: number;
}) {
  return (
    <AnimateIn className={className} variant={variant} delay={delay}>
      {children}
    </AnimateIn>
  );
}

export function StaggerGrid({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimateIn className={className} stagger>
      {children}
    </AnimateIn>
  );
}
