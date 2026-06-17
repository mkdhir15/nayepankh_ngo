import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Animated counter hook — counts from 0 to `target` when triggered.
 * @param {number} target - The final number to count up to
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @param {boolean} shouldStart - Whether the counting should begin
 * @returns {number} The current animated count value
 */
export function useAnimatedCounter(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback((timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic for a satisfying deceleration
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(eased * target);

    setCount(currentValue);

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    }
  }, [target, duration]);

  useEffect(() => {
    if (shouldStart && !hasAnimated.current) {
      hasAnimated.current = true;
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [shouldStart, animate]);

  return count;
}

export default useAnimatedCounter;
