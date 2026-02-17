import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-accent/10 to-highlight/10 aspect-video flex items-center justify-center">
        <span className="text-4xl font-bold text-accent/20">
          {project.title.charAt(0)}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface text-text-muted px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-highlight hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
