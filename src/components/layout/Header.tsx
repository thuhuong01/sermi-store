"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";
import AnnouncementBar from "./AnnouncementBar";

const NAV_LINKS: { href: string; label: string; highlight?: boolean }[] = [
  { href: "/products?category=Sơ mi nam", label: "Sơ mi nam" },
  { href: "/products?category=Sơ mi nữ", label: "Sơ mi nữ" },
  { href: "/products?category=Sơ mi unisex", label: "Unisex" },
  { href: "/dat-may", label: "Đặt may", highlight: true },
  { href: "/products", label: "Tất cả" },
  { href: "/blog", label: "Tạp chí" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = useCartStore((s) => s.totalItems());
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/products" && pathname === "/products") return true;
    return false;
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock scroll when overlay open
  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  // ESC closes search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        {/* Top row */}
        <div className="container grid grid-cols-3 items-center h-16">
          {/* Left — mobile menu / desktop search */}
          <div className="flex items-center justify-start gap-1">
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              className="hidden lg:inline-flex items-center gap-2 p-2 -ml-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSearchOpen(true)}
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.18em]">Tìm kiếm</span>
            </button>
          </div>

          {/* Center — logo */}
          <div className="flex justify-center">
            <Link href="/" className="brand-wordmark text-2xl md:text-3xl text-primary leading-none">
              The <span className="font-extrabold italic">Ser.mi</span>
            </Link>
          </div>

          {/* Right — actions */}
          <div className="flex items-center justify-end gap-1">
            <button
              className="lg:hidden p-2"
              onClick={() => setSearchOpen(true)}
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 -mr-2 hover:opacity-70 transition-opacity"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Desktop category nav row */}
        <nav className="hidden lg:block border-t border-border/60">
          <div className="container flex items-center justify-center gap-10 h-11">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[12px] uppercase tracking-[0.18em] font-medium transition-colors relative py-3",
                  link.highlight
                    ? "text-primary hover:opacity-70"
                    : isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-white flex flex-col">
            <div className="flex items-center justify-between h-16 px-6 border-b border-border">
              <span className="brand-wordmark text-xl text-primary leading-none">
                The <span className="font-extrabold">Ser.mi</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2"
                aria-label="Đóng menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              <p className="eyebrow mb-3">Danh mục</p>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-3 text-base font-medium transition-colors",
                    link.highlight
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                  {link.highlight && (
                    <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Dịch vụ</span>
                  )}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border px-6 py-5 space-y-2 text-sm text-muted-foreground">
              <p>Hotline: <span className="text-foreground font-medium">0123 456 789</span></p>
              <p>contact@thesermi.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSearchOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 bg-white border-b border-border">
            <div className="container py-6 lg:py-10">
              <div className="flex items-center justify-between mb-4">
                <p className="eyebrow">Tìm kiếm</p>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 -mr-2"
                  aria-label="Đóng tìm kiếm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSearch} className="flex items-center gap-3 border-b-2 border-foreground pb-3">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Sơ mi Oxford, linen, lụa..."
                  className="flex-1 bg-transparent border-0 outline-none text-lg md:text-2xl font-serif placeholder:text-muted-foreground/50"
                />
                <button
                  type="submit"
                  className="text-xs uppercase tracking-[0.18em] font-medium hover:opacity-70 transition-opacity"
                >
                  Tìm
                </button>
              </form>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="caption mr-2">Phổ biến:</span>
                {["Sơ mi Oxford", "Sơ mi linen", "Sơ mi lụa", "Sơ mi denim", "Đặt may"].map((kw) => (
                  <Link
                    key={kw}
                    href={kw === "Đặt may" ? "/dat-may" : `/products?search=${encodeURIComponent(kw)}`}
                    onClick={() => setSearchOpen(false)}
                    className="text-xs px-3 py-1.5 border border-border rounded-full hover:border-primary transition-colors"
                  >
                    {kw}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
