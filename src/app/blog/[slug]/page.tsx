import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm text-text-muted hover:text-highlight transition-colors mb-4 inline-block"
        >
          &larr; Back to blog
        </Link>
        <time className="block text-sm text-text-muted mt-4">
          {formatDate(post.date)}
        </time>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2">
          {post.title}
        </h1>
        <div className="flex gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface text-text-muted px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div
        className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-highlight prose-code:text-accent"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
