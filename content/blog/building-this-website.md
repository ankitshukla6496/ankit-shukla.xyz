---
title: "Building My Personal Website with Next.js"
date: "2026-02-16"
description: "A walkthrough of how I designed and built this site using Next.js, Tailwind CSS, and Markdown."
tags: ["nextjs", "tailwind", "webdev"]
---

I recently built this personal website from scratch, and I wanted to share the process and decisions behind it.

## The Stack

Here's what powers this site:

- **Next.js 16** — React framework with App Router for file-based routing and server-side rendering
- **TypeScript** — For type safety across the entire codebase
- **Tailwind CSS v4** — Utility-first CSS with the new CSS-first configuration
- **Markdown** — Blog posts written in plain Markdown with YAML frontmatter
- **Vercel** — Hosting and deployment, connected directly to GitHub

## Why Next.js?

Next.js is the industry standard for React applications in 2026. The App Router gives you file-based routing, server components by default, and excellent performance out of the box. Since Vercel builds Next.js, the deployment experience is seamless.

## The Blog System

Instead of using a CMS, I went with a simple file-based approach:

1. Blog posts are Markdown files stored in a `content/blog/` directory
2. Each file has YAML frontmatter for metadata (title, date, description, tags)
3. A utility library reads these files, parses the frontmatter with `gray-matter`, and converts the content to HTML with `remark`

This approach is simple, version-controlled, and doesn't require any external services.

## Styling with Tailwind CSS v4

Tailwind v4 introduced CSS-first configuration using the `@theme` directive. Instead of a JavaScript config file, you define your design tokens directly in CSS:

```css
@theme {
  --color-primary: #1a1a2e;
  --color-highlight: #e94560;
}
```

This feels cleaner and keeps everything in one place.

## Deployment

The site deploys automatically to Vercel whenever I push to the `main` branch on GitHub. Vercel detects the Next.js framework, builds the project, and serves it at my custom domain.

## What's Next

I plan to continue iterating on this site — adding more projects, writing more blog posts, and refining the design. The beauty of building your own site is that it's never really "done."
