import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  bio: string;
  role: string;
  image: string;
}

export default function TeamMemberCard({
  name,
  bio,
  role,
  image,
}: TeamMemberCardProps) {
  return (
    <article
      className="group rounded-3xl overflow-hidden elevation-1 soft-lift"
      style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold" style={{ color: 'var(--color-on-surface)' }}>
          {name}
        </h3>
        <p className="text-sm font-medium mt-1" style={{ color: 'var(--color-primary)' }}>
          {role}
        </p>
        <p className="mt-3 body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
          {bio}
        </p>
      </div>
    </article>
  );
}
