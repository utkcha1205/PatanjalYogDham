interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <blockquote className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
      <p className="text-base leading-relaxed text-amber-900 before:content-['\u201C'] after:content-['\u201D']">
        {quote}
      </p>
      <footer className="mt-4">
        <cite className="not-italic">
          <span className="block text-sm font-semibold text-amber-800">
            {author}
          </span>
          {role && (
            <span className="block text-sm text-amber-700">{role}</span>
          )}
        </cite>
      </footer>
    </blockquote>
  );
}
