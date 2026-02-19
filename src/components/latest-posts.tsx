import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-text"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Latest Posts
            </h2>
            <p className="text-text-muted mt-2">
              Thoughts on development, design, and technology.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Read all posts
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:border-border-accent hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <time className="text-xs font-mono text-text-muted">
                  {formatDate(post.date)}
                </time>
                <svg
                  className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text group-hover:text-accent-hover transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Read all posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
