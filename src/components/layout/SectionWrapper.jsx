import { cn } from '../../utils/helpers';

/**
 * Reusable section wrapper with consistent padding, max-width, and optional background variants.
 * @param {object} props
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.variant - 'default' | 'alternate' | 'dark' | 'gradient'
 * @param {string} props.className - Additional classes
 * @param {React.ReactNode} props.children
 */
export default function SectionWrapper({
  id,
  variant = 'default',
  className = '',
  children,
}) {
  const variantClasses = {
    default: 'bg-light-100 dark:bg-dark-500',
    alternate: 'bg-light-200 dark:bg-dark-300',
    dark: 'bg-secondary dark:bg-dark-600 text-white',
    gradient: 'bg-gradient-mesh dark:bg-gradient-mesh-dark',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden transition-theme',
        variantClasses[variant] || variantClasses.default,
        className
      )}
    >
      <div className="section-container section-padding relative z-10">
        {children}
      </div>
    </section>
  );
}
