import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Map Vietnamese color names → hex for swatch rendering.
 * Falls back to neutral gray if not found.
 */
const COLOR_MAP: Record<string, string> = {
  "trắng": "#FFFFFF",
  "trang": "#FFFFFF",
  "đen": "#111111",
  "den": "#111111",
  "xám": "#9CA3AF",
  "xam": "#9CA3AF",
  "navy": "#1E3A8A",
  "xanh nhạt": "#BAD7E6",
  "xanh nhat": "#BAD7E6",
  "xanh đậm": "#1E3A8A",
  "xanh dam": "#1E3A8A",
  "xanh rêu": "#4A5D32",
  "xanh reu": "#4A5D32",
  "be": "#D4B996",
  "kem": "#F5F1E8",
  "đỏ": "#B91C1C",
  "do": "#B91C1C",
  "nâu": "#6B4423",
  "nau": "#6B4423",
  "vàng": "#D4A017",
  "vang": "#D4A017",
  "hồng": "#F4ACB7",
  "hong": "#F4ACB7",
  "hồng nhạt": "#F4ACB7",
  "hong nhat": "#F4ACB7",
  "sọc xanh": "#1E3A8A",
  "soc xanh": "#1E3A8A",
  "sọc": "#94A3B8",
  "soc": "#94A3B8",
  "in hoa kem": "#F5F1E8",
  "in hoa": "#F5F1E8",
};

export function getColorHex(colorName: string): string {
  const key = colorName.trim().toLowerCase();
  return COLOR_MAP[key] || "#9CA3AF";
}
