import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 400);
          return 100;
        }
        const step = Math.random() * 20 + 8;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -30,
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white select-none"
        >
          {/* Subtle Volumetric Glow & Grain */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.25) 0%, transparent 60%)'
            }}
          />
          <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            
            {/* Top Minimal Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-sans-clean font-extrabold uppercase text-xs tracking-widest text-slate-400 mb-6"
            >
              SAURAV KUMAR
            </motion.div>

            {/* Core Position Title */}
            <motion.h2 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-sans-clean font-black uppercase text-xl sm:text-2xl tracking-tight text-white mb-2"
            >
              GENERATIVE AI ENGINEER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-[10px] tracking-wider uppercase text-cyan-400 mb-8"
            >
              // BOOTING AGENT RUNTIME & TENSORS...
            </motion.p>

            {/* Sleek Line Progress Bar */}
            <div className="w-56 h-[1.5px] overflow-hidden bg-slate-800 rounded-full relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            
            {/* Progress Percentage & Status */}
            <div className="w-56 flex justify-between items-center mt-2.5 font-mono text-[9px] text-slate-500">
              <span>INITIALIZING</span>
              <span className="text-cyan-400">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
