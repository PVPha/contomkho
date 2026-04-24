import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Icon from './Icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Our Story', path: '/' },
    { name: 'The Process', path: '/process' },
    { name: 'Shop', path: '/shop' },
    { name: 'Recipes', path: '/recipes' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2ED]/95 backdrop-blur-sm border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif italic text-primary font-bold">
          Tôm Khô Heritage
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-serif text-sm font-medium transition-all duration-300 hover:text-primary ${
                location.pathname === link.path ? 'text-primary border-b border-primary' : 'text-on-surface/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-on-surface hover:text-primary transition-colors flex items-center">
            <Icon name="shopping_bag" size={22} />
          </button>
          <button className="text-on-surface hover:text-primary transition-colors flex items-center">
            <Icon name="person" size={22} />
          </button>
          <button 
            className="md:hidden text-on-surface flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#F5F2ED] border-b border-primary/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-lg ${
                  location.pathname === link.path ? 'text-primary' : 'text-on-surface/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-xl font-bold text-primary font-serif italic">Tôm Khô Heritage</div>
          <p className="font-serif text-sm leading-relaxed text-on-surface-variant italic">
            Crafted with tradition, curated for the modern palate. Bringing the soul of Vietnamese coastal cuisine to global kitchens.
          </p>
        </div>

        <div className="space-y-6">
          <h5 className="font-label-caps text-on-surface/50">EXPERIENCE</h5>
          <ul className="space-y-3 font-serif text-sm">
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Sustainability</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Wholesale</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-label-caps text-on-surface/50">FOLLOW US</h5>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <Icon name="language" size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <Icon name="photo_camera" size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-on-surface-variant hover:border-primary hover:text-primary transition-all">
              <Icon name="smart_display" size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="font-label-caps text-on-surface/50">NEWSLETTER</h5>
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-sm font-serif italic transition-all outline-none"
            />
            <button className="text-primary font-label-caps text-left hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              SUBSCRIBE <Icon name="arrow_forward" size={16} />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-outline-variant/30">
        <p className="font-serif text-xs text-on-surface-variant text-center tracking-[0.2em] uppercase">
          © 2024 Tôm Khô Heritage. Crafted with tradition, curated for the modern palate.
        </p>
      </div>
    </footer>
  );
}
