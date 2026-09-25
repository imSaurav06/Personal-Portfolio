import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

interface NavbarProps {
  onWorkClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWorkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');

  const navLinks = [
    { label: 'WORK', id: 'projects-section', isAction: true },
    { label: 'SYSTEMS', id: 'skills-section' },
    { label: 'ABOUT', id: 'about-section' },
    { label: 'EXPERIENCE', id: 'experience-section' },
    { label: 'CONTACT', id: 'contact-section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home-section', 'projects-section', 'skills-section', 'about-section', 'experience-section', 'contact-section'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId === 'projects-section' && onWorkClick) {
      onWorkClick();
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none ${
          isScrolled
            ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Identity / Left Typography (Matching Reference Frame 0001) */}
          <a
            href="#home-section"
            className="group flex items-center gap-2"
          >
            <span className="font-sans-clean font-extrabold uppercase text-sm md:text-base text-white tracking-widest group-hover:text-cyan-400 transition-colors">
              SAURAV KUMAR
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
          </a>

          {/* Desktop Minimal Navigation (Matching Reference Frame 0001: PLAYBOOK, SOCIALS, CONTACTS) */}
          <nav className="hidden md:flex items-center gap-8 font-sans-clean text-xs font-semibold uppercase tracking-widest text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors hover:text-white ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-400"
                    />
                  )}
                </button>
              );
            })}

            {/* Resume CV Download Button */}
            <a
              href="/Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
              download="Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
              className="px-3.5 py-1.5 rounded-full border border-cyan-400/40 hover:border-cyan-300 bg-cyan-950/30 hover:bg-cyan-500/20 text-cyan-300 hover:text-white transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>

            {/* Quick Status / CTA */}
            <a
              href="#contact-section"
              className="px-4 py-2 rounded-full border border-white/20 hover:border-cyan-400/80 bg-white/5 hover:bg-cyan-500/10 text-cyan-200 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-white/15 bg-white/5 text-slate-200"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#07090e] p-8 flex flex-col justify-between md:hidden"
          >
            <div className="pt-20 space-y-6">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-4">
                // NAVIGATION_MENU
              </span>

              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block text-left w-full font-sans-clean font-black uppercase text-3xl text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="font-mono text-sm text-slate-500 mr-3">
                    0{idx + 1}
                  </span>
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3 text-xs font-mono text-slate-400">
              <a
                href="/Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
                download="Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
                className="w-full py-3 rounded-xl bg-cyan-400 text-black font-sans-clean font-bold text-center flex items-center justify-center gap-2 tracking-wider uppercase"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (CV)</span>
              </a>
              <div>SAURAV KUMAR · SOFTWARE DEVELOPER & AI ENGINEER</div>
              <a href="mailto:mrsaurav1111@gmail.com" className="text-cyan-400 block hover:underline">
                mrsaurav1111@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
