import { FiUsers, FiMapPin, FiHeart, FiAward } from 'react-icons/fi';

export const statsData = {
  eyebrow: 'Our Impact',
  title: 'Numbers That Speak',
  subtitle: 'Every number represents a real person, a real story, and a real change in someone\'s life.',
  counters: [
    {
      icon: FiHeart,
      target: 200000,
      suffix: '+',
      label: 'Lives Touched',
      description: 'People helped through our initiatives',
    },
    {
      icon: FiMapPin,
      target: 10,
      suffix: '+',
      label: 'Cities Active',
      description: 'Across Uttar Pradesh and beyond',
    },
    {
      icon: FiUsers,
      target: 5000,
      suffix: '+',
      label: 'Volunteers',
      description: 'Passionate change-makers',
    },
    {
      icon: FiAward,
      target: 100,
      suffix: '+',
      label: 'Campaigns',
      description: 'Drives and events organized',
    },
  ],
};
