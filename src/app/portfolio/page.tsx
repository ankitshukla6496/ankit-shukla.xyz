import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects and work by Ankit Shukla.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Portfolio
      </h1>
      <p className="text-text-muted mb-10 max-w-2xl">
        A collection of projects I&apos;ve worked on. Each one taught me
        something new and pushed my skills forward.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
