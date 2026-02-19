import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-xl border border-border bg-bg-muted p-6 transition-all duration-300 hover:border-border-accent hover:-translate-y-0.5"
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
        <h2 className="text-xl font-semibold text-text group-hover:text-accent-hover transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-text-muted text-sm mt-2 leading-relaxed">{post.description}</p>
        <div className="flex gap-2 mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-bg-hover text-text-muted px-2.5 py-1 rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
