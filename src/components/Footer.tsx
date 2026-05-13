import Link from 'next/link';
import { siteMetadata } from '@/data/siteMetadata';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact info */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              Patanjal Yoga Dham
            </h2>
            <address className="not-italic leading-relaxed text-amber-200">
              <p>{siteMetadata.address}</p>
              <p className="mt-2">
                <a
                  href={`tel:${siteMetadata.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.email}
                </a>
              </p>
            </address>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              Operating Hours
            </h2>
            <p className="text-amber-200">{siteMetadata.operatingHours}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-amber-800 pt-6 text-center text-sm text-amber-300">
          © {year} {siteMetadata.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
