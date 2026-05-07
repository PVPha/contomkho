import { motion } from "motion/react";
import { IMAGES } from "../constants";
import Icon from "../components/Icon";
import { useI18n } from "../i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HOME_HERO}
            alt={t.home.heroAlt}
            className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="font-label-caps text-white/80 tracking-[0.3em] block mb-6">
              {t.home.heroEyebrow}
            </span>
            <h1 className="text-5xl lg:text-7xl text-white mb-8 leading-tight font-serif text-balance">
              {t.home.heroTitle} <br />
              <span className="italic font-normal">
                {t.home.heroTitleAccent}
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-lg font-serif italic">
              {t.home.heroText}
            </p>
            <button className="bg-primary text-white px-10 py-5 font-label-caps hover:bg-primary-container transition-all shadow-xl">
              {t.home.heroCta}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-surface relative">
        <div className="shrimp-dots absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pr-12"
          >
            <span className="font-label-caps text-primary mb-4 block">
              {t.home.journeyEyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight font-serif">
              {t.home.journeyTitle}
            </h2>
            <p className="text-lg text-on-surface-variant mb-6 font-serif">
              {t.home.journeyLead}
            </p>
            <p className="text-base text-on-surface-variant/80 mb-10 leading-relaxed font-sans">
              {t.home.journeyBody}
            </p>
            <div className="flex gap-4 lg:gap-12 border-t border-outline-variant pt-8">
              {t.home.stats.map((stat) => (
                <div className="text-center" key={stat.label}>
                  <span className="block text-3xl font-serif text-primary">
                    {stat.value}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={IMAGES.HOME_STORY}
              alt={t.home.storyAlt}
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-[240px] hidden md:block">
              <p className="italic font-serif text-on-surface/70 leading-relaxed">
                "{t.home.pullQuote}"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Showcase */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-label-caps text-primary mb-4 block tracking-widest">
              {t.home.signatureEyebrow}
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif">
              {t.home.signatureTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 shadow-sm relative group overflow-hidden"
            >
              <img
                src={IMAGES.HOME_PRODUCT}
                alt={t.home.productAlt}
                className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-12 left-12">
                <span className="bg-tertiary-container text-white px-4 py-1 font-label-caps text-[10px]">
                  {t.home.limitedReserve}
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex gap-2">
                {t.home.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-variant text-on-surface-variant px-3 py-1 font-label-caps text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-4xl font-serif leading-tight">
                {t.home.productTitle} <br />
                {t.home.productTitleAccent}
              </h3>
              <p className="text-lg text-on-surface-variant font-serif opacity-80">
                {t.home.productDesc}
              </p>
              {/* <div className="flex items-baseline gap-4 py-4">
                <span className="text-3xl font-serif text-primary">$85.00</span>
                <span className="text-on-surface-variant/50 line-through text-sm">
                  $110.00
                </span>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <div className="flex items-center border border-outline px-6 py-4">
                  <button className="hover:text-primary">
                    <Icon name="remove" size={18} />
                  </button>
                  <input
                    type="text"
                    value="1"
                    readOnly
                    className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold"
                  />
                  <button className="hover:text-primary">
                    <Icon name="add" size={18} />
                  </button>
                </div> */}
                <button className="bg-primary text-white flex-1 py-4 font-label-caps hover:bg-primary-container transition-all shadow-lg inline-flex items-center justify-center gap-2">
                  {t.home.orderNow} <Icon name="arrow_forward" size={18} />
                </button>
              </div>
              <p className="text-xs text-on-surface-variant italic flex items-center gap-2 opacity-70">
                <Icon name="local_shipping" size={18} /> {t.home.shipping}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-serif mb-12">{t.home.trustTitle}</h2>
              <div className="space-y-12">
                {t.home.trustItems.map((item) => (
                  <div className="flex gap-6 items-start" key={item.title}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Icon name={item.icon} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-serif">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.home.testimonials.map((test, i) => (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-surface-container-low p-10 border border-outline-variant/30 relative"
                >
                  <Icon
                    name="format_quote"
                    size={48}
                    className="absolute top-6 right-6 text-primary/10"
                  />
                  <div className="flex text-tertiary-container mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Icon
                        key={j}
                        name="star"
                        size={14}
                        className="fill-current"
                      />
                    ))}
                  </div>
                  <p className="font-serif italic text-on-surface/80 mb-8 leading-relaxed">
                    "{test.quote}"
                  </p>
                  {/* <div>
                    <p className="font-bold text-xs tracking-widest text-primary">
                      {test.name}
                    </p>
                    <p className="text-[10px] text-on-surface-variant/60 uppercase">
                      {test.role}
                    </p>
                  </div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
