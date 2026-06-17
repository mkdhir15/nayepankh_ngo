import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { aboutData } from '../../data/about';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../animations/variants';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import heroImg from '../../assets/hero.png';

const highlights = [
  { icon: FiAward, label: 'Founded', value: '2019', color: 'text-primary', bg: 'bg-primary/10 dark:bg-primary/20' },
  { icon: FiUsers, label: 'Volunteers', value: '5000+', color: 'text-secondary dark:text-secondary-lighter', bg: 'bg-secondary/10 dark:bg-secondary/20' },
  { icon: FiTarget, label: 'Campaigns', value: '100+', color: 'text-accent-dark dark:text-accent-light', bg: 'bg-accent/10 dark:bg-accent/20' },
  { icon: FiTrendingUp, label: 'Cities', value: '10+', color: 'text-primary', bg: 'bg-primary/10 dark:bg-primary/20' },
];

export default function About() {
  const { eyebrow, title, paragraphs, tagline, founderQuote } = aboutData;

  return (
    <SectionWrapper id="about" variant="default">
      <SectionTitle eyebrow={eyebrow} title={<>Making <span className="text-secondary dark:text-secondary-lighter">real</span> <span className="text-primary">change</span></>} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* ── Left: Image + floating stats ── */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative order-2 lg:order-1"
        >
          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden shadow-card-hover dark:shadow-card-dark-hover">
            <img
              src={heroImg}
              alt="NayePankh Foundation volunteers at work"
              className="w-full h-[420px] sm:h-[480px] object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/20" />
          </div>

          {/* Floating stats card — top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            className="absolute -top-5 -right-5 glass rounded-2xl p-4 shadow-card dark:shadow-card-dark border border-white/20"
          >
            <p className="font-display font-black text-3xl gradient-text">2L+</p>
            <p className="text-xs text-light-500 dark:text-dark-50 font-medium mt-0.5">Lives Touched</p>
          </motion.div>

          {/* Floating experience badge — bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
            className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-card dark:shadow-card-dark border border-white/20"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-black text-sm">
                6+
              </div>
              <div>
                <p className="font-semibold text-sm text-secondary dark:text-white leading-tight">Years of</p>
                <p className="font-semibold text-sm text-secondary dark:text-white leading-tight">Impact</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative dots */}
          <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 pattern-dots rounded-xl opacity-30" />
        </motion.div>

        {/* ── Right: Content ── */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 order-1 lg:order-2"
        >
          {paragraphs.map((p, i) => (
            <p key={i} className="text-light-500 dark:text-dark-50 leading-relaxed text-base">
              {p}
            </p>
          ))}

          <p className="text-lg font-bold text-primary dark:text-primary-light italic">
            "{tagline}"
          </p>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 pt-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-4 rounded-2xl bg-light-200 dark:bg-dark-200 border border-light-300 dark:border-dark-50 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <p className="font-display text-2xl font-black text-secondary dark:text-white">
                    {item.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-light-500 dark:text-dark-50 mt-0.5">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Founder quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative glass rounded-2xl p-6 border border-primary/10"
          >
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-primary">
              <FaQuoteLeft className="w-4 h-4 text-white" />
            </div>
            <blockquote className="text-base sm:text-lg font-display font-semibold text-secondary dark:text-white leading-snug mt-2 italic">
              "{founderQuote.text}"
            </blockquote>
            <div className="mt-4 flex items-center gap-3 pt-3 border-t border-light-300 dark:border-dark-50">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                {founderQuote.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm text-secondary dark:text-white">{founderQuote.name}</p>
                <p className="text-xs text-light-500 dark:text-dark-50">{founderQuote.title}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
