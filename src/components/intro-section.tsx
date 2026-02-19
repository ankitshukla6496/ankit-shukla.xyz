import Link from "next/link";

export function IntroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, var(--color-accent-muted) 0%, transparent 70%)',
          transform: 'translate(20%, -30%)',
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-text) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8"
          style={{ animation: 'fade-in-up 0.5s ease-out forwards' }}
        >
          <span
            className="w-2 h-2 rounded-full bg-success"
            style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          <span className="text-xs text-text-muted font-mono">
            MS Product Management @ CMU &mdash; Class of 2026
          </span>
        </div>

        {/* Name */}
        <h1
          className="shimmer-text text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            animation: 'fade-in-up 0.5s ease-out forwards',
            animationDelay: '0.1s',
            opacity: 0,
          }}
        >
          Ankit Shukla
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-text-secondary mb-4"
          style={{
            animation: 'fade-in-up 0.5s ease-out forwards',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          Engineer turned product thinker.
        </p>

        {/* Bio */}
        <p
          className="text-base text-text-muted max-w-xl leading-relaxed mb-8"
          style={{
            animation: 'fade-in-up 0.5s ease-out forwards',
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          7 years at Samsung R&amp;D, growing from Software Engineer to Chief Engineer.
          Now at Carnegie Mellon, blending deep technical roots with product thinking.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{
            animation: 'fade-in-up 0.5s ease-out forwards',
            animationDelay: '0.4s',
            opacity: 0,
          }}
        >
          <Link
            href="/portfolio"
            className="bg-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg accent-glow"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium text-text-secondary border border-border transition-all duration-300 hover:border-border-hover hover:text-text hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
