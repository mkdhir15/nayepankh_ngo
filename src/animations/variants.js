/**
 * Centralized Framer Motion animation variants
 * All scroll-reveal, entrance, and interaction animations in one place
 */

// Custom easing curve — smooth and satisfying
const smoothEase = [0.16, 1, 0.3, 1];

// ============================================
// SCROLL REVEAL VARIANTS
// ============================================

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
      mass: 1,
    },
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ============================================
// HERO SPECIFIC
// ============================================

export const heroText = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export const heroSubtext = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: smoothEase,
    },
  },
};

export const heroCTA = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: smoothEase,
    },
  },
};

export const heroFloat = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const heroFloatDelayed = {
  initial: { y: 0 },
  animate: {
    y: [10, -10, 10],
    transition: {
      duration: 6,
      delay: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================
// NAVIGATION
// ============================================

export const navSlide = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const mobileMenuOverlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, delay: 0.2 },
  },
};

export const mobileMenuPanel = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

export const mobileMenuLink = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

// ============================================
// IMAGE REVEAL
// ============================================

export const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, clipPath: 'inset(10% 10% 10% 10% round 20px)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0% round 20px)',
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

// ============================================
// CARD INTERACTIONS
// ============================================

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
    },
  },
};

// ============================================
// BUTTON ANIMATIONS
// ============================================

export const buttonPulse = {
  initial: { boxShadow: '0 0 0 0 rgba(255, 107, 43, 0.4)' },
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(255, 107, 43, 0.4)',
      '0 0 0 15px rgba(255, 107, 43, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

// ============================================
// SCROLL PROGRESS
// ============================================

export const progressBar = {
  initial: { scaleX: 0 },
  animate: (progress) => ({
    scaleX: progress,
    transition: { duration: 0.1, ease: 'linear' },
  }),
};

// ============================================
// BACK TO TOP
// ============================================

export const backToTop = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// ============================================
// VIEWPORT OPTIONS (for useInView)
// ============================================

export const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: '-50px',
};

export const viewportOptionsEager = {
  once: true,
  amount: 0.1,
  margin: '-20px',
};
