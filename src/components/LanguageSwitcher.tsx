import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

type Props = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: Props) {
  return (
    <div className={styles.switcher} aria-label={label}>
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={`/${code}`}
            className={active ? styles.active : undefined}
            aria-current={active ? "page" : undefined}
            hrefLang={code === "zh" ? "zh-CN" : code}
          >
            {localeLabels[code]}
          </Link>
        );
      })}
    </div>
  );
}
