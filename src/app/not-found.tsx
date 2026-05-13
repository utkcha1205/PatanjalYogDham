import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-amber-900">404</h1>
      <p className="mt-4 text-lg text-amber-800">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Return Home
      </Link>
    </section>
  );
}
