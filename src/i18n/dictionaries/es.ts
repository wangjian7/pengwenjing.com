import type { Dictionary } from "./types";

const es: Dictionary = {
  meta: {
    title: "Peng Wenjing | Arrendamiento Torre Taikang Insurance",
    description:
      "Asesora de arrendamiento de oficinas de la Torre Taikang Insurance en Lujiazui. Ubicación, espacios, planos y visitas.",
  },
  brand: {
    name: "Peng Wenjing",
    meta: "Leasing",
  },
  nav: {
    building: "Edificio",
    plans: "Planos",
    contact: "Contacto",
    aria: "Navegación",
    language: "Idioma",
  },
  hero: {
    building: "Torre Taikang Insurance",
    line: "Núcleo de Lujiazui · Oficinas",
    cta: "Reservar visita",
    plans: "Planos",
    scroll: "Desplazarse abajo",
  },
  signals: {
    aria: "Cifras clave",
    items: [
      { value: "Lujiazui", label: "CBD" },
      { value: "2 / 9", label: "Líneas de metro" },
      { value: "90.000㎡", label: "Área total" },
      { value: "2.500㎡", label: "Planta tipo" },
    ],
  },
  building: {
    kicker: "Edificio",
    title: "Que hable el espacio.",
    chapters: [
      {
        id: "place",
        kicker: "01",
        title: "Ubicación",
        line: "Junto a Century Avenue, metro a la puerta.",
        image: "chapter-place.jpg",
        position: "center center",
      },
      {
        id: "life",
        kicker: "02",
        title: "Servicios",
        line: "Comercio, hub y parking en uno.",
        image: "chapter-life.jpg",
        position: "center 20%",
      },
      {
        id: "lobby",
        kicker: "03",
        title: "Lobby",
        line: "Presencia de sede desde el primer vistazo.",
        image: "chapter-lobby.jpg",
        position: "center center",
      },
      {
        id: "standard",
        kicker: "04",
        title: "Estándar",
        line: "Plantas ejecutivas y de trading, cada una en su sitio.",
        image: "chapter-standard.jpg",
        position: "center center",
      },
    ],
  },
  plans: {
    kicker: "Planos",
    title: "Zonas claras de un vistazo.",
    items: [
      { title: "Zonas de fachada", image: "plan-1.jpg" },
      { title: "Planta zona alta", image: "plan-2.jpg" },
      { title: "Planta zona media", image: "plan-3.jpg" },
      { title: "Planta zona baja", image: "plan-4.jpg" },
    ],
  },
  specs: {
    kicker: "Datos",
    title: "Especificaciones clave.",
    aria: "Especificaciones técnicas",
    items: [
      ["Plantas", "41 sobre / 4 bajo rasante"],
      ["Altura libre típica", "3,1 m"],
      ["Distancia al núcleo", "Hasta ~14 m"],
      ["Carga de forjado", "3,5–5,0 kN/㎡"],
      ["Aparcamiento", "527"],
      ["Aire fresco", "30 m³/h·persona"],
      ["Agua de refrigeración", "24h"],
      ["Iluminación", "500 LUX"],
    ],
  },
  contact: {
    kicker: "Contacto",
    role: "Gerente de ventas de arrendamiento, Torre Taikang Insurance",
    hint: "Materiales, visitas, propuestas — dígalo directamente.",
    hotline: "Línea",
    phone: "Móvil / WeChat",
    email: "Correo",
    cta: "Contactar ahora",
    phonePlaceholder: "Añadir móvil / WeChat",
    emailPlaceholder: "Añadir correo",
  },
  footer: {
    place: "Taikang Insurance Tower · Lujiazui",
  },
  hotline: "021-68599875",
};

export default es;
