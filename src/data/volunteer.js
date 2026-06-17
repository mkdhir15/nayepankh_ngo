import { FiBook, FiTruck, FiShare2, FiCalendar, FiCamera, FiCode } from 'react-icons/fi';

export const volunteerData = {
  eyebrow: 'Join the Movement',
  title: 'Volunteer With Us',
  subtitle: "Whether you have an hour or a hundred, your time can transform lives. Join India's biggest student-led volunteer network.",
  cta: {
    label: 'Join Our Team',
    href: 'https://nayepankh.com/donate',
    external: true,
  },
  roles: [
    {
      icon: FiBook,
      title: 'Teaching & Mentorship',
      description: 'Share your knowledge and mentor underprivileged children in subjects they need help with.',
      commitment: '2-4 hrs/week',
      color: 'primary',
    },
    {
      icon: FiTruck,
      title: 'Distribution Drives',
      description: 'Help organize and execute food, clothing, and supply distribution campaigns on the ground.',
      commitment: 'Event-based',
      color: 'secondary',
    },
    {
      icon: FiShare2,
      title: 'Social Media',
      description: 'Amplify our reach by managing content, creating graphics, and spreading awareness online.',
      commitment: '3-5 hrs/week',
      color: 'accent',
    },
    {
      icon: FiCalendar,
      title: 'Event Management',
      description: 'Plan and coordinate community events, fundraisers, and awareness campaigns.',
      commitment: 'Event-based',
      color: 'primary',
    },
    {
      icon: FiCamera,
      title: 'Photography & Media',
      description: 'Capture our impact through photos and videos. Help document success stories and events.',
      commitment: 'Flexible',
      color: 'secondary',
    },
    {
      icon: FiCode,
      title: 'Tech & Development',
      description: 'Contribute to our digital presence — website development, app building, and tech infrastructure.',
      commitment: 'Project-based',
      color: 'accent',
    },
  ],
};
