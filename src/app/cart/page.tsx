"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/30" />
        <h1 className="text-2xl font-bold mt-4">Giỏ hàng trống</h1>
        <p className="text-muted-foreground mt-2">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center h-12 px-8 mt-6 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold tracking-tight mb-8">Giỏ hàng ({items.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.variant.id} className="flex gap-4 p-4 border border-border rounded-xl">
              <Link href={`/products/${item.product.id}`} className="relative w-24 h-32 shrink-0 overflow-hidden rounded-lg bg-secondary">
                {item.product.images[0] ? (
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="96px" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">No img</div>
                )}
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.product.id}`} className="font-medium text-sm hover:underline line-clamp-1">
                  {item.product.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.variant.color} / {item.variant.size}
                </p>
                <p className="text-sm font-semibold mt-2">{formatPrice(item.variant.sellPrice)}</p>

                <div className="flex items-center justify-between mt-3">
                  <div className="inline-flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.variant.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.variant.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.variant.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="border border-border rounded-xl p-6 sticky top-24 space-y-4">
            <h2 className="font-semibold text-lg">Tổng đơn hàng</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí giao hàng</span>
                <span>{totalPrice() >= 500000 ? "Miễn phí" : formatPrice(30000)}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-semibold text-base">
                <span>Tổng cộng</span>
                <span>{formatPrice(totalPrice() + (totalPrice() >= 500000 ? 0 : 30000))}</span>
              </div>
            </div>
            {totalPrice() < 500000 && (
              <p className="text-xs text-muted-foreground">
                Mua thêm {formatPrice(500000 - totalPrice())} để được miễn phí giao hàng
              </p>
            )}
            <Link
              href="/checkout"
              className="w-full h-12 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              Thanh toán
            </Link>
            <Link
              href="/products"
              className="w-full h-10 border border-border font-medium text-sm rounded-lg hover:bg-secondary transition-colors flex items-center justify-center"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
