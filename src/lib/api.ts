import { Product, ProductVariant } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://smm.thesermi.com";

interface APIProduct {
  id: string;
  sku: string;
  name: string;
  category: string | null;
  material: string | null;
  description: string | null;
  basePrice: number | null;
  status: string;
  tags: string; // JSON string
  images: string; // JSON string
  variants: APIVariant[];
  createdAt: string;
}

interface APIVariant {
  id: string;
  productId: string;
  sku: string;
  color: string;
  size: string;
  costPrice: number | null;
  sellPrice: number | null;
  barcode: string | null;
  status: string;
  stockAvailable: number;
}

function mapProduct(raw: APIProduct): Product {
  return {
    id: raw.id,
    sku: raw.sku,
    name: raw.name,
    category: raw.category || "",
    material: raw.material || "",
    description: raw.description || "",
    basePrice: raw.basePrice || 0,
    status: raw.status,
    tags: safeParseJSON(raw.tags, []),
    images: safeParseJSON(raw.images, []),
    variants: raw.variants
      .filter((v) => v.status === "active")
      .map((v) => ({
        id: v.id,
        sku: v.sku,
        color: v.color,
        size: v.size,
        sellPrice: v.sellPrice || 0,
        stockAvailable: v.stockAvailable,
        status: v.status,
      })),
  };
}

function safeParseJSON<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

export async function fetchProducts(params?: {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<{ products: Product[]; total: number }> {
  try {
    const searchParams = new URLSearchParams();
    searchParams.set("status", "active");
    if (params?.category) searchParams.set("category", params.category);
    if (params?.search) searchParams.set("search", params.search);
    if (params?.page) searchParams.set("page", String(params.page));
    if (params?.limit) searchParams.set("limit", String(params.limit));

    const res = await fetch(`${API_BASE}/api/products?${searchParams.toString()}`, {
      next: { revalidate: 60 }, // cache 60s
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const json = await res.json();
    const products = (json.data as APIProduct[]).map(mapProduct);
    return { products, total: json.total };
  } catch (error) {
    console.error("[API] fetchProducts failed:", error);
    // Fallback to mock data
    const { PRODUCTS } = await import("./mock-data");
    let filtered = PRODUCTS.filter((p) => p.status === "active");
    if (params?.category) filtered = filtered.filter((p) => p.category === params.category);
    if (params?.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(q) || p.material?.toLowerCase().includes(q)
      );
    }
    return { products: filtered, total: filtered.length };
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE}/api/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const raw = await res.json() as APIProduct;
    return mapProduct(raw);
  } catch (error) {
    console.error("[API] fetchProductById failed:", error);
    // Fallback to mock data
    const { getProductById } = await import("./mock-data");
    return getProductById(id) || null;
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const { products } = await fetchProducts({ limit: 100 });
    const categories = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
    return categories;
  } catch {
    return ["Sơ mi nam", "Sơ mi nữ", "Sơ mi unisex"];
  }
}
