import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-text"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Featured Projects
            </h2>
            <p className="text-text-muted mt-2">
              A selection of recent work I&apos;m proud of.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all projects
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/portfolio"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
