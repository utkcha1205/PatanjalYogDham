'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => { closeMenu(); }, [pathname, closeMenu]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) { if (e.key === 'Escape') closeMenu(); }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      aria-label="Main navigation"
      className={`glass border-b transition-all duration-300 ${
        scrolled ? 'border-[var(--color-outline-variant)] elevation-1' : 'border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-wide" style={{ color: 'var(--color-primary)' }}>
            Patanjal Yoga Dham
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[var(--color-primary)] font-semibold'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="ml-4 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'var(--color-primary-container)' }}
              >
                Join Now
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 md:hidden"
            style={{ color: 'var(--color-primary)' }}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div id="mobile-menu" className="glass border-t md:hidden" style={{ borderColor: 'var(--color-outline-variant)' }}>
          <ul className="space-y-1 px-6 pb-4 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-2xl px-4 py-2.5 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[var(--color-primary)] font-semibold'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                  }`}
                  style={isActive(link.href) ? { background: 'var(--color-secondary-container)' } : {}}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full px-6 py-3 text-center text-sm font-semibold text-white"
                style={{ background: 'var(--color-primary-container)' }}
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
