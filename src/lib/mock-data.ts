import { Product } from "./types";

export const CATEGORIES = [
  { slug: "so-mi", name: "Sơ mi", description: "Sơ mi nam thanh lịch, phù hợp công sở và dạo phố" },
  { slug: "polo", name: "Polo", description: "Áo polo trẻ trung, năng động" },
  { slug: "thun", name: "Thun", description: "Áo thun basic, dễ phối đồ" },
  { slug: "quan", name: "Quần", description: "Quần kaki, jeans, short đa phong cách" },
  { slug: "khoac", name: "Khoác", description: "Áo khoác phong cách, giữ ấm tốt" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    sku: "SM-001",
    name: "Áo Sơ Mi Oxford",
    category: "Sơ mi",
    material: "Oxford",
    description: "Áo sơ mi Oxford form regular fit, chất liệu cotton Oxford dày dặn, thoáng mát. Thiết kế cổ button-down cổ điển, phù hợp mặc công sở lẫn dạo phố. Đường may tỉ mỉ, bo cổ và tay áo chắc chắn.",
    basePrice: 420000,
    status: "active",
    tags: ["bestseller", "new"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v1", sku: "SM-001-V1-M", color: "Trắng", size: "M", sellPrice: 420000, stockAvailable: 15, status: "active" },
      { id: "v2", sku: "SM-001-V1-L", color: "Trắng", size: "L", sellPrice: 420000, stockAvailable: 12, status: "active" },
      { id: "v3", sku: "SM-001-V1-XL", color: "Trắng", size: "XL", sellPrice: 420000, stockAvailable: 8, status: "active" },
      { id: "v4", sku: "SM-001-V2-M", color: "Xanh nhạt", size: "M", sellPrice: 420000, stockAvailable: 10, status: "active" },
      { id: "v5", sku: "SM-001-V2-L", color: "Xanh nhạt", size: "L", sellPrice: 420000, stockAvailable: 7, status: "active" },
    ],
  },
  {
    id: "2",
    sku: "POLO-001",
    name: "Áo Polo Classic",
    category: "Polo",
    material: "Cotton 100%",
    description: "Áo polo classic với chất liệu cotton 100% mềm mại, thấm hút mồ hôi tốt. Cổ bẻ cứng cáp, bo tay áo ôm gọn. Phù hợp đi làm, đi chơi hay chơi thể thao.",
    basePrice: 350000,
    status: "active",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc44e809032?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v6", sku: "POLO-001-V1-S", color: "Trắng", size: "S", sellPrice: 350000, stockAvailable: 20, status: "active" },
      { id: "v7", sku: "POLO-001-V1-M", color: "Trắng", size: "M", sellPrice: 350000, stockAvailable: 18, status: "active" },
      { id: "v8", sku: "POLO-001-V1-L", color: "Trắng", size: "L", sellPrice: 350000, stockAvailable: 15, status: "active" },
      { id: "v9", sku: "POLO-001-V1-XL", color: "Trắng", size: "XL", sellPrice: 350000, stockAvailable: 10, status: "active" },
      { id: "v10", sku: "POLO-001-V2-S", color: "Đen", size: "S", sellPrice: 350000, stockAvailable: 22, status: "active" },
      { id: "v11", sku: "POLO-001-V2-M", color: "Đen", size: "M", sellPrice: 350000, stockAvailable: 19, status: "active" },
      { id: "v12", sku: "POLO-001-V2-L", color: "Đen", size: "L", sellPrice: 350000, stockAvailable: 14, status: "active" },
      { id: "v13", sku: "POLO-001-V2-XL", color: "Đen", size: "XL", sellPrice: 350000, stockAvailable: 11, status: "active" },
      { id: "v14", sku: "POLO-001-V3-M", color: "Navy", size: "M", sellPrice: 350000, stockAvailable: 16, status: "active" },
      { id: "v15", sku: "POLO-001-V3-L", color: "Navy", size: "L", sellPrice: 350000, stockAvailable: 13, status: "active" },
      { id: "v16", sku: "POLO-001-V3-XL", color: "Navy", size: "XL", sellPrice: 350000, stockAvailable: 9, status: "active" },
    ],
  },
  {
    id: "3",
    sku: "AT-001",
    name: "Áo Thun Basic",
    category: "Thun",
    material: "Cotton Compact",
    description: "Áo thun basic form regular, chất liệu cotton compact co giãn nhẹ, mặc thoải mái cả ngày. Cổ tròn bo chắc, không bai giãn sau nhiều lần giặt. Item must-have trong tủ đồ.",
    basePrice: 250000,
    status: "active",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v17", sku: "AT-001-V1-S", color: "Trắng", size: "S", sellPrice: 250000, stockAvailable: 25, status: "active" },
      { id: "v18", sku: "AT-001-V1-M", color: "Trắng", size: "M", sellPrice: 250000, stockAvailable: 20, status: "active" },
      { id: "v19", sku: "AT-001-V1-L", color: "Trắng", size: "L", sellPrice: 250000, stockAvailable: 18, status: "active" },
      { id: "v20", sku: "AT-001-V1-XL", color: "Trắng", size: "XL", sellPrice: 250000, stockAvailable: 12, status: "active" },
      { id: "v21", sku: "AT-001-V2-S", color: "Đen", size: "S", sellPrice: 250000, stockAvailable: 24, status: "active" },
      { id: "v22", sku: "AT-001-V2-M", color: "Đen", size: "M", sellPrice: 250000, stockAvailable: 21, status: "active" },
      { id: "v23", sku: "AT-001-V2-L", color: "Đen", size: "L", sellPrice: 250000, stockAvailable: 17, status: "active" },
      { id: "v24", sku: "AT-001-V2-XL", color: "Đen", size: "XL", sellPrice: 250000, stockAvailable: 13, status: "active" },
      { id: "v25", sku: "AT-001-V3-M", color: "Xám", size: "M", sellPrice: 250000, stockAvailable: 19, status: "active" },
      { id: "v26", sku: "AT-001-V3-L", color: "Xám", size: "L", sellPrice: 250000, stockAvailable: 15, status: "active" },
      { id: "v27", sku: "AT-001-V3-XL", color: "Xám", size: "XL", sellPrice: 250000, stockAvailable: 10, status: "active" },
    ],
  },
  {
    id: "4",
    sku: "QK-001",
    name: "Quần Kaki Slim",
    category: "Quần",
    material: "Kaki",
    description: "Quần kaki slim fit, chất vải kaki co giãn nhẹ, thoải mái vận động. Form dáng ôm vừa phải, tôn dáng mà không bó. Phù hợp công sở và casual.",
    basePrice: 450000,
    status: "active",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v28", sku: "QK-001-V1-29", color: "Be", size: "29", sellPrice: 450000, stockAvailable: 10, status: "active" },
      { id: "v29", sku: "QK-001-V1-30", color: "Be", size: "30", sellPrice: 450000, stockAvailable: 14, status: "active" },
      { id: "v30", sku: "QK-001-V1-31", color: "Be", size: "31", sellPrice: 450000, stockAvailable: 12, status: "active" },
      { id: "v31", sku: "QK-001-V1-32", color: "Be", size: "32", sellPrice: 450000, stockAvailable: 8, status: "active" },
      { id: "v32", sku: "QK-001-V2-29", color: "Đen", size: "29", sellPrice: 450000, stockAvailable: 11, status: "active" },
      { id: "v33", sku: "QK-001-V2-30", color: "Đen", size: "30", sellPrice: 450000, stockAvailable: 15, status: "active" },
      { id: "v34", sku: "QK-001-V2-31", color: "Đen", size: "31", sellPrice: 450000, stockAvailable: 13, status: "active" },
      { id: "v35", sku: "QK-001-V2-32", color: "Đen", size: "32", sellPrice: 450000, stockAvailable: 7, status: "active" },
    ],
  },
  {
    id: "5",
    sku: "AK-001",
    name: "Áo Khoác Bomber",
    category: "Khoác",
    material: "Polyester",
    description: "Áo khoác bomber phong cách, chất liệu polyester chống nước nhẹ. Lớp lót mềm mại, giữ ấm tốt. Thiết kế khóa kéo YKK bền bỉ, túi trong tiện lợi.",
    basePrice: 650000,
    status: "active",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v36", sku: "AK-001-V1-M", color: "Đen", size: "M", sellPrice: 650000, stockAvailable: 8, status: "active" },
      { id: "v37", sku: "AK-001-V1-L", color: "Đen", size: "L", sellPrice: 650000, stockAvailable: 10, status: "active" },
      { id: "v38", sku: "AK-001-V1-XL", color: "Đen", size: "XL", sellPrice: 650000, stockAvailable: 6, status: "active" },
      { id: "v39", sku: "AK-001-V2-M", color: "Xanh rêu", size: "M", sellPrice: 650000, stockAvailable: 5, status: "active" },
      { id: "v40", sku: "AK-001-V2-L", color: "Xanh rêu", size: "L", sellPrice: 650000, stockAvailable: 7, status: "active" },
    ],
  },
  {
    id: "6",
    sku: "QS-001",
    name: "Quần Short Thể Thao",
    category: "Quần",
    material: "Polyester",
    description: "Quần short thể thao, chất liệu polyester nhẹ, nhanh khô. Lưng thun co giãn thoải mái, có túi khóa kéo. Phù hợp tập gym, chạy bộ và mặc hàng ngày.",
    basePrice: 280000,
    status: "active",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v41", sku: "QS-001-V1-M", color: "Đen", size: "M", sellPrice: 280000, stockAvailable: 14, status: "active" },
      { id: "v42", sku: "QS-001-V1-L", color: "Đen", size: "L", sellPrice: 280000, stockAvailable: 12, status: "active" },
      { id: "v43", sku: "QS-001-V1-XL", color: "Đen", size: "XL", sellPrice: 280000, stockAvailable: 9, status: "active" },
      { id: "v44", sku: "QS-001-V2-M", color: "Xám", size: "M", sellPrice: 280000, stockAvailable: 11, status: "active" },
      { id: "v45", sku: "QS-001-V2-L", color: "Xám", size: "L", sellPrice: 280000, stockAvailable: 8, status: "active" },
    ],
  },
  {
    id: "7",
    sku: "POLO-002",
    name: "Áo Polo Premium",
    category: "Polo",
    material: "Pique Cotton",
    description: "Áo polo premium chất liệu pique cotton cao cấp, bề mặt vải có texture đặc trưng. Cổ bẻ sắc nét, logo thêu tinh tế. Phiên bản nâng cấp cho phong cách lịch lãm.",
    basePrice: 490000,
    status: "active",
    tags: ["premium"],
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v46", sku: "POLO-002-V1-M", color: "Trắng", size: "M", sellPrice: 490000, stockAvailable: 7, status: "active" },
      { id: "v47", sku: "POLO-002-V1-L", color: "Trắng", size: "L", sellPrice: 490000, stockAvailable: 9, status: "active" },
      { id: "v48", sku: "POLO-002-V1-XL", color: "Trắng", size: "XL", sellPrice: 490000, stockAvailable: 5, status: "active" },
      { id: "v49", sku: "POLO-002-V2-M", color: "Đen", size: "M", sellPrice: 490000, stockAvailable: 8, status: "active" },
      { id: "v50", sku: "POLO-002-V2-L", color: "Đen", size: "L", sellPrice: 490000, stockAvailable: 10, status: "active" },
      { id: "v51", sku: "POLO-002-V2-XL", color: "Đen", size: "XL", sellPrice: 490000, stockAvailable: 6, status: "active" },
    ],
  },
  {
    id: "8",
    sku: "QJ-001",
    name: "Quần Jeans Slim",
    category: "Quần",
    material: "Denim",
    description: "Quần jeans slim fit, chất denim co giãn thoải mái. Màu wash đẹp, không phai sau nhiều lần giặt. Form ôm vừa, tôn dáng nam tính.",
    basePrice: 520000,
    status: "active",
    tags: ["new", "bestseller"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop",
    ],
    variants: [
      { id: "v52", sku: "QJ-001-V1-29", color: "Xanh đậm", size: "29", sellPrice: 520000, stockAvailable: 9, status: "active" },
      { id: "v53", sku: "QJ-001-V1-30", color: "Xanh đậm", size: "30", sellPrice: 520000, stockAvailable: 13, status: "active" },
      { id: "v54", sku: "QJ-001-V1-31", color: "Xanh đậm", size: "31", sellPrice: 520000, stockAvailable: 11, status: "active" },
      { id: "v55", sku: "QJ-001-V1-32", color: "Xanh đậm", size: "32", sellPrice: 520000, stockAvailable: 7, status: "active" },
      { id: "v56", sku: "QJ-001-V2-30", color: "Xanh nhạt", size: "30", sellPrice: 520000, stockAvailable: 10, status: "active" },
      { id: "v57", sku: "QJ-001-V2-31", color: "Xanh nhạt", size: "31", sellPrice: 520000, stockAvailable: 8, status: "active" },
      { id: "v58", sku: "QJ-001-V2-32", color: "Xanh nhạt", size: "32", sellPrice: 520000, stockAvailable: 6, status: "active" },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category && p.status === "active");
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.tags.includes("bestseller"));
}

export function getNewProducts(): Product[] {
  return PRODUCTS.filter((p) => p.tags.includes("new"));
}

export function getUniqueColors(product: Product): string[] {
  return Array.from(new Set(product.variants.map((v) => v.color)));
}

export function getAvailableSizes(product: Product, color: string): string[] {
  return product.variants
    .filter((v) => v.color === color && v.stockAvailable > 0)
    .map((v) => v.size);
}
