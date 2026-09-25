import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, ArrowRight, Layers, Cpu, Server, Database } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#090d16] p-6 sm:p-10 shadow-2xl text-slate-200 select-none custom-scrollbar cursor-default"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-0 float-right z-20 p-2.5 rounded-full border border-white/10 hover:border-white/40 bg-black/60 backdrop-blur-md text-slate-400 hover:text-white transition-colors"
            title="Close specification"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
              // ARCHITECTURE_DEEP_DIVE
            </span>
            <h2 className="font-sans-clean font-black uppercase text-2xl sm:text-4xl text-white tracking-tight">
              {project.name}
            </h2>
            <p className="font-sans-clean text-cyan-300 font-medium text-sm sm:text-base mt-1">
              {project.tagline}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 hover:bg-cyan-500/30 text-xs font-mono text-cyan-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Production URL</span>
                </a>
              )}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <span className="font-mono text-[10px] text-rose-400 uppercase tracking-wider block mb-1">
                The Engineering Problem
              </span>
              <p className="font-sans-clean text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block mb-1">
                Engineered Solution
              </span>
              <p className="font-sans-clean text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="mb-8 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-purple-400" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-purple-300">
                System Architecture Topology
              </h4>
            </div>

            <div className="space-y-3">
              {project.architecture.nodes.map((node, nIdx) => (
                <div
                  key={nIdx}
                  className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      0{nIdx + 1}
                    </span>
                    <span className="font-sans-clean font-bold text-sm text-white">
                      {node.name}
                    </span>
                  </div>
                  <span className="font-sans-clean text-xs text-slate-400">
                    {node.details}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-sans-clean text-xs text-slate-400 mt-4 italic">
              {project.architecture.description}
            </p>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300 font-sans-clean"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenge & Solution */}
          <div className="mb-8 p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h5 className="font-mono text-xs uppercase tracking-wider text-amber-300">
                Key Technical Challenge Overcome
              </h5>
            </div>
            <p className="font-sans-clean text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challengesFaced}
            </p>
          </div>

          {/* Technologies Used Grid */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
              Full Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
