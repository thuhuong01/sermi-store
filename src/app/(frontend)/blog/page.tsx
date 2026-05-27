import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Tạp chí — The Sermi",
  description: "Phong cách, xu hướng và gợi ý phối đồ cho đàn ông Việt hiện đại.",
};

const COVERS = [
  "1490481651871-ab68de25d43d",
  "1521572163474-6864f9cf17ab",
  "1483985988355-763728e1935b",
  "1507003211169-0a1dd7228f2d",
  "1492447166138-50c3889fccb1",
  "1488161628813-04466f872be2",
];

export default function BlogPage() {
  const posts = getAllPosts();
  const [feature, ...rest] = posts;

  return (
    <>
      {/* Editorial header */}
      <section className="border-b border-border bg-cream/40">
        <div className="container py-12 md:py-16 text-center">
          <p className="eyebrow mb-3">Tạp chí Sermi</p>
          <h1 className="headline text-4xl md:text-6xl mb-4">
            Phong cách,<br />
            <span className="italic">không hợp thời.</span>
          </h1>
          <p className="lead max-w-xl mx-auto">
            Câu chuyện về vải, đường may và cách đàn ông Việt hiện đại mặc đẹp mỗi ngày.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        {/* Featured post — hero card */}
        {feature && (
          <Link
            href={`/blog/${feature.slug}`}
            className="group block mb-16 md:mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={`https://images.unsplash.com/photo-${COVERS[0]}?w=1400&q=80`}
                  alt={feature.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="eyebrow mb-3">
                  {new Date(feature.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {" · "}
                  Bài đọc nổi bật
                </p>
                <h2 className="headline text-3xl md:text-4xl lg:text-5xl mb-4 transition-colors group-hover:text-primary">
                  {feature.title}
                </h2>
                <p className="lead mb-6 line-clamp-3">{feature.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 group-hover:opacity-70 transition-opacity">
                  Đọc bài viết →
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Rest — 3-col magazine grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-16">
            {rest.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-5">
                  <Image
                    src={`https://images.unsplash.com/photo-${COVERS[(idx + 1) % COVERS.length]}?w=900&q=80`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="eyebrow mb-2">
                  {new Date(post.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="headline text-xl md:text-2xl mb-2 transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex gap-3 flex-wrap">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="caption uppercase tracking-[0.15em]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
