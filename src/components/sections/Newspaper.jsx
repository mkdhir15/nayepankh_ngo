import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiCheckCircle } from 'react-icons/fi';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const pressClippings = [
  {
    url: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/nyomtatott-184780375-AVLW214Gz2IpXNn4.jpg',
    title: 'Dainik Jagran Coverage',
    outlet: 'Dainik Jagran',
    description: 'Highlighting NayePankh Foundation\'s sanitary pad distribution drive in local rural areas and cities.',
  },
  {
    url: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/nyomtatott-184780375-mP4wg2o0j3Uv1ggM.jpg',
    title: 'Amar Ujala Recognition',
    outlet: 'Amar Ujala',
    description: 'Acknowledging our food distribution campaigns serving thousands of underprivileged families.',
  },
  {
    url: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/nyomtatott-184780375-dWxpDB9gXRuoxvrv.jpg',
    title: 'Hindustan Times Feature',
    outlet: 'Hindustan Press',
    description: 'Featuring the student-led leadership model of NayePankh and our impact metrics since inception.',
  },
];

export default function Newspaper() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SectionWrapper id="newspaper" variant="alternate">
      <SectionTitle
        eyebrow="Media Recognition"
        title={<>Leading <span className="text-secondary dark:text-secondary-lighter">the</span> <span className="text-primary">field</span></>}
        subtitle="Our campaigns and community impact have been widely recognized and featured by leading print media and news outlets."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {pressClippings.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex flex-col h-full bg-white dark:bg-dark-200 rounded-3xl overflow-hidden shadow-card dark:shadow-card-dark border border-light-300 dark:border-dark-50 group"
          >
            {/* Image container */}
            <div className="relative overflow-hidden aspect-[4/3] bg-light-300 dark:bg-dark-300">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedImage(item)}
                  className="w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                  aria-label="View larger image"
                >
                  <FiMaximize2 className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-4 left-4 py-1 px-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                {item.outlet}
              </div>
            </div>

            {/* Content info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-secondary dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-light-500 dark:text-dark-50 text-xs mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-light-300 dark:border-dark-50/50 flex items-center gap-2 text-xs font-semibold text-primary">
                <FiCheckCircle className="w-4 h-4" /> Verified Press Coverage
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close preview"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Main content modal */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-dark-500/80 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="overflow-y-auto flex-1 p-2 flex items-center justify-center bg-black/40">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-2xl"
                />
              </div>
              <div className="p-6 bg-white dark:bg-dark-300 border-t border-light-300 dark:border-dark-50 text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">
                  {selectedImage.outlet}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl mt-3 text-secondary dark:text-white leading-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-light-500 dark:text-dark-50 text-sm mt-2 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
