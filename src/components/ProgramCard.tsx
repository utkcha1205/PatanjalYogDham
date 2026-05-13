import Link from 'next/link';
import Image from 'next/image';

interface ProgramCardProps {
  name: string;
  description: string;
  duration: string;
  schedule: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  image?: string;
}

const badgeColors: Record<string, { bg: string; text: string }> = {
  beginner: { bg: 'rgba(245, 158, 11, 0.15)', text: '#855300' },
  intermediate: { bg: 'rgba(133, 83, 0, 0.1)', text: '#855300' },
  advanced: { bg: '#855300', text: 'white' },
};

export default function ProgramCard({
  name,
  description,
  duration,
  schedule,
  category,
  image,
}: ProgramCardProps) {
  const badge = badgeColors[category];

  return (
    <article
      className="flex flex-col rounded-3xl overflow-hidden elevation-1 soft-lift"
      style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
          <span
            className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: badge.bg, color: badge.text }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-8">
        {!image && (
          <span
            className="self-start rounded-full px-3 py-1 text-xs font-semibold mb-4"
            style={{ background: badge.bg, color: badge.text }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        )}
        <h3 className="headline-lg" style={{ color: 'var(--color-on-surface)', fontSize: '1.25rem' }}>
          {name}
        </h3>
        <p className="mt-3 flex-1 body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
          {description}
        </p>
        <dl className="mt-5 space-y-2 text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
          <div className="flex items-center gap-2">
            <span>⏱</span>
            <dt className="sr-only">Duration</dt>
            <dd>{duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <span>📅</span>
            <dt className="sr-only">Schedule</dt>
            <dd>{schedule}</dd>
          </div>
        </dl>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-primary-container)' }}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
