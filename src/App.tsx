import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header, { Footer } from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Process from './pages/Process';
import Shop from './pages/Shop';
import { motion, AnimatePresence } from 'motion/react';
import { I18nProvider } from './i18n';

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/recipes" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Recipes />
          </motion.div>
        } />
        <Route path="/recipes/:id" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <RecipeDetail />
          </motion.div>
        } />
        <Route path="/process" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Process />
          </motion.div>
        } />
        <Route path="/shop" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Shop />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          
          {/* Load Google Material Icons */}
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}
