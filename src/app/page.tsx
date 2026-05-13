import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';
import { AnimatedSection } from '@/components/AnimatedWrappers';
import { testimonials } from '@/data/testimonials';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: {
    absolute: 'Patanjal Yoga Dham - Yoga in Arya Nagar, Haridwar',
  },
  description: siteMetadata.description,
  openGraph: {
    title: 'Patanjal Yoga Dham - Yoga in Arya Nagar, Haridwar',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    images: [{ url: siteMetadata.ogImage }],
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Patanjal Yoga Dham',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arya Nagar',
    addressLocality: 'Haridwar',
    addressRegion: 'Uttarakhand',
    addressCountry: 'IN',
  },
  telephone: siteMetadata.phone,
  email: siteMetadata.email,
  url: siteMetadata.siteUrl,
  description:
    'Yoga classes, meditation sessions, and wellness programs in Haridwar',
};

const highlights = [
  {
    title: 'Yoga Classes',
    description:
      'Traditional yoga asana sessions for all levels, from gentle morning flows to advanced sadhana.',
    icon: '🧘',
  },
  {
    title: 'Meditation Sessions',
    description:
      'Guided meditation and pranayama practices rooted in Patanjali\'s Yoga Sutras.',
    icon: '🕉️',
  },
  {
    title: 'Wellness Programs',
    description:
      'Holistic wellness programs combining yoga, breathing techniques, and mindful living.',
    icon: '🌿',
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        title="Patanjal Yoga Dham"
        location="Arya Nagar, Haridwar"
        tagline={siteMetadata.tagline}
        ctaText="Explore Programs"
        ctaHref="/programs"
        badge="Haridwar&apos;s Gateway to Enlightenment"
        secondaryCta={{ text: 'Watch Journey', href: '/gallery' }}
      />

      {/* Features */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection>
            <p className="label-md text-center" style={{ color: 'var(--color-primary)' }}>
              Our Offerings
            </p>
            <h2 className="headline-xl text-center mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Holistic Healing for Mind and Soul
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} variant="from-bottom" delay={i * 150}>
                <div
                  className="rounded-3xl p-10 text-center elevation-1 soft-lift h-full"
                  style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}
                >
                  <span className="text-5xl" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold" style={{ color: 'var(--color-on-surface)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                    {item.description}
                  </p>
                  <Link
                    href="/programs"
                    className="mt-5 inline-block text-sm font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Learn more →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Spirit Section */}
      <section className="py-[120px]" style={{ background: 'var(--color-surface-container)' }}>
        <div className="mx-auto max-w-[1280px] px-8 grid gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection variant="from-left" className="relative">
            <Image
              src="/images/hero/yoga-terrace.png"
              alt="Yoga practice overlooking the Ganges"
              width={600}
              height={500}
              className="rounded-3xl w-full object-cover"
            />
            {/* Decorative blurred circle */}
            <div
              className="pulse-glow absolute -bottom-8 -left-8 h-32 w-32 rounded-full blur-3xl -z-10"
              style={{ background: 'var(--color-primary-container)', opacity: 0.3 }}
            />
          </AnimatedSection>
          <AnimatedSection variant="from-right" delay={200}>
            <p className="label-md" style={{ color: 'var(--color-primary)' }}>Our Philosophy</p>
            <h2 className="headline-xl mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Awaken Your Spirit by the Sacred Waters
            </h2>
            <div className="mt-8 space-y-4">
              {[
                'Authentic teachings rooted in Patanjali\'s Yoga Sutras',
                'Holistic approach to body, mind, and spirit',
                'Experienced gurus with decades of practice',
                'Serene setting near the holy Ganges',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span style={{ color: 'var(--color-primary-container)' }}>✓</span>
                  <p className="body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{point}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              style={{ background: 'var(--color-primary-container)' }}
            >
              Our Philosophy
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection>
            <p className="label-md text-center" style={{ color: 'var(--color-primary)' }}>
              Testimonials
            </p>
            <h2 className="headline-xl text-center mt-4" style={{ color: 'var(--color-on-surface)' }}>
              What Our Students Say
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} variant="scale-up" delay={i * 150}>
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  role={t.role}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
