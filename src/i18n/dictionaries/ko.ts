import type { Dictionary } from "./types";

const ko: Dictionary = {
  meta: {
    title: "펑원징 | 태강보험빌딩 임대 어드바이저",
    description:
      "루자쭈이 태강보험빌딩 오피스 임대 어드바이저 펑원징. 위치, 공간, 평면도, 방문 예약.",
  },
  brand: {
    name: "彭文静",
    meta: "Leasing",
  },
  nav: {
    building: "빌딩",
    plans: "평면",
    contact: "연락",
    aria: "페이지 탐색",
    language: "언어",
  },
  hero: {
    building: "태강보험빌딩",
    line: "루자쭈이 코어 · 오피스 임대",
    cta: "방문 예약",
    plans: "평면도",
    scroll: "아래로 스크롤",
  },
  signals: {
    aria: "핵심 수치",
    items: [
      { value: "루자쭈이", label: "CBD" },
      { value: "2 / 9", label: "지하철 2노선" },
      { value: "9만㎡", label: "연면적" },
      { value: "2500㎡", label: "기준층" },
    ],
  },
  building: {
    kicker: "빌딩",
    title: "공간이 말합니다.",
    chapters: [
      {
        id: "place",
        kicker: "01",
        title: "위치",
        line: "세기대로 옆, 지하철 직결.",
        image: "chapter-place.jpg",
        position: "center center",
      },
      {
        id: "life",
        kicker: "02",
        title: "편의",
        line: "상업·허브·주차장이 하나.",
        image: "chapter-life.jpg",
        position: "center 20%",
      },
      {
        id: "lobby",
        kicker: "03",
        title: "로비",
        line: "첫인상부터 본사급 분위기.",
        image: "chapter-lobby.jpg",
        position: "center center",
      },
      {
        id: "standard",
        kicker: "04",
        title: "기준",
        line: "임원층과 트레이딩층, 각각 제자리.",
        image: "chapter-standard.jpg",
        position: "center center",
      },
    ],
  },
  plans: {
    kicker: "평면",
    title: "구역이 한눈에.",
    items: [
      { title: "입면 구역", image: "plan-1.jpg" },
      { title: "고층 평면", image: "plan-2.jpg" },
      { title: "중층 평면", image: "plan-3.jpg" },
      { title: "저층 평면", image: "plan-4.jpg" },
    ],
  },
  specs: {
    kicker: "스펙",
    title: "핵심 사양.",
    aria: "기술 사양",
    items: [
      ["층수", "지상 41 / 지하 4"],
      ["기준층 천장고", "3.1 m"],
      ["코어 거리", "최대 약 14 m"],
      ["바닥 하중", "3.5–5.0 kN/㎡"],
      ["주차", "527"],
      ["외기", "30 m³/h·인"],
      ["냉각수", "24시간"],
      ["조명", "500 LUX"],
    ],
  },
  contact: {
    kicker: "연락",
    role: "태강보험빌딩 임대 영업 매니저",
    hint: "자료, 방문, 제안 — 바로 말씀하세요.",
    hotline: "핫라인",
    phone: "휴대폰 / WeChat",
    email: "이메일",
    cta: "바로 연락",
    phonePlaceholder: "휴대폰 / WeChat 추가",
    emailPlaceholder: "이메일 추가",
  },
  footer: {
    place: "Taikang Insurance Tower · Lujiazui",
  },
  hotline: "021-68599875",
};

export default ko;
