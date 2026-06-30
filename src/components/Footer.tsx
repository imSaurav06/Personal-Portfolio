import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 dark:border-blue-500/10 bg-slate-50 dark:bg-[#060910] text-slate-500 dark:text-slate-400 py-12 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Profile metadata */}
        <div>
          <h3 className="font-display font-bold text-slate-800 dark:text-white text-lg mb-2">Saurav Kumar</h3>
          <p className="font-sans text-xs text-slate-400 dark:text-slate-500 tracking-wide">
            Bachelor of Computer Science & Engineering (AI)<br />
            AI/ML Developer & Full-Stack Engineer
          </p>
        </div>

        {/* Dynamic Contact links */}
        <div className="flex flex-col gap-2 items-center md:items-start text-xs font-sans">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-500" />
            <span>Patna, Bihar, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-blue-500" />
            <a href="mailto:mrsaurav1111@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">mrsaurav1111@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-blue-500" />
            <a href="tel:+917546974234" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">+91 7546974234</a>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a 
              href="https://github.com/imSaurav06" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-blue-500/10 flex items-center justify-center bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/06saurav-kumar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-blue-500/10 flex items-center justify-center bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:mrsaurav1111@gmail.com" 
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-blue-500/10 flex items-center justify-center bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
              aria-label="Email Me"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="text-xs font-sans text-slate-400 dark:text-slate-600">
            &copy; {currentYear} Saurav Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
