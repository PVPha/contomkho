import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Icon from '../components/Icon';

export default function Recipes() {
  const recipes = [
    {
      title: "Heritage XO Sauce",
      desc: "A decadent, savory condiment that serves as the ultimate umami bomb for noodles and stir-fries.",
      img: IMAGES.RECIPE_XO,
      time: "90 MINS",
      level: "INTERMEDIATE",
      signature: true,
      large: true
    },
    {
      title: "Cà Mau Shrimp Salad",
      desc: "Crisp vegetables tossed with rehydrated heritage shrimp and a zesty calamansi dressing.",
      img: IMAGES.RECIPE_SALAD,
      time: "20 MINS",
      level: "EASY"
    },
    {
      title: "Classic Claypot Braise",
      desc: "Slow-cooked pork belly and dried shrimp in a caramelized fish sauce reduction.",
      img: IMAGES.RECIPE_CLAYPOT,
      time: "45 MINS",
      level: "ADVANCED"
    }
  ];

  return (
    <div className="pt-20">
      <header className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="font-label-caps text-primary border border-outline-variant rounded-full px-4 py-1">Culinary Arts</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-serif italic mb-8">From Tradition to Your Table</h1>
        <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto font-serif opacity-80">
          Discover the versatile soul of premium sun-dried shrimp. From intense umami foundations to delicate coastal salads, these recipes celebrate the heritage of Cà Mau.
        </p>
      </header>

      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {recipes.map((recipe, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${recipe.large ? 'col-span-12 lg:col-span-8' : 'col-span-12 md:col-span-6 lg:col-span-4'} group cursor-pointer`}
            >
              <div className={`relative overflow-hidden ${recipe.large ? 'aspect-[16/9]' : 'aspect-square'} mb-6 bg-surface-container`}>
                <img 
                  src={recipe.img} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {recipe.signature && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 font-label-caps text-[10px] text-primary tracking-widest uppercase">Signature Recipe</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className={`font-serif ${recipe.large ? 'text-3xl' : 'text-2xl'} mb-2`}>{recipe.title}</h2>
                  <p className="text-on-surface-variant/80 text-sm mb-4 max-w-md">{recipe.desc}</p>
                  <div className="flex items-center gap-4 text-xs font-label-caps text-on-surface-variant/60">
                    <span className="flex items-center gap-1"><Icon name="schedule" size={14} /> {recipe.time}</span>
                    <span className="flex items-center gap-1"><Icon name="restaurant" size={14} /> {recipe.level}</span>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon name="arrow_outward" size={20} />
                </button>
              </div>
            </motion.article>
          ))}

          {/* Decorative Quote */}
          <div className="col-span-12 lg:col-span-8 flex items-center justify-center bg-surface-container p-12 text-center my-12">
            <div className="max-w-md">
              <Icon name="format_quote" size={48} className="text-tertiary-container mb-4 opacity-50" />
              <p className="text-2xl lg:text-3xl font-serif italic text-on-surface-variant mb-6">
                "The sun-dried shrimp isn't just an ingredient; it is the seasoning that defines the soul of the dish."
              </p>
              <div className="h-px w-12 bg-outline-variant mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img src={IMAGES.PROCESS_SECRET} alt="Drying process" className="w-full aspect-[4/5] object-cover shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 max-w-xs shadow-xl hidden md:block">
              <span className="font-label-caps text-primary mb-2 block">QUALITY NOTE</span>
              <p className="text-sm italic font-serif opacity-70">Each shrimp undergoes 48 hours of natural solar curing to achieve its distinct concentrated flavor profile.</p>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-serif mb-8">The Secret Ingredient</h2>
            <div className="space-y-10">
              {[
                { title: "Concentrated Umami", desc: "Unlike fresh shrimp, the heritage sun-drying process intensifies the natural glutamates." },
                { title: "Artisanal Texture", desc: "Our slow-curing method preserves a slight chewiness—a 'snap'—that adds tactile dimension." },
                { title: "Coastal Terroir", desc: "The sea salt and Mekong Delta breeze impart a subtle minerality to each shrimp." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="w-12 h-12 shrink-0 rounded-full border border-primary flex items-center justify-center text-primary font-serif font-bold">0{i+1}</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-primary text-white px-10 py-4 font-label-caps hover:bg-primary-container transition-all flex items-center gap-2">
              SHOP THE COLLECTION <Icon name="shopping_bag" size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
