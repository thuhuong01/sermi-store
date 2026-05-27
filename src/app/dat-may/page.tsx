"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Scissors,
  Users,
  Sparkles,
  Building2,
  Heart,
  PartyPopper,
  Check,
  Phone,
  Mail,
} from "lucide-react";

const OCCASIONS = [
  {
    icon: Building2,
    title: "Đồng phục công ty",
    text: "Sơ mi đồng nhất logo thêu, in lên màng, hoặc may riêng theo bộ nhận diện thương hiệu.",
  },
  {
    icon: Heart,
    title: "Gia đình · Cưới hỏi",
    text: "Bộ sơ mi cùng tone cho cả nhà — chụp ảnh cưới, kỷ niệm, lễ hội mặc đồng phục đẹp.",
  },
  {
    icon: PartyPopper,
    title: "Sự kiện · Đội nhóm",
    text: "Sự kiện công ty, lớp học, đội bóng, hội nhóm — sơ mi đồng phục in chữ/logo theo yêu cầu.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Liên hệ tư vấn",
    text: "Gọi hotline hoặc gửi email — đội tư vấn sẽ hỏi về số lượng, dịp dùng, và phong cách bạn muốn.",
  },
  {
    n: "02",
    title: "Chọn mẫu & vải",
    text: "Bạn chọn từ 8 mẫu sơ mi cơ bản (Oxford, Linen, Cotton, Lụa, Chambray…) hoặc đặt mẫu riêng.",
  },
  {
    n: "03",
    title: "Đo size & duyệt mẫu",
    text: "Chúng tôi gửi bảng size, bạn cung cấp số đo từng người. Mẫu thử được gửi đến trong 5–7 ngày.",
  },
  {
    n: "04",
    title: "Sản xuất & giao hàng",
    text: "May toàn bộ đơn trong 10–14 ngày. Đóng gói cẩn thận, giao tận nơi toàn quốc.",
  },
];

const FEATURES = [
  "Tối thiểu 5 chiếc cho một đơn",
  "May đo theo size từng người",
  "In/thêu logo, chữ, biểu tượng theo yêu cầu",
  "Hơn 30 màu vải để chọn",
  "Giảm giá theo số lượng (từ 10% với đơn 20+)",
  "Bảo hành đường may trong 30 ngày",
];

