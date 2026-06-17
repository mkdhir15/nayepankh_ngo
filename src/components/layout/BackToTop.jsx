import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { scrollToTop } from '../../utils/helpers';
import { backToTop } from '../../animations/variants';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          variants={backToTop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-gradient-primary text-white shadow-glow-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
          aria-label="Back to top"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
