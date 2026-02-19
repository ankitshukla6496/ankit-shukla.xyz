import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
      <h1
        className="text-6xl md:text-8xl font-bold text-text mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        404
      </h1>
      <p className="text-xl text-text-muted mb-8">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg accent-glow inline-block"
      >
        Go Home
      </Link>
    </div>
  );
}
