import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  location: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
  secondaryCta?: { text: string; href: string };
}

export default function HeroSection({
  title,
  location,
  tagline,
  ctaText,
  ctaHref,
  badge,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/ganges-sunrise.png')",
        minHeight: '85vh',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(34,26,18,0.6) 0%, rgba(133,83,0,0.4) 100%)',
        }}
      />

      {/* Floating decorative circles */}
      <div className="float absolute top-20 left-10 h-24 w-24 rounded-full blur-2xl" style={{ background: 'rgba(245,158,11,0.15)' }} />
      <div className="float absolute bottom-32 right-16 h-32 w-32 rounded-full blur-2xl" style={{ background: 'rgba(245,158,11,0.1)', animationDelay: '2s' }} />

      <div className="hero-animate relative z-10 mx-auto max-w-[1280px] px-8 py-32 text-center">
        {/* Badge */}
        {badge && (
          <span
            className="shimmer-badge inline-block rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              color: '#f59e0b',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            {badge}
          </span>
        )}

        <h1 className="display-lg text-white">{title}</h1>
        <p className="mt-4 text-xl font-medium" style={{ color: 'rgba(245, 158, 11, 0.9)' }}>
          {location}
        </p>
        <p className="mt-6 body-lg text-white/80 max-w-2xl mx-auto">
          {tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="rounded-full px-8 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--color-primary-container)' }}
          >
            {ctaText}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full px-8 py-3.5 text-base font-semibold text-white transition-all"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
