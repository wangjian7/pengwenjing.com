import type { Dictionary } from "./types";

const ja: Dictionary = {
  meta: {
    title: "彭文静 | 泰康保険大厦リース顧問",
    description:
      "陸家嘴・泰康保険大厦のオフィスリーシング顧問、彭文静。立地、空間、平面図、内覧予約。",
  },
  brand: {
    name: "彭文静",
    meta: "Leasing",
  },
  nav: {
    building: "ビル",
    plans: "平面",
    contact: "連絡",
    aria: "ページナビ",
    language: "言語",
  },
  hero: {
    building: "泰康保険大厦",
    line: "陸家嘴コア · オフィスリーシング",
    cta: "内覧を予約",
    plans: "平面図",
    scroll: "下へスクロール",
  },
  signals: {
    aria: "主要数字",
    items: [
      { value: "陸家嘴", label: "CBD" },
      { value: "2 / 9", label: "地下鉄2路線" },
      { value: "9万㎡", label: "延床面積" },
      { value: "2500㎡", label: "基準階" },
    ],
  },
  building: {
    kicker: "ビル",
    title: "空間が語る。",
    chapters: [
      {
        id: "place",
        kicker: "01",
        title: "立地",
        line: "世紀大道そば、地下鉄直結。",
        image: "chapter-place.jpg",
        position: "center center",
      },
      {
        id: "life",
        kicker: "02",
        title: "設備",
        line: "商業・ハブ・駐車場が一体。",
        image: "chapter-life.jpg",
        position: "center 20%",
      },
      {
        id: "lobby",
        kicker: "03",
        title: "ロビー",
        line: "第一印象から本社の格。",
        image: "chapter-lobby.jpg",
        position: "center center",
      },
      {
        id: "standard",
        kicker: "04",
        title: "基準",
        line: "行政階とトレーディング階、それぞれに。",
        image: "chapter-standard.jpg",
        position: "center center",
      },
    ],
  },
  plans: {
    kicker: "平面",
    title: "ゾーンが一目でわかる。",
    items: [
      { title: "立面ゾーン", image: "plan-1.jpg" },
      { title: "高区平面", image: "plan-2.jpg" },
      { title: "中区平面", image: "plan-3.jpg" },
      { title: "低区平面", image: "plan-4.jpg" },
    ],
  },
  specs: {
    kicker: "仕様",
    title: "主要スペック。",
    aria: "技術仕様",
    items: [
      ["階数", "地上41 / 地下4"],
      ["基準階天井高", "3.1 m"],
      ["コアまでの距離", "最大約14 m"],
      ["床荷重", "3.5–5.0 kN/㎡"],
      ["駐車台数", "527"],
      ["外気", "30 m³/h·人"],
      ["冷却水", "24時間"],
      ["照明", "500 LUX"],
    ],
  },
  contact: {
    kicker: "連絡",
    role: "泰康保険大厦リース営業マネージャー",
    hint: "資料・内覧・提案——すぐご連絡ください。",
    hotline: "ホットライン",
    phone: "携帯 / WeChat",
    email: "メール",
    cta: "今すぐ連絡",
    phonePlaceholder: "携帯 / WeChat を追記",
    emailPlaceholder: "メールを追記",
  },
  footer: {
    place: "Taikang Insurance Tower · Lujiazui",
  },
  hotline: "021-68599875",
};

export default ja;
