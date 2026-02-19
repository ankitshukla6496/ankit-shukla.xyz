'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

interface JourneyMilestone {
  year: string;
  type: 'education' | 'work';
  title: string;
  organization: string;
  endYear?: string;
  current?: boolean;
}

const journey: JourneyMilestone[] = [
  {
    year: "2014",
    type: "education",
    title: "BE (Honors) Electronics & Communication",
    organization: "BITS Pilani",
    endYear: "2018",
  },
  {
    year: "2018",
    type: "work",
    title: "Software Engineer",
    organization: "Samsung R&D",
    endYear: "2020",
  },
  {
    year: "2020",
    type: "work",
    title: "Senior Software Engineer",
    organization: "Samsung R&D",
    endYear: "2021",
  },
  {
    year: "2021",
    type: "work",
    title: "Lead Engineer",
    organization: "Samsung R&D",
    endYear: "2023",
  },
  {
    year: "2023",
    type: "work",
    title: "Chief Engineer / Product Manager",
    organization: "Samsung R&D",
    endYear: "2025",
  },
  {
    year: "2025",
    type: "education",
    title: "MS in Product Management",
    organization: "Carnegie Mellon University",
    endYear: "2026",
    current: true,
  },
];

export function JourneyTimeline() {
  const { elementRef, isVisible } = useFadeIn();

  return (
    <section ref={elementRef as React.RefObject<HTMLElement>} className="mb-16">
      <div className="mb-8">
        <h2
          className="text-2xl font-bold text-text mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          My Journey
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

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {journey.map((milestone, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Dot on the line */}
              <div className={`absolute -left-8 top-5 w-2.5 h-2.5 rounded-full border-2 border-bg z-10 ${
                milestone.current ? 'bg-success' : 'bg-accent'
              }`} />

              {/* Card */}
              <div className={`rounded-xl border p-5 transition-all duration-300 ${
                milestone.current
                  ? 'border-border-accent bg-accent-muted'
                  : 'border-border bg-bg-muted hover:border-border-hover'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                      {milestone.type}
                    </span>
                    {milestone.current && (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-success font-medium bg-success/10 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                        NOW
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-text-muted">
                    {milestone.year}{milestone.endYear && ` \u2014 ${milestone.endYear}`}
                  </span>
                </div>

                <h3 className="text-base font-bold text-text mb-0.5">
                  {milestone.title}
                </h3>
                <p className="text-sm text-text-muted">
                  {milestone.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
