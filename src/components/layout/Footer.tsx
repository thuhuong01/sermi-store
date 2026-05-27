"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-14 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow text-primary-foreground/60 mb-4">Bản tin Sermi</p>
            <h3 className="headline text-3xl md:text-4xl mb-3">
              Đăng ký nhận tin
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md mx-auto">
              Tin tức bộ sưu tập mới, ưu đãi độc quyền và gợi ý phối đồ — gửi đến hộp thư của bạn.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-sm text-primary-foreground bg-primary-foreground/10 px-5 py-3 rounded-full">
                <Mail className="w-4 h-4" />
                Cảm ơn bạn đã đăng ký!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="flex-1 h-12 px-4 bg-transparent border border-primary-foreground/30 rounded-lg text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-8 bg-white text-primary font-medium text-sm rounded-lg hover:bg-cream transition-colors uppercase tracking-[0.12em]"
                >
                  Đăng ký
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Brand block */}
        <div className="col-span-2 md:col-span-4 lg:col-span-4">
          <h3 className="brand-wordmark text-3xl mb-4">
            The <span className="font-extrabold italic">Ser.mi</span>
          </h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Chuyên sơ mi nam · nữ · unisex và dịch vụ đặt may theo nhóm.
            Chất liệu chọn lọc, thiết kế tối giản, vừa vặn cho người Việt.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 inline-flex items-center justify-center border border-primary-foreground/20 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 inline-flex items-center justify-center border border-primary-foreground/20 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 inline-flex items-center justify-center border border-primary-foreground/20 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="lg:col-span-2">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground mb-4">
            Mua sơ mi
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link href="/products?category=Sơ mi nam" className="hover:text-primary-foreground transition-colors">Sơ mi nam</Link></li>
            <li><Link href="/products?category=Sơ mi nữ" className="hover:text-primary-foreground transition-colors">Sơ mi nữ</Link></li>
            <li><Link href="/products?category=Sơ mi unisex" className="hover:text-primary-foreground transition-colors">Sơ mi unisex</Link></li>
            <li><Link href="/products" className="hover:text-primary-foreground transition-colors">Tất cả sản phẩm</Link></li>
          </ul>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground mt-6 mb-4">
            Dịch vụ
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link href="/dat-may" className="hover:text-primary-foreground transition-colors">Đặt may theo nhóm</Link></li>
            <li><Link href="/dat-may" className="hover:text-primary-foreground transition-colors">Đồng phục công ty</Link></li>
            <li><Link href="/dat-may" className="hover:text-primary-foreground transition-colors">Sơ mi gia đình</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground mb-4">
            Hỗ trợ
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li>Đổi trả trong 7 ngày</li>
            <li>Miễn phí giao hàng đơn từ 500.000đ</li>
            <li>Hướng dẫn chọn size</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-4 lg:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground mb-4">
            Liên hệ
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li>
              <span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5">Hotline</span>
              <a href="tel:0123456789" className="text-primary-foreground hover:opacity-70 transition-opacity">
                0123 456 789
              </a>
            </li>
            <li>
              <span className="text-primary-foreground/50 text-xs uppercase tracking-wider block mb-0.5 mt-3">Email</span>
              <a href="mailto:contact@thesermi.com" className="text-primary-foreground hover:opacity-70 transition-opacity">
                contact@thesermi.com
              </a>
            </li>
            <li className="pt-3 leading-relaxed">
              123 Đường Lê Lợi, Quận 1<br />
              TP. Hồ Chí Minh, Việt Nam
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} The Sermi — Crafted in Vietnam.</p>
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-[0.15em]">Thanh toán:</span>
            <span className="px-2 py-1 border border-primary-foreground/20 rounded text-[10px] font-semibold">VISA</span>
            <span className="px-2 py-1 border border-primary-foreground/20 rounded text-[10px] font-semibold">MASTER</span>
            <span className="px-2 py-1 border border-primary-foreground/20 rounded text-[10px] font-semibold">MOMO</span>
            <span className="px-2 py-1 border border-primary-foreground/20 rounded text-[10px] font-semibold">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
