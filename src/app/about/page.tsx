import type { Metadata } from "next";

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

const experience = [
  {
    role: "Software Developer",
    company: "Tech Company",
    period: "2024 — Present",
    description:
      "Building and maintaining web applications using modern JavaScript frameworks. Working on performance optimization and implementing new features.",
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2022 — 2024",
    description:
      "Developed full-stack features for a SaaS platform. Collaborated with design and product teams to ship user-facing improvements.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 — 2022",
    description:
      "Built custom websites and web applications for small businesses and individual clients. Handled everything from design to deployment.",
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
            I&apos;m a developer based in India with a passion for building
            things on the web. I enjoy working across the full stack, from
            crafting responsive UIs to designing robust APIs and databases.
          </p>
          <p>
            My approach to development is grounded in simplicity and
            practicality. I believe the best code is code that solves real
            problems without unnecessary complexity. I care about performance,
            accessibility, and writing code that other developers can understand
            and maintain.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, reading about software architecture, or contributing to
            open-source projects. I&apos;m always looking for opportunities to
            learn and grow.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-highlight uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-surface text-text text-sm px-3 py-1.5 rounded-lg border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-highlight before:rounded-full after:absolute after:left-[5px] after:top-5 after:w-0.5 after:h-full after:bg-border last:after:hidden"
            >
              <p className="text-sm text-text-muted">{job.period}</p>
              <h3 className="text-lg font-semibold text-primary">
                {job.role}
              </h3>
              <p className="text-highlight text-sm font-medium">
                {job.company}
              </p>
              <p className="text-text-muted mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
