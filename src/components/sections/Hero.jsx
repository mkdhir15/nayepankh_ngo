import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiHeart, FiArrowRight, FiPlay } from 'react-icons/fi';
import heroImg from '../../assets/hero.png';
import { scrollToSection } from '../../utils/helpers';

// Word-by-word stagger animation
const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

// Floating particles config
const particles = [
  { icon: '❤️', x: '8%', y: '20%', size: 20, delay: 0 },
  { icon: '✨', x: '15%', y: '70%', size: 16, delay: 0.5 },
  { icon: '🌟', x: '85%', y: '15%', size: 18, delay: 1 },
  { icon: '🕊️', x: '90%', y: '65%', size: 22, delay: 0.3 },
  { icon: '💛', x: '50%', y: '88%', size: 14, delay: 0.8 },
  { icon: '🌱', x: '75%', y: '78%', size: 16, delay: 1.2 },
  { icon: '🙏', x: '5%', y: '48%', size: 18, delay: 0.6 },
];

const stats = [
  { value: '2L+', label: 'Lives Touched' },
  { value: '10+', label: 'Cities Active' },
  { value: '5K+', label: 'Volunteers' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headline = ['Giving New', 'Wings to', 'Those Who'];
  const highlight = 'Deserve It Most';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-light-100 dark:bg-dark-500"
    >
      {/* ── Background mesh gradient ── */}
      <div className="absolute inset-0 bg-gradient-mesh dark:bg-gradient-mesh-dark" />

      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 pattern-dots opacity-40 dark:opacity-20" />

      {/* ── Animated blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="blob blob-primary w-[700px] h-[700px] -top-48 -right-48"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="blob blob-secondary w-[500px] h-[500px] -bottom-40 -left-40"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="blob blob-accent w-[400px] h-[400px] top-1/3 left-1/3"
      />

      {/* ── Floating emoji particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute select-none"
            style={{ left: p.x, top: p.y, fontSize: p.size }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          >
            {p.icon}
          </motion.div>
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div style={{ y: contentY, opacity }} className="section-container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* ────── LEFT: Text Content ────── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-light shimmer-effect">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                UP Govt. Registered · 80G &amp; 12A Certified
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-2"
            >
              <h1 className="font-display font-black leading-[1.1] text-balance text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-secondary dark:text-white">
                Giving new wings to <span className="text-secondary dark:text-secondary-lighter">dreams</span> <span className="text-primary">that deserve</span> to fly.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-light-500 dark:text-dark-50 max-w-lg leading-relaxed"
            >
              NayePankh Foundation works at the grassroots — empowering children, women and underserved communities through education, skill development and dignified support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col xs:flex-row gap-4"
            >
              <a
                href="https://nayepankh.com/donate"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-donate-btn"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-primary text-white font-bold text-base rounded-2xl shadow-glow-primary hover:shadow-glow-primary-lg transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-glow overflow-hidden"
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <FiHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Donate Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </a>

              <button
                id="hero-explore-btn"
                onClick={() => scrollToSection('programs')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 glass border border-secondary/20 dark:border-white/15 text-secondary dark:text-white font-semibold text-base rounded-2xl hover:border-primary/40 hover:text-primary dark:hover:text-primary-light transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FiPlay className="w-4 h-4" />
                Explore Our Work
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-12 flex items-center gap-8 sm:gap-12"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-light-500 dark:text-dark-50 mt-0.5 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-light-400 dark:via-dark-50 to-transparent hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-xs text-light-500 dark:text-dark-50 font-medium">
                <span className="text-green-500">✓</span>
                Trusted since 2019
              </div>
            </motion.div>
          </div>

          {/* ────── RIGHT: Hero Image ────── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-warm opacity-20 blur-3xl scale-90" />

            {/* Main image container */}
            <div className="relative w-full max-w-lg lg:max-w-full">
              {/* Decorative frame */}
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 rounded-3xl bg-gradient-warm opacity-30"
                style={{ filter: 'blur(20px)' }}
              />

              {/* Image with gradient overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-hero">
                <motion.img
                  src={heroImg}
                  alt="NayePankh Foundation volunteers distributing hygiene supplies to women in community"
                  style={{ y: imageY }}
                  className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-center"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

                {/* Floating card overlays */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <FiHeart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Women Empowerment Drive</p>
                    <p className="text-white/70 text-xs">Sanitary pad distribution · Lucknow</p>
                  </div>
                  <div className="ml-auto flex -space-x-2">
                    {['🟠', '🔵', '🟡'].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs">
                        {c}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Top-right badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.5, type: 'spring' }}
                  className="absolute top-4 right-4 glass rounded-xl px-3 py-2 text-center"
                >
                  <p className="text-white font-black text-xl leading-none">200K+</p>
                  <p className="text-white/70 text-xs mt-0.5">Beneficiaries</p>
                </motion.div>
              </div>

              {/* Decorative dots grid */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 pattern-dots rounded-xl opacity-40 hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 pattern-dots rounded-xl opacity-30 hidden lg:block" />
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-light-500 dark:text-dark-50 hover:text-primary dark:hover:text-primary-light transition-colors group"
            aria-label="Scroll to about section"
          >
            {/* Animated mouse icon */}
            <div className="w-6 h-9 rounded-full border-2 border-current flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-current"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
              Scroll
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
