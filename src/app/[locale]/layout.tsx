import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { isLocale, localeHtmlLang, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const languages = Object.fromEntries(
    locales.map((code) => [localeHtmlLang[code], `/${code}`]),
  ) as Record<string, string>;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...languages,
        "x-default": "/zh",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const lang = localeHtmlLang[raw];

  return (
    <>
      <SetHtmlLang lang={lang} />
      {children}
    </>
  );
}
