# Sermi Store — Giao diện khách hàng The Sermi

## Mục tiêu

Website bán hàng chính thức của thương hiệu thời trang **The Sermi**, nơi khách hàng:

- Xem danh mục sản phẩm (sơ mi nam/nữ, phân loại theo form, chất liệu, phong cách)
- Xem chi tiết sản phẩm: ảnh, biến thể màu/size, giá, mô tả
- Thêm vào giỏ hàng, đặt hàng online
- Tra cứu đơn hàng
- Xem thông tin thương hiệu, chính sách đổi trả, hướng dẫn chọn size

## Quan hệ với store-management

| Hệ thống | Vai trò | Domain |
|---|---|---|
| **store-management** | ERP nội bộ — quản lý sản phẩm, tồn kho, đơn hàng, khách hàng, chi phí | `smm.thesermi.com` |
| **sermi-store** | Storefront — giao diện mua sắm cho khách hàng | `thesermi.com` |

`sermi-store` sẽ gọi API từ `store-management` (hoặc shared database) để lấy dữ liệu sản phẩm, tồn kho, và đẩy đơn hàng.

## Tính năng dự kiến

### Phase 1 — MVP
- Trang chủ (hero, sản phẩm nổi bật, bộ sưu tập mới)
- Danh mục sản phẩm (filter theo category, màu, size, giá)
- Chi tiết sản phẩm (gallery ảnh, chọn biến thể, giá)
- Giỏ hàng & checkout (nhập thông tin giao hàng, chọn thanh toán COD)
- Responsive mobile-first

### Phase 2
- Tài khoản khách hàng (đăng ký, đăng nhập, lịch sử đơn)
- Tra cứu đơn hàng bằng mã đơn hoặc SĐT
- Tích hợp thanh toán online (VNPay / MoMo)
- Hướng dẫn chọn size (bảng size, gợi ý theo chiều cao/cân nặng)

### Phase 3
- Wishlist / yêu thích
- Đánh giá sản phẩm
- Blog / lookbook thời trang
- SEO optimization, sitemap, structured data
- Tích hợp Facebook Pixel, TikTok Pixel

## Tech stack dự kiến

- **Framework**: Next.js 14 (App Router)
- **UI**: TailwindCSS + shadcn/ui
- **State**: React Context / Zustand
- **Data**: API từ store-management hoặc direct Prisma (shared DB)
- **Deploy**: Docker trên VPS `103.124.94.65`, domain `thesermi.com`

## Hạ tầng

```
thesermi.com        → 103.124.94.65 → Nginx → sermi-store (port 3020)
smm.thesermi.com    → 103.124.94.65 → Nginx → store-management (port 3010)
```

## Trạng thái hiện tại

**Hello World** — Placeholder page, chờ triển khai Phase 1.

## Phát triển

```bash
# Dev
npm install
npm run dev

# Build & run với Docker
docker compose up -d --build
```
