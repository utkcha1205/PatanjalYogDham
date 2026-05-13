import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  location: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

export default function HeroSection({
  title,
  location,
  tagline,
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero/hero-placeholder.svg')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-amber-950/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-3 text-lg font-medium text-amber-200 sm:text-xl">
          {location}
        </p>
        <p className="mt-4 text-base text-amber-100 sm:text-lg">
          {tagline}
        </p>
        <Link
          href={ctaHref}
          className="mt-8 inline-block rounded-lg bg-amber-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
