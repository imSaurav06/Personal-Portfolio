import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Sparkles, Terminal, Cpu, Database, ShoppingBag, Brain } from 'lucide-react';
import AgentGraphVisualizer from './AgentGraphVisualizer';
import NeuralScanVisualizer from './NeuralScanVisualizer';
import { Project } from '../types';

interface ColorfulProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ColorfulProjectShowcase: React.FC<ColorfulProjectShowcaseProps> = ({ projects, onSelectProject }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const activeProject = projects[activeCardIndex] || projects[0];

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      id="projects-section"
      className="relative min-h-screen w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden select-none"
    >
      {/* 1. Vibrant Mesh Gradient Backdrop (Exact Match to Reference Frame 0361, 0401, 0551) */}
      <div className="absolute inset-0 mesh-gradient-bg pointer-events-none opacity-90 transition-all duration-1000" />
      
      {/* 2. Tactile Film Grain / Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-35 pointer-events-none" />

      {/* 3. Deep Vignette Edges for Editorial Framing */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e] opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[75vh]">
        
        {/* LEFT COLUMN: Editorial Manifesto (Matching Reference Frame 0361 / 0401) */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between self-stretch py-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">
                02 — Selected Systems
              </span>
            </div>

            {/* Editorial Manifesto Headline with Accent Italic Serif */}
            <h2 className="font-sans-clean font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.12] tracking-tight">
              I am Saurav Kumar,<br />
              I create <span className="font-editorial text-cyan-300 font-normal italic lowercase drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">autonomous agentic</span><br />
              yet functional & visually<br />
              intelligent systems for<br />
              modern enterprises.
            </h2>

            {/* Subtitle details */}
            <p className="font-sans-clean text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-md">
              Bridging the gap between frontier Generative AI models and production software. Each system is engineered for low latency, self-healing autonomy, and measurable business impact.
            </p>

            {/* Active System Quick Info */}
            <div className="pt-4 border-t border-white/15 flex items-center gap-4">
              <span className="font-mono text-2xl font-black text-cyan-400">
                0{activeCardIndex + 1}
              </span>
              <div>
                <h4 className="font-sans-clean font-bold text-sm text-white">
                  {activeProject.name}
                </h4>
                <p className="font-mono text-[11px] text-slate-400">
                  {activeProject.tagline}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Manifesto Metadata & Nav Shortcuts */}
          <div className="hidden lg:flex items-end justify-between pt-8 text-[10px] font-sans-clean uppercase tracking-widest text-slate-400 border-t border-white/10">
            <div>
              <span className="font-semibold text-white block">AGENTIC WORKFLOWS</span>
              <span className="text-slate-500">DISTRIBUTED MULTI-AGENT / RAG</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-cyan-400 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                title="Previous System"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-cyan-400 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
                title="Next System"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stacked 3D Showcase Cards (Ref Frame 0361, 0401, 0551) */}
        <div className="w-full lg:w-7/12 relative flex flex-col items-center">
          
          {/* Layered Background Perspective Tabs (Simulating Stacked Deck) */}
          <div className="w-full flex justify-end gap-2 mb-2 pr-6 overflow-x-auto pb-1 no-scrollbar">
            {projects.slice(0, 4).map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveCardIndex(idx)}
                className={`px-3.5 py-1.5 rounded-t-xl font-mono text-[10px] uppercase tracking-wider transition-all duration-300 border-t border-x ${
                  activeCardIndex === idx
                    ? 'bg-black/80 text-cyan-300 border-cyan-400/40 -translate-y-1 shadow-[0_-5px_15px_rgba(0,0,0,0.5)]'
                    : 'bg-black/40 text-slate-400 border-white/10 hover:text-white hover:bg-black/60'
                }`}
              >
                {p.name.split(':')[0]}
              </button>
            ))}
          </div>

          {/* Active Front Card Container */}
          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCardIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-3xl border border-white/20 bg-black/80 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between"
              >
                {/* Card Header: Category Name + Divider + Circular Arrow Button */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      [0{activeCardIndex + 1}]
                    </span>
                    <h3 className="font-sans-clean font-extrabold uppercase text-lg sm:text-xl text-white tracking-wide">
                      {activeProject.id === 'forge-ai' && 'AGENTIC AI PLATFORM'}
                      {activeProject.id === 'brain-tumor-detection' && 'DEEP LEARNING CV'}
                      {activeProject.id === 'texflow' && 'INTELLIGENT B2B COMMERCE'}
                      {activeProject.id === 'ai-resume-builder' && 'FULL-STACK GEMINI SAAS'}
                      {activeProject.id === 'package-delivery-app' && 'MOBILE CLOUD PLATFORM'}
                    </h3>
                  </div>

                  {/* Horizontal Divider Line */}
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent hidden sm:block mx-4" />

                  {/* Circular Arrow Action Button (Direct match to reference circle arrow) */}
                  <button
                    onClick={() => onSelectProject(activeProject)}
                    className="group w-11 h-11 rounded-full border border-white/30 hover:border-cyan-400 bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                    title="View System Architecture & Deep Dive"
                  >
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Card Visual Centerpiece: Interactive Visualizer or High-Fidelity UI */}
                <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-inner">
                  {activeProject.id === 'forge-ai' ? (
                    <AgentGraphVisualizer />
                  ) : activeProject.id === 'brain-tumor-detection' ? (
                    <NeuralScanVisualizer />
                  ) : activeProject.id === 'texflow' ? (
                    /* TexFlow B2B AI Preview */
                    <div className="w-full min-h-[340px] rounded-2xl bg-[#090d16]/90 border border-white/10 p-5 flex flex-col justify-between select-none">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="font-mono text-[11px] text-cyan-300 font-semibold">
                          TexFlow_Marketplace://ai-rfq-matcher
                        </span>
                        <span className="font-mono text-[9px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
                          LIVE WEBSOCKETS
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto py-3">
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                          <span className="font-mono text-[9px] text-amber-400 block mb-1">
                            UNSTRUCTURED BUYER INPUT
                          </span>
                          <p className="font-mono text-[10px] text-slate-300 italic">
                            "Looking for 20,000 meters 100% combed cotton jersey, 180 GSM, bio-washed, delivery to Nhava Sheva by Nov 15."
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-400/40">
                          <span className="font-mono text-[9px] text-cyan-300 block mb-1">
                            GEMINI AI PARSED SCHEMA
                          </span>
                          <div className="font-mono text-[10px] text-slate-200 space-y-0.5">
                            <div>• Blend: 100% Combed Cotton</div>
                            <div>• Weight: 180 GSM (±2)</div>
                            <div>• Treatment: Bio-Washed</div>
                            <div>• Match: 3 Verified Mills Bidding</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          RFQ CYCLE: 4 HOURS (WAS 14 DAYS)
                        </span>
                        <span className="text-cyan-300">SOCKET.IO CONNECTED</span>
                      </div>
                    </div>
                  ) : (
                    /* AI Resume Builder Preview */
                    <div className="w-full min-h-[340px] rounded-2xl bg-[#090d16]/90 border border-white/10 p-5 flex flex-col justify-between select-none">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="font-mono text-[11px] text-purple-300 font-semibold">
                          AIResume_Engine://realtime-preview
                        </span>
                        <span className="font-mono text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-400/30">
                          ATS SCORE: 94/100
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto py-3">
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                          <span className="font-mono text-[9px] text-slate-400 block mb-1">
                            EDITOR FORM CANVAS
                          </span>
                          <div className="space-y-1.5">
                            <div className="h-2 w-28 bg-slate-700 rounded" />
                            <div className="h-2 w-40 bg-slate-700 rounded" />
                            <div className="h-2 w-32 bg-cyan-600/40 rounded" />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-400/40">
                          <span className="font-mono text-[9px] text-purple-300 block mb-1">
                            GEMINI ATS ENHANCER
                          </span>
                          <p className="font-sans-clean text-[11px] text-slate-200">
                            "Spearheaded distributed microservices reducing pipeline latency by 35% across 4 enterprise services."
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="text-purple-300">REACT 18 · DEBOUNCED RENDER</span>
                        <span className="text-slate-400">IMAGEKIT BACKGROUND REMOVAL</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Summary + Tech Tags + CTA Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(activeProject)}
                    className="inline-flex items-center gap-2 text-xs font-sans-clean font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>System Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicator Dots (Exact Match to Reference Frame 0401 & 0551) */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {projects.slice(0, 4).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCardIndex(idx)}
                  className="p-1 transition-all"
                  title={`View project 0${idx + 1}`}
                >
                  {activeCardIndex === idx ? (
                    <motion.div 
                      layoutId="activeDot"
                      className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" 
                    />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full border border-white/40 hover:border-white transition-colors" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorfulProjectShowcase;
