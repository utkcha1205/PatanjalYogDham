import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TeamMemberCard from '@/components/TeamMemberCard';
import { AnimatedSection } from '@/components/AnimatedWrappers';
import { team } from '@/data/team';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about the history, mission, and philosophy of Patanjal Yoga Dham in Arya Nagar, Haridwar. Meet our dedicated team of yoga instructors.',
  openGraph: {
    title: 'About | Patanjal Yoga Dham',
    description:
      'Learn about the history, mission, and philosophy of Patanjal Yoga Dham in Arya Nagar, Haridwar.',
    url: `${siteMetadata.siteUrl}/about`,
    siteName: siteMetadata.siteName,
    images: [{ url: siteMetadata.ogImage }],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-[120px] text-center">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection>
            <p className="label-md" style={{ color: 'var(--color-primary)' }}>Our Journey</p>
            <h1 className="display-lg mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Sanctuary of Ancient Wisdom &amp; Modern Clarity
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* History & Mission — Asymmetric */}
      <section className="py-[120px]" style={{ background: 'var(--color-surface-container)' }}>
        <div className="mx-auto max-w-[1280px] px-8 grid gap-16 lg:grid-cols-12 items-center">
          <AnimatedSection variant="from-left" className="lg:col-span-7">
            <h2 className="headline-xl" style={{ color: 'var(--color-on-surface)' }}>
              The Legacy of Haridwar
            </h2>
            <p className="body-lg mt-6" style={{ color: 'var(--color-on-surface-variant)' }}>
              Patanjal Yoga Dham was founded in the sacred city of Haridwar with a
              simple vision — to make the authentic teachings of yoga accessible to
              everyone. What began as a small gathering of devoted practitioners in
              Arya Nagar has grown into a thriving centre that welcomes students
              from across India and beyond.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl p-8 elevation-1" style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>Our Roots</h3>
                <p className="body-md mt-3" style={{ color: 'var(--color-on-surface-variant)' }}>
                  Rooted in the timeless wisdom of Maharishi Patanjali&apos;s Yoga Sutras, 
                  our centre has been a beacon of holistic well-being for over two decades.
                </p>
              </div>
              <div className="rounded-3xl p-8 elevation-1" style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-primary)' }}>Our Mission</h3>
                <p className="body-md mt-3" style={{ color: 'var(--color-on-surface-variant)' }}>
                  To preserve and propagate the classical tradition of yoga, empowering
                  individuals to achieve physical health, mental clarity, and spiritual growth.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="from-right" delay={200} className="lg:col-span-5 relative">
            <Image
              src="/images/team/guru-portrait.png"
              alt="Yoga guru at Patanjal Yoga Dham"
              width={500}
              height={600}
              className="rounded-3xl w-full object-cover"
              style={{ maxHeight: '600px' }}
            />
            <div
              className="pulse-glow absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl -z-10"
              style={{ background: 'var(--color-primary-container)', opacity: 0.4 }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Facility Hero */}
      <section className="relative overflow-hidden image-reveal" style={{ height: '500px' }}>
        <Image
          src="/images/facility/yoga-hall.png"
          alt="Main Dhyana Hall at Patanjal Yoga Dham"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(to top, rgba(34,26,18,0.7) 0%, transparent 60%)' }}
        >
          <div className="mx-auto max-w-[1280px] px-8 pb-16 w-full">
            <p className="label-md text-white/70">Our Facilities</p>
            <h2 className="headline-xl text-white mt-2">Designed for Stillness</h2>
            <p className="body-lg text-white/80 mt-2 max-w-lg">
              Main Dhyana Hall — a space where tradition meets tranquility.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection>
            <p className="label-md text-center" style={{ color: 'var(--color-primary)' }}>Our Teachers</p>
            <h2 className="headline-xl text-center mt-4" style={{ color: 'var(--color-on-surface)' }}>
              Guided by Masters
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <AnimatedSection key={member.id} variant="from-bottom" delay={i * 150}>
                <TeamMemberCard
                  name={member.name}
                  bio={member.bio}
                  role={member.role}
                  image={member.image}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-[120px] text-center"
        style={{ background: 'var(--color-primary-container)' }}
      >
        <div className="mx-auto max-w-[1280px] px-8">
          <AnimatedSection variant="scale-up">
            <h2 className="display-lg text-white">Begin Your Transformation</h2>
          <p className="body-lg text-white/80 mt-6 max-w-xl mx-auto">
            Take the first step on your journey to inner peace and holistic well-being.
          </p>
          <Link
            href="/programs"
            className="mt-10 inline-block rounded-full px-10 py-4 text-base font-semibold transition-all hover:opacity-90"
            style={{ background: 'white', color: 'var(--color-primary)' }}
          >
            VIEW UPCOMING RETREATS
          </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
