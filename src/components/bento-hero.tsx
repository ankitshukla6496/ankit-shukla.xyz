import { IllustratedCharacter } from './illustrated-character';

export function BentoHero() {
  return (
    <div className="bento-card relative flex flex-col md:flex-row items-center gap-6 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white min-h-[320px]">
      {/* Decorative dots */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
        <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
        <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
      </div>

      {/* Illustrated character */}
      <div className="shrink-0 w-48 md:w-56">
        <IllustratedCharacter className="w-full h-auto drop-shadow-md" />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-3 text-center md:text-left">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          MS Product Management @ CMU — Class of 2026
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
          Ankit Shukla
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          Engineer turned product thinker.
        </p>

        {/* Bio */}
        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          7 years at Samsung building products. Now at Carnegie Mellon, learning to build better ones.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
          <a
            href="/portfolio"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#3b82f6' }}
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