export default function CustomOrdersPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "5-10",
    occasion: "Đồng phục công ty",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-primary">
        <Image
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1800&q=80"
          alt="Đặt may sơ mi theo nhóm"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/40 to-primary/85" />
        <div className="relative h-full container flex flex-col justify-end pb-12 md:pb-20 text-primary-foreground">
          <p className="eyebrow text-primary-foreground/80 mb-4 inline-flex items-center gap-2">
            <Scissors className="w-3.5 h-3.5" />
            Dịch vụ đặt may
          </p>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] max-w-4xl text-primary-foreground">
            Sơ mi cho<br />
            <span className="italic font-extrabold">nhóm, gia đình,</span><br />
            sự kiện.
          </h1>
          <p className="lead text-primary-foreground/85 max-w-xl mt-6">
            Từ 5 chiếc — may đo theo size từng người, in/thêu logo theo yêu cầu, giao toàn quốc.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#lien-he"
              className="inline-flex items-center justify-center h-12 px-8 bg-cream text-primary font-medium text-sm rounded-full hover:bg-white transition-colors uppercase tracking-[0.12em]"
            >
              Yêu cầu báo giá
            </a>
            <a
              href="tel:0123456789"
              className="inline-flex items-center gap-2 h-12 px-6 text-primary-foreground font-medium text-sm hover:opacity-70 transition-opacity uppercase tracking-[0.12em] underline-offset-4 hover:underline"
            >
              <Phone className="w-4 h-4" /> 0123 456 789
            </a>
          </div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="border-b border-border">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { num: "5+", label: "Số lượng tối thiểu" },
            { num: "30+", label: "Màu vải" },
            { num: "8", label: "Mẫu sơ mi cơ bản" },
            { num: "10–14", label: "Ngày sản xuất" },
          ].map((s) => (
            <div key={s.label} className="px-2 py-6 md:py-2 md:px-8 first:pt-0 md:first:pt-2 first:pl-0 text-center md:text-left">
              <p className="brand-wordmark text-4xl md:text-5xl text-primary leading-none">{s.num}</p>
              <p className="caption mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="container py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-3">Phù hợp với</p>
          <h2 className="headline text-3xl md:text-5xl mb-4">
            Mọi dịp — <span className="italic">mọi đội</span>
          </h2>
          <p className="lead">
            Từ những bộ đồng phục công ty hàng nghìn người đến bộ sơ mi gia đình cho 5 thành viên —
            chúng tôi may được tất cả.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {OCCASIONS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-border p-8 md:p-10 hover:border-primary transition-colors">
              <Icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="headline text-xl md:text-2xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-cream/40 border-y border-border">
        <div className="container py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="eyebrow mb-3">Quy trình</p>
            <h2 className="headline text-3xl md:text-5xl">
              Bốn bước, <span className="italic">đơn giản.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STEPS.map((step, idx) => (
              <div key={step.n} className="relative">
                <p className="brand-wordmark text-5xl md:text-6xl text-primary/30 leading-none mb-4">
                  {step.n}
                </p>
                <h3 className="headline text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-5 w-10 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES + IMAGE */}
      <section className="container py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=1200&q=80"
              alt="Bespoke shirts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Trọn gói dịch vụ
            </p>
            <h2 className="headline text-4xl md:text-5xl lg:text-6xl mb-8">
              Mọi thứ <span className="italic">trong một</span> đơn hàng.
            </h2>
            <ul className="space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-base leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="lien-he" className="bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left — pitch */}
            <div className="lg:col-span-5">
              <p className="eyebrow text-primary-foreground/70 mb-4">Liên hệ tư vấn</p>
              <h2 className="display text-4xl md:text-5xl text-primary-foreground mb-6">
                Bắt đầu<br />
                <span className="italic">đơn đặt may.</span>
              </h2>
              <p className="lead text-primary-foreground/80 mb-8 max-w-md">
                Để lại thông tin — đội tư vấn của Sermi sẽ liên hệ trong vòng 24 giờ
                để tư vấn mẫu, vải và báo giá chi tiết.
              </p>
              <div className="space-y-4 text-sm">
                <a href="tel:0123456789" className="flex items-center gap-3 text-primary-foreground/90 hover:opacity-70 transition-opacity">
                  <Phone className="w-4 h-4" />
                  0123 456 789 — Hotline đặt may
                </a>
                <a href="mailto:datmay@thesermi.com" className="flex items-center gap-3 text-primary-foreground/90 hover:opacity-70 transition-opacity">
                  <Mail className="w-4 h-4" />
                  datmay@thesermi.com
                </a>
                <p className="flex items-center gap-3 text-primary-foreground/70">
                  <Users className="w-4 h-4" />
                  Đội tư vấn: 9:00 – 18:00, T2–T7
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-cream/10 border border-primary-foreground/20 p-10 text-center">
                  <Check className="w-12 h-12 text-cream mx-auto mb-4" strokeWidth={1.5} />
                  <p className="eyebrow text-primary-foreground/70 mb-2">Đã nhận</p>
                  <h3 className="headline text-2xl md:text-3xl text-primary-foreground mb-3">
                    Cảm ơn bạn!
                  </h3>
                  <p className="text-primary-foreground/80 max-w-md mx-auto">
                    Đội tư vấn Sermi sẽ liên hệ trong vòng 24 giờ. Trong khi chờ, bạn có thể xem các mẫu sơ mi tại trang sản phẩm.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-primary-foreground/5 border border-primary-foreground/20 p-6 md:p-10 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 px-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-11 px-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mb-2">
                        Số lượng dự kiến
                      </label>
                      <select
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        className="w-full h-11 px-3 bg-transparent border border-primary-foreground/30 text-primary-foreground focus:border-primary-foreground focus:outline-none transition-colors"
                      >
                        <option className="text-foreground">5-10</option>
                        <option className="text-foreground">10-30</option>
                        <option className="text-foreground">30-100</option>
                        <option className="text-foreground">Trên 100</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mb-2">
                        Mục đích
                      </label>
                      <select
                        value={form.occasion}
                        onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                        className="w-full h-11 px-3 bg-transparent border border-primary-foreground/30 text-primary-foreground focus:border-primary-foreground focus:outline-none transition-colors"
                      >
                        <option className="text-foreground">Đồng phục công ty</option>
                        <option className="text-foreground">Sự kiện gia đình</option>
                        <option className="text-foreground">Cưới hỏi</option>
                        <option className="text-foreground">Đội nhóm / lớp học</option>
                        <option className="text-foreground">Khác</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mb-2">
                      Ghi chú
                    </label>
                    <textarea
                      rows={4}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="Mô tả mẫu sơ mi mong muốn, deadline, yêu cầu thêu/in..."
                      className="w-full px-3 py-2 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-cream text-primary font-medium text-sm rounded-full hover:bg-white transition-colors uppercase tracking-[0.12em]"
                  >
                    Gửi yêu cầu báo giá
                  </button>
                  <p className="caption text-primary-foreground/60 text-center">
                    Bằng việc gửi yêu cầu, bạn đồng ý cho The Sermi liên hệ về dịch vụ đặt may.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED — see existing shirts */}
      <section className="container py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3">Tham khảo</p>
          <h2 className="headline text-3xl md:text-4xl mb-4">
            Hoặc xem <span className="italic">mẫu sẵn có</span>
          </h2>
          <p className="lead mb-8">
            Bạn cũng có thể bắt đầu với những mẫu sơ mi đang bán — nhân số lượng và may riêng theo size cá nhân.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-12 px-10 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-brand-dark transition-colors uppercase tracking-[0.12em]"
          >
            Xem bộ sưu tập
          </Link>
        </div>
      </section>
    </>
  );
}
