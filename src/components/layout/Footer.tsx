import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold tracking-tight uppercase mb-4">The Sermi</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Thương hiệu thời trang nam Việt Nam. Chất lượng vải cao cấp, thiết kế tối giản, giá hợp lý.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Liên kết</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link href="/products" className="hover:text-primary-foreground transition-colors">Sản phẩm</Link></li>
            <li><Link href="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link></li>
            <li><Link href="/products?category=Sơ mi" className="hover:text-primary-foreground transition-colors">Sơ mi</Link></li>
            <li><Link href="/products?category=Polo" className="hover:text-primary-foreground transition-colors">Polo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Hotline: <span className="text-primary-foreground">0123 456 789</span></li>
            <li>Email: <span className="text-primary-foreground">contact@thesermi.com</span></li>
            <li>Đổi trả trong 7 ngày</li>
            <li>Giao hàng toàn quốc</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-xs text-primary-foreground/50">
          &copy; {new Date().getFullYear()} The Sermi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
