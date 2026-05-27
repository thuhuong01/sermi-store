"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Miễn phí giao hàng cho đơn từ 500.000đ",
  "Đổi trả dễ dàng trong 7 ngày",
  "Thanh toán khi nhận hàng (COD)",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container h-9 flex items-center justify-center text-[11px] uppercase tracking-[0.18em] font-medium overflow-hidden">
        <span key={index} className="animate-in fade-in duration-700">
          {MESSAGES[index]}
        </span>
      </div>
    </div>
  );
}
