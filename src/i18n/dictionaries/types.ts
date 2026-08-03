export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    building: string;
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
    hotline: string;
    phone: string;
    email: string;
    cta: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
  };
  footer: {
    place: string;
  };
  brand: {
    name: string;
    meta: string;
  };
  hotline: string;
};
