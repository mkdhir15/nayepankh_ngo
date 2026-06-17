import { cn } from '../../utils/helpers';

/**
 * Styled form input with floating label effect.
 */
export default function Input({
  label,
  type = 'text',
  id,
  name,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={cn('relative', className)}>
      <input
        type={type}
        id={id}
        name={name || id}
        required={required}
        placeholder=" "
        className="peer w-full px-4 py-3.5 bg-light-200 dark:bg-dark-200 border border-light-300 dark:border-dark-50 rounded-xl text-secondary dark:text-white placeholder-transparent focus:border-primary dark:focus:border-primary-light focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-200"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 text-light-500 dark:text-dark-50 text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary dark:peer-focus:text-primary-light peer-focus:bg-light-100 dark:peer-focus:bg-dark-500 peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-light-100 dark:peer-[:not(:placeholder-shown)]:bg-dark-500 peer-[:not(:placeholder-shown)]:px-1"
      >
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
    </div>
  );
}
