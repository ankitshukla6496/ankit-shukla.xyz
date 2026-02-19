import type { Metadata } from "next";
import { JourneyTimeline } from "@/components/journey-timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ankit Shukla — background, skills, and experience.",
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Bio Section */}
      <section className="mb-16">
        <h1
          className="text-3xl md:text-4xl font-bold text-text mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          About Me
        </h1>
        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            I&apos;m an engineer and product thinker with 7 years of experience
            at Samsung R&amp;D, where I grew from Software Engineer to Chief
            Engineer. I hold a BE (Honors) in Electronics &amp; Communication
            from BITS Pilani, and I&apos;m currently pursuing my MS in Product
            Management at Carnegie Mellon University.
          </p>
          <p>
            My approach to building products is grounded in simplicity and
            user empathy. I believe the best solutions emerge at the intersection
            of deep technical understanding and clear product thinking. I care
            about shipping things that matter — performant, accessible, and
            built to last.
          </p>
          <p>
            When I&apos;m not building, you&apos;ll find me exploring new
            technologies, participating in hackathons, or thinking about how
            technology can solve real-world problems at scale.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2
            className="text-2xl font-bold text-text mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Skills
          </h2>
          <div className="h-0.5 w-16 bg-accent rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-bg-muted border border-border hover:border-border-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent text-lg font-bold">
                    {group.category.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-bg-hover text-text-secondary text-sm px-3 py-1.5 rounded-lg border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <JourneyTimeline />
    </div>
  );
}
