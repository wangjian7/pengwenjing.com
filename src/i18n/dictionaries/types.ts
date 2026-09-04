export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    building: string;
    gallery: string;
    plans: string;
    contact: string;
    aria: string;
    language: string;
  };
  hero: {
    building: string;
    line: string;
    cta: string;
    plans: string;
    scroll: string;
  };
  signals: {
    aria: string;
    items: { value: string; label: string }[];
  };
  leed: {
    alt: string;
    caption: string;
  };
  building: {
    kicker: string;
    title: string;
    chapters: {
      id: string;
      kicker: string;
      title: string;
      line: string;
      image: string;
      position: string;
    }[];
  };
  gallery: {
    kicker: string;
    title: string;
    aria: string;
    items: { title: string; image: string }[];
  };
  plans: {
    kicker: string;
    title: string;
    items: { title: string; image: string }[];
  };
  specs: {
    kicker: string;
    title: string;
    aria: string;
    items: [string, string][];
  };
  contact: {
    kicker: string;
    role: string;
    hint: string;
    phone: string;
    email: string;
    cta: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    mobile: string;
    emailAddress: string;
  };
  footer: {
    place: string;
  };
  brand: {
    name: string;
    person: string;
  };
};
