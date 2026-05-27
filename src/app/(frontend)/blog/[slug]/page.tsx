import Image from "next/image";
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
    title: `${post.title} — Tạp chí The Sermi`,
    description: post.excerpt,
  };
}

const COVERS = [
  "1490481651871-ab68de25d43d",
  "1521572163474-6864f9cf17ab",
  "1483985988355-763728e1935b",
  "1507003211169-0a1dd7228f2d",
  "1492447166138-50c3889fccb1",
  "1488161628813-04466f872be2",
];

function pickCover(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return COVERS[hash % COVERS.length];
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cover = pickCover(post.slug);
  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Cover hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-primary">
        <Image
          src={`https://images.unsplash.com/photo-${cover}?w=1800&q=80`}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative h-full container flex flex-col justify-end pb-12 md:pb-16 text-white">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] font-medium opacity-80 hover:opacity-100 transition-opacity mb-6 self-start"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Tạp chí
          </Link>
          <p className="eyebrow text-white/80 mb-4">
            {new Date(post.date).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {post.tags.length > 0 && ` · ${post.tags[0]}`}
          </p>
          <h1 className="display text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <p className="lead text-foreground/80 mb-10 first-letter:font-serif first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
            {post.excerpt}
          </p>

          <div className="prose prose-neutral max-w-none">
            {post.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={idx} className="headline text-2xl md:text-3xl mt-12 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ul key={idx} className="space-y-2 mb-6 text-base leading-relaxed">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: formatMarkdown(item.replace(/^- /, "")),
                        }}
                      />
                    ))}
                  </ul>
                );
              }
              if (block.match(/^\d+\. /)) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ol key={idx} className="list-decimal pl-5 space-y-2 mb-6 text-base leading-relaxed marker:text-muted-foreground marker:font-serif">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: formatMarkdown(item.replace(/^\d+\. /, "")),
                        }}
                      />
                    ))}
                  </ol>
                );
              }
              return (
                <p
                  key={idx}
                  className="text-base leading-[1.8] text-foreground/85 mb-5"
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(block) }}
                />
              );
            })}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="border-t border-border mt-12 pt-8">
              <p className="eyebrow mb-3">Chủ đề</p>
              <div className="flex gap-3 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="caption uppercase tracking-[0.15em]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author / signature */}
          <div className="border-t border-border mt-10 pt-8 text-center">
            <p className="brand-wordmark text-2xl text-primary mb-2">
              The <span className="font-extrabold italic">Ser.mi</span>
            </p>
            <p className="caption">Tạp chí — Phong cách cho đàn ông Việt</p>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-cream/40">
          <div className="container py-16 md:py-20">
            <div className="text-center mb-10 md:mb-14">
              <p className="eyebrow mb-3">Đọc tiếp</p>
              <h2 className="headline text-3xl md:text-4xl">Bài viết khác</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-4">
                    <Image
                      src={`https://images.unsplash.com/photo-${pickCover(p.slug)}?w=900&q=80`}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="eyebrow mb-2">
                    {new Date(p.date).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="headline text-lg md:text-xl transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 text-center">
          <p className="eyebrow text-primary-foreground/60 mb-3">Khám phá</p>
          <h2 className="headline text-3xl md:text-4xl text-primary-foreground mb-6">
            Mặc đẹp, bắt đầu từ đây.
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-12 px-10 bg-cream text-primary font-medium text-sm rounded-full hover:bg-white transition-colors uppercase tracking-[0.12em]"
          >
            Xem sản phẩm The Sermi
          </Link>
        </div>
      </section>
    </article>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}
