import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../constants';
import Icon from '../components/Icon';
import { useI18n } from '../i18n';

export default function Shop() {
  const { t } = useI18n();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const categories = t.shop.categories;
  const products = t.shop.products;
  const activeCategory = categories[activeCategoryIndex];

  const filteredProducts = activeCategoryIndex === 0
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      <header className="bg-surface-container py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-label-caps text-primary mb-4 block">{t.shop.eyebrow}</span>
          <h1 className="text-5xl lg:text-6xl font-serif italic">{t.shop.title}</h1>
        </div>
      </header>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <button 
              key={cat}
              onClick={() => setActiveCategoryIndex(index)}
              className={`px-8 py-2 rounded-full font-label-caps text-[10px] transition-all border ${
                activeCategoryIndex === index
                  ? "bg-primary text-white border-primary" 
                  : "bg-transparent text-on-surface-variant border-outline-variant hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-surface-container mb-6 group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={IMAGES[product.imgKey as keyof typeof IMAGES]}
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 font-label-caps text-[8px] text-primary tracking-widest">{product.tag}</span>
                    </div>
                  )}
                  <button className="absolute bottom-4 left-4 right-4 bg-primary text-white py-3 font-label-caps text-[10px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {t.shop.addToCart}
                  </button>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg">{product.name}</h3>
                  <p className="text-xs text-on-surface-variant/60 font-serif italic mb-2">{product.category}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="text-on-surface-variant/40 line-through text-xs font-serif">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-surface-container-low py-20 px-6 lg:px-12 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {t.shop.badges.map((badge) => (
            <div key={badge.title}>
              <Icon name={badge.icon} size={32} className="text-primary mb-4" />
              <h4 className="font-label-caps text-[12px] mb-2">{badge.title}</h4>
              <p className="text-xs text-on-surface-variant italic font-serif">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
