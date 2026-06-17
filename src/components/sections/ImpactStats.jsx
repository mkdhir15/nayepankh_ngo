import { motion } from 'framer-motion';
import { statsData } from '../../data/stats';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import Counter from '../ui/Counter';

export default function ImpactStats() {
  const { eyebrow, title, subtitle, counters } = statsData;

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-secondary dark:bg-dark-600"
    >
      {/* Diagonal clip top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-light-100 dark:bg-dark-500"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />
      {/* Diagonal clip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-light-200 dark:bg-dark-400"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative py-28 sm:py-36">
        {/* Background decorations */}
        <div className="absolute inset-0 pattern-grid opacity-5" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent blur-[140px]"
        />

        <div className="section-container relative z-10">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-primary-light mb-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/10">
              {eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mt-3">
              {title}
            </h2>
            <div className="mt-5 flex items-center gap-2 justify-center">
              <div className="w-8 h-1 rounded-full bg-primary-light opacity-60" />
              <div className="w-20 h-1 rounded-full bg-gradient-warm" />
              <div className="w-8 h-1 rounded-full bg-accent-light opacity-60" />
            </div>
            <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {/* Counter Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {counters.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="group relative text-center glass rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-400 cursor-default overflow-hidden"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-primary group-hover:border-primary/50 group-hover:shadow-glow-primary transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-light group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Counter number */}
                    <Counter
                      target={stat.target}
                      suffix={stat.suffix}
                      label={stat.label}
                      duration={2500}
                    />

                    {/* Description */}
                    <p className="mt-2 text-xs text-white/40 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom trust line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-14"
          >
            <p className="text-white/40 text-sm">
              ✓ UP Government Registered &nbsp;·&nbsp; ✓ 80G Tax Exemption &nbsp;·&nbsp; ✓ 12A Certified
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
