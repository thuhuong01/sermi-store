"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/mock-data";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, X, Search } from "lucide-react";

const PRICE_RANGES = [
  { label: "Tất cả", min: 0, max: Infinity },
  { label: "Dưới 300K", min: 0, max: 300000 },
  { label: "300K - 500K", min: 300000, max: 500000 },
  { label: "Trên 500K", min: 500000, max: Infinity },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (p.status !== "active") return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      const range = PRICE_RANGES[selectedPriceRange];
      if (p.basePrice < range.min || p.basePrice > range.max) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.material?.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange(0);
    setSearchQuery("");
  };

  const hasFilters = selectedCategory || selectedPriceRange > 0 || searchQuery;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {selectedCategory || "Tất cả sản phẩm"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">{filtered.length} sản phẩm</p>
        </div>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="lg:hidden inline-flex items-center gap-2 h-10 px-4 border border-border rounded-lg text-sm font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Bộ lọc
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className={cn(
          "w-56 shrink-0 space-y-6",
          showFilter ? "fixed inset-0 z-50 bg-white p-6 overflow-auto lg:static lg:p-0" : "hidden lg:block"
        )}>
          {showFilter && (
            <div className="flex items-center justify-between lg:hidden mb-4">
              <h2 className="text-lg font-semibold">Bộ lọc</h2>
              <button onClick={() => setShowFilter(false)}><X className="w-5 h-5" /></button>
            </div>
          )}

          {/* Search */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tìm kiếm</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tên sản phẩm..."
              className="mt-2 w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Danh mục</label>
            <div className="mt-2 space-y-1">
              <button
                onClick={() => setSelectedCategory("")}
                className={cn(
                  "block w-full text-left text-sm py-1.5 px-2 rounded",
                  !selectedCategory ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                )}
              >
                Tất cả
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={cn(
                    "block w-full text-left text-sm py-1.5 px-2 rounded",
                    selectedCategory === cat.name ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Khoảng giá</label>
            <div className="mt-2 space-y-1">
              {PRICE_RANGES.map((range, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPriceRange(idx)}
                  className={cn(
                    "block w-full text-left text-sm py-1.5 px-2 rounded",
                    selectedPriceRange === idx ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                  )}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-red-600 hover:underline"
            >
              Xoá bộ lọc
            </button>
          )}
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">Không tìm thấy sản phẩm</p>
              <button onClick={clearFilters} className="mt-2 text-sm underline">Xoá bộ lọc</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
