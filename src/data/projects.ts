export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product listings, cart management, and secure checkout. Built with modern web technologies and optimized for performance.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces. Designed for productive teams.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays real-time forecasts, historical data charts, and severe weather alerts using public APIs.",
    tags: ["React", "D3.js", "REST API", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Blog CMS",
    description:
      "A lightweight content management system for blogs with markdown support, image uploads, and a clean admin interface.",
    tags: ["Next.js", "MDX", "Cloudinary", "Auth.js"],
    githubUrl: "https://github.com",
  },
  {
    title: "CLI Productivity Tool",
    description:
      "A command-line tool that automates repetitive development tasks like scaffolding projects, managing environment variables, and running health checks.",
    tags: ["Node.js", "Commander.js", "Chalk"],
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website — a personal portfolio and blog built with Next.js, Tailwind CSS, and Markdown. Deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "Markdown"],
    liveUrl: "https://ankit-shukla.xyz",
    githubUrl: "https://github.com/ankitshukla6496/ankit-shukla.xyz",
  },
];
