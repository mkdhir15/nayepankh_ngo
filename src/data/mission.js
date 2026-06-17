import { FiTarget, FiEye } from 'react-icons/fi';

export const missionData = {
  eyebrow: 'Our Purpose',
  title: 'Mission & Vision',
  subtitle: 'Guided by compassion and driven by action, we work towards a world where every individual has access to basic necessities and opportunities.',
  cards: [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description:
        'To empower underprivileged communities by providing access to education, nutrition, healthcare, and essential resources — while inspiring the next generation of changemakers through student-led volunteerism.',
      color: 'primary',
      highlights: ['Education for all', 'Nutrition & Health', 'Community empowerment', 'Youth leadership'],
    },
    {
      icon: FiEye,
      title: 'Our Vision',
      description:
        'A world where no one goes hungry, every child has access to quality education, and communities are self-sustaining — built on the foundation of compassion, equality, and collective responsibility.',
      color: 'secondary',
      highlights: ['Zero hunger', 'Universal education', 'Sustainable communities', 'Equality for all'],
    },
  ],
};
