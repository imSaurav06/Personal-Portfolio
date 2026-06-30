import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ArrowRight } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  institution: string;
  duration: string;
  details: string[];
  type: 'experience' | 'education';
  extraLabel?: string;
  technologies?: string[];
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  institution,
  duration,
  details,
  type,
  extraLabel,
  technologies,
  index
}) => {
  const Icon = type === 'experience' ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-10 pb-12 last:pb-2 group"
    >
      {/* Visual Timeline Line connector */}
      <div className="absolute left-[13px] md:left-[17px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 group-last:bottom-4" />

      {/* Visual Timeline Bubble node */}
      <div className="absolute left-0 top-1.5 w-7 h-7 md:w-9 md:h-9 rounded-xl bg-white dark:bg-[#0d1423] border-2 border-blue-500/30 dark:border-blue-500/20 flex items-center justify-center text-blue-500 shadow-md group-hover:border-purple-500 group-hover:text-purple-500 transition-all duration-300 z-10">
        <Icon size={14} className="md:w-4 md:h-4" />
      </div>

      {/* Content Card */}
      <div className="glass-panel glass-card-hover rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-tr-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-sans font-bold tracking-widest text-blue-500 dark:text-blue-400 uppercase">
              {institution}
            </span>
            <h4 className="font-display font-bold text-lg md:text-xl text-slate-800 dark:text-white mt-1">
              {title}
            </h4>
            <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-blue-500/10 text-slate-600 dark:text-slate-400">
              <Calendar size={12} />
              {duration}
            </span>
            {extraLabel && (
              <span className="inline-flex items-center text-xs font-bold text-purple-600 dark:text-purple-400 font-sans">
                {extraLabel}
              </span>
            )}
          </div>
        </div>

        {/* Detailed Bullet Points */}
        <ul className="space-y-2 md:space-y-3">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
              <ArrowRight size={14} className="text-blue-500/60 mt-1 shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Dynamic Technologies Tag Badges */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-200/50 dark:border-blue-500/5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20 text-blue-600 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default TimelineItem;
