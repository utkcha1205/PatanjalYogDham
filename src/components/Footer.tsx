import Link from 'next/link';
import { siteMetadata } from '@/data/siteMetadata';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-surface-container)' }}>
      <div className="mx-auto max-w-[1280px] px-8 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand & description */}
          <div>
            <h2 className="headline-lg" style={{ color: 'var(--color-primary)' }}>
              Patanjal Yoga Dham
            </h2>
            <p className="body-md mt-4" style={{ color: 'var(--color-on-surface-variant)' }}>
              A sanctuary of ancient wisdom nestled in the spiritual heart of Haridwar, 
              dedicated to authentic yoga teachings.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              {['Facebook', 'Instagram', 'YouTube'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  style={{ background: 'var(--color-outline-variant)', color: 'var(--color-primary)' }}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="label-md" style={{ color: 'var(--color-primary)' }}>
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-md transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="label-md" style={{ color: 'var(--color-primary)' }}>
              Newsletter
            </h3>
            <p className="body-md mt-4" style={{ color: 'var(--color-on-surface-variant)' }}>
              Stay connected with our latest programs and retreats.
            </p>
            <form className="mt-4 flex gap-2" action="#">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border px-4 py-2.5 text-sm"
                style={{
                  borderColor: 'var(--color-outline-variant)',
                  background: 'white',
                  color: 'var(--color-on-surface)',
                }}
              />
              <button
                type="submit"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-primary-container)' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-16 border-t pt-8 flex flex-wrap items-center justify-between gap-4 text-sm"
          style={{ borderColor: 'var(--color-outline-variant)', color: 'var(--color-on-surface-variant)' }}
        >
          <p>© {year} {siteMetadata.siteName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-80">Privacy Policy</a>
            <a href="#" className="hover:opacity-80">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
