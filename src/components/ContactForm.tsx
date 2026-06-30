import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactInput>();

  const onSubmit = async (data: ContactInput) => {
    setFormState('loading');

    // Retrieve keys from environment (if present)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (serviceId && templateId && publicKey) {
      try {
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Saurav Kumar'
        };

        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        if (response.status === 200) {
          setFormState('success');
          setFeedbackMsg('Your message has been sent successfully. Thank you for reaching out!');
          reset();
        } else {
          throw new Error('EmailJS returned failure status');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        setFormState('error');
        setFeedbackMsg('Something went wrong. Please check your network or try again later.');
      }
    } else {
      // Simulation mode if credentials are not configured in local environment variables
      console.info('EmailJS environment keys missing. Simulating sending process...');
      setTimeout(() => {
        setFormState('success');
        setFeedbackMsg('Message sent successfully (Developer Simulation Mode).');
        reset();
      }, 1500);
    }
  };

  return (
    <section id="contact-section" className="py-24 relative bg-slate-900/5 dark:bg-[#070b14]/5">
      {/* Visual background glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-glow-blue opacity-30 pointer-events-none rounded-full blur-[80px]" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-glow-purple opacity-30 pointer-events-none rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl md:text-2xl text-slate-800 dark:text-white">
                Let's discuss your next project
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I am interested in joining dynamic software teams, taking on challenging AI integrations, or building clean, responsive full-stack applications. Drop me a line!
              </p>
            </div>

            {/* Visual Detail Badges */}
            <div className="space-y-4 my-8 lg:my-0">
              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-white dark:bg-slate-900/40">
                <div className="w-10 h-10 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Location</span>
                  <span className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200">Patna, Bihar, India</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-white dark:bg-slate-900/40">
                <div className="w-10 h-10 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Email Address</span>
                  <a href="mailto:mrsaurav1111@gmail.com" className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 transition-colors">
                    mrsaurav1111@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-white dark:bg-slate-900/40">
                <div className="w-10 h-10 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Phone Number</span>
                  <a href="tel:+917546974234" className="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 transition-colors">
                    +91 7546974234
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Input Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Dual Input: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      {...register('name', { required: 'Name is required' })}
                      className={`px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-300 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-white ${
                        errors.name 
                          ? 'border-red-500/50 dark:border-red-500/30 focus:border-red-500' 
                          : 'border-slate-200 dark:border-blue-500/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20'
                      }`}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-sans">{errors.name.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-300 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-white ${
                        errors.email 
                          ? 'border-red-500/50 dark:border-red-500/30 focus:border-red-500' 
                          : 'border-slate-200 dark:border-blue-500/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20'
                      }`}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-sans">{errors.email.message}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Job Proposal"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-300 bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-white ${
                      errors.subject 
                        ? 'border-red-500/50 dark:border-red-500/30 focus:border-red-500' 
                        : 'border-slate-200 dark:border-blue-500/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.subject && <span className="text-xs text-red-500 font-sans">{errors.subject.message}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans text-xs font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your goals in detail..."
                    {...register('message', { required: 'Message is required' })}
                    className={`px-4 py-3 rounded-xl border font-sans text-sm outline-none transition-all duration-300 resize-none bg-slate-50/50 dark:bg-slate-950/40 text-slate-800 dark:text-white ${
                      errors.message 
                        ? 'border-red-500/50 dark:border-red-500/30 focus:border-red-500' 
                        : 'border-slate-200 dark:border-blue-500/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-sans">{errors.message.message}</span>}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full py-4 rounded-xl font-sans font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/10 hover:brightness-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formState === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                {/* Feedback banners */}
                <AnimatePresence>
                  {formState === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-xs md:text-sm text-emerald-600 dark:text-emerald-400 font-sans"
                    >
                      <CheckCircle2 size={16} className="shrink-0" />
                      <span>{feedbackMsg}</span>
                    </motion.div>
                  )}

                  {formState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-xs md:text-sm text-red-600 dark:text-red-400 font-sans"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{feedbackMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
