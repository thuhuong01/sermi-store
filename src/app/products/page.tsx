"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, X } from "lucide-react";

const PRICE_RANGES = [
  { label: "Tất cả", min: 0, max: Infinity },
  { label: "Dưới 300.000đ", min: 0, max: 300000 },
  { label: "300.000đ – 500.000đ", min: 300000, max: 500000 },
  { label: "Trên 500.000đ", min: 500000, max: Infinity },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Nổi bật" },
  { value: "newest", label: "Mới nhất" },
  { value: "price-asc", label: "Giá tăng dần" },
  { value: "price-desc", label: "Giá giảm dần" },
];

const CATEGORY_BANNERS: Record<string, { eyebrow: string; tagline: string }> = {
  "Sơ mi nam": {
    eyebrow: "Tinh tế · Chỉn chu",
    tagline: "Sơ mi nam cho phòng họp sáng và quán cà phê chiều — Oxford, linen, premium, chambray.",
  },
  "Sơ mi nữ": {
    eyebrow: "Thanh lịch · Hiện đại",
    tagline: "Sơ mi nữ — lụa, cotton, linen oversized. Vừa vặn cho công sở và những buổi gặp gỡ.",
  },
  "Sơ mi unisex": {
    eyebrow: "Trung tính · Linh hoạt",
    tagline: "Sơ mi phối được cho cả hai — flannel, Cuba, denim, cotton trắng cổ điển.",
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container py-32 text-center text-muted-foreground">Đang tải...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const searchParamQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [searchQuery, setSearchQuery] = useState(searchParamQuery);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilter, setShowFilter] = useState(false);

  // Sync state with url params (back/forward, header search)
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);
  useEffect(() => {
    setSearchQuery(searchParamQuery);
  }, [searchParamQuery]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (p.status !== "active") return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      const range = PRICE_RANGES[selectedPriceRange];
      if (p.basePrice < range.min || p.basePrice > range.max) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) || (p.material?.toLowerCase().includes(q) ?? false);
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sortBy === "price-asc") return a.basePrice - b.basePrice;
      if (sortBy === "price-desc") return b.basePrice - a.basePrice;
      if (sortBy === "newest") {
        const aNew = a.tags.includes("new") ? 1 : 0;
        const bNew = b.tags.includes("new") ? 1 : 0;
        return bNew - aNew;
      }
      // featured: bestseller first
      const aFeat = a.tags.includes("bestseller") ? 1 : 0;
      const bFeat = b.tags.includes("bestseller") ? 1 : 0;
      return bFeat - aFeat;
    });

    return list;
  }, [selectedCategory, selectedPriceRange, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange(0);
    setSearchQuery("");
    setSortBy("featured");
  };

  const hasFilters =
    selectedCategory || selectedPriceRange > 0 || searchQuery || sortBy !== "featured";

  const banner = selectedCategory ? CATEGORY_BANNERS[selectedCategory] : null;

  // Lock scroll for mobile filter
  useEffect(() => {
    document.body.style.overflow = showFilter ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showFilter]);

  const FilterBody = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <p className="eyebrow mb-4">Danh mục</p>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory("")}
            className={cn(
              "block w-full text-left text-sm py-1 transition-colors",
              !selectedCategory
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Tất cả ({PRODUCTS.filter((p) => p.status === "active").length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter(
              (p) => p.status === "active" && p.category === cat.name
            ).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.name)}
                className={cn(
                  "block w-full text-left text-sm py-1 transition-colors",
                  selectedCategory === cat.name
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Price Range */}
      <div>
        <p className="eyebrow mb-4">Mức giá</p>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPriceRange(idx)}
              className={cn(
                "block w-full text-left text-sm py-1 transition-colors",
                selectedPriceRange === idx
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <>
          <div className="border-t border-border" />
          <button
            onClick={clearFilters}
            className="text-xs uppercase tracking-[0.18em] font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            ⟲ Xoá tất cả bộ lọc
          </button>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Editorial header */}
      <section className="border-b border-border bg-cream/40">
        <div className="container py-12 md:py-16 text-center">
          <p className="eyebrow mb-3">
            {banner?.eyebrow || (searchQuery ? `Kết quả: "${searchQuery}"` : "Bộ sưu tập")}
          </p>
          <h1 className="headline text-4xl md:text-6xl mb-4">
            {selectedCategory || "Tất cả sản phẩm"}
          </h1>
          {banner?.tagline && (
            <p className="lead max-w-xl mx-auto">{banner.tagline}</p>
          )}
        </div>
      </section>

      <div className="container py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 md:mb-10 gap-4">
          <p className="caption">
            <span className="text-foreground font-medium">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "sản phẩm" : "sản phẩm"}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilter(true)}
              className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Lọc
            </button>
            <div className="hidden md:flex items-center gap-2">
              <span className="caption">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-transparent border-0 border-b border-foreground py-1 pr-6 cursor-pointer focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-52 shrink-0 sticky top-32 self-start">
            {FilterBody}
          </aside>

          {/* Mobile drawer */}
          {showFilter && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowFilter(false)}
              />
              <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white flex flex-col">
                <div className="flex items-center justify-between h-16 px-6 border-b border-border">
                  <p className="eyebrow">Bộ lọc</p>
                  <button onClick={() => setShowFilter(false)} aria-label="Đóng">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-6">{FilterBody}</div>
                <div className="border-t border-border p-4">
                  <button
                    onClick={() => setShowFilter(false)}
                    className="w-full h-12 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-[0.12em] rounded-full"
                  >
                    Xem {filtered.length} sản phẩm
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="headline text-2xl mb-3">Không tìm thấy sản phẩm</p>
                <p className="text-muted-foreground mb-6">
                  Thử điều chỉnh bộ lọc để xem thêm lựa chọn.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  ⟲ Xoá bộ lọc
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
