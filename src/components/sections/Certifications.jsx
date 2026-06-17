import { motion } from 'framer-motion';
import { FiAward, FiEye, FiDownload, FiCheckCircle } from 'react-icons/fi';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const certificates = [
  {
    title: '80G Tax Exemption',
    subtitle: 'Income Tax Department',
    description: 'Enables all Indian donors to claim a 50% tax exemption/deduction on their donations under Section 80G of the Income Tax Act.',
    regNo: '80G Registered NGO',
    benefits: ['50% Tax Deduction', 'Instant Tax Receipt', 'UP Govt. Validated'],
    color: 'from-orange-500/20 to-primary/10 border-orange-500/30 text-orange-600 dark:text-orange-400',
    btnBg: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20',
  },
  {
    title: '12A Registration',
    subtitle: 'Income Tax Department',
    description: 'Granted to legitimate non-profit organizations, certifying NayePankh Foundation as a tax-exempt entity for charitable works.',
    regNo: '12A Certified Status',
    benefits: ['Official Non-Profit', 'Government Audited', '100% Tax-Exempt Funds'],
    color: 'from-blue-500/20 to-secondary/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
    btnBg: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20',
  },
  {
    title: 'UP Government Registration',
    subtitle: 'Societies Registration Act, 1860',
    description: 'Official incorporation license issued by the Uttar Pradesh Government, legally establishing NayePankh Foundation.',
    regNo: 'Reg No: KAP/04397/2021-2022',
    benefits: ['State Govt. Registered', 'Authorized NGO Operations', 'Active Since 2019'],
    color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" variant="default">
      <SectionTitle
        eyebrow="Trust & Transparency"
        title={<>Spread <span className="text-secondary dark:text-secondary-lighter">wings</span> <span className="text-primary">together</span></>}
        subtitle="NayePankh Foundation is fully accredited, registered, and compliant with government regulations to ensure 100% accountability."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative p-8 rounded-3xl bg-gradient-to-br ${cert.color} border backdrop-blur-md shadow-card dark:shadow-card-dark flex flex-col justify-between overflow-hidden group transition-all duration-300`}
          >
            {/* Background design elements */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute top-6 right-8 w-8 h-8 rounded-full border border-current/10 flex items-center justify-center">
              <FiAward className="w-4 h-4 opacity-50" />
            </div>

            <div>
              {/* Certificate badge */}
              <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/40 dark:bg-white/10 border border-white/20">
                {cert.subtitle}
              </span>

              <h3 className="font-display font-black text-2xl mt-5 text-secondary dark:text-white leading-tight">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold mt-1 opacity-75">{cert.regNo}</p>

              <p className="text-light-500 dark:text-dark-50 text-sm mt-4 leading-relaxed font-medium">
                {cert.description}
              </p>

              {/* Benefits checklist */}
              <ul className="mt-6 space-y-2.5">
                {cert.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-secondary dark:text-white">
                    <FiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-light-300/30 dark:border-dark-50/20 flex gap-3">
              <button className="flex-1 py-3 px-4 rounded-xl bg-white dark:bg-dark-300 text-secondary dark:text-white border border-light-400 dark:border-dark-50 text-xs font-bold flex items-center justify-center gap-2 hover:bg-light-200 dark:hover:bg-dark-200 active:scale-95 transition-all">
                <FiEye className="w-4 h-4" />
                View Copy
              </button>
              <button className={`flex-1 py-3 px-4 rounded-xl ${cert.btnBg} text-white text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md`}>
                <FiDownload className="w-4 h-4" />
                Download
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
