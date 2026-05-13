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
    <blockquote
      className="rounded-3xl p-10 elevation-1 soft-lift"
      style={{ background: 'white', border: '1px solid var(--color-outline-variant)' }}
    >
      <span className="text-5xl leading-none" style={{ color: 'var(--color-primary-container)' }}>
        &ldquo;
      </span>
      <p className="body-lg mt-2 italic" style={{ color: 'var(--color-on-surface)' }}>
        {quote}
      </p>
      <footer className="mt-6 flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
          style={{ background: 'var(--color-primary-container)' }}
        >
          {author[0]}
        </div>
        <cite className="not-italic">
          <span className="block text-sm font-semibold" style={{ color: 'var(--color-on-surface)' }}>
            {author}
          </span>
          {role && (
            <span className="block text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
              {role}
            </span>
          )}
        </cite>
      </footer>
    </blockquote>
  );
}
