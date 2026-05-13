import Link from 'next/link';

interface ProgramCardProps {
  name: string;
  description: string;
  duration: string;
  schedule: string;
  category: 'beginner' | 'intermediate' | 'advanced';
}

export default function ProgramCard({
  name,
  description,
  duration,
  schedule,
}: ProgramCardProps) {
  return (
    <article className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
      <h3 className="text-xl font-semibold text-amber-900">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-amber-800">
        {description}
      </p>
      <dl className="mt-4 space-y-1 text-sm text-amber-700">
        <div>
          <dt className="inline font-medium">Duration: </dt>
          <dd className="inline">{duration}</dd>
        </div>
        <div>
          <dt className="inline font-medium">Schedule: </dt>
          <dd className="inline">{schedule}</dd>
        </div>
      </dl>
      <Link
        href="/contact"
        className="mt-5 inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Enquire Now
      </Link>
    </article>
  );
}
