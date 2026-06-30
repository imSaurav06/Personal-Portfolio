import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ShieldAlert, Cpu, Database, Server, Smartphone, Sparkles, Truck, Leaf } from 'lucide-react';
import { ProjectArchitecture } from '../types';

interface ArchDiagramProps {
  architecture: ProjectArchitecture;
  projectId: string;
}

export const ArchDiagram: React.FC<ArchDiagramProps> = ({ architecture, projectId }) => {
  // Mapping suitable icons to nodes based on their content
  const getNodeIcon = (name: string) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('client') || lowercaseName.includes('frontend') || lowercaseName.includes('app')) {
      if (projectId === 'package-delivery-app') return Smartphone;
      return Cpu;
    }
    if (lowercaseName.includes('auth')) return ShieldAlert;
    if (lowercaseName.includes('db') || lowercaseName.includes('database') || lowercaseName.includes('data')) return Database;
    if (lowercaseName.includes('api') || lowercaseName.includes('server')) return Server;
    if (lowercaseName.includes('service') || lowercaseName.includes('layer') || lowercaseName.includes('engine')) {
      if (projectId === 'ai-resume-builder') return Sparkles;
      if (projectId === 'package-delivery-app') return Truck;
      if (projectId === 'potato-plant-disease-detection') return Leaf;
    }
    return Cpu;
  };

  return (
    <div className="w-full">
      {/* Diagram container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2 xl:gap-4 p-4 md:p-6 bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-blue-500/5 rounded-2xl">
        {architecture.nodes.map((node, index) => {
          const NodeIcon = getNodeIcon(node.name);
          const isLast = index === architecture.nodes.length - 1;

          return (
            <React.Fragment key={index}>
              {/* Architecture Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full lg:w-48 xl:w-52 p-5 rounded-xl border border-slate-200 dark:border-blue-500/10 bg-white dark:bg-slate-900/60 shadow-sm relative group hover:border-blue-500/30 dark:hover:border-purple-500/30 hover:shadow-md transition-all duration-300"
              >
                {/* Node Top Color Accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-80" />
                
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 dark:border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:text-purple-400 group-hover:border-purple-500/20 transition-colors duration-300">
                    <NodeIcon size={16} />
                  </div>
                  <h5 className="font-display font-bold text-sm text-slate-800 dark:text-white leading-tight">
                    {node.name}
                  </h5>
                </div>
                
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {node.details}
                </p>
              </motion.div>

              {/* Responsive flow indicator arrows */}
              {!isLast && (
                <div className="flex items-center justify-center py-2 lg:py-0 text-slate-400 dark:text-slate-600">
                  {/* Arrow for Desktop */}
                  <div className="hidden lg:block">
                    <ArrowRight size={18} className="animate-pulse" />
                  </div>
                  {/* Arrow for Mobile */}
                  <div className="block lg:hidden">
                    <ArrowDown size={18} className="animate-pulse" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Topology Description */}
      <div className="mt-4 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-500/5 border border-blue-500/10 text-xs md:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
        <strong className="text-blue-600 dark:text-blue-400 font-semibold">System Interaction Flow:</strong> {architecture.description}
      </div>
    </div>
  );
};
export default ArchDiagram;
