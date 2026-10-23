import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import styles from "./UnitPage.module.css";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function UnitPage({ locale, dict }: Props) {
  const tel = dict.hotline.replace(/-/g, "");

  return (
    <main className={styles.page} data-locale={locale}>
      <header className={styles.nav}>
        <a className={styles.brand} href={`/${locale}`}>
          <span className={styles.brandName}>{dict.brand.name}</span>
          <span className={styles.brandMeta}>{dict.brand.meta}</span>
        </a>
        <div className={styles.navCluster}>
          <a className={styles.back} href={`/${locale}`}>
            {dict.unit.back}
          </a>
          <LanguageSwitcher locale={locale} label={dict.nav.language} path="/1502a" />
        </div>
      </header>

      <section className={styles.stage}>
        <div className={styles.player}>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/assets/v/1502a.jpg"
          >
            <source src="https://v.pengwenjing.com/1502a.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>{dict.unit.kicker}</p>
          <h1>{dict.unit.title}</h1>
          <p className={styles.line}>{dict.unit.line}</p>
          <p className={styles.note}>{dict.unit.note}</p>

          <div className={styles.details}>
            <a href={`tel:${tel}`}>
              <span>{dict.contact.hotline}</span>
              <strong>{dict.hotline}</strong>
            </a>
            <a href={`tel:${dict.contact.mobile}`}>
              <span>{dict.contact.phone}</span>
              <strong>{dict.contact.phonePlaceholder}</strong>
            </a>
            <a href={`mailto:${dict.contact.emailAddress}`}>
              <span>{dict.contact.email}</span>
              <strong>{dict.contact.emailPlaceholder}</strong>
            </a>
            <a className={styles.cta} href={`tel:${dict.contact.mobile}`}>
              {dict.contact.cta}
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{dict.brand.name}</span>
        <span>{dict.footer.place}</span>
      </footer>
    </main>
  );
}
