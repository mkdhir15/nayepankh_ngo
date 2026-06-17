import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiInfo } from 'react-icons/fi';
import { contactData } from '../../data/contact';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../animations/variants';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

export default function Contact() {
  const { eyebrow, title, subtitle, info, taxNote } = contactData;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated form submission (no API integration per requirements)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <SectionWrapper id="contact" variant="alternate">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Contact Info Cards */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {info.map((item) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-dark-200 shadow-card dark:shadow-card-dark group hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary dark:text-primary-light group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-light-500 dark:text-dark-50 mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-secondary dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Tax note */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 dark:bg-accent/20 border border-accent/20">
            <FiInfo className="w-5 h-5 text-accent-dark dark:text-accent-light flex-shrink-0 mt-0.5" />
            <p className="text-sm text-accent-dark dark:text-accent-light">
              {taxNote}
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <FiCheck className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-light-500 dark:text-dark-50">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="Your Name" id="contact-name" required />
                  <Input label="Email Address" id="contact-email" type="email" required />
                </div>
                <Input label="Subject" id="contact-subject" />
                <Textarea label="Your Message" id="contact-message" required rows={5} />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={FiSend}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
