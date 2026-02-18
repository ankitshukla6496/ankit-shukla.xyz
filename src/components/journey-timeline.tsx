'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

interface JourneyMilestone {
  year: string;
  type: 'education' | 'work';
  title: string;
  subtitle?: string;
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
    year: "2025",
    type: "education",
    title: "MS in Product Management",
    organization: "Carnegie Mellon University",
    endYear: "2026",
    current: true,
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
    title: "Senior Software Engineer → Lead Engineer",
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
];

export function JourneyTimeline() {
  const { elementRef, isVisible } = useFadeIn();

  // Group by type
  const education = journey.filter(m => m.type === 'education');
  const work = journey.filter(m => m.type === 'work');

  return (
    <section ref={elementRef as any} className="mb-16">
      <div className="flex items-center gap-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}>
          My Journey
        </h2>
        <div className="h-1 flex-1 max-w-32 bg-gradient-to-r from-highlight via-accent-purple to-accent-blue rounded-full" />
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Main Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-highlight rounded-full opacity-30 hidden md:block"
             style={{ transform: 'translateY(-50%)' }}
        />

        {/* Education Track (Top) */}
        <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-accent-blue uppercase tracking-wider">Education</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {education.map((milestone, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 delay-${index * 100}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Card */}
                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-transparent border-2 border-accent-blue/20 hover:border-accent-purple/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Growth Icon */}
                  <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>

                  {/* Year Badge */}
                  <div className="inline-block bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {milestone.year}{milestone.endYear && ` — ${milestone.endYear}`}
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-primary text-sm mb-1 group-hover:text-accent-blue transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-text-muted font-medium">
                    {milestone.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Track (Bottom) */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-highlight to-accent-orange flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-highlight uppercase tracking-wider">Work Experience</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {work.map((milestone, index) => {
              // Create growing sizes
              const sizes = ['scale-90', 'scale-95', 'scale-100', 'scale-105'];
              const size = sizes[Math.min(index, sizes.length - 1)];

              return (
                <div
                  key={index}
                  className={`group transition-all duration-700 ${size}`}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  {/* Card */}
                  <div className={`relative p-5 rounded-2xl bg-gradient-to-br from-highlight/10 via-accent-orange/10 to-transparent border-2 ${
                    milestone.current
                      ? 'border-highlight shadow-lg shadow-highlight/20'
                      : 'border-highlight/20 hover:border-accent-orange/50'
                  } transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>

                    {/* Current Badge */}
                    {milestone.current && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-highlight to-accent-orange text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                        CURRENT
                      </div>
                    )}

                    {/* Growth Icon */}
                    <div className={`absolute -top-3 -right-3 ${
                      milestone.current ? 'w-14 h-14' : 'w-12 h-12'
                    } bg-gradient-to-br from-highlight to-accent-orange rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all`}>
                      <svg className={`${milestone.current ? 'w-7 h-7' : 'w-6 h-6'} text-white`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                      </svg>
                    </div>

                    {/* Year Badge */}
                    <div className={`inline-block bg-gradient-to-r from-highlight to-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full ${
                      milestone.current ? 'mb-4' : 'mb-3'
                    }`}>
                      {milestone.year}{milestone.endYear && ` — ${milestone.endYear}`}
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-primary text-sm mb-1 group-hover:text-highlight transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-text-muted font-medium">
                      {milestone.organization}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Connecting Dots */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-highlight opacity-30" />
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
          <span>Education Milestones</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-highlight to-accent-orange" />
          <span>Work Experience</span>
        </div>
      </div>
    </section>
  );
}
