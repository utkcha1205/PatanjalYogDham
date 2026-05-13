import type { Metadata } from 'next';
import Image from 'next/image';
import TeamMemberCard from '@/components/TeamMemberCard';
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
      {/* History / Founding Story */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900">
            Our Story
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-amber-800">
            Patanjal Yoga Dham was founded in the sacred city of Haridwar with a
            simple vision — to make the authentic teachings of yoga accessible to
            everyone. What began as a small gathering of devoted practitioners in
            Arya Nagar has grown into a thriving centre that welcomes students
            from across India and beyond.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-amber-800">
            Rooted in the timeless wisdom of Maharishi Patanjali&apos;s Yoga
            Sutras, our centre has been a beacon of holistic well-being for over
            two decades, nurturing body, mind, and spirit through disciplined
            practice and compassionate guidance.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-amber-900">
            Mission &amp; Philosophy
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
              <h3 className="text-xl font-semibold text-amber-900">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-amber-800">
                To preserve and propagate the classical tradition of yoga as
                outlined in Patanjali&apos;s Ashtanga Yoga, empowering
                individuals to achieve physical health, mental clarity, and
                spiritual growth through regular practice and study.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-amber-100">
              <h3 className="text-xl font-semibold text-amber-900">
                Our Philosophy
              </h3>
              <p className="mt-3 leading-relaxed text-amber-800">
                We believe yoga is not merely exercise but a complete way of
                living. Our approach integrates asana, pranayama, meditation, and
                ethical living to cultivate balance and harmony in everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/facility/facility-placeholder.svg"
            alt="Patanjal Yoga Dham facility in Arya Nagar, Haridwar"
            width={1200}
            height={600}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-amber-900">
            Meet Our Team
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                bio={member.bio}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
