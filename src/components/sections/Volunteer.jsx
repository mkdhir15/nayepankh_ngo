import { motion } from 'framer-motion';
import { FiClock, FiArrowRight, FiHeart, FiStar, FiUsers, FiGlobe } from 'react-icons/fi';
import { volunteerData } from '../../data/volunteer';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../animations/variants';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const colorCfg = {
  primary: {
    cardBg: 'border-primary/15 hover:border-primary/40',
    iconBg: 'bg-gradient-primary',
    tag: 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light',
  },
  secondary: {
    cardBg: 'border-secondary/15 hover:border-secondary/40',
    iconBg: 'bg-gradient-secondary',
    tag: 'bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-lighter',
  },
  accent: {
    cardBg: 'border-accent/15 hover:border-accent/40',
    iconBg: 'bg-gradient-accent',
    tag: 'bg-accent/10 dark:bg-accent/20 text-accent-dark dark:text-accent-light',
  },
};

const benefits = [
  { icon: '🏆', text: 'Official Certificate of Volunteering' },
  { icon: '🎓', text: 'Learn real-world skills' },
  { icon: '🌐', text: 'Network with 5000+ changemakers' },
  { icon: '❤️', text: 'Direct community impact' },
  { icon: '📱', text: 'Flexible remote opportunities' },
  { icon: '⭐', text: 'LinkedIn recommendation' },
];

export default function Volunteer() {
  const { eyebrow, title, subtitle, cta, roles } = volunteerData;

  return (
    <SectionWrapper id="volunteer" variant="default">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

        {/* ── Left: Emotional CTA block ── */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2 relative"
        >
          {/* Background gradient card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary via-secondary/90 to-primary/80 p-8 sm:p-10 h-full flex flex-col justify-between min-h-[480px]">
            {/* Background pattern */}
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-[80px]" />

            <div className="relative z-10">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white/90 uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                Open Positions
              </span>

              {/* Headline */}
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Be The Change
                <br />
                <span className="gradient-text">You Wish</span>
                <br />
                To See
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                No experience needed. Just a compassionate heart and the will to make a difference.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="text-base">{b.icon}</span>
                    {b.text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 flex items-center justify-center gap-2.5 w-full py-4 bg-white text-secondary font-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group shimmer-effect"
            >
              <FiHeart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              {cta.label}
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* ── Right: Role cards grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            const cfg = colorCfg[role.color] || colorCfg.primary;

            return (
              <motion.div
                key={role.title}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className={`group bg-white dark:bg-dark-200 rounded-2xl p-6 border ${cfg.cardBg} shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl ${cfg.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${cfg.tag} px-3 py-1.5 rounded-full`}>
                      <FiClock className="w-3 h-3" />
                      {role.commitment}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-secondary dark:text-white leading-tight mb-2">
                      {role.title}
                    </h3>
                    <p className="text-sm text-light-500 dark:text-dark-50 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="pt-1 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                    <span className="text-xs text-light-500 dark:text-dark-50 ml-1.5">High impact role</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
      >
        {[
          { icon: FiUsers, value: '5000+', label: 'Active Volunteers' },
          { icon: FiGlobe, value: '10+', label: 'Cities' },
          { icon: FiStar, value: '100+', label: 'Campaigns Run' },
        ].map((s) => {
          const SIcon = s.icon;
          return (
            <div key={s.label} className="text-center glass rounded-2xl p-4 border border-primary/10">
              <SIcon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="font-display text-xl font-black gradient-text">{s.value}</p>
              <p className="text-xs text-light-500 dark:text-dark-50 mt-0.5">{s.label}</p>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
