import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldAlert, TrendingUp, BadgeCheck, BrainCircuit, Calendar, Award as AwardIcon } from 'lucide-react';

// Import custom components
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TimelineItem from '../components/TimelineItem';
import ProjectCard from '../components/ProjectCard';
import GithubStats from '../components/GithubStats';
import ContactForm from '../components/ContactForm';

// Import data layers
import { projects } from '../data/projects';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { certificationsData, achievementsData } from '../data/certifications';

// Maps achievement icons
const ACHIEVEMENT_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldAlert,
  TrendingUp,
  BadgeCheck,
  BrainCircuit
};

export const Home: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState<'all' | 'web' | 'mobile' | 'ml'>('all');

  const filteredProjects = projects.filter((project) => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'web') return project.technologies.some(t => ['React.js', 'Express.js', 'MongoDB', 'Flask', 'FastAPI'].includes(t));
    if (projectFilter === 'mobile') return project.technologies.some(t => ['Flutter', 'React Native'].includes(t));
    if (projectFilter === 'ml') return project.technologies.some(t => ['TensorFlow', 'OpenCV', 'CNN / Deep Learning', 'Gemini AI API'].includes(t));
    return true;
  });

  return (
    <div className="relative">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me */}
      <About />

      {/* 3. Skills Matrix */}
      <Skills />

      {/* 4. Experience Timeline */}
      <section id="experience-section" className="py-24 relative overflow-hidden bg-slate-900/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white">
              Professional Journey
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative mt-8">
            {experienceData.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                title={exp.role}
                subtitle={exp.company}
                institution="Work Experience"
                duration={exp.duration}
                details={exp.responsibilities}
                type="experience"
                technologies={exp.technologies}
                extraLabel={exp.achievements?.[0]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Projects Showcase */}
      <section id="projects-section" className="py-24 relative bg-slate-900/5 dark:bg-[#070b14]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white">
              Featured Work
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
            <p className="font-sans text-xs md:text-sm text-slate-500 mt-4 max-w-xl mx-auto">
              A gallery of production-ready systems, highlighting AI pipelines, full-stack websites, and mobile architectures.
            </p>
          </div>

          {/* Project Filtering Controls */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Full-Stack' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'ml', label: 'AI & Machine Learning' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setProjectFilter(filter.id as typeof projectFilter)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold font-sans transition-all duration-300 cursor-pointer ${
                  projectFilter === filter.id
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 dark:border-blue-500/20'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-blue-500/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[380px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} index={idx} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. Education Timeline */}
      <section id="education-section" className="py-24 relative bg-slate-900/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white">
              Education & Background
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative mt-8">
            {educationData.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                subtitle={`${edu.college} (${edu.university})`}
                institution="Academic Qualifications"
                duration={edu.duration}
                details={edu.coursework ? [`Relevant Coursework: ${edu.coursework.join(', ')}`] : []}
                type="education"
                extraLabel={edu.score}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Certifications & Achievements Sections */}
      <section id="certifications-section" className="py-24 relative bg-slate-900/5 dark:bg-[#070b14]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Certifications Block */}
            <div className="lg:col-span-7">
              <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white mb-8 text-center lg:text-left">
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certificationsData.map((cert) => (
                  <div 
                    key={cert.id}
                    className="glass-panel rounded-2xl p-5 border border-slate-200 dark:border-blue-500/5 hover:border-blue-500/20 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">
                      <AwardIcon size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">{cert.issuer}</span>
                      <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white mt-0.5">{cert.title}</h4>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{cert.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Block */}
            <div className="lg:col-span-5">
              <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white mb-8 text-center lg:text-left">
                Key Accomplishments
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {achievementsData.map((ach) => {
                  const AchIcon = ACHIEVEMENT_ICONS[ach.iconName] || Award;
                  return (
                    <div 
                      key={ach.id}
                      className="glass-panel rounded-2xl p-5 border border-slate-200 dark:border-blue-500/5 hover:border-purple-500/20 transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 dark:border-purple-500/20 flex items-center justify-center text-purple-500 shrink-0 mt-0.5">
                        <AchIcon size={18} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white">{ach.title}</h4>
                        <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Dynamic GitHub Statistics (Conditional Loader) */}
      <section className="py-12 relative bg-slate-900/5 dark:bg-[#070b14]/5">
        <div className="max-w-7xl mx-auto px-6">
          <GithubStats />
        </div>
      </section>

      {/* 9. Contact Section */}
      <ContactForm />

    </div>
  );
};
export default Home;
