import { useState, useEffect } from 'react';

/**
 * Responsive breakpoint detection hook.
 * @param {string} query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} Whether the media query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    // Modern API
    if (media.addEventListener) {
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }
    // Fallback for older browsers
    media.addListener(handler);
    return () => media.removeListener(handler);
  }, [query]);

  return matches;
}

export default useMediaQuery;
