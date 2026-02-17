import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="text-highlight font-medium mb-4">Hello, I&apos;m</p>
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
        Ankit Shukla
      </h1>
      <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-8">
        A developer who builds clean, performant web applications and enjoys
        turning ideas into well-crafted digital experiences.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/portfolio"
          className="bg-highlight text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="border border-border px-6 py-3 rounded-lg font-medium text-text hover:bg-surface transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
