import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { cn } from '../../utils/helpers';

/**
 * Animated number counter that counts up when scrolled into view.
 * @param {number} target - The number to count up to
 * @param {string} suffix - Text after the number ("+", "L+", "K+")
 * @param {string} prefix - Text before the number ("₹", etc.)
 */
export default function Counter({
  target,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useAnimatedCounter(target, duration, isInView);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
        {prefix}
        {count.toLocaleString('en-IN')}
        {suffix}
      </div>
      {label && (
        <p className="mt-2 text-sm sm:text-base font-medium text-light-500 dark:text-dark-50">
          {label}
        </p>
      )}
    </div>
  );
}
