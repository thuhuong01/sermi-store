import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts, getNewProducts } from "@/lib/mock-data";
import { getLatestPosts } from "@/lib/blog";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newProducts = getNewProducts();
  const latestPosts = getLatestPosts(2);

  return (
    <>
      {/* Hero Section — Brand Introduction */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Thương hiệu thời trang nam Việt Nam
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              The Sermi
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Chất liệu cao cấp. Thiết kế tối giản. Giá hợp lý.<br />
              Tạo ra những sản phẩm bền đẹp, vừa vặn cho đàn ông Việt.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
              >
                Khám phá sản phẩm
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center h-12 px-8 border border-border font-medium text-sm rounded-lg hover:bg-secondary transition-colors"
              >
                Đọc Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl">🧵</div>
            <h3 className="font-semibold">Chất liệu chọn lọc</h3>
            <p className="text-sm text-muted-foreground">
              Cotton, linen, oxford — mỗi chất liệu được lựa chọn kỹ lưỡng cho sự thoải mái và bền bỉ.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">✂️</div>
            <h3 className="font-semibold">Form dáng chuẩn Việt</h3>
            <p className="text-sm text-muted-foreground">
              Thiết kế riêng cho vóc dáng đàn ông Việt Nam, không quá ôm, không quá rộng.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">💰</div>
            <h3 className="font-semibold">Giá hợp lý</h3>
            <p className="text-sm text-muted-foreground">
              Bán trực tiếp, không qua trung gian. Chất lượng cao cấp với mức giá dễ tiếp cận.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products (Bestsellers) */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Sản phẩm chính yếu</h2>
          <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Xem tất cả &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Hàng mới về</h2>
            <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Xem tất cả &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Blog Preview */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Từ Blog</h2>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Xem tất cả &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 border border-border rounded-xl hover:border-primary transition-colors"
            >
              <time className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="text-lg font-semibold mt-1 group-hover:underline">{post.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container py-16">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Miễn phí giao hàng đơn từ 500.000đ</h2>
          <p className="mt-3 text-primary-foreground/70">Đổi trả trong 7 ngày &bull; Thanh toán khi nhận hàng (COD)</p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-12 px-8 mt-6 bg-white text-primary font-medium text-sm rounded-lg hover:bg-white/90 transition-colors"
          >
            Mua sắm ngay
          </Link>
        </div>
      </section>
    </>
  );
}
