import { FaQuoteLeft } from 'react-icons/fa';

/**
 * Testimonial card with avatar, quote, and attribution.
 */
export default function TestimonialCard({ quote, name, role, avatarColor = 'primary' }) {
  const colorMap = {
    primary: 'bg-gradient-primary',
    secondary: 'bg-gradient-secondary',
    accent: 'bg-gradient-accent',
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-xl p-6 sm:p-8 shadow-card dark:shadow-card-dark h-full flex flex-col">
      {/* Quote icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <FaQuoteLeft className="w-5 h-5 text-primary dark:text-primary-light" />
        </div>
      </div>

      {/* Quote text */}
      <p className="text-light-500 dark:text-dark-50 leading-relaxed flex-1 italic">
        "{quote}"
      </p>

      {/* Attribution */}
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-light-300 dark:border-dark-50">
        <div
          className={`w-10 h-10 rounded-full ${colorMap[avatarColor]} flex items-center justify-center text-white font-bold text-sm`}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-secondary dark:text-white">{name}</p>
          <p className="text-xs text-light-500 dark:text-dark-50">{role}</p>
        </div>
      </div>
    </div>
  );
}
