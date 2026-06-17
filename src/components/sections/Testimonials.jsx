import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonialsData } from '../../data/testimonials';
import { fadeInUp } from '../../animations/variants';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const { eyebrow, title, subtitle, testimonials } = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Show 1 on mobile, 2 on tablet, 3 on desktop
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + visibleCount >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, visibleCount, testimonials.length]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  // Wrap around if needed
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(
      ...testimonials.slice(0, visibleCount - visibleTestimonials.length)
    );
  }

  const goLeft = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goRight = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  return (
    <SectionWrapper id="testimonials" variant="default">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="relative">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${currentIndex}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                avatarColor={testimonial.avatarColor}
              />
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={goLeft}
            className="w-11 h-11 rounded-xl border border-light-400 dark:border-dark-50 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            aria-label="Previous testimonials"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(i * visibleCount);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCount) === i
                    ? 'w-8 bg-gradient-primary'
                    : 'w-2 bg-light-400 dark:bg-dark-50 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goRight}
            className="w-11 h-11 rounded-xl border border-light-400 dark:border-dark-50 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            aria-label="Next testimonials"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
