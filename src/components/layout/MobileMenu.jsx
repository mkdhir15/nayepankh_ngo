import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiHeart } from 'react-icons/fi';
import { navLinks, ctaButton } from '../../data/navigation';
import { cn } from '../../utils/helpers';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.15 } },
};

const panelVariants = {
  hidden: { clipPath: 'circle(0% at calc(100% - 40px) 40px)', opacity: 0 },
  visible: {
    clipPath: 'circle(150% at calc(100% - 40px) 40px)',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    clipPath: 'circle(0% at calc(100% - 40px) 40px)',
    opacity: 0,
    transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function MobileMenu({ onClose, onNavClick, activeSection }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Full-screen panel */}
      <motion.div
        className="absolute inset-0 bg-light-100 dark:bg-dark-500 flex flex-col"
        variants={panelVariants}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light-300 dark:border-dark-200">
          {/* Logo placeholder — swap with img when provided */}
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-glow-primary border border-light-300/20">
              <img src="/logo.jpg" alt="NayePankh Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-display font-black text-xl text-secondary dark:text-white">Naye</span>
                <span className="font-display font-black text-xl gradient-text">Pankh</span>
              </div>
              <p className="text-[9px] text-light-500 dark:text-dark-50 uppercase tracking-[0.2em] font-medium">
                Foundation
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2.5 rounded-xl bg-light-200 dark:bg-dark-200 text-secondary dark:text-white hover:bg-light-300 dark:hover:bg-dark-50 transition-colors"
            aria-label="Close menu"
          >
            <FiX className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          {navLinks.map((link, i) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href;
            return (
              <motion.button
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                onClick={() => onNavClick(link.href)}
                className={cn(
                  'w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 mb-2 group',
                  isActive
                    ? 'bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary-light'
                    : 'text-secondary/70 dark:text-light-400 hover:bg-light-200 dark:hover:bg-dark-200 hover:text-secondary dark:hover:text-white'
                )}
              >
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0',
                  isActive
                    ? 'bg-gradient-primary text-white shadow-glow-primary'
                    : 'bg-light-200 dark:bg-dark-200 text-light-500 dark:text-dark-50 group-hover:bg-primary/10 group-hover:text-primary'
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-base">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="ml-auto w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="px-4 pb-8 pt-4 border-t border-light-300 dark:border-dark-200 space-y-3">
          <p className="text-xs text-center text-light-500 dark:text-dark-50 font-medium">
            UP Govt. Registered · 80G &amp; 12A Certified
          </p>
          <motion.button
            onClick={() => onNavClick('donate')}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 w-full py-4 bg-gradient-primary text-white font-bold rounded-2xl shadow-glow-primary hover:shadow-glow-primary-lg transition-all duration-300 animate-pulse-glow"
          >
            <FiHeart className="w-5 h-5" />
            {ctaButton.label}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
