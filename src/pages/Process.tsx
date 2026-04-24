import { motion } from "motion/react";
import { IMAGES } from "../constants";
import Icon from "../components/Icon";
import { useI18n } from "../i18n";

export default function Process() {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      {/* Process Hero */}
      <header className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={IMAGES.PROCESS_BOAT}
          alt={t.process.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-4xl px-6">
          <span className="font-label-caps text-white/80 mb-4 block tracking-[0.2em]">
            {t.process.heroEyebrow}
          </span>
          <h1 className="text-5xl lg:text-7xl text-white mb-8 font-serif italic text-balance">
            {t.process.heroTitle}
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto font-serif">
            {t.process.heroText}
          </p>
        </div>
      </header>

      {/* Section 01: The Source */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="font-label-caps text-primary mb-4 block">
              {t.process.sourceEyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight font-serif">
              {t.process.sourceTitle}
            </h2>
            <p className="text-on-surface-variant font-serif opacity-80 mb-8 leading-relaxed">
              {t.process.sourceText}
            </p>
            <div className="flex items-center gap-4 border-l-2 border-primary pl-6 py-2">
              <Icon name="location_on" className="text-primary" />
              <span className="font-bold tracking-tight text-on-surface">
                {t.process.sourceLocation}
              </span>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] shadow-2xl overflow-hidden">
              <img
                src={IMAGES.PROCESS_MANGROVE}
                alt={t.process.mangroveAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 border border-outline/10 shadow-lg">
                <p className="font-label-caps text-[10px] text-outline mb-1">
                  {t.process.localityMap}
                </p>
                <p className="text-sm italic font-serif">
                  {t.process.localityName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Selection */}
      <section className="bg-surface-container-low py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-primary mb-4 block uppercase tracking-widest">
              {t.process.selectionEyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif">
              {t.process.selectionTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.process.selectionSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <img
                  src={IMAGES[step.imgKey as keyof typeof IMAGES]}
                  alt={step.title}
                  className="w-full aspect-[3/4] object-cover shadow-sm"
                />
                <h3 className="text-2xl font-serif">{step.title}</h3>
                <p className="text-on-surface-variant font-serif text-sm opacity-70 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: The Cure */}
      <section className="py-24 bg-surface px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <span className="font-label-caps text-primary mb-4 block">
              {t.process.cureEyebrow}
            </span>
            <h2 className="text-4xl font-serif mb-8 leading-tight">
              {t.process.cureTitle}
            </h2>
            <p className="text-on-surface-variant font-serif opacity-80 mb-10">
              {t.process.cureText}
            </p>
            <div className="space-y-8">
              {t.process.cureDays.map((d) => (
                <div key={d.day} className="flex gap-4">
                  <span className="text-primary font-bold text-xl min-w-[60px]">
                    {t.common.day} {d.day}:
                  </span>
                  <div className="text-sm">
                    <span className="font-bold text-on-surface block mb-1">
                      {d.title}
                    </span>
                    <p className="text-on-surface-variant/80 font-serif">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <img
              src={IMAGES.PROCESS_WIDE}
              alt={t.process.wideAlt}
              className="w-full aspect-video object-cover shadow-xl"
            />
            <div className="grid grid-cols-2 gap-8">
              <img
                src={IMAGES.PROCESS_MACRO}
                alt={t.process.macroAlt}
                className="w-full aspect-square object-cover"
              />
              <img
                src={IMAGES.PROCESS_WORKER}
                alt={t.process.workerAlt}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Craftsmanship */}
      <section className="py-24 bg-inverse-surface text-inverse-on-surface px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={IMAGES.PROCESS_PEELING}
                  alt={t.process.peelingAlt}
                  className="w-full aspect-[5/6] object-cover border border-white/10"
                />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary text-white rounded-full flex items-center justify-center p-8 text-center rotate-12 hidden lg:flex shadow-2xl">
                  <span className="font-label-caps text-[10px] leading-tight">
                    {t.process.badge}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="font-label-caps text-primary-fixed mb-4 block uppercase">
                {t.process.craftEyebrow}
              </span>
              <h2 className="text-5xl font-serif mb-8">
                {t.process.craftTitle}
              </h2>
              <p className="text-xl text-white/70 italic font-serif mb-8">
                "{t.process.craftQuote}"
              </p>
              <p className="text-white/60 mb-10 leading-relaxed font-serif">
                {t.process.craftText}
              </p>
              <ul className="space-y-4">
                {t.process.craftBullets.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <Icon name="check_circle" className="text-primary-fixed" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-12 px-10 py-5 bg-primary text-white font-label-caps hover:bg-surface-tint transition-all">
                {t.process.shopCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-surface text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Icon
            name="format_quote"
            size={64}
            className="text-outline-variant mb-8 opacity-40 mx-auto"
            stroke-fill="1"
          />
          <blockquote className="text-4xl lg:text-5xl font-serif italic text-on-surface mb-10">
            "{t.process.finalQuote}"
          </blockquote>
          <p className="font-label-caps text-primary tracking-[0.2em]">
            {t.process.finalAttribution}
          </p>
        </div>
      </section>
    </div>
  );
}
