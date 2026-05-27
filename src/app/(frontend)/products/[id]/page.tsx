"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  ShoppingBag,
  Minus,
  Plus,
  Check,
  Truck,
  RotateCcw,
  Wallet,
  Ruler,
} from "lucide-react";
import { getProductById, getUniqueColors, getAvailableSizes, PRODUCTS } from "@/lib/mock-data";
import { formatPrice, cn, getColorHex } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import ProductCard from "@/components/product/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("description");

  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="headline text-3xl md:text-4xl mb-4">Sản phẩm không tồn tại</h1>
        <Link
          href="/products"
          className="inline-flex items-center text-xs uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
        >
          Quay lại bộ sưu tập
        </Link>
      </div>
    );
  }

  const colors = getUniqueColors(product);
  const currentColor = selectedColor || colors[0];
  const availableSizes = getAvailableSizes(product, currentColor);
  const currentSize =
    selectedSize && availableSizes.includes(selectedSize)
      ? selectedSize
      : availableSizes[0] || "";

  const selectedVariant = product.variants.find(
    (v) => v.color === currentColor && v.size === currentSize
  );

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category && p.status === "active"
  ).slice(0, 4);

  const sections = [
    {
      id: "description",
      title: "Mô tả sản phẩm",
      content: product.description || "Sản phẩm chất lượng cao từ The Sermi.",
    },
    {
      id: "fit",
      title: "Form dáng & chất liệu",
      content: `Form: Regular fit · Chất liệu: ${product.material || "Cao cấp"}. Vừa vặn cho vóc dáng đàn ông Việt — không quá ôm, không quá rộng.`,
    },
    {
      id: "care",
      title: "Hướng dẫn bảo quản",
      content: "Giặt máy nhiệt độ thấp 30°C · Không tẩy · Phơi trong bóng râm · Là ủi ở mức nhiệt thấp · Không vắt mạnh.",
    },
    {
      id: "shipping",
      title: "Vận chuyển & đổi trả",
      content: "Miễn phí giao hàng cho đơn từ 500.000đ · Đổi trả miễn phí trong 7 ngày · Giao hàng toàn quốc 2–4 ngày làm việc.",
    },
  ];

  return (
    <>
      <div className="container py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="caption mb-6 md:mb-10 flex items-center gap-2">
          <Link href="/" className="hover:text-foreground transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* GALLERY — left, 7 cols */}
          <div className="lg:col-span-7">
            {/* Mobile thumbs row + main */}
            <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-4">
              {/* Thumbs */}
              {product.images.length > 1 && (
                <div className="flex lg:flex-col gap-2 lg:w-20 shrink-0 overflow-x-auto lg:overflow-visible">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={cn(
                        "relative w-16 h-20 lg:w-20 lg:h-24 shrink-0 overflow-hidden border transition-colors",
                        selectedImage === idx
                          ? "border-foreground"
                          : "border-transparent hover:border-border"
                      )}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}

              {/* Main */}
              <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-secondary">
                {product.images[selectedImage] ? (
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center caption">
                    Không có ảnh
                  </div>
                )}
                {product.tags.includes("new") && (
                  <span className="absolute top-4 left-4 bg-white text-foreground text-[10px] font-medium uppercase tracking-[0.18em] px-3 py-1.5">
                    Mới
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* INFO — right, 5 cols, sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <p className="eyebrow mb-3">{product.category}</p>
            <h1 className="headline text-3xl md:text-4xl lg:text-5xl mb-4">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-medium mb-6">
              {selectedVariant ? formatPrice(selectedVariant.sellPrice) : formatPrice(product.basePrice)}
            </p>

            <div className="border-t border-border my-6" />

            {/* Color selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-[0.18em] font-medium">
                  Màu: <span className="text-muted-foreground normal-case tracking-normal ml-1">{currentColor}</span>
                </p>
              </div>
              <div className="flex gap-2.5 flex-wrap">
                {colors.map((color) => {
                  const hex = getColorHex(color);
                  const isLight =
                    hex.toLowerCase() === "#ffffff" || hex.toLowerCase() === "#f5f1e8";
                  const isActive = currentColor === color;
                  return (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColor(color);
                        setSelectedSize("");
                      }}
                      title={color}
                      aria-label={color}
                      className={cn(
                        "relative w-9 h-9 rounded-full transition-all",
                        isActive && "ring-2 ring-offset-2 ring-foreground"
                      )}
                      style={{ backgroundColor: hex }}
                    >
                      {isLight && (
                        <span className="absolute inset-0 rounded-full border border-border" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-[0.18em] font-medium">
                  Size: <span className="text-muted-foreground normal-case tracking-normal ml-1">{currentSize}</span>
                </p>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" />
                  Bảng size
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.variants
                  .filter((v) => v.color === currentColor)
                  .map((v) => (
                    <button
                      key={v.size}
                      onClick={() => setSelectedSize(v.size)}
                      disabled={v.stockAvailable <= 0}
                      className={cn(
                        "h-11 border text-sm font-medium transition-colors",
                        currentSize === v.size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary",
                        v.stockAvailable <= 0 && "opacity-30 cursor-not-allowed line-through"
                      )}
                    >
                      {v.size}
                    </button>
                  ))}
              </div>
              {selectedVariant && selectedVariant.stockAvailable <= 5 && selectedVariant.stockAvailable > 0 && (
                <p className="caption mt-2 text-foreground">
                  Chỉ còn {selectedVariant.stockAvailable} sản phẩm
                </p>
              )}
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-stretch gap-3 mb-4">
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Giảm"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Tăng"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedVariant || selectedVariant.stockAvailable <= 0}
                className={cn(
                  "flex-1 h-12 font-medium text-sm uppercase tracking-[0.12em] flex items-center justify-center gap-2 transition-colors",
                  added
                    ? "bg-emerald-700 text-white"
                    : "bg-primary text-primary-foreground hover:bg-brand-dark",
                  (!selectedVariant || selectedVariant.stockAvailable <= 0) &&
                    "opacity-40 cursor-not-allowed"
                )}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Đã thêm
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Thêm vào giỏ
                  </>
                )}
              </button>
            </div>

            {/* Policies strip */}
            <div className="mt-6 grid grid-cols-3 gap-2 text-center border-y border-border py-4">
              <div className="flex flex-col items-center gap-1.5">
                <Truck className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                <p className="caption">Miễn phí ship 500K+</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                <p className="caption">Đổi trả 7 ngày</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Wallet className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                <p className="caption">Thanh toán COD</p>
              </div>
            </div>

            {/* Accordion details */}
            <div className="mt-8 divide-y divide-border border-y border-border">
              {sections.map((sec) => {
                const isOpen = openSection === sec.id;
                return (
                  <div key={sec.id}>
                    <button
                      onClick={() => setOpenSection(isOpen ? null : sec.id)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs uppercase tracking-[0.18em] font-medium">
                        {sec.title}
                      </span>
                      <span className="text-xl font-light leading-none">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <p className="text-sm text-muted-foreground leading-relaxed pb-5 max-w-prose">
                        {sec.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="container py-20 md:py-24 mt-12 border-t border-border">
          <div className="text-center mb-10 md:mb-14">
            <p className="eyebrow mb-3">Có thể bạn quan tâm</p>
            <h2 className="headline text-3xl md:text-5xl">Phối cùng item này</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
