import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import Icon from '../components/Icon';
import { useI18n } from '../i18n';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [servingsCount, setServingsCount] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const recipes = t.recipes.items;
  const recipe = recipes.find((r) => r.id === id) || recipes[0];
  const relatedRecipes = recipes.filter((r) => r.id !== recipe.id);
  const detailT = (t.recipes as any).detail || {
    backToRecipes: "Back to Recipes",
    ingredients: "Ingredients Required",
    instructions: "Preparation Steps",
    servingsLabel: "Base Servings",
    prepTimeLabel: "Prep Time",
    cookTimeLabel: "Cook Time",
    totalTimeLabel: "Total Time",
    levelLabel: "Difficulty",
    chefTipTitle: "Master Artisan Note",
    itemsChecked: "prepped",
    interactiveServings: "Adjust Servings",
    relatedTitle: "More Heritage Recipes",
    shopCtaTitle: "Elevate this dish with genuine sun-dried shrimp",
    shopCtaButton: "Shop Tôm Khô Năm Thuý",
    printRecipe: "Print Recipe",
    shareRecipe: "Share Recipe",
    copied: "Link Copied to Clipboard!"
  };

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleStep = (stepNum: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const completedIngredientsCount = Object.values(checkedIngredients).filter(Boolean).length;
  const totalIngredientsCount = recipe.ingredients ? recipe.ingredients.length : 0;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F5F2ED]">
      {/* Top Header Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 flex justify-between items-center">
        <button
          onClick={() => navigate('/recipes')}
          className="group inline-flex items-center gap-2 text-sm font-label-caps text-on-surface-variant hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>{detailT.backToRecipes}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant text-xs font-label-caps text-on-surface-variant hover:border-primary hover:text-primary transition-all rounded-full bg-white/50 backdrop-blur"
          >
            <Icon name={copied ? "check" : "share"} size={16} />
            <span>{copied ? detailT.copied : detailT.shareRecipe}</span>
          </button>
          <button
            onClick={handlePrint}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant text-xs font-label-caps text-on-surface-variant hover:border-primary hover:text-primary transition-all rounded-full bg-white/50 backdrop-blur"
          >
            <Icon name="print" size={16} />
            <span>{detailT.printRecipe}</span>
          </button>
        </div>
      </div>

      {/* Main Recipe Banner Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container shadow-2xl rounded-sm">
              <img
                src={IMAGES[recipe.imgKey as keyof typeof IMAGES]}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              {recipe.signature && (
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-white px-3.5 py-1.5 font-label-caps text-xs tracking-widest uppercase shadow-md">
                    {t.recipes.signature}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Recipe Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-block mb-4">
              <span className="font-label-caps text-xs text-primary border border-primary/30 rounded-full px-3.5 py-1 uppercase tracking-wider">
                {t.recipes.badge}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif mb-4 text-on-surface leading-tight font-bold">
              {recipe.title}
            </h1>
            <p className="text-lg lg:text-xl font-serif italic text-on-surface-variant/90 mb-8 leading-relaxed">
              {recipe.subtitle || recipe.desc}
            </p>

            {/* Recipe Meta Info Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white/70 backdrop-blur border border-outline-variant/60 shadow-sm rounded-sm mb-6">
              <div className="text-center sm:text-left border-r border-outline-variant/30 pr-2">
                <span className="text-[10px] font-label-caps text-on-surface-variant/60 block uppercase tracking-wider mb-1">
                  {detailT.prepTimeLabel}
                </span>
                <span className="font-serif font-bold text-sm text-primary flex items-center justify-center sm:justify-start gap-1">
                  <Icon name="timer" size={16} /> {recipe.prepTime || '15 MINS'}
                </span>
              </div>
              <div className="text-center sm:text-left sm:border-r border-outline-variant/30 pr-2">
                <span className="text-[10px] font-label-caps text-on-surface-variant/60 block uppercase tracking-wider mb-1">
                  {detailT.cookTimeLabel}
                </span>
                <span className="font-serif font-bold text-sm text-primary flex items-center justify-center sm:justify-start gap-1">
                  <Icon name="skillet" size={16} /> {recipe.cookTime || '30 MINS'}
                </span>
              </div>
              <div className="text-center sm:text-left border-r border-outline-variant/30 pr-2">
                <span className="text-[10px] font-label-caps text-on-surface-variant/60 block uppercase tracking-wider mb-1">
                  {detailT.servingsLabel}
                </span>
                <span className="font-serif font-bold text-sm text-primary flex items-center justify-center sm:justify-start gap-1">
                  <Icon name="group" size={16} /> {recipe.servings || '4 Servings'}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-label-caps text-on-surface-variant/60 block uppercase tracking-wider mb-1">
                  {detailT.levelLabel}
                </span>
                <span className="font-serif font-bold text-sm text-primary flex items-center justify-center sm:justify-start gap-1">
                  <Icon name="restaurant" size={16} /> {recipe.level}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recipe Content Section: Ingredients & Instructions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Ingredients Checklist */}
          <div className="lg:col-span-5 bg-white p-8 lg:p-10 shadow-lg border border-outline-variant/40 rounded-sm">
            <div className="flex justify-between items-end border-b border-outline-variant/60 pb-6 mb-6">
              <div>
                <span className="font-label-caps text-xs text-primary block uppercase tracking-widest mb-1">
                  {detailT.interactiveServings}
                </span>
                <h3 className="text-2xl font-serif font-bold">{detailT.ingredients}</h3>
              </div>
              <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                <button
                  onClick={() => setServingsCount((s) => Math.max(1, s - 1))}
                  className="w-6 h-6 flex items-center justify-center font-bold text-on-surface hover:text-primary transition-colors"
                >
                  -
                </button>
                <span className="text-xs font-serif font-bold px-1">{servingsCount}x</span>
                <button
                  onClick={() => setServingsCount((s) => s + 1)}
                  className="w-6 h-6 flex items-center justify-center font-bold text-on-surface hover:text-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ingredients Progress Bar */}
            {totalIngredientsCount > 0 && (
              <div className="mb-6">
                <div className="flex justify-between text-xs font-label-caps text-on-surface-variant/70 mb-2">
                  <span>Progress</span>
                  <span>{completedIngredientsCount} / {totalIngredientsCount} {detailT.itemsChecked}</span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(completedIngredientsCount / totalIngredientsCount) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <ul className="space-y-4">
              {recipe.ingredients &&
                recipe.ingredients.map((item: string, idx: number) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-start gap-3.5 p-3 rounded-md cursor-pointer transition-all ${
                        isChecked ? 'bg-amber-50/70 border border-amber-200/50' : 'hover:bg-stone-50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 mt-0.5 rounded flex items-center justify-center border transition-all ${
                          isChecked
                            ? 'bg-primary border-primary text-white'
                            : 'border-outline-variant bg-white'
                        }`}
                      >
                        {isChecked && <Icon name="check" size={14} />}
                      </div>
                      <span
                        className={`font-serif text-sm leading-relaxed transition-all ${
                          isChecked ? 'line-through text-on-surface-variant/50' : 'text-on-surface'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
            </ul>

            {/* Chef's Note Card */}
            {recipe.chefNote && (
              <div className="mt-10 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/80 rounded-sm">
                <div className="flex items-center gap-2 text-primary font-serif font-bold mb-2">
                  <Icon name="tips_and_updates" size={20} />
                  <span>{detailT.chefTipTitle}</span>
                </div>
                <p className="font-serif italic text-sm text-on-surface-variant leading-relaxed">
                  "{recipe.chefNote}"
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Step-by-Step Instructions */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 shadow-lg border border-outline-variant/40 rounded-sm">
            <h3 className="text-3xl font-serif font-bold mb-8 pb-4 border-b border-outline-variant/60">
              {detailT.instructions}
            </h3>

            <div className="space-y-10">
              {recipe.instructions &&
                recipe.instructions.map((stepItem: any) => {
                  const isDone = !!completedSteps[stepItem.step];
                  return (
                    <motion.div
                      key={stepItem.step}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`flex gap-6 p-6 rounded-md border transition-all ${
                        isDone
                          ? 'bg-stone-50 border-stone-200 opacity-65'
                          : 'bg-surface-container-lowest border-outline-variant/30 hover:border-primary/30'
                      }`}
                    >
                      <button
                        onClick={() => toggleStep(stepItem.step)}
                        className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-serif font-bold text-lg transition-all ${
                          isDone
                            ? 'bg-emerald-600 text-white border border-emerald-600'
                            : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                      >
                        {isDone ? <Icon name="check" size={20} /> : `0${stepItem.step}`}
                      </button>

                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <h4
                            onClick={() => toggleStep(stepItem.step)}
                            className={`text-xl font-serif font-bold cursor-pointer hover:text-primary transition-colors ${
                              isDone ? 'line-through text-on-surface-variant' : 'text-on-surface'
                            }`}
                          >
                            {stepItem.title}
                          </h4>
                          <span className="text-[11px] font-label-caps text-on-surface-variant/50">
                            STEP {stepItem.step}
                          </span>
                        </div>
                        <p className="font-serif text-on-surface-variant leading-relaxed opacity-90 text-sm lg:text-base">
                          {stepItem.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>

            {/* Decorative Quote inside Instructions */}
            <div className="mt-12 p-8 bg-[#FAF8F5] border-l-4 border-primary text-center">
              <p className="font-serif italic text-lg text-on-surface-variant">
                "{t.recipes.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="bg-primary text-white p-10 lg:p-16 rounded-sm shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl z-10">
            <span className="font-label-caps text-xs tracking-widest text-amber-200 block mb-3 uppercase">
              AUTHENTIC BAC LIEU HERITAGE
            </span>
            <h3 className="text-3xl lg:text-4xl font-serif font-bold leading-tight mb-4">
              {detailT.shopCtaTitle}
            </h3>
            <p className="font-serif text-white/80 italic text-sm lg:text-base">
              Hand-selected, 100% solar cured without chemical additives or artificial coloring.
            </p>
          </div>
          <Link
            to="/shop"
            className="z-10 shrink-0 bg-white text-primary hover:bg-amber-100 font-label-caps px-8 py-4 text-xs tracking-widest uppercase transition-all shadow-lg flex items-center gap-2"
          >
            {detailT.shopCtaButton} <Icon name="arrow_forward" size={18} />
          </Link>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>
      </section>

      {/* Related Recipes Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-outline-variant/40 pt-16">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">
            {detailT.relatedTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedRecipes.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  navigate(`/recipes/${item.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-white border border-outline-variant/40 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all"
              >
                <div className="w-full sm:w-40 aspect-square shrink-0 overflow-hidden bg-surface-container relative">
                  <img
                    src={IMAGES[item.imgKey as keyof typeof IMAGES]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <span className="font-label-caps text-[10px] text-primary tracking-widest uppercase block mb-1">
                      {item.level} • {item.time}
                    </span>
                    <h4 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-serif text-xs text-on-surface-variant/80 line-clamp-2 mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-label-caps text-primary font-bold">
                    <span>VIEW RECIPE</span> <Icon name="arrow_forward" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
