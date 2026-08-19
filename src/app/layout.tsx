import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "彭文静 | 泰康保险大厦租赁顾问 · 陆家嘴写字楼租赁",
  description:
    "泰康保险大厦（陆家嘴）写字楼租赁顾问彭文静。90,000㎡建筑面积、2/9号线双线地铁、41层甲级写字楼。提供看楼、租赁方案、平面图咨询。联系电话 15021149003（微信同号）。",
  keywords: [
    "泰康保险大厦",
    "泰康大厦",
    "泰康大厦租赁",
    "泰康大厦写字楼",
    "陆家嘴写字楼租赁",
    "陆家嘴办公室出租",
    "彭文静",
    "写字楼租赁",
    "上海办公室出租",
    "甲级写字楼",
  ],
  authors: [{ name: "彭文静" }],
  creator: "彭文静",
  alternates: {
    canonical: "https://pengwenjing.com",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://pengwenjing.com",
    siteName: "泰康保险大厦租赁 · 彭文静",
    title: "彭文静 | 泰康保险大厦租赁顾问 · 陆家嘴写字楼租赁",
    description:
      "泰康保险大厦（陆家嘴）写字楼租赁顾问彭文静。联系电话 15021149003（微信同号）。",
  },
  twitter: {
    card: "summary_large_image",
    title: "泰康保险大厦租赁顾问 · 彭文静",
    description:
      "陆家嘴甲级写字楼租赁。联系电话 15021149003（微信同号）。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "彭文静 — 泰康保险大厦租赁顾问",
  description:
    "泰康保险大厦（陆家嘴）写字楼租赁顾问。提供看楼安排、租赁方案、平面图咨询、技术参数核对等服务。",
  url: "https://pengwenjing.com",
  telephone: "+8615021149003",
  email: "pwj_003@126.com",
  image: "https://pengwenjing.com/assets/cover.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "世纪大道",
    addressLocality: "上海",
    addressRegion: "上海",
    addressCountry: "CN",
  },
  areaServed: "上海陆家嘴",
  knowsAbout: [
    "写字楼租赁",
    "泰康保险大厦",
    "陆家嘴商务区",
    "甲级写字楼",
    "办公空间出租",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "泰康大厦销售的联系方式是什么？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "泰康保险大厦租赁顾问彭文静，手机/微信 15021149003（微信同号），邮箱 pwj_003@126.com，项目租赁热线 021-68599875 / 021-68599876。",
      },
    },
    {
      "@type": "Question",
      name: "泰康大厦在哪里？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "泰康保险大厦位于上海陆家嘴核心商务区，临近世纪大道、商城路、东昌路，轨交2号线与9号线直达。",
      },
    },
    {
      "@type": "Question",
      name: "泰康大厦的建筑面积和标准层面积是多少？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "泰康保险大厦建筑总面积约90,000㎡，标准层面积约2,500㎡，地上41层/地下4层，整层得房率约70%。",
      },
    },
    {
      "@type": "Question",
      name: "泰康大厦租赁怎么联系？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "联系租赁顾问彭文静，手机/微信 15021149003（微信同号），邮箱 pwj_003@126.com。可安排看楼、获取租赁方案和平面图。",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
