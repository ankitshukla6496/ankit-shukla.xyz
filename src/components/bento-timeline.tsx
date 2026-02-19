const milestones = [
  {
    org: 'BITS Pilani',
    years: '2014 — 2018',
    role: "B.E. (Hons.) Electronics",
    type: 'education' as const,
    color: '#f59e0b',
  },
  {
    org: 'Samsung',
    years: '2018 — 2024',
    role: 'SWE → Product Manager',
    type: 'work' as const,
    color: '#1428a0',
  },
  {
    org: 'ServiceLink',
    years: 'Summer 2025',
    role: 'PM Intern',
    type: 'work' as const,
    color: '#10b981',
  },
  {
    org: 'Honda',
    years: 'Fall 2025',
    role: 'PM Capstone',
    type: 'work' as const,
    color: '#ef4444',
    isCapstone: true,
  },
  {
    org: 'Carnegie Mellon',
    years: '2025 — 2026',
    role: "M.S. Product Management",
    type: 'education' as const,
    color: '#c41230',
    isCurrent: true,
  },
];

const typeIcon = {
  education: (
    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1L15 5v1L8 10 1 6V5L8 1zm0 10.5L1 7.5V11l7 4 7-4V7.5L8 11.5z" />
    </svg>
  ),
  work: (
    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5 3a1 1 0 011-1h4a1 1 0 011 1v1h3a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h3V3z" />
    </svg>
  ),
};

export function BentoTimeline() {
  return (
    <div className="bento-card p-6 flex flex-col gap-4 bg-white h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
          Journey
        </h2>
        <span className="text-xs text-gray-400 font-mono">2014 → Now</span>
      </div>

      {/* Timeline list */}
      <div className="flex flex-col gap-0 relative">
        {/* Vertical line */}
        <div className="absolute left-[13px] top-4 bottom-4 w-px bg-gray-100" />

        {milestones.map((m, i) => (
          <div key={i} className="flex items-start gap-3 py-2.5 relative group">
            {/* Dot */}
            <div
              className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white relative z-10"
              style={{ backgroundColor: m.color, fontSize: '10px' }}
            >
              {typeIcon[m.type]}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm text-gray-800 truncate">{m.org}</span>
                {m.isCurrent && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">NOW</span>
                )}
                {m.isCapstone && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">CAPSTONE</span>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{m.role}</div>
              <div className="text-[10px] text-gray-400 font-mono mt-0.5">{m.years}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
