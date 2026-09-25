import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Briefcase, Award, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/experience';

export const EditorialTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineMilestones = experienceData.map((exp) => ({
    year: exp.duration,
    role: exp.role,
    org: exp.company,
    companyLink: exp.companyLink,
    highlight: exp.achievements?.[0] || 'Enterprise software delivery',
    points: exp.responsibilities,
    technologies: exp.technologies,
  }));

  return (
    <section 
      id="experience-section"
      ref={containerRef}
      className="relative min-h-screen w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#07090e] select-none"
    >
      {/* Background Volumetric Glow */}
      <div 
        className="absolute top-1/2 left-0 w-[50vw] h-[50vh] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 65%)'
        }}
      />
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md mb-4">
            <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">
              05 — Professional Experience
            </span>
          </div>

          <h2 className="font-sans-clean font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Work Experience
          </h2>
          <p className="font-sans-clean text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Software engineering roles, backend systems & automation pipelines, and full-stack development experience.
          </p>
        </div>

        {/* Timeline Stream with Animated Drawing Line */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Static Background Beam */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-slate-800" />

          {/* Animated Progressive Drawing Beam */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          />

          {/* Milestones */}
          <div className="space-y-16">
            {timelineMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#07090e] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.5)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl group-hover:border-cyan-400/40 transition-all duration-300">
                  
                  {/* Top Row: Duration, Current Status & Org */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-amber-300 font-semibold px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-400/20 w-fit">
                        {item.year}
                      </span>
                      {item.year.includes('Present') && (
                        <span className="font-mono text-[10px] text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          CURRENT ROLE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-400">
                        {item.org}
                      </span>
                      {'companyLink' in item && item.companyLink && item.companyLink !== '#' && (
                        <a
                          href={item.companyLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan-400 hover:text-cyan-300 border border-cyan-400/30 bg-cyan-950/40 px-2 py-0.5 rounded transition-colors"
                        >
                          <span>Certificate</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Role Title with Company */}
                  <h3 className="font-sans-clean font-extrabold text-xl sm:text-2xl text-white">
                    {item.role} <span className="text-cyan-400 font-medium text-lg sm:text-xl">@ {item.org}</span>
                  </h3>

                  {/* Key Highlight Banner */}
                  <div className="mt-3 p-3 rounded-xl bg-cyan-950/30 border border-cyan-400/30 flex items-center gap-2.5 text-xs font-sans-clean text-cyan-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item.highlight}</span>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-sans-clean text-slate-300">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-0.5 font-bold leading-none text-base">●</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialTimeline;
