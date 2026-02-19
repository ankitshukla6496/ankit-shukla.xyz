const achievements = [
  {
    icon: '🏆',
    title: 'ProdHacks Winner',
    subtitle: '$750 Prize · 2025',
    bg: 'from-yellow-50 to-orange-50',
    border: 'border-yellow-200',
  },
  {
    icon: '🎓',
    title: "CMU Dean's List",
    subtitle: 'MS Product Mgmt · 2025',
    bg: 'from-red-50 to-pink-50',
    border: 'border-red-200',
  },
  {
    icon: '⭐',
    title: '7 Years at Samsung',
    subtitle: 'SWE → Chief Engineer',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
  },
  {
    icon: '🎖️',
    title: 'BITS Pilani Graduate',
    subtitle: 'B.E. Hons · 2018',
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
  },
];

export function BentoAchievements() {
  return (
    <div className="bento-card p-6 flex flex-col gap-4 bg-white h-full">
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
          Achievements
        </h2>
        {/* Trophy decorations */}
        <span className="text-base opacity-60">🏆</span>
        <span className="text-xs opacity-30">🏆</span>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        {achievements.map((a, i) => (
          <div
            key={i}
            className={`rounded-xl p-3 bg-gradient-to-br ${a.bg} border ${a.border} flex flex-col gap-1.5`}
          >
            <span className="text-2xl">{a.icon}</span>
            <span className="font-semibold text-xs text-gray-800 leading-tight">{a.title}</span>
            <span className="text-[10px] text-gray-500 font-mono">{a.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
