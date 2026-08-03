import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Peng Wenjing | Taikang Insurance Tower Leasing",
    description:
      "Office leasing advisor for Taikang Insurance Tower in Lujiazui. Location, spaces, floor plans, and viewing appointments.",
  },
  brand: {
    name: "Peng Wenjing",
    meta: "Leasing",
  },
  nav: {
    building: "Building",
    plans: "Plans",
    contact: "Contact",
    aria: "Page navigation",
    language: "Language",
  },
  hero: {
    building: "Taikang Insurance Tower",
    line: "Lujiazui Core · Office Leasing",
    cta: "Book a viewing",
    plans: "Floor plans",
    scroll: "Scroll down",
  },
  signals: {
    aria: "Key figures",
    items: [
      { value: "Lujiazui", label: "CBD" },
      { value: "2 / 9", label: "Metro lines" },
      { value: "90,000㎡", label: "Gross area" },
      { value: "2,500㎡", label: "Typical floor" },
    ],
  },
  building: {
    kicker: "Building",
    title: "Let the space speak.",
    chapters: [
      {
        id: "place",
        kicker: "01",
        title: "Location",
        line: "By Century Avenue, metro at the door.",
        image: "chapter-place.jpg",
        position: "center center",
      },
      {
        id: "life",
        kicker: "02",
        title: "Amenities",
        line: "Retail, transit hub, and parking as one.",
        image: "chapter-life.jpg",
        position: "center 20%",
      },
      {
        id: "lobby",
        kicker: "03",
        title: "Lobby",
        line: "Headquarters presence from the first glance.",
        image: "chapter-lobby.jpg",
        position: "center center",
      },
      {
        id: "standard",
        kicker: "04",
        title: "Standard",
        line: "Executive and trading floors, each in place.",
        image: "chapter-standard.jpg",
        position: "center center",
      },
    ],
  },
  plans: {
    kicker: "Plans",
    title: "Clear zones at a glance.",
    items: [
      { title: "Elevation zones", image: "plan-1.jpg" },
      { title: "High-zone plan", image: "plan-2.jpg" },
      { title: "Mid-zone plan", image: "plan-3.jpg" },
      { title: "Low-zone plan", image: "plan-4.jpg" },
    ],
  },
  specs: {
    kicker: "Specs",
    title: "Essential specs.",
    aria: "Technical specifications",
    items: [
      ["Floors", "41 above / 4 below"],
      ["Typical clear height", "3.1 m"],
      ["Core depth", "Up to ~14 m"],
      ["Floor load", "3.5–5.0 kN/㎡"],
      ["Parking", "527"],
      ["Fresh air", "30 m³/h·person"],
      ["Cooling water", "24h"],
      ["Lighting", "500 LUX"],
    ],
  },
  contact: {
    kicker: "Contact",
    role: "Leasing Sales Manager, Taikang Insurance Tower",
    hint: "Materials, viewings, proposals — just say the word.",
    hotline: "Hotline",
    phone: "Mobile / WeChat",
    email: "Email",
    cta: "Contact now",
    phonePlaceholder: "Add mobile / WeChat",
    emailPlaceholder: "Add email",
  },
  footer: {
    place: "Taikang Insurance Tower · Lujiazui",
  },
  hotline: "021-68599875",
};

export default en;
