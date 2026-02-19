import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog-post-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on development, design, and technology by Ankit Shukla.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1
        className="text-3xl md:text-4xl font-bold text-text mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Blog
      </h1>
      <p className="text-text-muted mb-10">
        Thoughts on development, design, and technology.
      </p>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-text-muted">No posts yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
