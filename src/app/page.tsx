import Image from "next/image";
import styles from "./page.module.css";

const asset = (name: string) => `/assets/${name}`;

const contact = {
  name: "彭文静",
  role: "泰康保险大厦租赁销售经理",
  phone: "请补充手机号 / 微信号",
  email: "请补充邮箱",
  hotline: "021-68599875",
};

const signals = [
  { value: "陆家嘴", label: "CBD" },
  { value: "2 / 9", label: "双线地铁" },
  { value: "9万㎡", label: "建筑体量" },
  { value: "2500㎡", label: "标准层" },
];

const chapters = [
  {
    id: "place",
    kicker: "01",
    title: "坐标",
    line: "世纪大道旁，轨交直达。",
    image: "img_03.jpg",
    position: "center 28%",
  },
  {
    id: "life",
    kicker: "02",
    title: "配套",
    line: "商业、枢纽、车库一体。",
    image: "img_04.jpg",
    position: "center 22%",
  },
  {
    id: "lobby",
    kicker: "03",
    title: "大堂",
    line: "第一眼，就是总部气场。",
    image: "img_05.jpg",
    position: "center 24%",
  },
  {
    id: "standard",
    kicker: "04",
    title: "标准",
    line: "行政层、交易层，各就其位。",
    image: "img_06.jpg",
    position: "center 26%",
  },
];

const plans = [
  { title: "立面分区", image: "img_07.jpg" },
  { title: "高区平面", image: "img_08.jpg" },
  { title: "中区平面", image: "img_09.jpg" },
  { title: "低区平面", image: "img_10.jpg" },
];

const specs = [
  ["楼层", "地上 41 / 地下 4"],
  ["标准层净高", "3.1 m"],
  ["核心筒距", "最大约 14 m"],
  ["楼面荷载", "3.5–5.0 kN/㎡"],
  ["停车位", "527"],
  ["新风", "30 m³/h·人"],
  ["冷却水", "24h"],
  ["照明", "500 LUX"],
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandName}>{contact.name}</span>
          <span className={styles.brandMeta}>Leasing</span>
        </a>
        <nav className={styles.navLinks} aria-label="页面导航">
          <a href="#building">楼宇</a>
          <a href="#plans">平面</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src={asset("img_02.jpg")}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroVeil} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroBrand}>{contact.name}</p>
          <h1 className={styles.heroTitle}>泰康保险大厦</h1>
          <p className={styles.heroLine}>陆家嘴核心区 · 办公租赁</p>
          <div className={styles.heroActions}>
            <a className={styles.cta} href="#contact">
              预约看楼
            </a>
            <a className={styles.ghost} href="#plans">
              平面图
            </a>
          </div>
        </div>

        <a className={styles.scrollHint} href="#signals" aria-label="向下浏览">
          <span />
        </a>
      </section>

      <section id="signals" className={styles.signals} aria-label="关键数字">
        {signals.map((item) => (
          <div key={item.label} className={styles.signal}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="building" className={styles.chapters}>
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>楼宇</p>
          <h2>少说一点，让空间自己说话。</h2>
        </header>

        {chapters.map((chapter) => (
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

      <section id="plans" className={styles.plans}>
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>平面</p>
          <h2>分区清晰，一眼能懂。</h2>
        </header>
        <div className={styles.planRail}>
          {plans.map((plan) => (
            <figure key={plan.title} className={styles.plan}>
              <div className={styles.planFrame}>
                <Image src={asset(plan.image)} alt={plan.title} fill sizes="280px" />
              </div>
              <figcaption>{plan.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.specs} aria-label="技术参数">
        <header className={styles.sectionLead}>
          <p className={styles.kicker}>参数</p>
          <h2>需要核对的，都在这里。</h2>
        </header>
        <dl className={styles.specList}>
          {specs.map(([label, value]) => (
            <div key={label} className={styles.specRow}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactCopy}>
          <p className={styles.kicker}>联系</p>
          <h2>{contact.name}</h2>
          <p className={styles.contactRole}>{contact.role}</p>
          <p className={styles.contactHint}>资料、带看、方案——直接说。</p>
        </div>
        <div className={styles.contactDetails}>
          <a href={`tel:${contact.hotline.replace(/-/g, "")}`}>
            <span>热线</span>
            <strong>{contact.hotline}</strong>
          </a>
          <p>
            <span>手机 / 微信</span>
            <strong>{contact.phone}</strong>
          </p>
          <p>
            <span>邮箱</span>
            <strong>{contact.email}</strong>
          </p>
          <a className={styles.cta} href={`tel:${contact.hotline.replace(/-/g, "")}`}>
            立即联系
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{contact.name}</span>
        <span>Taikang Insurance Tower · Lujiazui</span>
      </footer>
    </main>
  );
}
