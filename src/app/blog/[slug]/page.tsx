import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  return {
    title: `${post.title} — The Sermi Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="container py-12">
      <article className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="w-4 h-4" /> Tất cả bài viết
        </Link>

        <header className="mb-8">
          <time className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl font-bold tracking-tight mt-2 leading-tight">
            {post.title}
          </h1>
          <p className="text-muted-foreground mt-3">{post.excerpt}</p>
          <div className="flex gap-2 flex-wrap mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] bg-secondary px-2.5 py-1 rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral max-w-none">
          {post.content.split("\n\n").map((block, idx) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl font-semibold mt-8 mb-3">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter(Boolean);
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
                  {items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: formatMarkdown(item.replace(/^- /, "")) }} />
                  ))}
                </ul>
              );
            }
            if (block.match(/^\d+\. /)) {
              const items = block.split("\n").filter(Boolean);
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-1 text-sm leading-relaxed">
                  {items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: formatMarkdown(item.replace(/^\d+\. /, "")) }} />
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="text-sm leading-relaxed text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: formatMarkdown(block) }} />
            );
          })}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-10 px-6 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Khám phá sản phẩm The Sermi
          </Link>
        </div>
      </article>
    </div>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}
