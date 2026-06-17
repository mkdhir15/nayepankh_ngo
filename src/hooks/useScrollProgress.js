import { useScroll } from 'framer-motion';

/**
 * Returns a Framer Motion scroll progress value (0 → 1)
 * for the overall page scroll position.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}

export default useScrollProgress;
