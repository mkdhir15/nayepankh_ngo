import { motion } from 'framer-motion';
import { programsData } from '../../data/programs';
import { staggerContainer } from '../../animations/variants';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import ProgramCard from '../ui/ProgramCard';

export default function Programs() {
  const { eyebrow, title, subtitle, programs } = programsData;

  return (
    <SectionWrapper id="programs" variant="default">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {programs.map((program, index) => (
          <ProgramCard
            key={program.title}
            icon={program.icon}
            title={program.title}
            description={program.description}
            color={program.color}
            index={index}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
