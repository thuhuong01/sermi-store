"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ShoppingBag, ChevronLeft, Minus, Plus, Check } from "lucide-react";
import { getProductById, getUniqueColors, getAvailableSizes } from "@/lib/mock-data";
import { formatPrice, cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id as string);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-lg text-muted-foreground">Sản phẩm không tồn tại</p>
        <Link href="/products" className="mt-4 inline-block text-sm underline">Quay lại danh sách</Link>
      </div>
    );
  }

  const colors = getUniqueColors(product);
  const currentColor = selectedColor || colors[0];
  const availableSizes = getAvailableSizes(product, currentColor);
  const currentSize = selectedSize && availableSizes.includes(selectedSize) ? selectedSize : availableSizes[0] || "";

  const selectedVariant = product.variants.find(
    (v) => v.color === currentColor && v.size === currentSize
  );

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <button onClick={() => router.back()} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="w-4 h-4" /> Quay lại
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
            {product.images[selectedImage] ? (
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "relative w-20 h-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                    selectedImage === idx ? "border-primary" : "border-transparent"
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category} &bull; {product.material}</p>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">{product.name}</h1>
            </div>

            <p className="text-2xl font-bold">
              {selectedVariant ? formatPrice(selectedVariant.sellPrice) : formatPrice(product.basePrice)}
            </p>

            {product.description && (
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            )}
          </div>

          {/* Color selector */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Màu: <span className="text-muted-foreground">{currentColor}</span></p>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => { setSelectedColor(color); setSelectedSize(""); }}
                  className={cn(
                    "h-10 px-4 border rounded-lg text-sm font-medium transition-colors",
                    currentColor === color
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary"
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Size: <span className="text-muted-foreground">{currentSize}</span></p>
            <div className="flex gap-2 flex-wrap">
              {product.variants
                .filter((v) => v.color === currentColor)
                .map((v) => (
                  <button
                    key={v.size}
                    onClick={() => setSelectedSize(v.size)}
                    disabled={v.stockAvailable <= 0}
                    className={cn(
                      "h-10 w-14 border rounded-lg text-sm font-medium transition-colors",
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
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Số lượng</p>
            <div className="inline-flex items-center border border-border rounded-lg">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {selectedVariant && (
              <span className="ml-3 text-xs text-muted-foreground">Còn {selectedVariant.stockAvailable} sản phẩm</span>
            )}
          </div>

          {/* Add to cart */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant || selectedVariant.stockAvailable <= 0}
              className={cn(
                "flex-1 h-12 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors",
                added
                  ? "bg-green-600 text-white"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
                (!selectedVariant || selectedVariant.stockAvailable <= 0) && "opacity-50 cursor-not-allowed"
              )}
            >
              {added ? (
                <><Check className="w-4 h-4" /> Đã thêm vào giỏ</>
              ) : (
                <><ShoppingBag className="w-4 h-4" /> Thêm vào giỏ hàng</>
              )}
            </button>
          </div>

          {/* Policies */}
          <div className="mt-8 border-t border-border pt-6 space-y-3 text-sm text-muted-foreground">
            <p>✓ Miễn phí giao hàng đơn từ 500.000đ</p>
            <p>✓ Đổi trả trong 7 ngày</p>
            <p>✓ Thanh toán khi nhận hàng (COD)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
