import {
  FiHome,
  FiInfo,
  FiAward,
  FiFileText,
  FiHeart,
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Home', href: 'hero', icon: FiHome },
  { label: 'About Us', href: 'about', icon: FiInfo },
  { label: 'Our Certifications', href: 'certifications', icon: FiAward },
  { label: 'Newspaper - Recognition', href: 'newspaper', icon: FiFileText },
  { label: 'Donate', href: 'donate', icon: FiHeart },
];

export const ctaButton = {
  label: 'Donate Now',
  href: '#donate',
  external: false,
};
