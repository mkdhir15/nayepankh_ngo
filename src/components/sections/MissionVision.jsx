import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiCheck } from 'react-icons/fi';
import { missionData } from '../../data/mission';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const values = [
  { icon: '❤️', label: 'Compassion', desc: 'We act from the heart' },
  { icon: '🌟', label: 'Integrity', desc: 'Transparent & accountable' },
  { icon: '🚀', label: 'Impact', desc: 'Results that matter' },
  { icon: '🤝', label: 'Inclusion', desc: 'Everyone belongs' },
];

// 3D tilt card component
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cardConfig = {
  primary: {
    iconBg: 'bg-gradient-primary',
    glow: 'hover:shadow-glow-primary',
    border: 'border-primary/15 hover:border-primary/40',
    checkBg: 'bg-primary/10 dark:bg-primary/20',
    checkColor: 'text-primary dark:text-primary-light',
    accent: 'from-primary/10 to-transparent',
  },
  secondary: {
    iconBg: 'bg-gradient-secondary',
    glow: 'hover:shadow-glow-secondary',
    border: 'border-secondary/15 hover:border-secondary/40',
    checkBg: 'bg-secondary/10 dark:bg-secondary/20',
    checkColor: 'text-secondary dark:text-secondary-lighter',
    accent: 'from-secondary/10 to-transparent',
  },
};

export default function MissionVision() {
  const { eyebrow, title, subtitle, cards } = missionData;

  return (
    <SectionWrapper id="mission" variant="alternate">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {/* Mission + Vision cards */}
        {cards.map((card) => {
          const Icon = card.icon;
          const cfg = cardConfig[card.color] || cardConfig.primary;

          return (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="perspective-1000"
            >
              <TiltCard className={`
                glass rounded-3xl p-8 border h-full
                ${cfg.border} ${cfg.glow}
                transition-all duration-500 group relative overflow-hidden
              `}>
                {/* Background gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon with animated ring */}
                  <div className="relative inline-flex mb-7">
                    <div className={`w-16 h-16 rounded-2xl ${cfg.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      className="absolute -inset-2 rounded-2xl border-2 border-dashed border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-light-500 dark:text-dark-50 leading-relaxed mb-6 text-sm">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-secondary/80 dark:text-light-400">
                        <div className={`w-5 h-5 rounded-full ${cfg.checkBg} flex items-center justify-center flex-shrink-0`}>
                          <FiCheck className={`w-3 h-3 ${cfg.checkColor}`} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}

        {/* Values card — 3rd column */}
        <motion.div variants={fadeInUp} className="perspective-1000">
          <TiltCard className="glass rounded-3xl p-8 border border-accent/15 hover:border-accent/40 hover:shadow-glow-accent transition-all duration-500 group relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="relative inline-flex mb-7">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FiHeart className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-secondary dark:text-white mb-4">
                Our Values
              </h3>
              <p className="text-light-500 dark:text-dark-50 text-sm leading-relaxed mb-6">
                Four pillars that guide every decision, every campaign, and every interaction we have with our communities.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {values.map((v) => (
                  <motion.div
                    key={v.label}
                    whileHover={{ scale: 1.05 }}
                    className="bg-light-200 dark:bg-dark-200 rounded-xl p-3 text-center transition-all duration-200 cursor-default"
                  >
                    <div className="text-2xl mb-1">{v.icon}</div>
                    <p className="font-bold text-xs text-secondary dark:text-white">{v.label}</p>
                    <p className="text-[10px] text-light-500 dark:text-dark-50 mt-0.5">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
