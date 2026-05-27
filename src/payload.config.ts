import path from "path";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { BlogPosts } from "./collections/BlogPosts";
import { ProductDisplay } from "./collections/ProductDisplay";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — The Sermi CMS",
    },
  },
  collections: [Users, BlogPosts, ProductDisplay, Media],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/sermi-store",
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  secret: process.env.PAYLOAD_SECRET || "sermi-store-secret-change-me",
  sharp: undefined,
});
