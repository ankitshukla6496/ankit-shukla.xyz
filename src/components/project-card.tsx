import type { Project } from "@/data/projects";

// Color rotation for variety
const gradients = [
  'from-accent-purple/20 via-accent-blue/20 to-highlight/20',
  'from-accent-blue/20 via-highlight/20 to-accent-orange/20',
  'from-highlight/20 via-accent-orange/20 to-accent-purple/20',
  'from-accent-orange/20 via-accent-purple/20 to-accent-blue/20',
];

const iconBackgrounds = [
  ['#9d4edd', '#4cc9f0'],
  ['#4cc9f0', '#e94560'],
  ['#e94560', '#f77f00'],
  ['#f77f00', '#9d4edd'],
];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const gradientClass = gradients[index % gradients.length];
  const [iconStart, iconEnd] = iconBackgrounds[index % iconBackgrounds.length];

  return (
    <article className="group relative rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Gradient Overlay on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, #e94560 0%, #f77f00 100%)' }}
      />

      {/* Enhanced Thumbnail */}
      <div className={`relative bg-gradient-to-br ${gradientClass} aspect-video flex items-center justify-center overflow-hidden`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 50%)' }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-[length:20px_20px]"
            style={{ backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%)' }}
          />
        </div>

        {/* Icon Circle */}
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
          style={{ background: `linear-gradient(135deg, ${iconStart}, ${iconEnd})` }}
        >
          <span className="text-3xl font-bold text-white">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Corner Accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-3xl transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 bg-white">
        <h3
          className="text-lg font-semibold text-primary mb-2 group-hover:text-highlight transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.title}
        </h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Enhanced Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gradient-to-r from-surface to-white text-text-muted px-3 py-1.5 rounded-full border border-border/50 hover:border-highlight/30 hover:text-highlight transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links with Icons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-highlight hover:text-accent-orange transition-colors flex items-center gap-1"
            >
              <span>Live Demo</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>Source</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
