import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { cn } from '../../utils/helpers';

/**
 * Reusable section heading block with eyebrow, title, subtitle, and animated underline.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  gradient = false,
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('max-w-2xl mb-12 lg:mb-16', alignClasses[align], className)}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
          — {eyebrow} —
        </span>
      )}

      {/* Title */}
      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance',
          gradient
            ? 'gradient-text'
            : 'text-secondary dark:text-white'
        )}
      >
        {title}
      </h2>

      {/* Animated underline */}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <div className="w-8 h-1 rounded-full bg-primary" />
        <div className="w-16 h-1 rounded-full bg-gradient-warm" />
        <div className="w-8 h-1 rounded-full bg-accent" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-light-500 dark:text-dark-50 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
