import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500); // Wait a bit after 100%
          return 100;
        }
        const diff = Math.random() * 25;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b14] text-white"
        >
          {/* Decorative backglows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-blue opacity-50 pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple opacity-50 pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20"
            >
              <span className="font-display font-extrabold text-3xl tracking-wider select-none text-white">SK</span>
              <motion.div 
                className="absolute inset-0 rounded-2xl border border-white/30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display font-bold text-xl tracking-tight mb-2"
            >
              Saurav Kumar
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs font-sans tracking-widest uppercase text-blue-400 mb-8"
            >
              Portfolio Loading
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-48 h-1 overflow-hidden bg-slate-800 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.span 
              className="mt-2 text-xs font-mono text-slate-500"
              key={Math.round(progress)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default LoadingScreen;
