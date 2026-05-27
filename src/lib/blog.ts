export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

// Static blog data — in the future this can be replaced with a headless CMS
const posts: BlogPost[] = [
  {
    slug: "xu-huong-thoi-trang-nam-2025",
    title: "Xu hướng sơ mi 2025 — Tối giản, bền vững",
    excerpt:
      "Năm 2025, sơ mi quay trở lại với hướng đi tối giản và bền vững. Cùng The Sermi tìm hiểu những xu hướng sơ mi đáng chú ý.",
    date: "2025-01-20",
    image: "",
    tags: ["xu hướng", "2025", "bền vững"],
    content: `## 1. Quiet Luxury tiếp tục thống trị

Không logo lớn, không màu sắc chói. Thay vào đó là chất liệu cao cấp, đường may tinh tế, và form dáng hoàn hảo. Sơ mi trắng với vải Oxford dày dặn là ví dụ điển hình.

## 2. Earth Tone — tông màu đất

Nâu, kem, olive, xám đá — bảng màu lấy cảm hứng từ thiên nhiên chiếm ưu thế cho sơ mi 2025. Linen be, cotton kem, chambray xanh đá.

## 3. Relaxed Tailoring

Sơ mi oversize nhẹ, cổ mềm, tay hơi rộng — công sở đang trở nên thoải mái hơn bao giờ hết. Sơ mi linen và cotton poplin lên ngôi.

## 4. Vải bền vững lên ngôi

Cotton hữu cơ, lụa tự nhiên, linen — người tiêu dùng ngày càng quan tâm đến nguồn gốc chất liệu khi mua sơ mi.

## 5. Capsule Wardrobe — tủ sơ mi cơ bản

5–7 chiếc sơ mi tốt là đủ cho tủ đồ cả năm: trắng Oxford, xanh nhạt, linen be, chambray, lụa kem. Ít nhưng đa năng.`,
  },
  {
    slug: "phoi-do-nam-toi-gian",
    title: "5 nguyên tắc xây dựng tủ sơ mi tối giản",
    excerpt:
      "Một vài chiếc sơ mi tốt là đủ để phối hàng trăm outfit. Nguyên tắc tối giản cho tủ sơ mi của bạn.",
    date: "2025-01-15",
    image: "",
    tags: ["phong cách", "tối giản", "tips"],
    content: `## 1. Đầu tư vào chất liệu

Khi số lượng ít đi, chất lượng phải tăng lên. Một chiếc áo sơ mi cotton 100% sẽ phục vụ bạn tốt hơn 5 chiếc áo giá rẻ.

## 2. Bảng màu trung tính

Xây dựng tủ đồ xung quanh các tông: trắng, đen, xám, navy, beige. Dễ phối, luôn thanh lịch.

## 3. Fit là vua

Dù mặc gì, form dáng vừa vặn với cơ thể là yếu tố quyết định. Đừng mặc quá rộng hay quá chật.

## 4. Ít nhưng đa năng

Mỗi chiếc sơ mi nên phối được ít nhất 3 outfit khác nhau. Sơ mi trắng Oxford → đi làm, đi chơi, đi café đều ổn.

## 5. Chăm sóc đồ đúng cách

Giặt đúng nhiệt độ, phơi mát, ủi nhẹ — đồ sẽ bền đẹp theo năm tháng.`,
  },
  {
    slug: "cach-chon-ao-so-mi-nam",
    title: "Cách chọn áo sơ mi nam chuẩn form",
    excerpt:
      "Hướng dẫn chi tiết cách chọn áo sơ mi phù hợp vóc dáng, từ form slim fit đến regular.",
    date: "2025-01-10",
    image: "",
    tags: ["sơ mi", "hướng dẫn", "tips"],
    content: `## Xác định form dáng

- **Slim fit**: ôm nhẹ theo body, phù hợp người gầy đến trung bình
- **Regular fit**: thoải mái, không quá ôm, phù hợp mọi vóc dáng
- **Oversized**: rộng có chủ đích, phù hợp phong cách street/casual

## Đo size đúng cách

1. **Vai**: đường may vai trùng với xương vai
2. **Ngực**: cài nút vẫn thoải mái, không bị kéo căng
3. **Tay**: dài đến giữa mu bàn tay khi buông tự nhiên
4. **Thân**: đủ nhét vào quần mà không bị phùng

## Chất liệu phù hợp theo mùa

- **Hè**: cotton, linen (thoáng mát)
- **Đông**: oxford, twill (dày dặn hơn)
- **Quanh năm**: poplin cotton (đa năng)

## Tips phối đồ với sơ mi

- Sơ mi trắng + quần chinos navy = công sở casual hoàn hảo
- Sơ mi kẻ nhỏ + jeans = cuối tuần năng động
- Sơ mi linen + short = summer vibes`,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  return posts.find((p) => p.slug === slug) || null;
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count);
}
