"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCartStore();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    ward: "",
    district: "",
    city: "",
    note: "",
  });

  const shippingFee = totalPrice() >= 500000 ? 0 : 30000;
  const total = totalPrice() + shippingFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    router.push("/cart");
    return null;
  }

  if (submitted) {
    return (
      <div className="container py-20 text-center max-w-md mx-auto">
        <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
        <h1 className="text-2xl font-bold mt-4">Đặt hàng thành công!</h1>
        <p className="text-muted-foreground mt-2">
          Cảm ơn bạn đã mua hàng tại The Sermi. Chúng tôi sẽ liên hệ xác nhận đơn hàng qua số điện thoại của bạn.
        </p>
        <div className="mt-6 p-4 bg-secondary rounded-xl text-sm text-left space-y-1">
          <p><strong>Người nhận:</strong> {form.fullName}</p>
          <p><strong>SĐT:</strong> {form.phone}</p>
          <p><strong>Địa chỉ:</strong> {form.address}, {form.ward}, {form.district}, {form.city}</p>
          <p><strong>Thanh toán:</strong> COD (thanh toán khi nhận hàng)</p>
          <p><strong>Tổng:</strong> {formatPrice(total)}</p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 mt-6 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
        >
          Về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-4xl">
      <button onClick={() => router.back()} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="w-4 h-4" /> Quay lại
      </button>

      <h1 className="text-2xl font-bold tracking-tight mb-8">Thanh toán</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Thông tin giao hàng</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Họ tên *</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Số điện thoại *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="0901234567"
                  className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Địa chỉ *</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Số nhà, tên đường"
                className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phường/Xã *</label>
                <input
                  name="ward"
                  value={form.ward}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Quận/Huyện *</label>
                <input
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Tỉnh/TP *</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Ghi chú</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={3}
                placeholder="Ghi chú cho đơn hàng (không bắt buộc)"
                className="w-full px-3 py-2 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Phương thức thanh toán</h2>
            <div className="border-2 border-primary rounded-xl p-4 flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Thanh toán khi nhận hàng (COD)</p>
                <p className="text-xs text-muted-foreground">Trả tiền mặt khi nhận được hàng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="border border-border rounded-xl p-6 sticky top-24 space-y-4">
            <h2 className="font-semibold text-lg">Đơn hàng ({items.length} sản phẩm)</h2>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.variant.id} className="flex gap-3">
                  <div className="relative w-14 h-18 shrink-0 overflow-hidden rounded-md bg-secondary">
                    {item.product.images[0] && (
                      <Image src={item.product.images[0]} alt="" fill className="object-cover" sizes="56px" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-sm">
                    <p className="font-medium line-clamp-1">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{item.variant.color} / {item.variant.size} x{item.quantity}</p>
                    <p className="font-medium mt-0.5">{formatPrice(item.variant.sellPrice * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí giao hàng</span>
                <span>{shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee)}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-semibold text-base">
                <span>Tổng cộng</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Đặt hàng — {formatPrice(total)}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
