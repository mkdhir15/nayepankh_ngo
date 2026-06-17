import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';
import { cardHover } from '../../animations/variants';

/**
 * Reusable card component with glass and hover variants.
 * @param {'default' | 'glass' | 'bordered' | 'gradient'} variant
 */
export default function Card({
  children,
  variant = 'default',
  hoverable = true,
  className = '',
  ...props
}) {
  const variants = {
    default:
      'bg-white dark:bg-dark-200 shadow-card dark:shadow-card-dark',
    glass: 'glass',
    bordered:
      'bg-white dark:bg-dark-200 border border-light-300 dark:border-dark-50',
    gradient:
      'bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20',
  };

  return (
    <motion.div
      variants={hoverable ? cardHover : undefined}
      initial={hoverable ? 'rest' : undefined}
      whileHover={hoverable ? 'hover' : undefined}
      className={cn(
        'rounded-xl p-6 transition-theme',
        variants[variant],
        hoverable && 'cursor-pointer hover:shadow-card-hover dark:hover:shadow-card-dark-hover',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
