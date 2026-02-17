import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Featured Projects
            </h2>
            <p className="text-text-muted mt-2">
              A selection of recent work I&apos;m proud of.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:block text-sm font-medium text-highlight hover:underline"
          >
            View all projects &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/portfolio"
            className="text-sm font-medium text-highlight hover:underline"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
