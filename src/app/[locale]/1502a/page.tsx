import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UnitPage } from "@/components/UnitPage";
import { isLocale, localeHtmlLang, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const languages = Object.fromEntries(
    locales.map((code) => [localeHtmlLang[code], `/${code}/1502a`]),
  ) as Record<string, string>;

  return {
    title: dict.unit.metaTitle,
    description: dict.unit.metaDescription,
    alternates: {
      canonical: `/${locale}/1502a`,
      languages: {
        ...languages,
        "x-default": "/zh/1502a",
      },
    },
    openGraph: {
      title: dict.unit.metaTitle,
      description: dict.unit.metaDescription,
      url: `/${locale}/1502a`,
      images: [{ url: "/assets/v/1502a.jpg" }],
    },
  };
}

export default async function UnitRoute({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return <UnitPage locale={locale} dict={dict} />;
}
