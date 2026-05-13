import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center px-8 text-center"
      style={{ minHeight: '70vh' }}
    >
      {/* Illustration */}
      <div className="relative rounded-3xl overflow-hidden soft-lift" style={{ maxWidth: '320px' }}>
        <Image
          src="/images/404/lotus-404.png"
          alt="Lotus flower floating on calm waters"
          width={320}
          height={320}
          className="object-cover"
        />
      </div>

      {/* 404 */}
      <h1
        className="mt-10 display-lg count-pop"
        style={{ color: 'var(--color-primary)' }}
      >
        404
      </h1>

      {/* Quote */}
      <p
        className="mt-4 body-lg italic max-w-md"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        &ldquo;The path you seek is not here, but peace is always within.&rdquo;
      </p>

      {/* Divider */}
      <div
        className="mt-6 h-1 w-16 rounded-full"
        style={{ background: 'var(--color-primary-container)' }}
      />

      {/* CTA */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: 'var(--color-primary-container)' }}
      >
        🏠 Return Home
      </Link>

      <p className="mt-6 text-sm italic" style={{ color: 'var(--color-on-surface-variant)' }}>
        Sometimes getting lost is the first step to finding yourself.
      </p>
    </section>
  );
}
