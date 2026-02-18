'use client';

import { useFadeIn } from '@/hooks/use-fade-in';

/* ─── Walking figure SVG (silhouette, grows left→right) ─── */
function WalkingFigure({ scale = 1 }: { scale: number }) {
  const h = Math.round(44 * scale);
  const w = Math.round(24 * scale);
  return (
    <svg width={w} height={h} viewBox="0 0 24 44" fill="none" aria-hidden="true">
      <circle cx="12" cy="4" r="3.8" fill="currentColor" />
      <path
        d="M12 8.5v10M8 13l4 2 4-2M12 18.5l-5 12M12 18.5l5 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Graduation cap icon ─── */
function GradCap({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
    </svg>
  );
}

/* ─── Organization Logos ─── */
function BITSLogo() {
  return (
    <div className="w-[72px] h-[72px] lg:w-20 lg:h-20 rounded-xl bg-white border-2 border-blue-900/15 shadow-md flex items-center justify-center p-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center shadow-inner">
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" />
          </svg>
        </div>
        <span className="text-[7px] lg:text-[8px] font-black text-blue-900 tracking-tight mt-0.5 leading-none">BITS Pilani</span>
      </div>
    </div>
  );
}

function SamsungLogo() {
  return (
    <div className="w-[72px] h-[72px] lg:w-20 lg:h-20 rounded-xl bg-[#1428a0] shadow-md flex items-center justify-center p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
      <span className="text-white font-bold text-[9px] lg:text-[11px] tracking-[0.12em] uppercase">Samsung</span>
    </div>
  );
}

function CMULogo() {
  return (
    <div className="w-[72px] h-[72px] lg:w-20 lg:h-20 rounded-xl bg-[#c41230] shadow-md flex items-center justify-center p-1.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="flex flex-col items-center leading-none gap-[1px]">
        <span className="text-white font-black text-[8px] lg:text-[10px] tracking-tight">Carnegie</span>
        <span className="text-white font-black text-[8px] lg:text-[10px] tracking-tight">Mellon</span>
        <span className="text-white font-black text-[8px] lg:text-[10px] tracking-tight">University</span>
      </div>
    </div>
  );
}

/* ─── Data ─── */
interface OrgItem {
  startYear: number;
  endYear: number;
  type: 'education' | 'work';
  Logo: React.ComponentType;
  title: string;
  subtitle: string;
  current?: boolean;
}

interface WorkRole {
  startYear: number;
  title: string;
}

const organizations: OrgItem[] = [
  {
    startYear: 2014,
    endYear: 2018,
    type: 'education',
    Logo: BITSLogo,
    title: 'Bachelor of Engineering (Honors)',
    subtitle: 'Electronics and Communication',
  },
  {
    startYear: 2018,
    endYear: 2025,
    type: 'work',
    Logo: SamsungLogo,
    title: 'Samsung R&D',
    subtitle: 'Software Engineer → Chief Engineer',
  },
  {
    startYear: 2025,
    endYear: 2026,
    type: 'education',
    Logo: CMULogo,
    title: 'Master of Science',
    subtitle: 'Product Management',
    current: true,
  },
];

const workRoles: WorkRole[] = [
  { startYear: 2018, title: 'Software Engineer' },
  { startYear: 2020, title: 'Senior Software\nEngineer' },
  { startYear: 2021, title: 'Lead Engineer' },
  { startYear: 2023, title: 'Chief Engineer /\nProduct Manager' },
];

/* Proportional year layout */
const Y_START = 2014;
const Y_END = 2026;
const SPAN = Y_END - Y_START;
function pct(year: number): number {
  return ((year - Y_START) / SPAN) * 100;
}

/* Years on the main axis */
const axisYears = [2014, 2018, 2020, 2021, 2023, 2025, 2026];

/* Walking figures with growing sizes */
const figures = [
  { year: 2014, s: 0.42 },
  { year: 2016, s: 0.52 },
  { year: 2018, s: 0.63 },
  { year: 2020, s: 0.74 },
  { year: 2022, s: 0.86 },
  { year: 2024, s: 0.98 },
  { year: 2026, s: 1.14 },
];

/* ─── Main Component ─── */
export function SnapshotTimeline() {
  const { elementRef, isVisible } = useFadeIn();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-surface overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-14">
          <h2
            className="text-2xl md:text-3xl font-bold text-primary"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            My Journey
          </h2>
          <div className="h-1 flex-1 max-w-32 bg-gradient-to-r from-highlight via-accent-purple to-accent-blue rounded-full" />
        </div>

        {/* ═══════════════ DESKTOP (md+) ═══════════════ */}
        <div className="hidden md:block">

          {/* ▸ Walking Figures Bar */}
          <div
            className={`relative h-[72px] mb-1 rounded-t-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'linear-gradient(180deg, rgba(180,185,200,0.22) 0%, rgba(200,205,215,0.06) 100%)',
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-px bg-text/12" />
            {figures.map((f, i) => (
              <div
                key={f.year}
                className={`absolute bottom-0.5 text-text/18 transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${pct(f.year)}%`,
                  transform: 'translateX(-50%)',
                  transitionDelay: `${i * 80 + 200}ms`,
                }}
              >
                <WalkingFigure scale={f.s} />
              </div>
            ))}
          </div>

          {/* ▸ Organization Logos + Details (above axis) */}
          <div className="relative" style={{ height: '190px' }}>
            {/* Dashed connectors from each org down to the axis */}
            {organizations.map((org, idx) => {
              const centerYear = (org.startYear + org.endYear) / 2;
              return (
                <div
                  key={`conn-${idx}`}
                  className={`absolute bottom-0 transition-opacity duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    left: `${pct(centerYear)}%`,
                    transform: 'translateX(-50%)',
                    transitionDelay: `${idx * 150 + 500}ms`,
                  }}
                >
                  <div className="w-px h-6 border-l-[1.5px] border-dashed border-text-muted/30 mx-auto" />
                </div>
              );
            })}

            {/* Org cards */}
            {organizations.map((org, idx) => {
              const Logo = org.Logo;
              const centerYear = (org.startYear + org.endYear) / 2;
              return (
                <div
                  key={`org-${idx}`}
                  className={`absolute transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                  }`}
                  style={{
                    left: `${pct(centerYear)}%`,
                    transform: 'translateX(-50%)',
                    bottom: '30px',
                    transitionDelay: `${idx * 200 + 300}ms`,
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Logo />
                    <div className="text-center" style={{ maxWidth: '180px' }}>
                      <p className="text-[13px] font-bold text-primary leading-snug">
                        {org.title}
                      </p>
                      <p className="text-[11px] text-text-muted italic leading-snug">
                        {org.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ▸ Main Year Axis — horizontal arrow with year tick marks */}
          <div className="relative h-8">
            {/* Solid horizontal line */}
            <div
              className={`absolute top-1/2 left-0 right-3 h-[2px] bg-text/55 -translate-y-1/2 transition-all duration-1000 ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
              style={{ transformOrigin: 'left center' }}
            />
            {/* Arrow head */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 right-0 transition-opacity duration-500 ${
                isVisible ? 'opacity-55' : 'opacity-0'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--color-text)">
                <path d="M0 1L10 6L0 11z" />
              </svg>
            </div>

            {/* Year ticks + labels */}
            {axisYears.map((year, i) => (
              <div
                key={year}
                className={`absolute top-0 bottom-0 transition-all duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${pct(year)}%`,
                  transform: 'translateX(-50%)',
                  transitionDelay: `${i * 60 + 500}ms`,
                }}
              >
                {/* Tick */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-8px)] w-px h-4 bg-text/40" />
                {/* Year */}
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs font-bold text-text whitespace-nowrap">
                  {year}
                </span>
              </div>
            ))}
          </div>

          {/* ▸ Education Duration Bars (with graduation cap icons) */}
          <div className="relative h-14 mt-8">
            {organizations
              .filter(o => o.type === 'education')
              .map((edu, idx) => {
                const l = pct(edu.startYear);
                const w = pct(edu.endYear) - l;
                return (
                  <div
                    key={`bar-${idx}`}
                    className={`absolute top-1 h-10 border-2 border-text/40 rounded-sm flex items-center justify-center bg-white/80 transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                    style={{
                      left: `${l}%`,
                      width: `${w}%`,
                      transformOrigin: 'left center',
                      transitionDelay: `${idx * 150 + 700}ms`,
                    }}
                  >
                    <GradCap className="text-text/55" />
                  </div>
                );
              })}

            {/* Thin connector between education bars */}
            {(() => {
              const eduOrgs = organizations.filter(o => o.type === 'education');
              if (eduOrgs.length < 2) return null;
              return (
                <div
                  className={`absolute top-5 h-px bg-text/12 transition-opacity duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    left: `${pct(eduOrgs[0].endYear)}%`,
                    width: `${pct(eduOrgs[1].startYear) - pct(eduOrgs[0].endYear)}%`,
                    transitionDelay: '1000ms',
                  }}
                />
              );
            })()}
          </div>

          {/* ▸ Work Role Labels (below the bars) */}
          <div className="relative h-6 mt-3">
            {workRoles.map((job, i) => (
              <div
                key={`wyr-${i}`}
                className={`absolute transition-all duration-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${pct(job.startYear)}%`,
                  transform: 'translateX(-50%)',
                  transitionDelay: `${i * 80 + 900}ms`,
                }}
              >
                <span className="text-[11px] font-bold text-text-muted">{job.startYear}</span>
              </div>
            ))}
            {/* End year */}
            <div
              className={`absolute transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                left: `${pct(2025)}%`,
                transform: 'translateX(-50%)',
                transitionDelay: '1200ms',
              }}
            >
              <span className="text-[11px] font-bold text-text-muted">2025</span>
            </div>
          </div>

          {/* ▸ Work Role Titles with dashed connectors */}
          <div className="relative mt-0" style={{ minHeight: '80px' }}>
            {workRoles.map((job, idx) => (
              <div
                key={`wrole-${idx}`}
                className={`absolute top-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  left: `${pct(job.startYear)}%`,
                  transform: 'translateX(-50%)',
                  transitionDelay: `${idx * 120 + 1000}ms`,
                }}
              >
                <div className="flex justify-center mb-1">
                  <div className="w-px h-3 border-l-[1.5px] border-dashed border-text-muted/25" />
                </div>
                <div className="text-center" style={{ maxWidth: '120px' }}>
                  <p className="text-[13px] font-bold text-primary leading-snug whitespace-pre-line">
                    {job.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <GradCap className="text-text/50" />
              <span>Education</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-px h-4 border-l-[1.5px] border-dashed border-text-muted/30" />
              <span>Career Progression</span>
            </div>
          </div>
        </div>

        {/* ═══════════════ MOBILE (below md) ═══════════════ */}
        <div className="md:hidden relative pl-12">
          {/* Vertical gradient line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-highlight opacity-25" />

          <div className="space-y-6">
            {/* All orgs chronologically */}
            {organizations.map((org, idx) => {
              const Logo = org.Logo;
              const isEdu = org.type === 'education';
              const dotColor = isEdu
                ? 'bg-gradient-to-r from-accent-blue to-accent-purple'
                : 'bg-gradient-to-r from-highlight to-accent-orange';
              const cardBg = isEdu
                ? 'from-accent-blue/8 via-accent-purple/8 to-transparent border-accent-blue/20'
                : 'from-highlight/8 via-accent-orange/8 to-transparent border-highlight/20';
              const badgeBg = isEdu
                ? 'from-accent-blue to-accent-purple'
                : 'from-highlight to-accent-orange';
              const labelColor = isEdu ? 'text-accent-blue' : 'text-highlight';

              return (
                <div
                  key={`m-org-${idx}`}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-12 top-5 w-3.5 h-3.5 rounded-full border-[3px] border-white shadow-sm z-10 ${dotColor}`} />

                  {/* Card */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${cardBg} border ${
                    org.current ? 'border-highlight shadow-md shadow-highlight/10' : ''
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 scale-[0.65] origin-top-left -mb-6 -mr-4">
                        <Logo />
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${labelColor}`}>
                            {isEdu ? 'Education' : 'Work'}
                          </span>
                          <span className={`inline-block bg-gradient-to-r ${badgeBg} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                            {org.startYear} — {org.endYear}
                          </span>
                          {org.current && (
                            <span className="bg-gradient-to-r from-highlight to-accent-orange text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-primary text-sm leading-snug">
                          {org.title}
                        </h4>
                        <p className="text-xs text-text-muted italic">
                          {org.subtitle}
                        </p>

                        {/* If it's the work org (Samsung), show role progression */}
                        {!isEdu && (
                          <div className="mt-2 space-y-1">
                            {workRoles.map((role, ri) => (
                              <div key={ri} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-highlight/40 flex-shrink-0" />
                                <span className="text-[11px] text-text-muted">
                                  <span className="font-semibold text-text">{role.startYear}</span>
                                  {' · '}
                                  {role.title.replace('\n', ' ')}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
