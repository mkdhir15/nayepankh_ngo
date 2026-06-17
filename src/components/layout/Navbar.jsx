import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiHeart } from 'react-icons/fi';
import { navLinks, ctaButton } from '../../data/navigation';
import { useTheme } from '../../context/ThemeContext';
import { scrollToSection, cn } from '../../utils/helpers';
import ThemeToggle from '../ui/ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark } = useTheme();

  // Track scroll for glass effect + progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 30);
      setScrollProgress(total > 0 ? scrollY / total : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsMobileOpen(false);
  };

  const desktopLinks = navLinks.filter((link) => link.label !== 'Home');

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'py-3 bg-white/80 dark:bg-dark-500/90 backdrop-blur-2xl border-b border-light-300/50 dark:border-dark-200/50 shadow-sm'
            : 'py-5 bg-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-light-300/30 dark:bg-dark-200/30">
          <motion.div
            className="h-full bg-gradient-warm origin-left"
            style={{ scaleX: scrollProgress, transformOrigin: '0%' }}
          />
        </div>

        <div className="section-container flex items-center justify-between">
          {/* ── Logo ── */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            aria-label="NayePankh Foundation — Go to top"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-primary-lg group-hover:scale-110 transition-all duration-300 border border-light-300/20">
              <img src="/logo.jpg" alt="NayePankh Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden xs:block">
              <div className="flex items-baseline gap-0.5 leading-none">
                <span className="font-display font-black text-xl text-secondary dark:text-white">Naye</span>
                <span className="font-display font-black text-xl gradient-text">Pankh</span>
              </div>
              <p className="text-[9px] text-light-500 dark:text-dark-50 uppercase tracking-[0.2em] font-medium">
                Foundation
              </p>
            </div>
          </button>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-1">
            {desktopLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeSection === link.href
                    ? 'text-secondary dark:text-white font-bold'
                    : 'text-secondary/60 dark:text-light-400 hover:text-secondary dark:hover:text-white'
                )}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-secondary dark:bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Donate CTA */}
            <motion.button
              onClick={() => handleNavClick('donate')}
              id="navbar-donate-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary to-primary text-white font-bold text-sm rounded-xl shadow-glow-primary hover:shadow-glow-primary-lg transition-all duration-300 animate-pulse-glow"
            >
              <span className="text-xs">🤍</span>
              {ctaButton.label}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-xl glass border border-light-300 dark:border-dark-200 text-secondary dark:text-white transition-all duration-200"
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
            >
              <FiMenu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu
            onClose={() => setIsMobileOpen(false)}
            onNavClick={handleNavClick}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
}
