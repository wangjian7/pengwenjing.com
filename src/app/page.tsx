import Image from "next/image";
import styles from "./page.module.css";

const asset = (name: string) => `/assets/${name}`;

const contact = {
  name: "彭文静",
  role: "泰康保险大厦租赁销售经理",
  phone: "请补充手机号 / 微信号",
  email: "请补充邮箱",
  hotline: "021-68599875 / 021-68599876",
};

const highlights = [
  { value: "陆家嘴", label: "核心商务区", detail: "直连城市金融与总部经济资源" },
  { value: "2 / 9", label: "双线地铁", detail: "轨交 2 号线与 9 号线快速通达" },
  { value: "90,000㎡", label: "建筑总面积", detail: "塔楼、商业与地下空间一体规划" },
  { value: "2,500㎡", label: "标准层面积", detail: "约 70% 整层得房率，适配总部办公" },
];

const featureCards = [
  {
    title: "城市坐标",
    eyebrow: "LOCATION",
    image: "img_03.jpg",
    text: "位于上海陆家嘴中央商务区，临近世纪大道、商城路、东昌路等城市干道，面向中介机构和企业客户时具备天然的商务认知优势。",
  },
  {
    title: "商业配套",
    eyebrow: "AMENITIES",
    image: "img_04.jpg",
    text: "约 14 万平方米商业配套、7,200 平方米交通枢纽与地下车库形成稳定支撑，办公与生活服务可以同步覆盖。",
  },
  {
    title: "大堂形象",
    eyebrow: "LOBBY",
    image: "img_05.jpg",
    text: "双大堂、行政楼层与交易楼层面向高端企业需求，第一眼即可传递专业、秩序与稳定的办公氛围。",
  },
  {
    title: "商务标准",
    eyebrow: "BUSINESS",
    image: "img_06.jpg",
    text: "行政电梯、服务电梯、行政卫生间、预留通信设备安装条件等配置，帮助企业降低入驻后的运营摩擦。",
  },
];

const plans = [
  { title: "建筑立面图", subtitle: "高区 / 中区 / 低区 / 交易楼层 / 行政楼层", image: "img_07.jpg" },
  { title: "高区标准平面", subtitle: "31-41F，整层办公效率约 70%", image: "img_08.jpg" },
  { title: "中区标准平面", subtitle: "19-30F，标准层约 2,500 平方米", image: "img_09.jpg" },
  { title: "低区标准平面", subtitle: "3-18F，适合多类型企业组合", image: "img_10.jpg" },
];

const specs = [
  ["楼层", "地上 41 层 / 地下 4 层"],
  ["标准层净高", "3.1 米"],
  ["墙面到核心筒距离", "最大约 14 米"],
  ["楼层载重", "标准楼层 3.5 kN/㎡ / 交易楼层 5 kN/㎡"],
  ["停车位", "527 个地下停车位"],
  ["新风系统", "30 m³/小时/人"],
  ["冷却水", "24 小时不间断供给"],
  ["照明标准", "500 LUX"],
];

