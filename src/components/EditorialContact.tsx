import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, Copy, Check, Send, Sparkles, X, FileDown, Code2 } from 'lucide-react';

export const EditorialContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'mrsaurav1111@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <section 
      id="contact-section"
      className="relative min-h-screen w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#07090e] select-none flex flex-col justify-between"
    >
      {/* Volumetric Cyan/Blue Glow in the background */}
      <div 
        className="absolute bottom-0 right-0 w-[60vw] h-[60vh] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.4) 0%, rgba(37, 99, 235, 0.25) 40%, transparent 70%)'
        }}
      />
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12">
        
        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">
            06 — Initiate Collaboration
          </span>
        </div>

        {/* Master Oversized Contact Headline (Exact Match to User Prompt) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans-clean font-black uppercase text-[12vw] sm:text-[10vw] lg:text-[7.8vw] text-white tracking-[-0.035em] leading-[0.88] max-w-5xl"
        >
          <div>LET'S</div>
          <div>BUILD</div>
          <div className="flex flex-wrap items-baseline gap-3">
            <span>SOMETHING</span>
            <span className="font-editorial text-[#fbbf24] text-[8.5vw] sm:text-[7vw] lg:text-[5.5vw] font-normal italic lowercase tracking-normal align-baseline drop-shadow-[0_0_35px_rgba(251,191,36,0.4)]">
              intelligent.
            </span>
          </div>
        </motion.div>

        {/* Action Button & Links */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-white/10">
          
          {/* Big Start Conversation Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-4 px-8 py-5 rounded-full bg-cyan-400 hover:bg-white text-black font-sans-clean font-extrabold text-base sm:text-lg tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] active:scale-95"
          >
            <span>→ START A CONVERSATION</span>
          </button>

          {/* Direct Social / Email Channels */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans-clean text-sm uppercase tracking-widest text-slate-300">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              title="Click to copy email address"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{copied ? 'EMAIL COPIED!' : 'EMAIL'}</span>
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />}
            </button>

            <a
              href="https://www.linkedin.com/in/06saurav-kumar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href="https://github.com/imSaurav06"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href="https://leetcode.com/u/i_am_saurav/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>LEETCODE</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href="/Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
              download="Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white border border-cyan-400/40 bg-cyan-950/40 hover:bg-cyan-500/20 px-3.5 py-1.5 rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} SAURAV KUMAR · ALL RIGHTS RESERVED
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LATENCY: 12ms · ALL AGENTS OPERATIONAL</span>
        </div>
      </div>

      {/* Interactive Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-[#090d16] p-6 sm:p-8 shadow-2xl cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-white/40 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
                  // TRANSMISSION_CHANNEL
                </span>
                <h3 className="font-sans-clean font-extrabold text-2xl text-white">
                  Send a Direct Message
                </h3>
                <p className="font-sans-clean text-xs text-slate-400 mt-1">
                  Whether discussing agentic AI architectures, full-time engineering roles, or consulting inquiries.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans-clean font-bold text-lg text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="font-sans-clean text-xs text-slate-300">
                    Thank you! Saurav will review and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase text-slate-400 block mb-1.5">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Wright (Lead AI Architect)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase text-slate-400 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase text-slate-400 block mb-1.5">
                      Message / Project Objectives
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the problem you're solving or the engineering position..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-sans-clean font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EditorialContact;
