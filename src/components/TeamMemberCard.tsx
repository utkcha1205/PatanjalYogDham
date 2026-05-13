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
    <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-100 text-center">
      <Image
        src={image}
        alt={`Photo of ${name}`}
        width={160}
        height={160}
        className="mx-auto h-40 w-40 rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-amber-900">{name}</h3>
      <p className="text-sm font-medium text-amber-700">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-amber-800">{bio}</p>
    </article>
  );
}
