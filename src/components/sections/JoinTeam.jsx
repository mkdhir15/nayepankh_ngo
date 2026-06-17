import { motion } from 'framer-motion';
import { FiCheckCircle, FiHeart, FiArrowRight } from 'react-icons/fi';
import SectionWrapper from '../layout/SectionWrapper';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../animations/variants';
import teamImg from '../../assets/team.png';

export default function JoinTeam() {
  return (
    <SectionWrapper id="donate" variant="default">
      {/* Eyebrow Label */}
      <div className="text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          — JOIN US —
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ── Left Column: Content ── */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-secondary dark:text-white">
            Be the wing <span className="text-secondary dark:text-secondary-lighter">someone</span> <span className="text-primary">needs.</span>
          </h2>

          <p className="text-light-500 dark:text-dark-50 text-base sm:text-lg leading-relaxed font-medium">
            Whether you have an hour, a skill or a heart full of intent — there's a place for you at NayePankh.
          </p>

          {/* Checklist */}
          <ul className="space-y-4 pt-2">
            {[
              'Hands-on field experience across diverse communities',
              'Certificate of contribution & letter of recommendation',
              'Mentorship from changemakers and social leaders',
              'A network of compassionate, driven peers',
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-semibold text-secondary dark:text-white">
                <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
                {text}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="py-4 px-8 bg-gradient-primary text-white font-bold rounded-2xl shadow-glow-primary hover:shadow-glow-primary-lg transition-all duration-300 flex items-center gap-2"
            >
              Become a Volunteer
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="py-4 px-8 border border-light-400 dark:border-dark-50 text-secondary dark:text-white font-bold rounded-2xl hover:bg-light-200 dark:hover:bg-dark-200 transition-colors flex items-center gap-2"
            >
              <FiHeart className="w-5 h-5 text-primary" />
              Donate
            </motion.button>
          </div>
        </motion.div>

        {/* ── Right Column: Image + Stats Overlay ── */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Main Team Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-card-hover dark:shadow-card-dark-hover border border-light-300 dark:border-dark-50">
            <img
              src={teamImg}
              alt="NayePankh Foundation volunteers team"
              className="w-full h-[380px] sm:h-[450px] object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Overlay Stats Bar */}
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
            {[
              { value: '1000+', label: 'Hours' },
              { value: '50+', label: 'Drives' },
              { value: '20+', label: 'Cities' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-secondary/90 dark:bg-dark-300/90 backdrop-blur-md border border-light-300/10 rounded-2xl p-4 text-center shadow-lg"
              >
                <p className="font-display font-black text-xl text-primary">{stat.value}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-light-200 dark:text-dark-50 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
