import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../../data/gallery';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import GalleryImage from '../ui/GalleryImage';

export default function Gallery() {
  const { eyebrow, title, subtitle, categories, images } = galleryData;
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <SectionWrapper id="gallery" variant="alternate">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-primary text-white shadow-glow-primary'
                : 'bg-light-200 dark:bg-dark-200 text-light-500 dark:text-dark-50 hover:bg-light-300 dark:hover:bg-dark-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GalleryImage
                title={image.title}
                category={image.category}
                gradient={image.gradient}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
