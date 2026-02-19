import { skills, categoryColors, categoryLabels } from '@/data/skills';

export function BentoSkills() {
  const categories = ['product', 'engineering', 'tools'] as const;

  return (
    <div className="bento-card p-6 flex flex-col gap-4 bg-white h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
          Skills
        </h2>
        <div className="flex gap-2">
          {categories.map(cat => (
            <span
              key={cat}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${categoryColors[cat]}18`,
                color: categoryColors[cat],
              }}
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {categories.map(cat => (
          <div key={cat}>
            <div className="flex flex-wrap gap-1.5">
              {skills.filter(s => s.category === cat).map(skill => (
                <span
                  key={skill.name}
                  className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all duration-150 hover:-translate-y-0.5 cursor-default"
                  style={{
                    backgroundColor: `${categoryColors[cat]}12`,
                    color: '#374151',
                    border: `1px solid ${categoryColors[cat]}30`,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
