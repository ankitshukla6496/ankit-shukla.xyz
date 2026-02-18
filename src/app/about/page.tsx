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
    gradient: "from-highlight to-accent-orange",
    iconBg: "from-highlight/20 to-accent-orange/20",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    gradient: "from-accent-purple to-accent-blue",
    iconBg: "from-accent-purple/20 to-accent-blue/20",
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    gradient: "from-accent-blue to-highlight",
    iconBg: "from-accent-blue/20 to-highlight/20",
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"],
    gradient: "from-accent-orange to-accent-purple",
    iconBg: "from-accent-orange/20 to-accent-purple/20",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Bio Section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
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
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-primary">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-highlight via-accent-purple to-accent-blue rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className={`p-6 rounded-2xl bg-gradient-to-br ${group.iconBg} border border-border/50 hover:border-highlight/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-md`}
                >
                  <span className="text-white text-lg font-bold">
                    {group.category.charAt(0)}
                  </span>
                </div>
                <h3 className={`text-base font-bold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/50 text-text text-sm px-3 py-1.5 rounded-lg border border-border/50 hover:border-highlight/50 transition-colors"
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
