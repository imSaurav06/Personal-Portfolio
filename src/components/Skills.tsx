import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Monitor, Server, Brain, Database, Cloud, GitBranch, Cpu, Key, Smartphone, Award } from 'lucide-react';
import { skillsData } from '../data/skills';

// Map icon names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Flame,
  Monitor,
  Server,
  Brain,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Key,
  Smartphone,
  Award
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillsData[0].id);

  const activeCategory = skillsData.find((cat) => cat.id === activeTab) || skillsData[0];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages': return Flame;
      case 'frontend-mobile': return Monitor;
      case 'backend-api': return Server;
      case 'machine-learning': return Brain;
      case 'databases': return Database;
      case 'cloud-tools': return Cloud;
      default: return Cpu;
    }
  };

  return (
    <section id="skills-section" className="py-24 relative overflow-hidden bg-slate-900/5 dark:bg-[#070b14]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-200/50 dark:border-blue-500/10 pb-6">
          {skillsData.map((category) => {
            const TabIcon = getCategoryIcon(category.id);
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <TabIcon size={16} />
                <span>{category.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-xl border border-blue-500/10 dark:border-blue-500/20 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {activeCategory.skills.map((skill, index) => {
                // Determine icon representation
                const SkillIcon = ICON_MAP[skill.iconName || 'Award'] || Award;

                return (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/35 transition-all duration-300"
                  >
                    {/* Tiny background glow circle */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-md" />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:text-purple-400 transition-colors duration-300">
                          <SkillIcon size={16} />
                        </div>
                        <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Skills;
