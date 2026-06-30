import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe, CheckCircle2, AlertCircle, Compass, ListTodo, ShieldQuestion, HelpCircle } from 'lucide-react';
import { projects } from '../data/projects';
import ArchDiagram from '../components/ArchDiagram';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  // Redirect home if project not found
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  // Renders a premium interactive CSS layout representation for the selected project's gallery cards
  const renderCSSMockup = (type: 'ui' | 'schema' | 'mobile' | 'code', title: string) => {
    const isDark = true; // Match style
    
    if (type === 'mobile') {
      return (
        <div className="w-full h-64 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Phone Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full" />
          
          <div className="w-40 h-52 bg-slate-900 rounded-xl border border-slate-800 flex flex-col justify-between p-3 relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center pb-2 border-b border-slate-800/40">
              <div className="w-8 h-2 bg-blue-500 rounded" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
            </div>
            
            {/* Content */}
            <div className="flex-grow flex flex-col justify-center gap-2 pt-2">
              <div className="w-full h-10 bg-slate-800/40 rounded-lg flex items-center justify-center border border-slate-800/60">
                <span className="text-[8px] text-blue-400 font-mono">MAP OVERLAY</span>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2 h-8 bg-slate-800/40 rounded-lg" />
                <div className="w-1/2 h-8 bg-slate-800/40 rounded-lg" />
              </div>
            </div>
            
            {/* Footer */}
            <div className="h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-[7px] font-bold text-white uppercase tracking-wider">
              {title}
            </div>
          </div>
        </div>
      );
    }

    if (type === 'code') {
      return (
        <div className="w-full h-64 bg-[#090d16] rounded-2xl border border-slate-800 p-5 font-mono text-[9px] text-indigo-300 leading-normal overflow-hidden select-none">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <p className="text-slate-500">// {title}</p>
          <p><span className="text-purple-400">const</span> optimizeResume = <span className="text-blue-400">async</span> (data) =&gt; &#123;</p>
          <p className="pl-4"><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> GeminiAI.prompt(&#123;</p>
          <p className="pl-8">model: <span className="text-green-400">"gemini-1.5-flash"</span>,</p>
          <p className="pl-8">temperature: <span className="text-yellow-400">0.2</span>,</p>
          <p className="pl-8">payload: data.bulletPoints</p>
          <p className="pl-4">&#125;);</p>
          <p className="pl-4"><span className="text-purple-400">return</span> response.choices[0].text;</p>
          <p>&#125;;</p>
        </div>
      );
    }

    // Default Web UI schema Mockup
    return (
      <div className="w-full h-64 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col justify-between p-4 relative overflow-hidden">
        {/* Browser Top Header */}
        <div className="flex items-center gap-1.5 pb-2 border-b border-slate-900">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
          <div className="w-32 h-3 bg-slate-900 rounded ml-4" />
        </div>
        
        {/* Grid panel */}
        <div className="flex-grow grid grid-cols-12 gap-3 pt-3">
          <div className="col-span-3 bg-slate-900/60 rounded-lg border border-slate-900/80 p-2 flex flex-col gap-1.5">
            <div className="h-2 w-10 bg-slate-800 rounded" />
            <div className="h-2 w-full bg-slate-800/40 rounded" />
            <div className="h-2 w-full bg-slate-800/40 rounded" />
          </div>
          
          <div className="col-span-9 bg-slate-900/40 rounded-lg border border-slate-900/80 p-3 flex flex-col gap-2 relative">
            <div className="h-3 w-1/3 bg-blue-500/10 border border-blue-500/20 rounded" />
            <div className="h-12 w-full bg-slate-800/40 rounded-lg flex items-center justify-center text-[9px] text-slate-500 uppercase tracking-widest font-mono">
              {title}
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-12 bg-slate-800/60 rounded" />
              <div className="h-2 w-12 bg-slate-800/60 rounded" />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="h-4 w-full border-t border-slate-900 pt-2 flex items-center justify-between text-[7px] font-mono text-slate-600">
          <span>PORTFOLIO PLATFORM</span>
          <span>© 2026</span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Back to Home CTA */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-blue-500/10 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 bg-white dark:bg-slate-900/40 text-xs font-bold font-sans cursor-pointer shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Project Banner Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-3xl p-6 md:p-10 mb-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 dark:text-blue-400 uppercase">
              {project.tagline}
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-800 dark:text-white mt-1">
              {project.name}
            </h1>
            <p className="font-sans text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Code/Demo Link buttons */}
          <div className="flex gap-3 w-full md:w-auto shrink-0">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow md:flex-grow-0 px-5 py-3 rounded-xl border border-slate-200 dark:border-blue-500/15 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 bg-white dark:bg-slate-900 text-xs font-bold font-sans cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Github size={14} />
              <span>Repository</span>
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="flex-grow md:flex-grow-0 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold font-sans cursor-pointer hover:brightness-105 flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-blue-500/10"
              >
                <Globe size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Side: Overview & Diagrams */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Summary Overview */}
          <section className="glass-panel rounded-3xl p-6 md:p-8">
            <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Compass size={18} className="text-blue-500" />
              <span>Overview</span>
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
              {project.longDescription}
            </p>
            
            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/50 dark:border-blue-500/5">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-red-500 flex items-center gap-1.5">
                  <AlertCircle size={14} />
                  <span>Problem Statement</span>
                </h4>
                <p className="font-sans text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>The Solution</span>
                </h4>
                <p className="font-sans text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* Architecture Section */}
          <section className="glass-panel rounded-3xl p-6 md:p-8">
            <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <ListTodo size={18} className="text-blue-500" />
              <span>System Architecture Flow</span>
            </h3>
            
            <ArchDiagram architecture={project.architecture} projectId={project.id} />
          </section>

          {/* Project Gallery UI Previews */}
          <section className="glass-panel rounded-3xl p-6 md:p-8">
            <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Compass size={18} className="text-blue-500" />
              <span>Project Interface Previews</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  {renderCSSMockup(img.type, img.title)}
                  <div>
                    <h5 className="font-display font-bold text-sm text-slate-800 dark:text-white">
                      {img.title}
                    </h5>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                      {img.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interview Preparation Guide */}
          <section className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-md" />
            
            <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <HelpCircle size={18} className="text-purple-500" />
              <span>Interview Preparation Profile</span>
            </h3>

            <div className="space-y-6 font-sans">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-50/50 dark:bg-slate-900/30">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-blue-500 mb-1">
                  Why I built this project
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.interviewPrep.whyBuilt}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-50/50 dark:bg-slate-900/30">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-purple-500 mb-1">
                  Biggest technical challenge & resolution
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.interviewPrep.biggestChallenge}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-50/50 dark:bg-slate-900/30">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-emerald-500 mb-1">
                  What I learned from this building experience
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.interviewPrep.whatLearned}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-50/50 dark:bg-slate-900/30">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-indigo-500 mb-1">
                  Future improvements and expansions
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.interviewPrep.futureImprovements}
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Right Side Sidebar: Tech Stack Breakdown & Metrics */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Tech Stack Breakdown Table */}
          <section className="glass-panel rounded-3xl p-6 md:p-8">
            <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-6">
              Granular Tech Stack
            </h3>
            
            <div className="space-y-4 font-sans text-xs md:text-sm">
              {Object.entries(project.techStackBreakdown).map(([category, items]) => {
                if (!items || items.length === 0) return null;
                return (
                  <div key={category} className="pb-3.5 border-b border-slate-200/50 dark:border-blue-500/5 last:border-0 last:pb-0">
                    <span className="block font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-[10px] mb-1.5">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span 
                          key={item} 
                          className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-blue-500/10 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Outcomes & Metrics Card */}
          <section className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-4">
              Project Performance
            </h3>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-blue-500/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Contribution Role</span>
                <span className="font-sans text-xs md:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-semibold">
                  {project.contribution}
                </span>
              </div>

              <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-blue-500/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Challenges Faced</span>
                <span className="font-sans text-xs md:text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                  {project.challengesFaced}
                </span>
              </div>

              <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-blue-500/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Project Outcome</span>
                <span className="font-sans text-xs md:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-semibold">
                  {project.outcome}
                </span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
