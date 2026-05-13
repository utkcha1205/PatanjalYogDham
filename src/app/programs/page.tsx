import type { Metadata } from 'next';
import ProgramCard from '@/components/ProgramCard';
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

const categoryLabels: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const categoryOrder = ['beginner', 'intermediate', 'advanced'] as const;

export default function ProgramsPage() {
  const grouped = Object.groupBy(programs, (p) => p.category);

  return (
    <>
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900">
            Our Programs
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-amber-800">
            From gentle introductions to intensive sadhana, find the practice
            that meets you where you are.
          </p>
        </div>
      </section>

      {categoryOrder.map((cat) => {
        const items = grouped[cat];
        if (!items || items.length === 0) return null;
        return (
          <section key={cat} className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-amber-900">
                {categoryLabels[cat]}
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((program) => (
                  <ProgramCard
                    key={program.id}
                    name={program.name}
                    description={program.description}
                    duration={program.duration}
                    schedule={program.schedule}
                    category={program.category}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
