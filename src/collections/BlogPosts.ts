import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Tiêu đề",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug (URL)",
      admin: {
        description: "Đường dẫn bài viết, ví dụ: phoi-do-nam-toi-gian",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "Tóm tắt",
      admin: {
        description: "Mô tả ngắn hiển thị trong danh sách bài viết",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: "Ảnh bìa",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Nội dung",
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Bản nháp", value: "draft" },
        { label: "Đã xuất bản", value: "published" },
      ],
      defaultValue: "draft",
      required: true,
      label: "Trạng thái",
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Ngày xuất bản",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
  ],
};
