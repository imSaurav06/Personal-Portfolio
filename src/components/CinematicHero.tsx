import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Cpu, FileDown } from 'lucide-react';

interface CinematicHeroProps {
  onExploreClick: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onExploreClick }) => {
  return (
    <section 
      id="home-section"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-10 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#07090e] select-none"
    >
      {/* 1. Atmospheric Volumetric Blue Lighting (Matching Reference Frame 0001) */}
      <div 
        className="absolute top-0 right-0 w-[80vw] h-[85vh] pointer-events-none opacity-90"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 75% 42%, rgba(37, 99, 235, 0.42) 0%, rgba(14, 165, 233, 0.22) 35%, rgba(139, 92, 246, 0.12) 55%, transparent 75%)'
        }}
      />

      {/* 2. Secondary Ambient Glow in lower left */}
      <div 
        className="absolute bottom-10 left-[-10vw] w-[45vw] h-[45vh] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(34, 211, 238, 0.15) 0%, transparent 60%)'
        }}
      />

      {/* 3. Film Grain / Tactile Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      {/* 4. Subtle Background Architectural Coordinates */}
      <div className="absolute top-28 right-12 hidden lg:flex flex-col items-end gap-1 font-mono text-[10px] text-slate-500/70 tracking-widest pointer-events-none">
        <span className="flex items-center gap-1.5 text-cyan-400/80">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYSTEM STATE: RUNNING
        </span>
        <span>PATNA, BIHAR · 25.5941° N · 85.1376° E</span>
        <span>LLM LATENCY: 142ms · EMBED_DIM: 1536</span>
      </div>

      {/* Central Hero Block */}
      <div className="relative z-10 flex-1 flex flex-col justify-center my-auto max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-300">
              Generative AI & Agentic Systems
            </span>
          </div>

          {/* Master Typography Matching Reference Frame 0001 */}
          <div className="relative">
            {/* Line 1: GENERATIVE + contrasting italic accent word */}
            <h1 className="font-sans-clean font-extrabold uppercase text-[13vw] sm:text-[11vw] lg:text-[8.5vw] text-white tracking-[-0.035em] leading-[0.88] flex flex-wrap items-baseline">
              <span>GENERATIVE</span>
              
              {/* Luxury Italic Serif Accent Word (Direct match to 'visual' in reference video) */}
              <span className="font-editorial text-[#fbbf24] text-[8.5vw] sm:text-[7vw] lg:text-[5.4vw] font-normal italic tracking-normal ml-3 sm:ml-6 lowercase align-baseline drop-shadow-[0_0_35px_rgba(251,191,36,0.4)] select-none">
                agentic
              </span>
            </h1>

            {/* Line 2: AI ENGINEER */}
            <h2 className="font-sans-clean font-extrabold uppercase text-[13vw] sm:text-[11vw] lg:text-[8.5vw] text-white tracking-[-0.035em] leading-[0.88] mt-1 sm:mt-2">
              AI ENGINEER
            </h2>
          </div>

          {/* Subtitle / Positioning Statement */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 md:mt-10 max-w-xl"
          >
            <p className="font-sans-clean text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              I architect intelligent digital products with <span className="text-white font-medium">LLMs</span>, <span className="text-cyan-400 font-medium">Autonomous Multi-Agent Networks</span> & high-performance modern web platforms.
            </p>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-slate-950 font-sans-clean font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <a
              href="/Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
              download="Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-cyan-400/40 bg-cyan-950/30 backdrop-blur-md text-cyan-300 font-sans-clean font-medium text-sm tracking-wide transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-slate-200 font-sans-clean font-medium text-sm tracking-wide transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              <span>Start a Conversation</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Metadata Block (Exact Match to Reference Frame 0001) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-[10px] md:text-[11px] font-sans-clean tracking-wider uppercase text-slate-400"
      >
        {/* Column 1: Core Competencies */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white">GEN AI · LLMs · MULTI-AGENT</span>
          <span className="text-slate-500">RAG ARCHITECTURES · FULL STACK · CLOUD</span>
        </div>

        {/* Column 2: Location & Availability */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white">PATNA, BIHAR, INDIA</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR GLOBAL ENGINEERING ROLES
          </span>
        </div>

        {/* Column 3: Reference Scroll Indicator (Frame 0001: Vertical line with arrow) */}
        <div 
          onClick={onExploreClick}
          className="cursor-pointer group flex items-center gap-3 self-end sm:self-auto py-1"
          title="Scroll or click to view systems"
        >
          <span className="font-mono text-[10px] text-slate-400 group-hover:text-cyan-400 transition-colors hidden md:inline">
            EXPLORE
          </span>
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-cyan-400 group-hover:h-10 transition-all duration-300" />
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400 -mt-1 group-hover:translate-y-1 transition-transform animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;
