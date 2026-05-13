import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Patanjal Yoga Dham"
        location="Arya Nagar, Haridwar"
        tagline={siteMetadata.tagline}
        ctaText="Explore Programs"
        ctaHref="/programs"
      />

      {/* Introduction Section */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-amber-900">
            Welcome to Patanjal Yoga Dham
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-amber-800">
            Nestled in the spiritual heart of Haridwar, Patanjal Yoga Dham is
            dedicated to preserving and sharing the authentic teachings of yoga.
            Our mission is to guide individuals on a journey of physical
            well-being, mental clarity, and inner peace through time-honoured
            practices rooted in Patanjali&apos;s Yoga Sutras.
          </p>
        </div>
      </section>

      {/* Highlights Section — Key Offerings */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-amber-900">
            What We Offer
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-amber-100"
              >
                <span className="text-4xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-amber-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-amber-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-amber-900">
            What Our Students Say
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                author={t.author}
                role={t.role}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
