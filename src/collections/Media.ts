import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "../public/media",
    mimeTypes: ["image/*"],
  },
  admin: {
    useAsTitle: "alt",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Mô tả ảnh (alt text)",
    },
  ],
};
