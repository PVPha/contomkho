import { motion } from "motion/react";
import { IMAGES } from "../constants";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HOME_HERO}
            alt="Premium sun-dried shrimp"
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
              ESTABLISHED TRADITION
            </span>
            <h1 className="text-5xl lg:text-7xl text-white mb-8 leading-tight font-serif">
              The Essence of the Sea, <br />
              <span className="italic font-normal">Crafted by Tradition</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-lg font-serif italic">
              Sourced from the mineral-rich waters of Cà Mau, our shrimp are
              sun-dried using artisanal methods passed down through seven
              generations.
            </p>
            <button className="bg-primary text-white px-10 py-5 font-label-caps hover:bg-primary-container transition-all shadow-xl">
              EXPLORE THE COLLECTION
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
              THE JOURNEY
            </span>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight font-serif">
              From Ocean to Jar
            </h2>
            <p className="text-lg text-on-surface-variant mb-6 font-serif">
              The secret to our deep umami flavor lies in the rhythm of nature.
              We harvest only at the peak of the lunar cycle, when the shrimp
              are at their most succulent.
            </p>
            <p className="text-base text-on-surface-variant/80 mb-10 leading-relaxed font-sans">
              Unlike industrial drying, our process takes three days under the
              intense coastal sun. This slow evaporation concentrates the
              natural sweetness and creates that signature translucent amber hue
              that defines genuine Cà Mau heritage.
            </p>
            <div className="flex gap-4 lg:gap-12 border-t border-outline-variant pt-8">
              <div className="text-center">
                <span className="block text-3xl font-serif text-primary">
                  100%
                </span>
                <span className="font-label-caps text-[10px] text-on-surface-variant">
                  SUN DRIED
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-primary">
                  0%
                </span>
                <span className="font-label-caps text-[10px] text-on-surface-variant">
                  PRESERVATIVES
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-primary">
                  7
                </span>
                <span className="font-label-caps text-[10px] text-on-surface-variant">
                  GENERATIONS
                </span>
              </div>
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
              alt="Artisanal drying process"
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-[240px] hidden md:block">
              <p className="italic font-serif text-on-surface/70 leading-relaxed">
                "The sun is our most patient craftsman, drawing out flavors that
                time and fire cannot."
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
              THE SIGNATURE SELECTION
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif">
              Cà Mau Sun-Dried
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
                alt="Vintage 2024 Heritage Selection"
                className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-12 left-12">
                <span className="bg-tertiary-container text-white px-4 py-1 font-label-caps text-[10px]">
                  LIMITED RESERVE
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
                {["SUN-DRIED", "EXTRA LARGE GRADE", "NATURALLY SWEET"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-surface-variant text-on-surface-variant px-3 py-1 font-label-caps text-[10px]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <h3 className="text-4xl font-serif leading-tight">
                Vintage 2024 Heritage <br />
                Selection 500g
              </h3>
              <p className="text-lg text-on-surface-variant font-serif opacity-80">
                Our premier grade, hand-selected for size and color uniformity.
                Each shrimp is peeled by hand to preserve the delicate structure
                of the meat.
              </p>
              <div className="flex items-baseline gap-4 py-4">
                <span className="text-3xl font-serif text-primary">$85.00</span>
                <span className="text-on-surface-variant/50 line-through text-sm">
                  $110.00
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-outline px-6 py-4">
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
                </div>
                <button className="bg-primary text-white flex-1 py-4 font-label-caps hover:bg-primary-container transition-all shadow-lg inline-flex items-center justify-center gap-2">
                  ORDER NOW <Icon name="arrow_forward" size={18} />
                </button>
              </div>
              <p className="text-xs text-on-surface-variant italic flex items-center gap-2 opacity-70">
                <Icon name="local_shipping" size={18} /> Complimentary shipping
                on orders over $150
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
              <h2 className="text-4xl font-serif mb-12">Purity & Trust</h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Icon name="verified" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Certified Provenance
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-serif">
                      Every jar comes with a QR code tracing back to the
                      specific coastal drying station.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Icon name="eco" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Ethical Harvesting
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-serif">
                      We partner with local artisanal fishers who use
                      sustainable, low-impact netting methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "ELIZA VAN DER BELT",
                  role: "MICHELIN STAR PASTRY CHEF",
                  quote:
                    "I've tried many brands, but the texture of Tôm Khô Heritage is incomparable. It's like a concentrated bite of the ocean.",
                },
                {
                  name: "DAVID NGUYEN",
                  role: "HOME CONNOISSEUR",
                  quote:
                    "A true gourmet discovery. The amber color and clarity are signs of perfect sun-drying. Simply stunning in my XO sauce.",
                },
              ].map((test, i) => (
                <motion.div
                  key={i}
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
                  <div>
                    <p className="font-bold text-xs tracking-widest text-primary">
                      {test.name}
                    </p>
                    <p className="text-[10px] text-on-surface-variant/60 uppercase">
                      {test.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
