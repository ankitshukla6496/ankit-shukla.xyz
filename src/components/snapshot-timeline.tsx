'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

interface Chapter {
  number: number;
  org: string;
  type: 'education' | 'work';
  years: string;
  title: string;
  subtitle: string;
  current?: boolean;
  roles?: { year: string; title: string }[];
}

const chapters: Chapter[] = [
  {
    number: 1,
    org: 'BITS Pilani',
    type: 'education',
    years: '2014 \u2014 2018',
    title: 'Bachelor of Engineering (Honors)',
    subtitle: 'Electronics & Communication',
  },
  {
    number: 2,
    org: 'Samsung R&D',
    type: 'work',
    years: '2018 \u2014 2025',
    title: 'Software Engineer \u2192 Chief Engineer',
    subtitle: '7 years building products used by millions',
    roles: [
      { year: '2018', title: 'Software Engineer' },
      { year: '2020', title: 'Senior Software Engineer' },
      { year: '2021', title: 'Lead Engineer' },
      { year: '2023', title: 'Chief Engineer / PM' },
    ],
  },
  {
    number: 3,
    org: 'Carnegie Mellon',
    type: 'education',
    years: '2025 \u2014 2026',
    title: 'Master of Science',
    subtitle: 'Product Management',
    current: true,
  },
];

export function SnapshotTimeline() {
  const { elementRef, isVisible } = useFadeIn();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-text mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Journey So Far
          </h2>
          <div
            className="h-0.5 w-16 bg-accent rounded-full"
            style={{
              transformOrigin: 'left',
              animation: isVisible ? 'reveal-line 0.6s ease-out forwards' : 'none',
              transform: isVisible ? undefined : 'scaleX(0)',
            }}
          />
        </div>

        {/* Desktop: Horizontal Chapter Cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-0 items-stretch">
            {chapters.map((ch, idx) => (
              <div key={ch.number} className="flex items-stretch">
                {/* Card */}
                <div
                  className={`flex-1 relative rounded-2xl border p-6 transition-all duration-500 ${
                    ch.current
                      ? 'border-border-accent bg-accent-muted'
                      : 'border-border bg-bg-muted hover:border-border-hover'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Chapter accent line on current */}
                  {ch.current && (
                    <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}

                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-accent font-medium">
                      Chapter {ch.number}
                    </span>
                    <div className="flex items-center gap-2">
                      {ch.current && (
                        <span className="flex items-center gap-1.5 text-[11px] font-mono text-success font-medium bg-success/10 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                          NOW
                        </span>
                      )}
                      <span className="text-xs font-mono text-text-muted">{ch.years}</span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span className="inline-block text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">
                    {ch.type}
                  </span>

                  {/* Org name */}
                  <h3 className="text-xl font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {ch.org}
                  </h3>

                  {/* Title + Subtitle */}
                  <p className="text-sm text-text-secondary mb-1">{ch.title}</p>
                  <p className="text-sm text-text-muted">{ch.subtitle}</p>

                  {/* Role progression (Samsung) */}
                  {ch.roles && (
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      {ch.roles.map((role, ri) => (
                        <div
                          key={ri}
                          className={`flex items-center gap-3 transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                          }`}
                          style={{ transitionDelay: `${idx * 150 + ri * 80 + 300}ms` }}
                        >
                          <div
                            className="flex-shrink-0 rounded-full bg-accent"
                            style={{
                              width: `${6 + ri * 2}px`,
                              height: `${6 + ri * 2}px`,
                            }}
                          />
                          <span className="text-xs font-mono text-text-muted w-10">{role.year}</span>
                          <span className="text-sm text-text-secondary">{role.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Connector between cards */}
                {idx < chapters.length - 1 && (
                  <div className="flex items-center px-2">
                    <div
                      className={`w-8 h-px bg-border transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`}
                      style={{
                        transformOrigin: 'left',
                        transitionDelay: `${(idx + 1) * 150 + 100}ms`,
                      }}
                    />
                    <div
                      className={`w-2 h-2 rounded-full bg-accent flex-shrink-0 transition-all duration-500 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{ transitionDelay: `${(idx + 1) * 150 + 200}ms` }}
                    />
                    <div
                      className={`w-8 h-px bg-border transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`}
                      style={{
                        transformOrigin: 'left',
                        transitionDelay: `${(idx + 1) * 150 + 300}ms`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Cards */}
        <div className="md:hidden relative pl-8">
          {/* Vertical connector line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {chapters.map((ch, idx) => (
              <div
                key={ch.number}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Dot on the line */}
                <div className={`absolute -left-8 top-6 w-2.5 h-2.5 rounded-full border-2 border-bg z-10 ${
                  ch.current ? 'bg-success' : 'bg-accent'
                }`} />

                {/* Card */}
                <div className={`rounded-xl border p-5 ${
                  ch.current ? 'border-border-accent bg-accent-muted' : 'border-border bg-bg-muted'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-accent">Chapter {ch.number}</span>
                    <span className="text-xs font-mono text-text-muted">{ch.years}</span>
                  </div>

                  <h3 className="text-lg font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {ch.org}
                  </h3>
                  <p className="text-sm text-text-secondary">{ch.title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{ch.subtitle}</p>

                  {ch.current && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-success mt-3 bg-success/10 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                      Current
                    </span>
                  )}

                  {ch.roles && (
                    <div className="mt-3 pt-3 border-t border-border space-y-1.5">
                      {ch.roles.map((role, ri) => (
                        <div key={ri} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                          <span className="text-xs text-text-muted">
                            <span className="font-mono">{role.year}</span> &middot; {role.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
