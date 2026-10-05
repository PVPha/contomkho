import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Icon from '../components/Icon';
import { useI18n } from '../i18n';

export default function Recipes() {
  const { t } = useI18n();
  const recipes = t.recipes.items;

  return (
    <div className="pt-20">
      <header className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="font-label-caps text-primary border border-outline-variant rounded-full px-4 py-1">{t.recipes.badge}</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-serif italic mb-8">{t.recipes.title}</h1>
        <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto font-serif opacity-80">
          {t.recipes.intro}
        </p>
      </header>

      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {recipes.map((recipe, i) => (
            <motion.article 
              key={recipe.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${recipe.large ? 'col-span-12 lg:col-span-8' : 'col-span-12 md:col-span-6 lg:col-span-4'} group cursor-pointer`}
            >
              <Link to={`/recipes/${recipe.id}`} className="block">
                <div className={`relative overflow-hidden ${recipe.large ? 'aspect-[16/9]' : 'aspect-square'} mb-6 bg-surface-container`}>
                  <img 
                    src={IMAGES[recipe.imgKey as keyof typeof IMAGES]}
                    alt={recipe.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {recipe.signature && (
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 font-label-caps text-[10px] text-primary tracking-widest uppercase">{t.recipes.signature}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className={`font-serif ${recipe.large ? 'text-3xl' : 'text-2xl'} mb-2 group-hover:text-primary transition-colors`}>{recipe.title}</h2>
                    <p className="text-on-surface-variant/80 text-sm mb-4 max-w-md">{recipe.desc}</p>
                    <div className="flex items-center gap-4 text-xs font-label-caps text-on-surface-variant/60">
                      <span className="flex items-center gap-1"><Icon name="schedule" size={14} /> {recipe.time}</span>
                      <span className="flex items-center gap-1"><Icon name="restaurant" size={14} /> {recipe.level}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shrink-0">
                    <Icon name="arrow_outward" size={20} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}

          {/* Decorative Quote */}
          <div className="col-span-12 lg:col-span-8 flex items-center justify-center bg-surface-container p-12 text-center my-12">
            <div className="max-w-md">
              <Icon name="format_quote" size={48} className="text-tertiary-container mb-4 opacity-50" />
              <p className="text-2xl lg:text-3xl font-serif italic text-on-surface-variant mb-6">
                "{t.recipes.quote}"
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
            <img src={IMAGES.PROCESS_SECRET} alt={t.recipes.processAlt} className="w-full aspect-[4/5] object-cover shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 max-w-xs shadow-xl hidden md:block">
              <span className="font-label-caps text-primary mb-2 block">{t.recipes.qualityNote}</span>
              <p className="text-sm italic font-serif opacity-70">{t.recipes.qualityText}</p>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-serif mb-8">{t.recipes.secretTitle}</h2>
            <div className="space-y-10">
              {t.recipes.secrets.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="w-12 h-12 shrink-0 rounded-full border border-primary flex items-center justify-center text-primary font-serif font-bold">0{i+1}</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/shop" className="mt-12 bg-primary text-white px-10 py-4 font-label-caps hover:bg-primary-container transition-all inline-flex items-center gap-2">
              {t.recipes.shopCta} <Icon name="shopping_bag" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

