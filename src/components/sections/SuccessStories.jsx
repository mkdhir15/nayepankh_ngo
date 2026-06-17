import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { storiesData } from '../../data/stories';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

const cardVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.92,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 220, damping: 26 },
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.92,
    filter: 'blur(4px)',
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
  }),
};

export default function SuccessStories() {
  const { eyebrow, title, subtitle, stories } = storiesData;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % stories.length);
  }, [stories.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + stories.length) % stories.length);
  }, [stories.length]);

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [isPlaying, next]);

  const story = stories[current];

  return (
    <SectionWrapper id="stories" variant="alternate">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="relative max-w-4xl mx-auto">
        {/* ── Featured card ── */}
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative"
            >
              <div className="bg-white dark:bg-dark-200 rounded-3xl overflow-hidden shadow-card-hover dark:shadow-card-dark-hover border border-light-300 dark:border-dark-50">
                {/* Colored header */}
                <div className={`h-2 ${story.gradient}`} />

                <div className="p-8 sm:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Quote section */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Big quote mark */}
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center"
                      >
                        <FaQuoteLeft className="w-7 h-7 text-primary dark:text-primary-light" />
                      </motion.div>

                      <blockquote className="text-xl sm:text-2xl font-display font-semibold text-secondary dark:text-white leading-snug italic">
                        "{story.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-4 border-t border-light-300 dark:border-dark-50">
                        <div className={`w-14 h-14 rounded-2xl ${story.gradient} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                          {story.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-lg text-secondary dark:text-white">{story.name}</p>
                          <p className="text-sm text-light-500 dark:text-dark-50 flex items-center gap-1.5 mt-0.5">
                            <FiMapPin className="w-3.5 h-3.5" />
                            {story.location}
                          </p>
                        </div>
                        <Badge variant="primary" className="ml-auto text-xs">
                          {story.program}
                        </Badge>
                      </div>
                    </div>

                    {/* Right: Impact visual */}
                    <div className="flex flex-col items-center justify-center gap-5">
                      <div className={`w-28 h-28 rounded-3xl ${story.gradient} flex items-center justify-center text-5xl shadow-xl`}>
                        {['📚', '🍱', '🌸', '🧥', '🤝'][current]}
                      </div>
                      <div className="text-center">
                        <p className="font-display font-black text-3xl gradient-text">
                          {['100+', '500+', '200+', '1000+', '50+'][current]}
                        </p>
                        <p className="text-xs text-light-500 dark:text-dark-50 mt-1 font-medium">
                          {['Students helped', 'Families fed', 'Girls impacted', 'Kits donated', 'Events run'][current]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-between mt-8">
          {/* Arrow left */}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-12 h-12 rounded-2xl glass border border-light-400 dark:border-dark-50 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            aria-label="Previous story"
          >
            <FiChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsPlaying(false); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? 'w-10 h-2.5 bg-gradient-primary shadow-glow-primary'
                    : 'w-2.5 h-2.5 bg-light-400 dark:bg-dark-50 hover:bg-primary/40'
                }`}
                aria-label={`Story ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow right */}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-12 h-12 rounded-2xl glass border border-light-400 dark:border-dark-50 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            aria-label="Next story"
          >
            <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
}
