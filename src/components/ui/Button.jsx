import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';
import { buttonTap } from '../../animations/variants';

/**
 * Premium button component with multiple variants.
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  href,
  external = false,
  onClick,
  disabled = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-primary text-white hover:shadow-glow-primary hover:scale-[1.03]',
    secondary:
      'bg-secondary dark:bg-secondary-light text-white hover:shadow-glow-secondary hover:scale-[1.03]',
    outline:
      'border-2 border-primary text-primary dark:text-primary-light hover:bg-primary/10',
    ghost:
      'text-secondary dark:text-light-400 hover:bg-light-200 dark:hover:bg-dark-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileTap={buttonTap}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileTap={buttonTap}
      {...props}
    >
      {content}
    </motion.button>
  );
}
