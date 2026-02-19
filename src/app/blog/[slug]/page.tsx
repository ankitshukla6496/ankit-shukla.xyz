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
          className="text-sm text-text-muted hover:text-accent transition-colors mb-4 inline-block"
        >
          &larr; Back to blog
        </Link>
        <time className="block text-sm text-text-muted font-mono mt-4">
          {formatDate(post.date)}
        </time>
        <h1
          className="text-3xl md:text-4xl font-bold text-text mt-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {post.title}
        </h1>
        <div className="flex gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-bg-hover text-text-muted px-2.5 py-1 rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div
        className="prose prose-lg max-w-none prose-headings:text-text prose-a:text-accent prose-code:text-accent-hover prose-strong:text-text prose-p:text-text-secondary prose-li:text-text-secondary"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
