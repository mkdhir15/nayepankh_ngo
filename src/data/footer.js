import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

export const footerData = {
  brand: {
    name: 'NayePankh Foundation',
    tagline: 'Empowering communities, transforming lives.',
    description:
      'A UP Government registered NGO and one of the biggest student-led organizations in India, dedicated to uplifting underprivileged communities through education, nutrition, and health.',
  },
  columns: [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: 'about' },
        { label: 'Our Mission', href: 'mission' },
        { label: 'Programs', href: 'programs' },
        { label: 'Gallery', href: 'gallery' },
        { label: 'Contact', href: 'contact' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Volunteer', href: 'volunteer' },
        { label: 'Donate Now', href: 'https://nayepankh.com/donate', external: true },
        { label: 'Success Stories', href: 'stories' },
        { label: 'Testimonials', href: 'testimonials' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: 'https://nayepankh.com/terms-and-conditions', external: true },
        { label: 'Privacy Policy', href: 'https://nayepankh.com/privacy-policy', external: true },
        { label: 'Cancellation & Refund', href: 'https://nayepankh.com/cancellation-and-refund', external: true },
      ],
    },
  ],
  social: [
    { icon: FiInstagram, href: 'https://instagram.com/nayepankh', label: 'Instagram' },
    { icon: FiLinkedin, href: 'https://linkedin.com/company/nayepankh', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/nayepankh', label: 'Twitter' },
    { icon: FiFacebook, href: 'https://facebook.com/nayepankh', label: 'Facebook' },
    { icon: FiYoutube, href: 'https://youtube.com/@nayepankh', label: 'YouTube' },
  ],
  contact: {
    email: 'contact@nayepankh.com',
    phone: '+91-8318500748',
    address: 'Kanpur, Uttar Pradesh, India',
  },
  badges: [
    'UP Govt. Registered',
    '80G Certified',
    '12A Registered',
  ],
  copyright: `© ${new Date().getFullYear()} NayePankh Foundation. All rights reserved.`,
};
