import type { Metadata } from "next";
import { Noto_Serif_SC, Outfit } from "next/font/google";
import "./globals.css";

const display = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pengwenjing.com"),
  title: {
    default: "彭文静 | 泰康保险大厦租赁顾问",
    template: "%s",
  },
  description: "陆家嘴泰康保险大厦办公租赁顾问彭文静。位置、空间、平面图与看楼预约。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
