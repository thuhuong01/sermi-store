"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { formatPrice, getColorHex } from "@/lib/utils";
import { getUniqueColors } from "@/lib/mock-data";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const colors = getUniqueColors(product);
  const minPrice = Math.min(...product.variants.map((v) => v.sellPrice));
  const hasSecondary = product.images.length > 1;

  return (
    <Link href={`/products/${product.id}`} className="group block">
      {/* Image — editorial 4:5 ratio */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        {product.images[0] ? (
          <>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={
                "object-cover transition-opacity duration-500 " +
                (hasSecondary ? "group-hover:opacity-0" : "group-hover:scale-[1.03]")
              }
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {hasSecondary && (
              <Image
                src={product.images[1]}
                alt={product.name}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center caption">
            Không có ảnh
          </div>
        )}

        {/* Badge */}
        {product.tags.includes("new") && (
          <span className="absolute top-3 left-3 bg-white text-foreground text-[10px] font-medium uppercase tracking-[0.18em] px-3 py-1.5">
            Mới
          </span>
        )}
        {product.tags.includes("bestseller") && !product.tags.includes("new") && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-medium uppercase tracking-[0.18em] px-3 py-1.5">
            Bán chạy
          </span>
        )}

        {/* Quick view hint — desktop only */}
        <div className="hidden md:block absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-white text-foreground text-center text-xs uppercase tracking-[0.18em] font-medium py-2.5">
            Xem chi tiết
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        {product.gender && (
          <p className="caption uppercase tracking-[0.18em] text-[10px] text-muted-foreground/80">
            {product.gender}
          </p>
        )}
        <h3 className="text-[13px] md:text-sm font-medium leading-tight transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        {product.material && (
          <p className="caption italic">{product.material}</p>
        )}
        <p className="text-sm font-semibold pt-0.5">{formatPrice(minPrice)}</p>

        {/* Color swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {colors.slice(0, 5).map((color) => {
              const hex = getColorHex(color);
              const isLight = hex.toLowerCase() === "#ffffff" || hex.toLowerCase() === "#f5f1e8";
              return (
                <span
                  key={color}
                  title={color}
                  className={
                    "w-3.5 h-3.5 rounded-full " +
                    (isLight ? "border border-border" : "")
                  }
                  style={{ backgroundColor: hex }}
                />
              );
            })}
            {colors.length > 5 && (
              <span className="caption ml-1">+{colors.length - 5}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
