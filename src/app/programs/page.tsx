import type { Metadata } from 'next';
import Link from 'next/link';
import ProgramCard from '@/components/ProgramCard';
import { AnimatedSection } from '@/components/AnimatedWrappers';
import { programs } from '@/data/programs';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore yoga programs, courses, and workshops at Patanjal Yoga Dham in Arya Nagar, Haridwar — from beginner to advanced levels.',
  openGraph: {
    title: 'Programs | Patanjal Yoga Dham',
    description:
      'Explore yoga programs, courses, and workshops at Patanjal Yoga Dham — from beginner to advanced levels.',
    url: `${siteMetadata.siteUrl}/programs`,
    siteName: siteMetadata.siteName,
    images: [{ url: siteMetadata.ogImage }],
    type: 'website',
  },
};

const programImages: Record<string, string> = {
  'beginner-yoga': '/images/hero/yoga-terrace.png',
  'gentle-morning-flow': '/images/hero/ganges-sunrise.png',
  'intermediate-asana': '/images/gallery/patanjal-2.jpg',
  'pranayama-meditation': '/images/gallery/wellness-retreat.png',
  'advanced-yoga-sadhana': '/images/facility/yoga-hall.png',
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-[120px] text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div
          className="pulse-glow absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl"
          style={{ background: 'var(--color-primary-container)', opacity: 0.15 }}
        />
        <div
          className="pulse-glow absolute bottom-20 -right-20 h-48 w-48 rounded-full blur-3xl"
          style={{ background: 'var(--color-secondary-container)', opacity: 0.3, animationDelay: '2.5s' }}
        />
        <div className="mx-auto max-w-[1280px] px-8 relative">
          <AnimatedSection>
            <p className="label-md" style={{ color: 'var(--color-primary)' }}>Sacred Learning</p>
            <h1 className="display-lg mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Our Programs &amp; Retreats
            </h1>
            <p className="body-lg mt-6 max-w-2xl mx-auto" style={{ color: 'var(--color-on-surface-variant)' }}>
              From gentle introductions to intensive sadhana, find the practice
              that meets you where you are.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <AnimatedSection key={program.id} variant="from-bottom" delay={i * 120}>
              <ProgramCard
                name={program.name}
                description={program.description}
                duration={program.duration}
                schedule={program.schedule}
                category={program.category}
                image={programImages[program.id]}
              />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-[120px] text-center"
        style={{ background: 'var(--color-secondary-container)' }}
      >
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection variant="scale-up">
            <h2 className="headline-xl" style={{ color: 'var(--color-on-surface)' }}>
              Unsure which path to choose?
            </h2>
          <p className="body-lg mt-4 max-w-xl mx-auto" style={{ color: 'var(--color-on-surface-variant)' }}>
            Let our experienced teachers guide you to the right program based on your goals and experience level.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full px-8 py-3.5 font-semibold text-white"
              style={{ background: 'var(--color-primary-container)' }}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-8 py-3.5 font-semibold"
              style={{
                background: 'white',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-outline-variant)',
              }}
            >
              Download Brochure
            </Link>
          </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
