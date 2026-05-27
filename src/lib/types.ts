export interface ProductVariant {
  id: string;
  sku: string;
  color: string;
  size: string;
  sellPrice: number;
  costPrice?: number;
  stockAvailable: number;
  status: string;
}

export type Gender = "Nam" | "Nữ" | "Unisex";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  gender?: Gender;
  material?: string;
  description?: string;
  basePrice: number;
  status: string;
  tags: string[];
  images: string[];
  variants: ProductVariant[];
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CheckoutForm {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  note?: string;
  paymentMethod: "cod";
}
