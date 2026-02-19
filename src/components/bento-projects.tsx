import Link from 'next/link';
import { projects } from '@/data/projects';

const tagColors: Record<string, string> = {
  React: '#61dafb',
  'Next.js': '#000',
  TypeScript: '#3178c6',
  'Node.js': '#68a063',
  Python: '#3776ab',
  SQL: '#e38c00',
  Figma: '#f24e1e',
  AWS: '#ff9900',
};

export function BentoProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="bento-card p-6 flex flex-col gap-4 bg-white h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
          Projects
        </h2>
        <Link href="/portfolio" className="text-xs font-semibold hover:underline" style={{ color: '#3b82f6' }}>
          View all →
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {featured.map((project, i) => (
          <div
            key={i}
            className="p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 shrink-0"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2H2v12h12v-4M10 2h4v4M14 2L8 8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1 line-clamp-1">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                  style={{
                    backgroundColor: `${tagColors[tag] ?? '#6b7280'}18`,
                    color: tagColors[tag] ?? '#6b7280',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
