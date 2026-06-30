import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: 'home-section' },
  { label: 'About', path: 'about-section' },
  { label: 'Skills', path: 'skills-section' },
  { label: 'Experience', path: 'experience-section' },
  { label: 'Projects', path: 'projects-section' },
  { label: 'Education', path: 'education-section' },
  { label: 'Certifications', path: 'certifications-section' },
  { label: 'Contact', path: 'contact-section' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background opacity on scroll
      setIsScrolled(window.scrollY > 50);

      if (!isHomePage) return;

      // Track active section for scroll-spy highlight
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.path);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.path);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (!isHomePage) return;
    
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/75 dark:bg-[#070b14]/75 backdrop-blur-md border-b border-slate-200/50 dark:border-blue-500/10 shadow-lg shadow-black/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => isHomePage && window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
            <span className="font-display font-extrabold text-sm text-white select-none">SK</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 text-slate-800 dark:text-white">
            Saurav Kumar
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                {isHomePage ? (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-300 cursor-pointer ${
                      activeSection === item.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-full -z-10 border border-blue-500/10 dark:border-blue-500/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    to={`/#${item.path}`}
                    className="px-4 py-2 rounded-full font-sans text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-blue-500/15 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 cursor-pointer transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Navbar Controllers */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-blue-500/15 flex items-center justify-center text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-blue-500/15 flex items-center justify-center text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 cursor-pointer"
            aria-label="Open navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-200 dark:border-blue-500/10 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-lg"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left py-2 px-4 rounded-lg font-sans text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
