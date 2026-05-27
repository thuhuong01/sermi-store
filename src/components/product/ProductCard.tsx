"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { getUniqueColors } from "@/lib/mock-data";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const colors = getUniqueColors(product);
  const minPrice = Math.min(...product.variants.map((v) => v.sellPrice));

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        {product.tags.includes("new") && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Mới
          </span>
        )}
        {product.tags.includes("bestseller") && !product.tags.includes("new") && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Bán chạy
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium leading-tight group-hover:underline">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">{product.material}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{formatPrice(minPrice)}</span>
        </div>
        {colors.length > 1 && (
          <p className="text-xs text-muted-foreground">{colors.length} màu</p>
        )}
      </div>
    </Link>
  );
}
