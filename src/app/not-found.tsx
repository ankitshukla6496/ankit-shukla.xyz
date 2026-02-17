import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text-muted mb-8">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-highlight text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition inline-block"
      >
        Go Home
      </Link>
    </div>
  );
}
