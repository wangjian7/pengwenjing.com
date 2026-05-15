import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "彭文静 | 泰康保险大厦租赁顾问",
  description: "陆家嘴泰康保险大厦楼宇介绍、空间配置、平面图与租赁顾问彭文静个人品牌展示。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
