import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  const titleWords = "SAURAV KUMAR".split(" ");
  const subtitleWords = "AI & ML Developer & Full-Stack Engineer".split(" ");

  const handleContactScroll = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home-section" 
      className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden bg-slate-900/10"
    >
      {/* Decorative Blur Backglows */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-glow-blue opacity-50 pointer-events-none rounded-full blur-[80px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-glow-purple opacity-40 pointer-events-none rounded-full blur-[80px] animate-pulse-slow" />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[15%] w-24 h-24 rounded-full border border-blue-500/10 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 backdrop-blur-[2px] hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 left-[10%] w-32 h-32 rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-[2px] hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Tagline */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 mb-6 uppercase"
          >
            <span>Available for Opportunities</span>
          </motion.div>

          {/* Heading Name with Word-by-word fade up */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-slate-800 dark:text-white mb-6 select-none"
          >
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block mr-3 last:mr-0">
                {word === 'KUMAR' ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle with reveal */}
          <motion.p 
            variants={itemVariants}
            className="font-display font-semibold text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 tracking-tight"
          >
            {subtitleWords.map((word, i) => (
              <span key={i} className="inline-block mr-1.5 last:mr-0">
                {word}
              </span>
            ))}
          </motion.p>

          {/* Short Bio */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl mb-10"
          >
            Engineering student specializing in Artificial Intelligence. Passionate about designing robust deep learning pipelines and building highly-scalable web and mobile products.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto"
          >
            <button
              onClick={handleContactScroll}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-purple-500/20 cursor-pointer hover:scale-102 hover:brightness-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Contact Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="./Saurav_Kumar_Resume.pdf"
              download="Saurav_Kumar_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-blue-500/15 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Download CV
              <FileDown size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-slate-400 dark:text-slate-600">Connect</span>
            <div className="h-[1px] w-8 bg-slate-200 dark:bg-slate-800" />
            
            <a 
              href="https://github.com/imSaurav06" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-blue-500/10 flex items-center justify-center bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/06saurav-kumar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-blue-500/10 flex items-center justify-center bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            
            <a 
              href="mailto:mrsaurav1111@gmail.com" 
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-blue-500/10 flex items-center justify-center bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
