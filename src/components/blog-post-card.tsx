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
    <article className="group border-b border-border pb-8">
      <Link href={`/blog/${post.slug}`}>
        <time className="text-sm text-text-muted">
          {formatDate(post.date)}
        </time>
        <h2 className="text-xl font-semibold text-primary mt-1 group-hover:text-highlight transition-colors">
          {post.title}
        </h2>
        <p className="text-text-muted mt-2">{post.description}</p>
        <div className="flex gap-2 mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface text-text-muted px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
