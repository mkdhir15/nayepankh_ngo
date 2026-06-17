import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const contactData = {
  eyebrow: 'Get in Touch',
  title: 'Contact Us',
  subtitle: 'Have questions, want to collaborate, or ready to volunteer? We\'d love to hear from you.',
  info: [
    {
      icon: FiMail,
      label: 'Email',
      value: 'contact@nayepankh.com',
      href: 'mailto:contact@nayepankh.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91-8318500748',
      href: 'tel:+918318500748',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Kanpur, Uttar Pradesh, India',
      href: null,
    },
  ],
  formFields: {
    name: { label: 'Your Name', required: true },
    email: { label: 'Email Address', type: 'email', required: true },
    subject: { label: 'Subject', required: false },
    message: { label: 'Your Message', required: true },
  },
  taxNote: 'Your donations are tax exempted under 80G of the Indian Income Tax Act.',
};