const workflow = [
  "根据客户行业、人员规模与预算建立需求画像",
  "用楼层分区、平面图和技术参数快速完成初筛",
  "组织看楼、答疑和方案沟通，提升客户决策效率",
  "持续跟进中介渠道与企业客户，推动租赁转化",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.matrix} aria-hidden="true" />

      <header className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="回到首页">
          <span className={styles.brandMark}>PWJ</span>
          <span>
            <strong>彭文静</strong>
            <small>Office Leasing Advisor</small>
          </span>
        </a>
        <nav className={styles.navLinks} aria-label="页面导航">
          <a href="#building">楼宇信息</a>
          <a href="#plans">平面图</a>
          <a href="#advisor">顾问能力</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>TAIKANG INSURANCE TOWER / LUJIAZUI</p>
          <h1>
            泰康保险大厦
            <span>高端办公租赁展示站</span>
          </h1>
          <p className={styles.heroLead}>
            用楼宇价值、专业顾问能力和清晰素材，一次性打动中介机构与企业客户。这里既是项目介绍页，也是彭文静的个人品牌名片。
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">
              预约沟通
            </a>
            <a className={styles.secondaryButton} href="#plans">
              查看平面图
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImage}>
            <Image
              src={asset("img_02.jpg")}
              alt="泰康保险大厦效果图"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>
          <div className={styles.signalCard}>
            <span>LEASING SIGNAL</span>
            <strong>专业呈现 / 快速转化 / 渠道友好</strong>
          </div>
        </div>
      </section>

      <section className={styles.logoStrip} aria-label="项目标识">
        <Image src={asset("cover.jpg")} alt="泰康保险大厦项目标识" fill sizes="100vw" />
      </section>

      <section className={styles.metrics} aria-label="核心指标">
        {highlights.map((item) => (
          <article key={item.label} className={styles.metric}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section id="building" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>BUILDING INTELLIGENCE</p>
          <h2>先用价值框架吸引注意力，再用素材证明项目实力。</h2>
        </div>
        <div className={styles.featureGrid}>
          {featureCards.map((card) => (
            <article key={card.title} className={styles.featureCard}>
              <div className={styles.featureImage}>
                <Image src={asset(card.image)} alt={card.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className={styles.featureBody}>
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="plans" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>FLOOR PLAN SYSTEM</p>
          <h2>让客户快速看懂楼层分区、空间效率与可租赁想象。</h2>
        </div>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article key={plan.title} className={styles.planCard}>
              <div className={styles.planImage}>
                <Image src={asset(plan.image)} alt={plan.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div>
                <h3>{plan.title}</h3>
                <p>{plan.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.specSection}`}>
        <div className={styles.specCopy}>
          <p className={styles.eyebrow}>TECHNICAL SPECIFICATIONS</p>
          <h2>关键技术参数已经提炼成可转发、可沟通的语言。</h2>
          <p>
            原始技术规格图也完整保留在页面中，方便客户或中介机构继续核对细节。正式上线前可根据最新招商口径再微调文案。
          </p>
        </div>
        <div className={styles.specGrid}>
          {specs.map(([label, value]) => (
            <div key={label} className={styles.specItem}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className={styles.documentGrid}>
          {["img_11.jpg", "img_12.jpg", "img_13.jpg"].map((image, index) => (
            <div key={image} className={styles.documentCard}>
              <Image
                src={asset(image)}
                alt={index === 2 ? "项目团队资料" : "办公室技术规格资料"}
                fill
                sizes="(max-width: 900px) 90vw, 30vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="advisor" className={styles.advisor}>
        <div className={styles.advisorPanel}>
          <p className={styles.eyebrow}>PERSONAL BRAND</p>
          <h2>{contact.name}，把楼宇信息转化为客户决策。</h2>
          <p>
            这个网站的目标不是堆资料，而是让中介和客户在 30 秒内感受到项目清晰、顾问专业、沟通高效。彭文静作为销售经理，将项目素材、客户需求和成交路径连接起来。
          </p>
        </div>
        <div className={styles.workflow}>
          {workflow.map((item, index) => (
            <div key={item} className={styles.workflowItem}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div>
          <p className={styles.eyebrow}>START LEASING CONVERSATION</p>
          <h2>需要泰康保险大厦资料、看楼安排或租赁方案，直接联系彭文静。</h2>
        </div>
        <div className={styles.contactCard}>
          <span>{contact.role}</span>
          <strong>{contact.name}</strong>
          <p>手机 / 微信：{contact.phone}</p>
          <p>邮箱：{contact.email}</p>
          <p>项目租赁热线：{contact.hotline}</p>
          <a className={styles.primaryButton} href="tel:02168599875">
            拨打租赁热线
          </a>
        </div>
      </section>
    </main>
  );
}
