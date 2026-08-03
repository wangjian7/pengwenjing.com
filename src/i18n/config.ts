export const locales = ["zh", "en", "ja", "ko", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  ja: "日本語",
  ko: "한국어",
  es: "ES",
};

export const localeHtmlLang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  ja: "ja",
  ko: "ko",
  es: "es",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
