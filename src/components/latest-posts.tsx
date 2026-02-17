import Link from "next/link";

// Placeholder data — will be replaced with actual blog data in Phase 3
const placeholderPosts = [
  {
    slug: "building-this-website",
    title: "Building My Personal Website with Next.js",
    date: "2026-02-16",
    description:
      "A walkthrough of how I designed and built this site using Next.js, Tailwind CSS, and Markdown.",
  },
  {
    slug: "my-first-post",
    title: "Hello World — My First Blog Post",
    date: "2026-02-15",
    description:
      "An introduction to who I am, what I do, and what you can expect from this blog.",
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LatestPosts() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary">Latest Posts</h2>
            <p className="text-text-muted mt-2">
              Thoughts on development, design, and technology.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-sm font-medium text-highlight hover:underline"
          >
            Read all posts &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {placeholderPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-border pb-6"
            >
              <time className="text-sm text-text-muted">
                {formatDate(post.date)}
              </time>
              <h3 className="text-xl font-semibold text-primary mt-1 group-hover:text-highlight transition-colors">
                {post.title}
              </h3>
              <p className="text-text-muted mt-2">{post.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-highlight hover:underline"
          >
            Read all posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
