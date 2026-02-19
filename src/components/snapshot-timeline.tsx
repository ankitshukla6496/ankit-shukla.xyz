'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

interface Milestone {
  id: number;
  org: string;
  type: 'education' | 'work';
  years: string;
  title: string;
  subtitle?: string;
  current?: boolean;
  isCapstone?: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    org: 'BITS Pilani',
    type: 'education',
    years: '2014 \u2014 2018',
    title: "Bachelor's (Honors.) Electronics & Communication",
    subtitle: 'Pilani, India',
  },
  {
    id: 2,
    org: 'Samsung',
    type: 'work',
    years: '2018 \u2014 2024',
    title: 'Software Engineer \u2192 Product Manager',
    subtitle: '7 years building products & leading engineering teams',
  },
  {
    id: 3,
    org: 'Carnegie Mellon University',
    type: 'education',
    years: '2025 \u2014 2026',
    title: "Master's (Dean's List) Product Management",
    subtitle: 'Pittsburgh, PA',
    current: true,
  },
  {
    id: 4,
    org: 'ServiceLink',
    type: 'work',
    years: 'Summer 2025',
    title: 'Product Manager Intern',
    subtitle: 'Design & shipping new features',
  },
  {
    id: 5,
    org: 'Honda',
    type: 'work',
    years: 'Fall 2025 \u2014 Present',
    title: 'Product Manager (Capstone)',
    subtitle: 'Leading cross-functional product initiative',
    isCapstone: true,
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

        {/* Desktop: Horizontal Milestone Timeline */}
        <div className="hidden md:block">
          <div className="grid gap-0 items-stretch" style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}>
            {milestones.map((m, idx) => (
              <div key={m.id} className="flex items-stretch">
                {/* Card */}
                <div
                  className={`flex-1 relative rounded-2xl border p-6 transition-all duration-500 ${
                    m.current
                      ? 'border-border-accent bg-accent-muted'
                      : m.isCapstone
                        ? 'border-border bg-bg-muted hover:border-border-hover ring-1 ring-accent/30'
                        : 'border-border bg-bg-muted hover:border-border-hover'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Accent line on current/capstone */}
                  {(m.current || m.isCapstone) && (
                    <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}

                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest font-medium">
                      {m.type}
                    </span>
                    <div className="flex items-center gap-2">
                      {m.current && (
                        <span className="flex items-center gap-1.5 text-[11px] font-mono text-success font-medium bg-success/10 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                          CURRENT
                        </span>
                      )}
                      {m.isCapstone && (
                        <span className="text-[11px] font-mono text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">
                          CAPSTONE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Year */}
                  <span className="inline-block text-[10px] font-mono text-text-muted mb-3">{m.years}</span>

                  {/* Org name */}
                  <h3 className="text-lg font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {m.org}
                  </h3>

                  {/* Title + Subtitle */}
                  <p className="text-sm text-text-secondary mb-1">{m.title}</p>
                  {m.subtitle && <p className="text-sm text-text-muted">{m.subtitle}</p>}
                </div>

                {/* Connector between cards */}
                {idx < milestones.length - 1 && (
                  <div className="flex items-center px-2">
                    <div
                      className={`w-4 h-px bg-border transition-all duration-700 ${
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
                      className={`w-4 h-px bg-border transition-all duration-700 ${
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

        {/* Mobile: Vertical Milestones */}
        <div className="md:hidden relative pl-8">
          {/* Vertical connector line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={m.id}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Dot on the line */}
                <div className={`absolute -left-8 top-5 w-2.5 h-2.5 rounded-full border-2 border-bg z-10 ${
                  m.current ? 'bg-success' : m.isCapstone ? 'bg-accent ring-1 ring-accent/50' : 'bg-accent'
                }`} />

                {/* Card */}
                <div className={`rounded-xl border p-5 ${
                  m.current ? 'border-border-accent bg-accent-muted' : m.isCapstone ? 'border-border bg-bg-muted ring-1 ring-accent/30' : 'border-border bg-bg-muted'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest">{m.type}</span>
                    <span className="text-xs font-mono text-text-muted">{m.years}</span>
                  </div>

                  <h3 className="text-lg font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {m.org}
                  </h3>
                  <p className="text-sm text-text-secondary">{m.title}</p>
                  {m.subtitle && <p className="text-xs text-text-muted mt-0.5">{m.subtitle}</p>}

                  {m.current && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-success mt-3 bg-success/10 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                      Current
                    </span>
                  )}

                  {m.isCapstone && (
                    <span className="inline-block text-[11px] font-mono text-accent mt-3 bg-accent/10 px-2 py-0.5 rounded-full">
                      Capstone
                    </span>
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
