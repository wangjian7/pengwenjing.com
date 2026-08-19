import type { Dictionary } from "./types";

const zh: Dictionary = {
  meta: {
    title: "彭文静 | 泰康保险大厦租赁顾问",
    description: "陆家嘴泰康保险大厦办公租赁顾问彭文静。位置、空间、平面图与看楼预约。",
  },
  brand: {
    name: "彭文静",
    meta: "Leasing",
  },
  nav: {
    building: "楼宇",
    plans: "平面",
    contact: "联系",
    aria: "页面导航",
    language: "语言",
  },
  hero: {
    building: "泰康保险大厦",
    line: "陆家嘴核心区 · 办公租赁",
    cta: "预约看楼",
    plans: "平面图",
    scroll: "向下浏览",
  },
  signals: {
    aria: "关键数字",
    items: [
      { value: "陆家嘴", label: "CBD" },
      { value: "2 / 9", label: "双线地铁" },
      { value: "9万㎡", label: "建筑体量" },
      { value: "2500㎡", label: "标准层" },
    ],
  },
  building: {
    kicker: "楼宇",
    title: "空间自己会说话。",
    chapters: [
      {
        id: "place",
        kicker: "01",
        title: "坐标",
        line: "世纪大道旁，轨交直达。",
        image: "chapter-place.jpg",
        position: "center center",
      },
      {
        id: "life",
        kicker: "02",
        title: "配套",
        line: "商业、枢纽、车库一体。",
        image: "chapter-life.jpg",
        position: "center 20%",
      },
      {
        id: "lobby",
        kicker: "03",
        title: "大堂",
        line: "第一眼，就是总部气场。",
        image: "chapter-lobby.jpg",
        position: "center center",
      },
      {
        id: "standard",
        kicker: "04",
        title: "标准",
        line: "行政层、交易层，各就其位。",
        image: "chapter-standard.jpg",
        position: "center center",
      },
    ],
  },
  plans: {
    kicker: "平面",
    title: "分区一目了然。",
    items: [
      { title: "立面分区", image: "plan-1.jpg" },
      { title: "高区平面", image: "plan-2.jpg" },
      { title: "中区平面", image: "plan-3.jpg" },
      { title: "低区平面", image: "plan-4.jpg" },
    ],
  },
  specs: {
    kicker: "参数",
    title: "关键规格。",
    aria: "技术参数",
    items: [
      ["楼层", "地上 41 / 地下 4"],
      ["标准层净高", "3.1 m"],
      ["核心筒距", "最大约 14 m"],
      ["楼面荷载", "3.5–5.0 kN/㎡"],
      ["停车位", "527"],
      ["新风", "30 m³/h·人"],
      ["冷却水", "24h"],
      ["照明", "500 LUX"],
    ],
  },
  contact: {
    kicker: "联系",
    role: "泰康保险大厦租赁销售经理",
    hint: "资料、带看、方案——直接说。",
    hotline: "热线",
    phone: "手机 / 微信",
    email: "邮箱",
    cta: "立即联系",
    phonePlaceholder: "15021149003（微信同号）",
    emailPlaceholder: "pwj_003@126.com",
    mobile: "15021149003",
    emailAddress: "pwj_003@126.com",
  },
  footer: {
    place: "Taikang Insurance Tower · Lujiazui",
  },
  hotline: "021-68599875",
};

export default zh;
