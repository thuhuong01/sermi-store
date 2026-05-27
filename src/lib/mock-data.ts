import { Product } from "./types";

export const CATEGORIES = [
  { slug: "so-mi-nam", name: "Sơ mi nam", description: "Sơ mi cho phái mạnh — công sở, dạo phố, sự kiện." },
  { slug: "so-mi-nu", name: "Sơ mi nữ", description: "Sơ mi cho phụ nữ — thanh lịch, hiện đại." },
  { slug: "so-mi-unisex", name: "Sơ mi unisex", description: "Sơ mi trung tính — phối được cho cả hai." },
];

export const PRODUCTS: Product[] = [
  // ============================== SƠ MI NAM ==============================
  {
    id: "1",
    sku: "SMN-OXF-01",
    name: "Sơ mi Oxford cổ điển",
    category: "Sơ mi nam",
    gender: "Nam",
    material: "Cotton Oxford",
    description:
      "Sơ mi Oxford form regular fit cho nam — chất cotton Oxford dày dặn, thoáng mát. Cổ button-down cổ điển, phù hợp công sở lẫn dạo phố. Đường may tỉ mỉ, bo cổ và tay áo chắc chắn.",
    basePrice: 480000,
    status: "active",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=80",
    ],
    variants: [
      { id: "v1", sku: "SMN-OXF-01-W-M", color: "Trắng", size: "M", sellPrice: 480000, stockAvailable: 15, status: "active" },
      { id: "v2", sku: "SMN-OXF-01-W-L", color: "Trắng", size: "L", sellPrice: 480000, stockAvailable: 12, status: "active" },
      { id: "v3", sku: "SMN-OXF-01-W-XL", color: "Trắng", size: "XL", sellPrice: 480000, stockAvailable: 8, status: "active" },
      { id: "v4", sku: "SMN-OXF-01-LB-M", color: "Xanh nhạt", size: "M", sellPrice: 480000, stockAvailable: 10, status: "active" },
      { id: "v5", sku: "SMN-OXF-01-LB-L", color: "Xanh nhạt", size: "L", sellPrice: 480000, stockAvailable: 7, status: "active" },
      { id: "v6", sku: "SMN-OXF-01-N-M", color: "Navy", size: "M", sellPrice: 480000, stockAvailable: 9, status: "active" },
      { id: "v7", sku: "SMN-OXF-01-N-L", color: "Navy", size: "L", sellPrice: 480000, stockAvailable: 6, status: "active" },
    ],
  },
  {
    id: "2",
    sku: "SMN-LIN-01",
    name: "Sơ mi linen mùa hè",
    category: "Sơ mi nam",
    gender: "Nam",
    material: "Linen 100%",
    description:
      "Sơ mi linen 100% — chất vải đũi mềm rủ, thoáng khí, lý tưởng cho thời tiết nóng. Form relaxed, tay tà nhẹ. Phối hoàn hảo với quần linen hoặc chinos.",
    basePrice: 520000,
    status: "active",
    tags: ["new", "bestseller"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=80",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=900&q=80",
    ],
    variants: [
      { id: "v8", sku: "SMN-LIN-01-BE-M", color: "Be", size: "M", sellPrice: 520000, stockAvailable: 9, status: "active" },
      { id: "v9", sku: "SMN-LIN-01-BE-L", color: "Be", size: "L", sellPrice: 520000, stockAvailable: 12, status: "active" },
      { id: "v10", sku: "SMN-LIN-01-BE-XL", color: "Be", size: "XL", sellPrice: 520000, stockAvailable: 6, status: "active" },
      { id: "v11", sku: "SMN-LIN-01-W-M", color: "Trắng", size: "M", sellPrice: 520000, stockAvailable: 11, status: "active" },
      { id: "v12", sku: "SMN-LIN-01-W-L", color: "Trắng", size: "L", sellPrice: 520000, stockAvailable: 8, status: "active" },
    ],
  },
  {
    id: "3",
    sku: "SMN-PRE-01",
    name: "Sơ mi Premium dài tay",
    category: "Sơ mi nam",
    gender: "Nam",
    material: "Cotton 2 lớp",
    description:
      "Phiên bản cao cấp cho phòng họp và sự kiện — vải cotton 2 lớp giữ form, độ rủ chuẩn. Cổ bẻ Italy, măng-séc đôi, nút trai tinh tế.",
    basePrice: 690000,
    status: "active",
    tags: ["premium"],
    images: [
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=900&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=900&q=80",
    ],
    variants: [
      { id: "v13", sku: "SMN-PRE-01-W-M", color: "Trắng", size: "M", sellPrice: 690000, stockAvailable: 7, status: "active" },
      { id: "v14", sku: "SMN-PRE-01-W-L", color: "Trắng", size: "L", sellPrice: 690000, stockAvailable: 9, status: "active" },
      { id: "v15", sku: "SMN-PRE-01-W-XL", color: "Trắng", size: "XL", sellPrice: 690000, stockAvailable: 5, status: "active" },
      { id: "v16", sku: "SMN-PRE-01-N-M", color: "Navy", size: "M", sellPrice: 690000, stockAvailable: 6, status: "active" },
      { id: "v17", sku: "SMN-PRE-01-N-L", color: "Navy", size: "L", sellPrice: 690000, stockAvailable: 8, status: "active" },
    ],
  },
  {
    id: "4",
    sku: "SMN-CHM-01",
    name: "Sơ mi chambray denim",
    category: "Sơ mi nam",
    gender: "Nam",
    material: "Cotton chambray",
    description:
      "Sơ mi chambray nhẹ — vẻ ngoài denim nhưng mềm mại như cotton thường. Item linh hoạt, mặc với jeans hoặc chinos đều ổn.",
    basePrice: 450000,
    status: "active",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=900&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=900&q=80",
    ],
    variants: [
      { id: "v18", sku: "SMN-CHM-01-LB-M", color: "Xanh nhạt", size: "M", sellPrice: 450000, stockAvailable: 11, status: "active" },
      { id: "v19", sku: "SMN-CHM-01-LB-L", color: "Xanh nhạt", size: "L", sellPrice: 450000, stockAvailable: 13, status: "active" },
      { id: "v20", sku: "SMN-CHM-01-LB-XL", color: "Xanh nhạt", size: "XL", sellPrice: 450000, stockAvailable: 7, status: "active" },
      { id: "v21", sku: "SMN-CHM-01-IN-M", color: "Xanh đậm", size: "M", sellPrice: 450000, stockAvailable: 8, status: "active" },
      { id: "v22", sku: "SMN-CHM-01-IN-L", color: "Xanh đậm", size: "L", sellPrice: 450000, stockAvailable: 10, status: "active" },
    ],
  },

  // ============================== SƠ MI NỮ ==============================
  {
    id: "5",
    sku: "SMW-SLK-01",
    name: "Sơ mi lụa cổ V",
    category: "Sơ mi nữ",
    gender: "Nữ",
    material: "Lụa pha viscose",
    description:
      "Sơ mi cổ V mềm mại từ lụa pha viscose — đổ rủ tự nhiên, ánh nhẹ. Form regular, dài qua eo. Phối với chân váy bút chì hoặc quần tây đều thanh lịch.",
    basePrice: 580000,
    status: "active",
    tags: ["bestseller", "new"],
    images: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&q=80",
      "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=900&q=80",
    ],
    variants: [
      { id: "v23", sku: "SMW-SLK-01-CR-S", color: "Kem", size: "S", sellPrice: 580000, stockAvailable: 10, status: "active" },
      { id: "v24", sku: "SMW-SLK-01-CR-M", color: "Kem", size: "M", sellPrice: 580000, stockAvailable: 14, status: "active" },
      { id: "v25", sku: "SMW-SLK-01-CR-L", color: "Kem", size: "L", sellPrice: 580000, stockAvailable: 8, status: "active" },
      { id: "v26", sku: "SMW-SLK-01-N-S", color: "Navy", size: "S", sellPrice: 580000, stockAvailable: 7, status: "active" },
      { id: "v27", sku: "SMW-SLK-01-N-M", color: "Navy", size: "M", sellPrice: 580000, stockAvailable: 9, status: "active" },
      { id: "v28", sku: "SMW-SLK-01-N-L", color: "Navy", size: "L", sellPrice: 580000, stockAvailable: 5, status: "active" },
    ],
  },
  {
    id: "6",
    sku: "SMW-COT-01",
    name: "Sơ mi cotton tay phồng",
    category: "Sơ mi nữ",
    gender: "Nữ",
    material: "Cotton poplin",
    description:
      "Sơ mi cotton poplin nhẹ với chi tiết tay phồng nhẹ — nữ tính nhưng vẫn chỉn chu. Cổ Peter Pan tinh tế, đường may rút eo nhẹ.",
    basePrice: 460000,
    status: "active",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=900&q=80",
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=900&q=80",
    ],
    variants: [
      { id: "v29", sku: "SMW-COT-01-W-S", color: "Trắng", size: "S", sellPrice: 460000, stockAvailable: 12, status: "active" },
      { id: "v30", sku: "SMW-COT-01-W-M", color: "Trắng", size: "M", sellPrice: 460000, stockAvailable: 15, status: "active" },
      { id: "v31", sku: "SMW-COT-01-W-L", color: "Trắng", size: "L", sellPrice: 460000, stockAvailable: 9, status: "active" },
      { id: "v32", sku: "SMW-COT-01-PK-S", color: "Hồng nhạt", size: "S", sellPrice: 460000, stockAvailable: 8, status: "active" },
      { id: "v33", sku: "SMW-COT-01-PK-M", color: "Hồng nhạt", size: "M", sellPrice: 460000, stockAvailable: 10, status: "active" },
    ],
  },
  {
    id: "7",
    sku: "SMW-LIN-01",
    name: "Sơ mi linen oversized",
    category: "Sơ mi nữ",
    gender: "Nữ",
    material: "Linen 100%",
    description:
      "Linen oversized buông rủ — phong cách thoải mái, hơi nam tính. Mặc tay dài hoặc xắn lên đều đẹp, phối với quần tây ống rộng.",
    basePrice: 540000,
    status: "active",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=80",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=900&q=80",
    ],
    variants: [
      { id: "v34", sku: "SMW-LIN-01-BE-S", color: "Be", size: "S", sellPrice: 540000, stockAvailable: 9, status: "active" },
      { id: "v35", sku: "SMW-LIN-01-BE-M", color: "Be", size: "M", sellPrice: 540000, stockAvailable: 11, status: "active" },
      { id: "v36", sku: "SMW-LIN-01-BE-L", color: "Be", size: "L", sellPrice: 540000, stockAvailable: 6, status: "active" },
      { id: "v37", sku: "SMW-LIN-01-W-S", color: "Trắng", size: "S", sellPrice: 540000, stockAvailable: 10, status: "active" },
      { id: "v38", sku: "SMW-LIN-01-W-M", color: "Trắng", size: "M", sellPrice: 540000, stockAvailable: 13, status: "active" },
    ],
  },
  {
    id: "8",
    sku: "SMW-STR-01",
    name: "Sơ mi sọc cổ Pháp",
    category: "Sơ mi nữ",
    gender: "Nữ",
    material: "Cotton 100%",
    description:
      "Sơ mi sọc Pháp cổ điển — sọc nhỏ thanh lịch, cổ tròn nhỏ. Item must-have cho phong cách công sở thanh lịch.",
    basePrice: 490000,
    status: "active",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=900&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&q=80",
    ],
    variants: [
      { id: "v39", sku: "SMW-STR-01-NB-S", color: "Sọc xanh", size: "S", sellPrice: 490000, stockAvailable: 11, status: "active" },
      { id: "v40", sku: "SMW-STR-01-NB-M", color: "Sọc xanh", size: "M", sellPrice: 490000, stockAvailable: 14, status: "active" },
      { id: "v41", sku: "SMW-STR-01-NB-L", color: "Sọc xanh", size: "L", sellPrice: 490000, stockAvailable: 7, status: "active" },
    ],
  },

  // ============================== UNISEX ==============================
  {
    id: "9",
    sku: "SMU-FLN-01",
    name: "Sơ mi flannel sọc đôi",
    category: "Sơ mi unisex",
    gender: "Unisex",
    material: "Flannel cotton",
    description:
      "Flannel ấm áp cho mùa lạnh — sọc đôi cổ điển, form regular. Phối được cả nam và nữ, mặc với quần jeans hoặc khoác cùng áo dạ.",
    basePrice: 510000,
    status: "active",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1599577180598-79b4a5c5c80c?w=900&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80",
    ],
    variants: [
      { id: "v42", sku: "SMU-FLN-01-RD-S", color: "Đỏ", size: "S", sellPrice: 510000, stockAvailable: 8, status: "active" },
      { id: "v43", sku: "SMU-FLN-01-RD-M", color: "Đỏ", size: "M", sellPrice: 510000, stockAvailable: 11, status: "active" },
      { id: "v44", sku: "SMU-FLN-01-RD-L", color: "Đỏ", size: "L", sellPrice: 510000, stockAvailable: 9, status: "active" },
      { id: "v45", sku: "SMU-FLN-01-GR-M", color: "Xanh rêu", size: "M", sellPrice: 510000, stockAvailable: 7, status: "active" },
      { id: "v46", sku: "SMU-FLN-01-GR-L", color: "Xanh rêu", size: "L", sellPrice: 510000, stockAvailable: 6, status: "active" },
    ],
  },
  {
    id: "10",
    sku: "SMU-CUB-01",
    name: "Sơ mi Cuba in họa tiết",
    category: "Sơ mi unisex",
    gender: "Unisex",
    material: "Rayon",
    description:
      "Sơ mi Cuba cổ bẻ ngắn tay — in họa tiết tropical nhẹ nhàng. Item nghỉ dưỡng và cuối tuần, mặc với short hoặc quần linen.",
    basePrice: 420000,
    status: "active",
    tags: ["new"],
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=900&q=80",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=900&q=80",
    ],
    variants: [
      { id: "v47", sku: "SMU-CUB-01-PR-S", color: "In hoa kem", size: "S", sellPrice: 420000, stockAvailable: 10, status: "active" },
      { id: "v48", sku: "SMU-CUB-01-PR-M", color: "In hoa kem", size: "M", sellPrice: 420000, stockAvailable: 13, status: "active" },
      { id: "v49", sku: "SMU-CUB-01-PR-L", color: "In hoa kem", size: "L", sellPrice: 420000, stockAvailable: 8, status: "active" },
    ],
  },
  {
    id: "11",
    sku: "SMU-BAS-01",
    name: "Sơ mi cotton trắng basic",
    category: "Sơ mi unisex",
    gender: "Unisex",
    material: "Cotton 100%",
    description:
      "Trắng cổ điển — sơ mi cotton trơn, cổ bẻ thẳng, form unisex regular. Item nền tảng tủ đồ, dễ phối nhất quả đất.",
    basePrice: 390000,
    status: "active",
    tags: ["bestseller"],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&q=80",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=900&q=80",
    ],
    variants: [
      { id: "v50", sku: "SMU-BAS-01-W-S", color: "Trắng", size: "S", sellPrice: 390000, stockAvailable: 18, status: "active" },
      { id: "v51", sku: "SMU-BAS-01-W-M", color: "Trắng", size: "M", sellPrice: 390000, stockAvailable: 22, status: "active" },
      { id: "v52", sku: "SMU-BAS-01-W-L", color: "Trắng", size: "L", sellPrice: 390000, stockAvailable: 15, status: "active" },
      { id: "v53", sku: "SMU-BAS-01-W-XL", color: "Trắng", size: "XL", sellPrice: 390000, stockAvailable: 10, status: "active" },
    ],
  },
  {
    id: "12",
    sku: "SMU-DEN-01",
    name: "Sơ mi denim Indigo",
    category: "Sơ mi unisex",
    gender: "Unisex",
    material: "Denim 8oz",
    description:
      "Denim 8oz vừa đủ dày — phối thay áo khoác nhẹ. Form unisex thẳng, túi ngực hai bên. Càng mặc càng lên màu đẹp.",
    basePrice: 560000,
    status: "active",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=900&q=80",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=900&q=80",
    ],
    variants: [
      { id: "v54", sku: "SMU-DEN-01-IN-S", color: "Xanh đậm", size: "S", sellPrice: 560000, stockAvailable: 7, status: "active" },
      { id: "v55", sku: "SMU-DEN-01-IN-M", color: "Xanh đậm", size: "M", sellPrice: 560000, stockAvailable: 10, status: "active" },
      { id: "v56", sku: "SMU-DEN-01-IN-L", color: "Xanh đậm", size: "L", sellPrice: 560000, stockAvailable: 8, status: "active" },
      { id: "v57", sku: "SMU-DEN-01-IN-XL", color: "Xanh đậm", size: "XL", sellPrice: 560000, stockAvailable: 5, status: "active" },
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
