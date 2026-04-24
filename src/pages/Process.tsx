import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Icon from '../components/Icon';

export default function Process() {
  return (
    <div className="pt-20">
      {/* Process Hero */}
      <header className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={IMAGES.PROCESS_BOAT} 
          alt="Coastal Cà Mau boats" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-4xl px-6">
          <span className="font-label-caps text-white/80 mb-4 block tracking-[0.2em]">A CULINARY ODYSSEY</span>
          <h1 className="text-5xl lg:text-7xl text-white mb-8 font-serif italic">From Sea to Sunlight</h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto font-serif">
            Discover the three-day journey of transformation where the freshest Cà Mau shrimp meets artisanal craftsmanship and the Vietnamese sun.
          </p>
        </div>
      </header>

      {/* Section 01: The Source */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="font-label-caps text-primary mb-4 block">01. THE SOURCE</span>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight font-serif">Mineral-Rich Waters of Cà Mau</h2>
            <p className="text-on-surface-variant font-serif opacity-80 mb-8 leading-relaxed">
              Located at the southern tip of Vietnam, Cà Mau is a landscape defined by the intersection of forest and sea. Our shrimp thrive in nutrient-dense brackish waters, feeding on natural minerals that imbue their flesh with a signature sweetness found nowhere else on earth.
            </p>
            <div className="flex items-center gap-4 border-l-2 border-primary pl-6 py-2">
              <Icon name="location_on" className="text-primary" />
              <span className="font-bold tracking-tight text-on-surface">Ngọc Hiển District, Cà Mau Province</span>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] shadow-2xl overflow-hidden">
              <img src={IMAGES.PROCESS_MANGROVE} alt="Mangrove forests" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 right-6 bg-white p-4 border border-outline/10 shadow-lg">
                <p className="font-label-caps text-[10px] text-outline mb-1">LOCALITY MAP</p>
                <p className="text-sm italic font-serif">Cà Mau Biosphere Reserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Selection */}
      <section className="bg-surface-container-low py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-primary mb-4 block uppercase tracking-widest">02. SELECTION</span>
            <h2 className="text-4xl lg:text-5xl font-serif">The Artisanal Selection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: IMAGES.PROCESS_HANDS, title: "Hand-Sorted Quality", desc: "Each catch is inspected by eye. Only the most robust shrimp make the cut." },
              { img: IMAGES.PROCESS_FRESH, title: "Immediate Freshness", desc: "Timing is everything. Sorting begins within two hours of harvest." },
              { img: IMAGES.PROCESS_TRAY, title: "Tradition of Precision", desc: "Our masters rely on generational knowledge to identify shrimp at their peak." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <img src={step.img} alt={step.title} className="w-full aspect-[3/4] object-cover shadow-sm" />
                <h3 className="text-2xl font-serif">{step.title}</h3>
                <p className="text-on-surface-variant font-serif text-sm opacity-70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: The Cure */}
      <section className="py-24 bg-surface px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <span className="font-label-caps text-primary mb-4 block">03. THE CURE</span>
            <h2 className="text-4xl font-serif mb-8 leading-tight">The 72-Hour Sun Cure</h2>
            <p className="text-on-surface-variant font-serif opacity-80 mb-10">
              Unlike industrial heat-drying, our solar evaporation process is patient and transformative. The sun coaxes the moisture out slowly, concentrating the natural sugars.
            </p>
            <div className="space-y-8">
              {[
                { day: "1", title: "Setting the Base", desc: "Shrimp are laid on elevated bamboo racks to capture the full midday sun." },
                { day: "2", title: "The Turning", desc: "Each shrimp is manually flipped every hour to ensure even dehydration." },
                { day: "3", title: "Final Fixation", desc: "The signature terracotta color intensifies as moisture reaches 15%." }
              ].map((d, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-primary font-bold text-xl min-w-[60px]">Day {d.day}:</span>
                  <div className="text-sm">
                    <span className="font-bold text-on-surface block mb-1">{d.title}</span>
                    <p className="text-on-surface-variant/80 font-serif">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <img src={IMAGES.PROCESS_WIDE} alt="Wide drying beds" className="w-full aspect-video object-cover shadow-xl" />
            <div className="grid grid-cols-2 gap-8">
              <img src={IMAGES.PROCESS_MACRO} alt="Macro texture" className="w-full aspect-square object-cover" />
              <img src={IMAGES.PROCESS_WORKER} alt="Worker at beds" className="w-full aspect-square object-cover" />
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
                <img src={IMAGES.PROCESS_PEELING} alt="Hand peeling" className="w-full aspect-[5/6] object-cover border border-white/10" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary text-white rounded-full flex items-center justify-center p-8 text-center rotate-12 hidden lg:flex shadow-2xl">
                  <span className="font-label-caps text-[10px] leading-tight">PRESERVATIVE FREE TRADITION</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="font-label-caps text-primary-fixed mb-4 block uppercase">04. CRAFTSMANSHIP</span>
              <h2 className="text-5xl font-serif mb-8">Hand-Peeled & Packed</h2>
              <p className="text-xl text-white/70 italic font-serif mb-8">"The machine can strip a shell, but it cannot feel the soul of the shrimp."</p>
              <p className="text-white/60 mb-10 leading-relaxed font-serif">
                Once dried, the shells become brittle. Our artisans use a light, rhythmic tapping technique to remove the skins without bruising the meat. This manual labor of love ensures every piece is whole, vibrant, and pure.
              </p>
              <ul className="space-y-4">
                {['Zero-mechanical pressure peeling', 'Glass jar sealing for ultimate freshness', 'Batch-numbered heritage guarantee'].map(item => (
                  <li key={item} className="flex items-center gap-4">
                    <Icon name="check_circle" className="text-primary-fixed" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-12 px-10 py-5 bg-primary text-white font-label-caps hover:bg-surface-tint transition-all">
                SHOP THE HERITAGE COLLECTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-surface text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Icon name="format_quote" size={64} className="text-outline-variant mb-8 opacity-40 mx-auto" stroke-fill="1" />
          <blockquote className="text-4xl lg:text-5xl font-serif italic text-on-surface mb-10">
            "A taste that spans generations, captured by the sun and preserved by hand."
          </blockquote>
          <p className="font-label-caps text-primary tracking-[0.2em]">TRUNG NGUYEN, MASTER CURE ARTISAN</p>
        </div>
      </section>
    </div>
  );
}
