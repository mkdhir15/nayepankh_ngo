import { cn } from '../../utils/helpers';

/**
 * Small label badge for tags and categories.
 * @param {'primary' | 'secondary' | 'accent' | 'outline'} variant
 */
export default function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light',
    secondary: 'bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-lighter',
    accent: 'bg-accent/10 text-accent-dark dark:bg-accent/20 dark:text-accent-light',
    outline: 'border border-light-400 dark:border-dark-50 text-light-500 dark:text-dark-50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
