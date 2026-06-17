import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const colorMap = {
  primary: {
    stripe: 'bg-gradient-primary',
    iconRing: 'ring-primary/20',
    iconBg: 'bg-gradient-primary',
    tag: 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light',
    arrow: 'text-primary dark:text-primary-light',
    glow: 'group-hover:shadow-glow-primary',
    border: 'group-hover:border-primary/30',
  },
  secondary: {
    stripe: 'bg-gradient-secondary',
    iconRing: 'ring-secondary/20',
    iconBg: 'bg-gradient-secondary',
    tag: 'bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-lighter',
    arrow: 'text-secondary dark:text-secondary-lighter',
    glow: 'group-hover:shadow-glow-secondary',
    border: 'group-hover:border-secondary/30',
  },
  accent: {
    stripe: 'bg-gradient-accent',
    iconRing: 'ring-accent/20',
    iconBg: 'bg-gradient-accent',
    tag: 'bg-accent/10 dark:bg-accent/20 text-accent-dark dark:text-accent-light',
    arrow: 'text-accent-dark dark:text-accent-light',
    glow: 'group-hover:shadow-glow-accent',
    border: 'group-hover:border-accent/30',
  },
};

export default function ProgramCard({ icon: Icon, title, description, color = 'primary', index = 0 }) {
  const cfg = colorMap[color] || colorMap.primary;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className={`
        group relative bg-white dark:bg-dark-200
        rounded-3xl overflow-hidden
        border border-light-300 dark:border-dark-50
        shadow-card dark:shadow-card-dark
        transition-all duration-400
        ${cfg.glow} ${cfg.border}
        cursor-default
      `}
    >
      {/* Colored top stripe */}
      <div className={`h-1.5 ${cfg.stripe}`} />

      <div className="p-7 space-y-5">
        {/* Icon */}
        <div className={`relative inline-flex w-14 h-14 rounded-2xl ${cfg.iconBg} items-center justify-center ring-4 ${cfg.iconRing} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Category tag */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cfg.tag}`}>
          {title.split(' ')[0]}
        </span>

        <div className="space-y-3">
          <h3 className="font-display text-xl font-bold text-secondary dark:text-white group-hover:gradient-text transition-all duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-light-500 dark:text-dark-50 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Learn more link */}
        <div className={`flex items-center gap-2 text-sm font-bold ${cfg.arrow} pt-1`}>
          <span className="group-hover:mr-1 transition-all duration-300">Learn More</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowRight className="w-4 h-4" />
          </motion.span>
        </div>
      </div>

      {/* Bottom gradient shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
