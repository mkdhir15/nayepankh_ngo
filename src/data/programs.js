import { FiBook, FiCoffee, FiPackage, FiActivity, FiSun, FiUsers } from 'react-icons/fi';

export const programsData = {
  eyebrow: 'What We Do',
  title: 'Programs & Initiatives',
  subtitle: 'From education to emergency relief, our programs address the most pressing needs of underprivileged communities.',
  programs: [
    {
      icon: FiBook,
      title: 'Education Support',
      description:
        'Free tutoring, school supplies, and mentorship programs for children in underserved communities. We believe education is the most powerful weapon to change the world.',
      color: 'primary',
    },
    {
      icon: FiCoffee,
      title: 'Food Distribution',
      description:
        'Regular food drives providing nutritious meals to families in need. From daily meals to festive celebrations, no one should go hungry.',
      color: 'secondary',
    },
    {
      icon: FiPackage,
      title: 'Clothing Drives',
      description:
        'Seasonal clothing distribution campaigns ensuring warmth and dignity for those who need it most, especially during harsh winters.',
      color: 'accent',
    },
    {
      icon: FiActivity,
      title: 'Health & Hygiene',
      description:
        'Sanitary pad distribution, health check-up camps, and hygiene awareness programs — because everyone deserves access to basic healthcare.',
      color: 'primary',
    },
    {
      icon: FiSun,
      title: 'Environment Initiatives',
      description:
        'Tree plantation drives, clean-up campaigns, and environmental awareness programs to build a sustainable future for all.',
      color: 'secondary',
    },
    {
      icon: FiUsers,
      title: 'Community Building',
      description:
        'Events, workshops, and awareness campaigns that bring communities together and empower them to support each other.',
      color: 'accent',
    },
  ],
};
