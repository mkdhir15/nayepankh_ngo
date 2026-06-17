import { cn } from '../../utils/helpers';

/**
 * Rounded icon container with gradient background.
 * @param {'primary' | 'secondary' | 'accent'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function IconBox({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const variants = {
    primary: 'bg-gradient-primary text-white shadow-glow-primary',
    secondary: 'bg-gradient-secondary text-white shadow-glow-secondary',
    accent: 'bg-gradient-accent text-white shadow-glow-accent',
  };

  const sizes = {
    sm: 'w-10 h-10 rounded-lg',
    md: 'w-14 h-14 rounded-xl',
    lg: 'w-18 h-18 rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {Icon && <Icon className={iconSizes[size]} />}
    </div>
  );
}
