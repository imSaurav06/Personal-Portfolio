import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Truck, Leaf, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Truck,
  Leaf
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ProjectIcon = ICON_MAP[project.iconName] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel glass-card-hover rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group border border-slate-200 dark:border-blue-500/15"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 transition-all duration-500" />
      
      {/* Top Section: Icon and Tagline */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-blue-500/15 dark:border-blue-500/5 flex items-center justify-center text-blue-500 group-hover:text-purple-400 group-hover:scale-105 transition-all duration-300">
          <ProjectIcon size={22} />
        </div>
        
        {/* Visual action anchor */}
        <Link 
          to={`/project/${project.id}`}
          className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-1"
          aria-label={`View details of ${project.name}`}
        >
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Info Section */}
      <div className="flex-grow">
        <span className="text-[10px] font-mono font-bold tracking-widest text-blue-500 dark:text-blue-400 uppercase">
          {project.tagline}
        </span>
        <h3 className="font-display font-extrabold text-xl text-slate-800 dark:text-white mt-1 mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="font-sans text-xs md:text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-blue-500/10 text-slate-600 dark:text-slate-400"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-blue-500/10 text-slate-500">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Read More Button */}
      <div className="pt-4 border-t border-slate-200/50 dark:border-blue-500/5 mt-auto">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-blue-600 dark:text-blue-400 group-hover:text-purple-500 transition-colors duration-300"
        >
          <span>Explore Architecture & Details</span>
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
