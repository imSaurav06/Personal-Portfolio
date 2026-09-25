import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, Cpu, Globe2, Award, GraduationCap, CheckCircle, ExternalLink, FileDown, TrendingUp } from 'lucide-react';
import { educationData } from '../data/education';
import { certificationsData, achievementsData } from '../data/certifications';

export const EditorialAbout: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'GENERATIVE AI & LLMs',
      desc: 'Fine-tuned reasoning prompts, structured output schemas, and low-latency API integration with frontier models (Gemini 1.5, GPT-4o, Claude).',
    },
    {
      num: '02',
      title: 'AUTONOMOUS AGENTIC SYSTEMS',
      desc: 'Multi-agent DAG state machines (LangGraph), self-healing debugging loops, and sandboxed Docker tool execution.',
    },
    {
      num: '03',
      title: 'COMPUTER VISION & DEEP LEARNING',
      desc: 'Convolutional neural networks, transfer learning, Grad-CAM saliency explainability, and edge-optimized model deployment.',
    },
    {
      num: '04',
      title: 'SCALABLE FULL-STACK WEB',
      desc: 'Modern web architectures with React 18, TypeScript, Tailwind CSS, Node.js, Express, and FastAPI microservices.',
    },
    {
      num: '05',
      title: 'CLOUD, CONTAINERS & APIS',
      desc: 'Docker compose orchestration, Linux VPS hosting, Nginx reverse proxies, WebSockets, and Redis pub/sub state synchronization.',
    },
  ];

  return (
    <section 
      id="about-section"
      className="relative min-h-screen w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#07090e] select-none"
    >
      {/* Background Volumetric Blue Atmospheric Glow */}
      <div 
        className="absolute top-1/2 right-0 w-[55vw] h-[55vh] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(37, 99, 235, 0.4) 0%, rgba(34, 211, 238, 0.2) 35%, transparent 70%)'
        }}
      />
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">
              04 — Philosophy & Engineering Depth
            </span>
          </div>

          <h2 className="font-sans-clean font-black uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">
            I build systems where<br />
            <span className="font-editorial text-cyan-300 font-normal italic lowercase drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">software</span> meets <span className="font-editorial text-amber-300 font-normal italic lowercase drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">intelligence.</span>
          </h2>
          
          <div className="mt-8 max-w-2xl font-sans-clean text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              I am a Generative AI and Software Engineer based in Patna, Bihar, India, passionate about creating systems that operate with genuine autonomy. Rather than building static wrappers around APIs, I architect production workflows where LLMs have access to deterministic tools, verified test environments, and vector retrieval to solve complex engineering challenges.
            </p>
          </div>
        </div>

        {/* 5 Core Pillars (Direct match to user request) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.num}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-black text-cyan-400/80 mb-3 block">
                  {pillar.num}
                </span>
                <h3 className="font-sans-clean font-extrabold uppercase text-base sm:text-lg text-white tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-sans-clean text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>PRODUCTION TESTED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials, Education & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 border-t border-white/10">
          
          {/* Education & Achievements Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              {educationData.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-sans-clean font-bold text-xl text-white">
                    {edu.degree}
                  </h4>
                  <p className="font-sans-clean text-sm text-cyan-400 font-medium mt-1">
                    {edu.college}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-2">
                    <span>{edu.duration}</span>
                    {edu.score && <span className="text-emerald-400 font-semibold">· {edu.score}</span>}
                  </div>
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Achievements & Competitive Programming */}
            <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Key Milestones & DSA</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievementsData.map((ach) => (
                  <div 
                    key={ach.id}
                    className="p-3.5 rounded-xl border border-white/5 bg-slate-900/50 flex flex-col justify-between"
                  >
                    <div>
                      <h6 className="font-sans-clean font-bold text-xs text-white">
                        {ach.title}
                      </h6>
                      <p className="font-sans-clean text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {ach.description}
                      </p>
                    </div>
                    {ach.link && (
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 mt-2 pt-2 border-t border-white/5"
                      >
                        <span>View Verified Link</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Superbadges Column */}
          <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-amber-300 font-mono text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Verified Certifications</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">4 VERIFIED CREDENTIALS</span>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-xl border border-white/5 bg-slate-900/40 hover:border-amber-400/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h5 className="font-sans-clean font-bold text-sm text-white">
                        {cert.title}
                      </h5>
                      <span className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 w-fit">
                        {cert.issuer}
                      </span>
                    </div>
                    <p className="font-sans-clean text-xs text-slate-400 mt-1.5">
                      {cert.details}
                    </p>
                    {cert.credentialLink && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
                      >
                        <span>View Certificate [PDF]</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Action Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h5 className="font-sans-clean font-bold text-sm text-white">Looking for Full Resume / CV?</h5>
                <p className="font-sans-clean text-xs text-slate-300 mt-0.5">Download the complete updated September 2026 PDF.</p>
              </div>
              <a
                href="/Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
                download="Saurav_Kumar_Resume_Quess_AITrainee (1).pdf"
                className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-white text-black font-sans-clean font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialAbout;
