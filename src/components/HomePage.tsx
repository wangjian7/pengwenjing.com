import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import styles from "./HomePage.module.css";

const asset = (name: string) => `/assets/${name}`;

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function HomePage({ locale, dict }: Props) {
  return (
    <main className={styles.page} data-locale={locale}>
      <header className={styles.nav}>
        <a className={styles.brand} href={`/${locale}#top`}>
          <span className={styles.brandName}>{dict.brand.name}</span>
          <span className={styles.brandPerson}>{dict.brand.person}</span>
        </a>
        <div className={styles.navCluster}>
          <nav className={styles.navLinks} aria-label={dict.nav.aria}>
            <a href={`/${locale}#building`}>{dict.nav.building}</a>
            <a href={`/${locale}#gallery`}>{dict.nav.gallery}</a>
            <a href={`/${locale}#plans`}>{dict.nav.plans}</a>
            <a href={`/${locale}#contact`}>{dict.nav.contact}</a>
          </nav>
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
        </div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src={asset("hero-tower.jpg")}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroVeil} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{dict.hero.building}</h1>
          <p className={styles.heroPerson}>{dict.brand.person}</p>
          <p className={styles.heroLine}>{dict.hero.line}</p>
          <div className={styles.heroActions}>
            <a className={styles.cta} href={`/${locale}#contact`}>
              {dict.hero.cta}
            </a>
            <a className={styles.ghost} href={`/${locale}#plans`}>
              {dict.hero.plans}
            </a>
          </div>
        </div>

        <a className={styles.scrollHint} href={`/${locale}#signals`} aria-label={dict.hero.scroll}>
          <span />
        </a>
      </section>

      <section id="signals" className={styles.signals} aria-label={dict.signals.aria}>
        {dict.signals.items.map((item) => (
          <div key={`${item.value}-${item.label}`} className={styles.signal}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <aside className={styles.leed} aria-label={dict.leed.caption}>
        <Image
          src={asset("leed.png")}
          alt={dict.leed.alt}
          width={1600}
          height={1257}
          className={styles.leedMark}
        />
        <p>{dict.leed.caption}</p>
      </aside>

      <section id="building" className={styles.chapters}>
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>{dict.building.kicker}</p>
          <h2>{dict.building.title}</h2>
        </header>

        {dict.building.chapters.map((chapter) => (
          <article key={chapter.id} className={styles.chapter}>
            <div className={styles.chapterMedia}>
              <Image
                src={asset(chapter.image)}
                alt={chapter.title}
                fill
                sizes="100vw"
                style={{ objectPosition: chapter.position }}
              />
            </div>
            <div className={styles.chapterCopy}>
              <span>{chapter.kicker}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.line}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="gallery" className={styles.gallery} aria-label={dict.gallery.aria}>
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>{dict.gallery.kicker}</p>
          <h2>{dict.gallery.title}</h2>
        </header>
        <div className={styles.galleryWall}>
          {dict.gallery.items.map((item) => (
            <figure key={item.image} className={styles.galleryCard}>
              <Image
                src={asset(item.image)}
                alt={item.title}
                width={1120}
                height={792}
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="plans" className={styles.plans}>
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>{dict.plans.kicker}</p>
          <h2>{dict.plans.title}</h2>
        </header>
        <div className={styles.planRail}>
          {dict.plans.items.map((plan) => (
            <figure key={plan.title} className={styles.plan}>
              <div className={styles.planFrame}>
                <Image src={asset(plan.image)} alt={plan.title} fill sizes="50vw" />
              </div>
              <figcaption>{plan.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.specs} aria-label={dict.specs.aria}>
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>{dict.specs.kicker}</p>
          <h2>{dict.specs.title}</h2>
        </header>
        <dl className={styles.specList}>
          {dict.specs.items.map(([label, value]) => (
            <div key={label} className={styles.specRow}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactCopy}>
          <p className={styles.kicker}>{dict.contact.kicker}</p>
          <h2>{dict.brand.person}</h2>
          <p className={styles.contactRole}>{dict.contact.role}</p>
          <p className={styles.contactHint}>{dict.contact.hint}</p>
        </div>
        <div className={styles.contactDetails}>
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
      </section>

      <footer className={styles.footer}>
        <span>{dict.brand.name}</span>
        <span>{dict.footer.place}</span>
      </footer>
    </main>
  );
}
