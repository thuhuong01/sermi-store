"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, Truck, RotateCcw, Wallet } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice, getColorHex } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container py-32 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground/40" strokeWidth={1.2} />
        <p className="eyebrow mt-6 mb-3">Giỏ hàng trống</p>
        <h1 className="headline text-3xl md:text-4xl mb-4">Chưa có sản phẩm nào</h1>
        <p className="lead max-w-md mx-auto mb-8">
          Hãy bắt đầu khám phá bộ sưu tập — tủ đồ của bạn đang chờ.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center h-12 px-10 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-brand-dark transition-colors uppercase tracking-[0.12em]"
        >
          Khám phá bộ sưu tập
        </Link>
      </div>
    );
  }

  const subtotal = totalPrice();
  const shipping = subtotal >= 500000 ? 0 : 30000;
  const total = subtotal + shipping;
  const remainForFree = Math.max(0, 500000 - subtotal);
  const progress = Math.min(100, (subtotal / 500000) * 100);

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="mb-10 md:mb-14 max-w-3xl">
        <p className="eyebrow mb-3">Giỏ hàng</p>
        <h1 className="headline text-4xl md:text-5xl">
          Bạn đang chọn{" "}
          <span className="italic">{items.length} sản phẩm</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="border-t border-border">
            {items.map((item) => (
              <div
                key={item.variant.id}
                className="flex gap-4 md:gap-6 py-6 border-b border-border"
              >
                <Link
                  href={`/products/${item.product.id}`}
                  className="relative w-24 h-32 md:w-32 md:h-40 shrink-0 overflow-hidden bg-secondary"
                >
                  {item.product.images[0] ? (
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center caption">
                      No img
                    </div>
                  )}
                </Link>

                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="caption uppercase tracking-[0.15em] mb-1">
                        {item.product.category}
                      </p>
                      <Link
                        href={`/products/${item.product.id}`}
                        className="block font-medium text-base hover:text-primary transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-border"
                          style={{ backgroundColor: getColorHex(item.variant.color) }}
                        />
                        <p className="caption">
                          {item.variant.color} · Size {item.variant.size}
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-medium shrink-0 whitespace-nowrap">
                      {formatPrice(item.variant.sellPrice * item.quantity)}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="inline-flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.variant.id, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Giảm"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.variant.id, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-secondary transition-colors"
                        aria-label="Tăng"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.variant.id)}
                      className="caption inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Xoá
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            ← Tiếp tục mua sắm
          </Link>
        </div>

        {/* Summary */}
        <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start">
          <div className="bg-cream/40 border border-border p-6 md:p-8">
            <p className="eyebrow mb-4">Tóm tắt</p>
            <h2 className="headline text-2xl mb-6">Đơn hàng của bạn</h2>

            {/* Free shipping progress */}
            {remainForFree > 0 ? (
              <div className="mb-6">
                <p className="caption mb-2">
                  Mua thêm{" "}
                  <span className="text-foreground font-medium">
                    {formatPrice(remainForFree)}
                  </span>{" "}
                  để được miễn phí giao hàng
                </p>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-6 inline-flex items-center gap-2 caption text-foreground">
                <Truck className="w-3.5 h-3.5" />
                Bạn đã được miễn phí giao hàng
              </div>
            )}

            <div className="space-y-3 text-sm border-y border-border py-4 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí giao hàng</span>
                <span>{shipping === 0 ? "Miễn phí" : formatPrice(shipping)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-6">
              <span className="text-xs uppercase tracking-[0.18em] font-medium">Tổng cộng</span>
              <span className="text-2xl font-medium">{formatPrice(total)}</span>
            </div>

            <Link
              href="/checkout"
              className="w-full h-12 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-[0.12em] hover:bg-brand-dark transition-colors flex items-center justify-center"
            >
              Thanh toán
            </Link>

            {/* Reassurance */}
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" strokeWidth={1.5} />
                <p className="caption text-[10px]">Ship 500K+</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                <p className="caption text-[10px]">Đổi trả 7 ngày</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5" strokeWidth={1.5} />
                <p className="caption text-[10px]">COD</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
