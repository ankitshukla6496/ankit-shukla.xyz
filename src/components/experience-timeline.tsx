'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  year: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2024",
    role: "Software Developer",
    company: "Tech Company",
    period: "2024 — Present",
    description:
      "Building and maintaining web applications using modern JavaScript frameworks. Working on performance optimization and implementing new features.",
  },
  {
    year: "2022",
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2022 — 2024",
    description:
      "Developed full-stack features for a SaaS platform. Collaborated with design and product teams to ship user-facing improvements.",
  },
  {
    year: "2021",
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 — 2022",
    description:
      "Built custom websites and web applications for small businesses and individual clients. Handled everything from design to deployment.",
  },
];

const gradients = [
  {
    card: 'from-highlight/10 via-accent-orange/10 to-accent-orange/5',
    dot: 'from-highlight to-accent-orange',
    line: 'from-highlight to-accent-orange',
    accent: 'bg-gradient-to-r from-highlight to-accent-orange'
  },
  {
    card: 'from-accent-purple/10 via-accent-blue/10 to-accent-blue/5',
    dot: 'from-accent-purple to-accent-blue',
    line: 'from-accent-purple to-accent-blue',
    accent: 'bg-gradient-to-r from-accent-purple to-accent-blue'
  },
  {
    card: 'from-accent-blue/10 via-accent-orange/10 to-highlight/5',
    dot: 'from-accent-blue to-highlight',
    line: 'from-accent-blue to-highlight',
    accent: 'bg-gradient-to-r from-accent-blue to-highlight'
  },
];

export function ExperienceTimeline() {
  const { elementRef, isVisible } = useFadeIn();

  return (
    <section ref={elementRef as any} className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-primary">Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-highlight via-accent-purple to-accent-blue rounded-full" />
      </div>

      {/* Desktop Timeline - Horizontal */}
      <div className="hidden md:block relative">
        {/* Connecting Line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-highlight via-accent-purple to-accent-blue rounded-full opacity-20" />

        <div className="grid grid-cols-3 gap-6">
          {experiences.map((exp, index) => {
            const gradient = gradients[index % gradients.length];
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Year Badge */}
                <div className="flex justify-center mb-4">
                  <div className={`relative ${gradient.accent} text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg`}>
                    {exp.year}
                    {/* Dot Connector */}
                    <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${gradient.dot} rounded-full shadow-md border-4 border-white z-10`} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`mt-8 p-6 rounded-2xl bg-gradient-to-br ${gradient.card} border border-border/50 hover:border-highlight/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
                >
                  {/* Role */}
                  <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-highlight transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className={`text-sm font-semibold ${gradient.accent} bg-clip-text text-transparent mb-3`}>
                    {exp.company}
                  </p>

                  {/* Period */}
                  <p className="text-xs text-text-muted font-medium mb-3 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${gradient.accent}`} />
                    {exp.period}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden space-y-6">
        {experiences.map((exp, index) => {
          const gradient = gradients[index % gradients.length];
          return (
            <div
              key={index}
              className={`relative pl-10 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Year Badge */}
              <div className={`absolute left-0 top-0 ${gradient.accent} text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-md`}>
                {exp.year}
              </div>

              {/* Dot Connector */}
              <div className={`absolute left-5 top-10 w-3 h-3 bg-gradient-to-br ${gradient.dot} rounded-full border-2 border-white shadow-sm z-10`} />

              {/* Vertical Line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-[26px] top-14 w-0.5 h-[calc(100%+1.5rem)] bg-gradient-to-b ${gradient.line} opacity-30`} />
              )}

              {/* Card */}
              <div className={`mt-8 p-5 rounded-xl bg-gradient-to-br ${gradient.card} border border-border/50`}>
                <h3 className="text-base font-bold text-primary mb-1">
                  {exp.role}
                </h3>
                <p className={`text-sm font-semibold ${gradient.accent} bg-clip-text text-transparent mb-2`}>
                  {exp.company}
                </p>
                <p className="text-xs text-text-muted font-medium mb-3">
                  {exp.period}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
