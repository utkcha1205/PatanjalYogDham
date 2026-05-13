'use client';

import { useEffect, useRef } from 'react';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'from-left' | 'from-right' | 'scale-up' | 'from-bottom';
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
  stagger?: boolean;
}

export default function AnimateIn({
  children,
  className = '',
  variant = 'default',
  delay = 0,
  as: Tag = 'div' as keyof HTMLElementTagNameMap,
  stagger = false,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('visible'), delay);
          } else {
            el.classList.add('visible');
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const variantClass = variant === 'default' ? '' : variant;
  const staggerClass = stagger ? 'stagger' : '';

  // We use createElement to support dynamic tags
  const El = Tag as string;

  return (
    // @ts-expect-error — dynamic element
    <El
      ref={ref}
      className={`animate-in ${variantClass} ${staggerClass} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </El>
  );
}
