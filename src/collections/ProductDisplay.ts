import type { CollectionConfig } from "payload";

export const ProductDisplay: CollectionConfig = {
  slug: "product-display",
  admin: {
    useAsTitle: "productName",
    defaultColumns: ["productName", "displayType", "priority", "isActive"],
  },
  fields: [
    {
      name: "productId",
      type: "text",
      required: true,
      label: "Product ID (từ store-management)",
      admin: {
        description: "ID sản phẩm trong hệ thống store-management",
      },
    },
    {
      name: "productName",
      type: "text",
      required: true,
      label: "Tên sản phẩm",
      admin: {
        description: "Tên hiển thị để dễ quản lý (lấy từ store-management)",
      },
    },
    {
      name: "displayType",
      type: "select",
      hasMany: true,
      required: true,
      label: "Vị trí hiển thị",
      options: [
        { label: "Trang chủ — Hero/Banner", value: "homepage_hero" },
        { label: "Trang chủ — Sản phẩm hot", value: "homepage_featured" },
        { label: "Trang chủ — Hàng mới về", value: "homepage_new" },
        { label: "Chỉ hiện trong danh mục/tìm kiếm", value: "catalog_only" },
      ],
      admin: {
        description: "Sản phẩm sẽ hiển thị ở (những) vị trí nào trên website",
      },
    },
    {
      name: "priority",
      type: "number",
      required: true,
      defaultValue: 0,
      label: "Thứ tự ưu tiên",
      admin: {
        description: "Số càng lớn → hiển thị càng trước (0 = mặc định)",
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      label: "Đang hiển thị",
    },
    {
      name: "customImage",
      type: "upload",
      relationTo: "media",
      label: "Ảnh tùy chỉnh (ghi đè ảnh từ store-management)",
      admin: {
        description: "Để trống nếu muốn dùng ảnh gốc từ hệ thống quản lý",
      },
    },
    {
      name: "customLabel",
      type: "text",
      label: "Nhãn tùy chỉnh",
      admin: {
        description: "Ví dụ: 'HOT', 'MỚI', 'GIẢM GIÁ' — hiển thị trên card sản phẩm",
      },
    },
  ],
};
