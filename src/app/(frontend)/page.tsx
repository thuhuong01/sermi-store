import Image from "next/image";
import Link from "next/link";
import { Sparkles, Ruler, Scissors } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts, getNewProducts } from "@/lib/mock-data";
import { getLatestPosts } from "@/lib/blog";

const SHIRT_CATEGORIES = [
  {
    name: "Sơ mi nam",
    href: "/products?category=Sơ mi nam",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=80",
    eyebrow: "Cho nam",
  },
  {
    name: "Sơ mi nữ",
    href: "/products?category=Sơ mi nữ",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&q=80",
    eyebrow: "Cho nữ",
  },
  {
    name: "Unisex",
    href: "/products?category=Sơ mi unisex",
    image: "https://images.unsplash.com/photo-1599577180598-79b4a5c5c80c?w=900&q=80",
    eyebrow: "Cho cả hai",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newProducts = getNewProducts();
  const latestPosts = getLatestPosts(3);

  return (
    <>
      {/* HERO — editorial full-bleed */}
      <section className="relative h-[80vh] min-h-[560px] lg:min-h-[640px] overflow-hidden bg-primary">
        <Image
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1800&q=80"
          alt="The Sermi — Thời trang nam Việt"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/80" />
        <div className="relative h-full container flex flex-col justify-end pb-12 md:pb-20 text-primary-foreground">
          <p className="eyebrow text-primary-foreground/80 mb-4">Chuyên sơ mi · Bộ sưu tập 2025</p>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] max-w-4xl text-primary-foreground">
            Sơ mi —<br />
            <span className="italic font-extrabold">tinh tế</span> cho<br />
            người Việt hiện đại.
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-primary font-medium text-sm rounded-full hover:bg-cream transition-colors uppercase tracking-[0.12em]"
            >
              Khám phá bộ sưu tập
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center h-12 px-6 text-primary-foreground font-medium text-sm hover:opacity-70 transition-opacity uppercase tracking-[0.12em] underline-offset-4 hover:underline"
            >
              Tạp chí Sermi →
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND VALUES — minimal hairline */}
      <section className="border-b border-border">
        <div className="container py-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            {
              icon: Sparkles,
              title: "Chỉ tập trung sơ mi",
              text: "Một ngách — một sản phẩm hoàn hảo. Cotton, linen, lụa, oxford — chuyên sâu cho mỗi loại sơ mi.",
            },
            {
              icon: Ruler,
              title: "Form dáng chuẩn Việt",
              text: "Sơ mi nam · nữ · unisex — thiết kế riêng cho vóc dáng người Việt, vừa vặn không bó.",
            },
            {
              icon: Scissors,
              title: "Đặt may theo nhóm",
              text: "Sơ mi đồng phục công ty, gia đình, sự kiện — từ 5 chiếc, may đo theo size từng người.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="px-2 py-6 md:py-2 md:px-8 first:pt-0 md:first:pt-2 first:pl-0">
              <Icon className="w-5 h-5 mb-3 text-primary" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID — 3 gender + service banner */}
      <section className="container py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Mua sơ mi</p>
            <h2 className="headline text-3xl md:text-5xl">Theo phong cách của bạn</h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex text-xs uppercase tracking-[0.18em] font-medium hover:opacity-70 transition-opacity"
          >
            Tất cả →
          </Link>
        </div>

        {/* 3 gender categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {SHIRT_CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-secondary"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-white">
                <span className="eyebrow text-white/80">{cat.eyebrow}</span>
                <h3 className="brand-wordmark text-3xl md:text-4xl mt-2">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Service banner: Đặt may theo nhóm */}
        <Link
          href="/dat-may"
          className="group relative block mt-5 overflow-hidden bg-cream"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px] md:min-h-[340px]">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1400&q=80"
                alt="Đặt may theo nhóm"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
              <p className="eyebrow mb-3 inline-flex items-center gap-2">
                <Scissors className="w-3.5 h-3.5" />
                Dịch vụ đặt may
              </p>
              <h3 className="headline text-3xl md:text-4xl lg:text-5xl mb-4">
                Sơ mi cho nhóm,<br />
                <span className="italic">cho gia đình.</span>
              </h3>
              <p className="lead text-foreground/70 mb-6 max-w-md">
                Đồng phục công ty · Sự kiện gia đình · Cưới hỏi · Đội nhóm.
                Từ 5 chiếc, may đo theo size từng người.
              </p>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 self-start group-hover:opacity-70 transition-opacity">
                Tìm hiểu dịch vụ →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* BESTSELLERS */}
      <section className="container py-20 md:py-24 border-t border-border">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Yêu thích nhất</p>
            <h2 className="headline text-3xl md:text-5xl">Bán chạy</h2>
          </div>
          <Link
            href="/products"
            className="text-xs uppercase tracking-[0.18em] font-medium hover:opacity-70 transition-opacity"
          >
            Xem tất cả →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BRAND STORY — split image + copy */}
      <section className="bg-cream">
        <div className="container py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80"
              alt="Crafted in Vietnam"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Một ngách · Một chuyên môn</p>
            <h2 className="headline text-4xl md:text-5xl lg:text-6xl mb-6">
              Chỉ làm sơ mi.<br />
              <span className="italic">Làm đến tốt nhất.</span>
            </h2>
            <p className="lead mb-4">
              The Sermi tin rằng một chiếc sơ mi tốt là khởi đầu của tủ đồ tốt — cho cả nam, nữ và những ai
              chuộng sự trung tính.
            </p>
            <p className="lead">
              Chúng tôi không làm cả tủ đồ — chỉ tập trung sơ mi. Cotton, linen, lụa, chambray, denim — mỗi
              chất liệu được tuyển chọn, may thủ công tại Việt Nam, kiểm tra từng đường kim.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 mt-8 text-sm font-medium uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              <span className="divider" />
              Câu chuyện thương hiệu
            </Link>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      {newProducts.length > 0 && (
        <section className="container py-20 md:py-24">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="eyebrow mb-3">Vừa cập bến</p>
              <h2 className="headline text-3xl md:text-5xl">Mới về trong tuần</h2>
            </div>
            <Link
              href="/products"
              className="text-xs uppercase tracking-[0.18em] font-medium hover:opacity-70 transition-opacity"
            >
              Xem thêm →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {newProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* LOOKBOOK MOMENT */}
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=1800&q=80"
          alt="Lookbook"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative h-full container flex items-center">
          <div className="max-w-xl text-white">
            <p className="eyebrow text-white/80 mb-4">Lookbook</p>
            <h2 className="display text-4xl md:text-6xl text-white">
              Một chiếc sơ mi,<br />
              <span className="italic">vô số phong cách.</span>
            </h2>
            <p className="mt-6 text-white/80 text-base leading-relaxed max-w-md">
              Sáng phòng họp với Oxford trắng, chiều cà phê cùng linen, cuối tuần thư giãn với chambray —
              sơ mi The Sermi đi cùng bạn cả ngày.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center h-12 px-8 mt-8 bg-white text-primary font-medium text-sm rounded-full hover:bg-cream transition-colors uppercase tracking-[0.12em]"
            >
              Mua theo phong cách
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="container py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Tạp chí Sermi</p>
            <h2 className="headline text-3xl md:text-5xl">Bài đọc mới</h2>
          </div>
          <Link
            href="/blog"
            className="text-xs uppercase tracking-[0.18em] font-medium hover:opacity-70 transition-opacity"
          >
            Tất cả bài viết →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {latestPosts.map((post, idx) => {
            const covers = ["1490481651871-ab68de25d43d", "1521572163474-6864f9cf17ab", "1483985988355-763728e1935b"];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-5">
                  <Image
                    src={`https://images.unsplash.com/photo-${covers[idx % 3]}?w=900&q=80`}
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
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA — navy brand */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28 text-center">
          <p className="eyebrow text-primary-foreground/60 mb-4">Bắt đầu hôm nay</p>
          <h2 className="display text-4xl md:text-6xl text-primary-foreground mb-6">
            Tủ đồ của bạn,<br />
            <span className="italic">bắt đầu từ đây.</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto mb-8">
            Miễn phí giao hàng cho đơn từ 500.000đ · Đổi trả 7 ngày · Thanh toán COD
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-12 px-10 bg-cream text-primary font-medium text-sm rounded-full hover:bg-white transition-colors uppercase tracking-[0.12em]"
          >
            Mua sắm ngay
          </Link>
        </div>
      </section>
    </>
  );
}
