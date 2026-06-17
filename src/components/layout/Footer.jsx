import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowUpRight, FiArrowUp, FiMail, FiSend } from 'react-icons/fi';
import { footerData } from '../../data/footer';
import { scrollToSection } from '../../utils/helpers';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const socialColors = {
  Instagram: 'hover:bg-pink-500 hover:border-pink-400 hover:text-white',
  LinkedIn: 'hover:bg-blue-600 hover:border-blue-500 hover:text-white',
  Twitter: 'hover:bg-sky-500 hover:border-sky-400 hover:text-white',
  Facebook: 'hover:bg-blue-700 hover:border-blue-600 hover:text-white',
  YouTube: 'hover:bg-red-600 hover:border-red-500 hover:text-white',
};

export default function Footer() {
  const { brand, columns, social, contact, badges, copyright } = footerData;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (link) => {
    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(link.href);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-secondary dark:bg-dark-600 text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-warm" />

      {/* Background decorations */}
      <div className="blob blob-primary w-[500px] h-[500px] -top-64 -left-64 opacity-[0.06]" />
      <div className="blob blob-accent w-[400px] h-[400px] -bottom-48 -right-48 opacity-[0.05]" />
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="section-container relative z-10 pt-20 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10"
        >
          {/* ── Brand Column ── */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-6">
            {/* Logo — placeholder, swap with <img> when logo provided */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <img src="/logo.jpg" alt="NayePankh Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display font-black text-2xl text-white">Naye</span>
                  <span className="font-display font-black text-2xl text-primary-light">Pankh</span>
                </div>
                <p className="text-[9px] text-white/50 uppercase tracking-[0.25em] font-medium">
                  Foundation
                </p>
              </div>
            </button>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {brand.description}
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 text-xs font-bold rounded-full bg-accent/15 text-accent-light border border-accent/25 tracking-wide"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm text-white/50">
              <p className="hover:text-white/80 transition-colors cursor-pointer flex items-center gap-2">
                <span className="text-primary-light">✉</span> {contact.email}
              </p>
              <p className="hover:text-white/80 transition-colors cursor-pointer flex items-center gap-2">
                <span className="text-primary-light">📞</span> {contact.phone}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-light">📍</span> {contact.address}
              </p>
            </div>
          </motion.div>

          {/* ── Link Columns ── */}
          {columns.map((column) => (
            <motion.div
              key={column.title}
              variants={fadeInUp}
              className="lg:col-span-2 space-y-5"
            >
              <h4 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-white/90">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-sm text-white/50 hover:text-primary-light transition-all duration-200 inline-flex items-center gap-1.5 group animated-underline"
                    >
                      {link.label}
                      {link.external && (
                        <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 group-hover:-translate-y-1 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* ── Social + Newsletter ── */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-5">
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-white/90">
              Follow Us
            </h4>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {social.map((item) => {
                const Icon = item.icon;
                const colorClass = socialColors[item.label] || 'hover:bg-primary/20 hover:border-primary/30 hover:text-primary-light';
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 ${colorClass}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Stay Updated
              </h5>
              {subscribed ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary-light font-medium"
                >
                  ✓ You're subscribed! Thank you.
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-xl text-sm font-semibold text-primary-light transition-all duration-200 hover:scale-[1.02]"
                  >
                    <FiSend className="w-3.5 h-3.5" />
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/40 text-center sm:text-left">{copyright}</p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-white/40 flex items-center gap-1.5">
              Made with <FiHeart className="w-3.5 h-3.5 text-primary animate-pulse" /> for a better tomorrow
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary/20 hover:border-primary/30 hover:text-primary-light transition-all duration-300"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
