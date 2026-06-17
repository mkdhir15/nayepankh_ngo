/**
 * Utility helpers for the NayePankh NGO platform
 */

/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx/classnames.
 * @param  {...string} classes - Class name strings
 * @returns {string} Merged class string
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smooth-scroll to an element by its ID.
 * @param {string} id - The element ID (without #)
 * @param {number} offset - Optional pixel offset from top (default: 80 for sticky nav)
 */
export function scrollToSection(id, offset = 80) {
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}

/**
 * Scroll to top of page smoothly.
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Format a large number with suffix (e.g., 200000 → "2L+")
 * @param {number} num - The number to format
 * @param {string} suffix - Optional suffix ("+", "K", "L")
 * @returns {string} Formatted string
 */
export function formatStatNumber(num, suffix = '') {
  return `${num.toLocaleString('en-IN')}${suffix}`;
}

/**
 * Throttle a function to fire at most once every `delay` ms.
 * @param {Function} fn - Function to throttle
 * @param {number} delay - Throttle delay in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
