import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiAward, FiCopy, FiCheck } from 'react-icons/fi';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const donationOptions = [
  { amount: 500, label: '₹500', impact: 'Feeds a family of 4 with essential dry ration kits for an entire week.' },
  { amount: 1000, label: '₹1,000', impact: 'Provides one month of clean drinking water, education supplies, and sanitary kits to 5 young girls.' },
  { amount: 2500, label: '₹2,500', impact: 'Funds basic healthcare checkups and warm blankets for 10 elderly citizens living in shelter homes.' },
  { amount: 5000, label: '₹5,000', impact: 'Sponsors formal school education, uniforms, and textbooks for a child for one complete academic year.' },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [activeTab, setActiveTab] = useState('online'); // 'online' or 'bank'
  const [copiedField, setCopiedField] = useState('');

  const currentImpact = customAmount 
    ? `Your contribution of ₹${Number(customAmount).toLocaleString('en-IN')} will directly support our field workers in distributing food, sanitation kits, and educational supplies to families in need.`
    : donationOptions.find(o => o.amount === selectedAmount)?.impact;

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <SectionWrapper id="donate" variant="default">
      <SectionTitle
        eyebrow="Make a Difference"
        title="Support Our Mission"
        subtitle="Your kindness can bring wings of hope to those who need it most. Empower the underprivileged by making a contribution today."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start max-w-5xl mx-auto">
        {/* ── Left Column: Interactive Form ── */}
        <div className="lg:col-span-7 bg-white dark:bg-dark-200 border border-light-300 dark:border-dark-50 rounded-3xl p-8 shadow-card dark:shadow-card-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary" />
          
          <h3 className="font-display font-black text-2xl text-secondary dark:text-white mb-6">
            Choose Donation Amount
          </h3>

          {/* Amount selector tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {donationOptions.map((opt) => (
              <button
                key={opt.amount}
                onClick={() => {
                  setSelectedAmount(opt.amount);
                  setCustomAmount('');
                }}
                className={`py-3.5 px-4 rounded-2xl font-display font-black text-lg border transition-all duration-300 active:scale-95 ${
                  selectedAmount === opt.amount && !customAmount
                    ? 'bg-gradient-primary text-white border-primary shadow-glow-primary'
                    : 'bg-light-100 dark:bg-dark-300 text-secondary dark:text-white border-light-300 dark:border-dark-50 hover:bg-light-200 dark:hover:bg-dark-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Custom amount input */}
          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display font-black text-lg text-light-500 dark:text-dark-50">
              ₹
            </span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              placeholder="Enter custom amount"
              className="w-full pl-9 pr-4 py-4 rounded-2xl bg-light-100 dark:bg-dark-300 border border-light-300 dark:border-dark-50 text-secondary dark:text-white font-semibold outline-none focus:border-primary transition-all"
            />
          </div>

          {/* Dynamic Impact Statement Card */}
          <div className="p-5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 mb-8 min-h-[90px] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white shrink-0 shadow-md">
              <FiHeart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                Your Direct Impact
              </p>
              <p className="text-sm font-semibold text-secondary dark:text-white mt-1 leading-relaxed">
                {currentImpact}
              </p>
            </div>
          </div>

          {/* Payment Options Selection Tabs */}
          <div className="flex gap-4 border-b border-light-300 dark:border-dark-50 pb-4 mb-6">
            <button
              onClick={() => setActiveTab('online')}
              className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                activeTab === 'online'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-light-500 dark:text-dark-50 hover:text-secondary dark:hover:text-white'
              }`}
            >
              UPI & Online Pay
            </button>
            <button
              onClick={() => setActiveTab('bank')}
              className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                activeTab === 'bank'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-light-500 dark:text-dark-50 hover:text-secondary dark:hover:text-white'
              }`}
            >
              Direct Bank Transfer
            </button>
          </div>

          {/* Tab contents */}
          <AnimatePresence mode="wait">
            {activeTab === 'online' ? (
              <motion.div
                key="online"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-light-100 dark:bg-dark-300 rounded-2xl border border-light-300 dark:border-dark-50">
                  {/* Mock QR code container */}
                  <div className="w-32 h-32 bg-white p-2 rounded-xl border border-light-300 flex items-center justify-center shrink-0 shadow-sm relative group">
                    {/* Visual QR Code Representation using clean CSS grid/shapes */}
                    <div className="w-full h-full border-2 border-black p-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-5 h-5 bg-black" />
                        <div className="w-5 h-5 bg-black" />
                      </div>
                      <div className="w-8 h-8 self-center bg-black rounded" />
                      <div className="flex justify-between">
                        <div className="w-5 h-5 bg-black" />
                        <div className="w-5 h-5 bg-black" />
                      </div>
                    </div>
                    {/* Scan indicator */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 rounded-xl">
                      <span className="text-white text-[10px] font-bold bg-primary px-2 py-1 rounded">Scan to Pay</span>
                    </div>
                  </div>

                  <div className="text-center sm:text-left space-y-2">
                    <p className="font-bold text-sm text-secondary dark:text-white">
                      Scan QR Code or Use UPI ID
                    </p>
                    <p className="text-xs text-light-500 dark:text-dark-50 leading-relaxed font-medium">
                      Scan the QR Code using any UPI App (GPay, PhonePe, Paytm) to make your contribution.
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                      <code className="px-3 py-1.5 rounded-lg bg-white dark:bg-dark-200 border border-light-300 dark:border-dark-50 text-xs font-mono font-bold">
                        nayepankh@upi
                      </code>
                      <button
                        onClick={() => copyToClipboard('nayepankh@upi', 'upi')}
                        className="p-2 rounded-lg bg-light-200 dark:bg-dark-200 text-light-500 dark:text-dark-50 hover:bg-light-300 dark:hover:bg-dark-50 transition-colors"
                        title="Copy UPI ID"
                      >
                        {copiedField === 'upi' ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
                      </button>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-primary text-white font-bold rounded-2xl shadow-glow-primary hover:shadow-glow-primary-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <FiHeart className="w-5 h-5 shrink-0" />
                  Proceed to Online Payment
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="bank"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <p className="text-xs font-semibold text-light-500 dark:text-dark-50">
                  Transfer directly to our NGO account via Net Banking or IMPS:
                </p>

                <div className="space-y-3">
                  {[
                    { label: 'Account Name', value: 'NayePankh Foundation', field: 'name' },
                    { label: 'Bank Name', value: 'State Bank of India (SBI)', field: 'bank' },
                    { label: 'Account Number', value: '38190382903', field: 'acc' },
                    { label: 'IFSC Code', value: 'SBIN0001234', field: 'ifsc' },
                  ].map((row) => (
                    <div
                      key={row.field}
                      className="flex items-center justify-between p-3.5 bg-light-100 dark:bg-dark-300 rounded-xl border border-light-300 dark:border-dark-50 text-sm font-semibold"
                    >
                      <div>
                        <span className="text-xs text-light-500 dark:text-dark-50 block">{row.label}</span>
                        <span className="text-secondary dark:text-white mt-0.5 block">{row.value}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(row.value, row.field)}
                        className="p-2 rounded-lg bg-white dark:bg-dark-200 text-light-500 dark:text-dark-50 hover:bg-light-200 dark:hover:bg-dark-50 border border-light-300 dark:border-dark-50 transition-colors"
                        title="Copy value"
                      >
                        {copiedField === row.field ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Right Column: Info & Tax Exemption Banner ── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tax Exemption Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-primary/10 border border-orange-500/20 text-orange-600 dark:text-orange-300 shadow-card dark:shadow-card-dark">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6">
              <FiAward className="w-6 h-6" />
            </div>
            <h4 className="font-display font-black text-2xl text-secondary dark:text-white mb-2 leading-tight">
              50% Tax Exemption
            </h4>
            <p className="text-xs uppercase font-bold tracking-widest text-primary mb-4">
              80G Exemption Registered
            </p>
            <p className="text-light-500 dark:text-dark-50 text-sm leading-relaxed font-medium">
              Every donation you make to NayePankh Foundation qualifies for a tax exemption under Section 80G of the Income Tax Act. We issue an instant tax receipt for your tax records.
            </p>
          </div>

          {/* Direct Support Details */}
          <div className="p-8 bg-white dark:bg-dark-200 border border-light-300 dark:border-dark-50 rounded-3xl shadow-card dark:shadow-card-dark space-y-4">
            <h4 className="font-display font-black text-xl text-secondary dark:text-white mb-2">
              Need Assistance?
            </h4>
            <p className="text-light-500 dark:text-dark-50 text-xs leading-relaxed font-medium">
              If you have any questions regarding your donation, tax receipts, or would like to donate materials like textbooks, sanitary pads, or clothes, contact us directly:
            </p>
            <div className="space-y-2 text-xs font-bold text-secondary dark:text-white">
              <p>✉ contact@nayepankh.com</p>
              <p>📞 +91 83185 00748</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
