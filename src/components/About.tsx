import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, Rocket } from 'lucide-react';

const STATS = [
  { label: 'Internships Completed', value: '2', desc: 'Web Dev & Salesforce CRM', icon: GraduationCap, color: 'text-blue-500 bg-blue-500/5' },
  { label: 'Engineering Projects', value: '3', desc: 'AI, Flutter & MERN Stack', icon: Code2, color: 'text-purple-500 bg-purple-500/5' },
  { label: 'Certifications Earned', value: '5+', desc: 'Cisco, NPTEL & Internshala', icon: Award, color: 'text-indigo-500 bg-indigo-500/5' },
  { label: 'Top Cohort Score', value: '98%', desc: 'Internshala Web Dev Top Performer', icon: Rocket, color: 'text-emerald-500 bg-emerald-500/5' }
];

export const About: React.FC = () => {
  return (
    <section id="about-section" className="py-24 relative bg-slate-900/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-slate-800 dark:text-white">
              Saurav Kumar — Software Developer & AI/ML Enthusiast
            </h3>
            
            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              I am currently pursuing my Bachelor of Computer Science and Engineering, specializing in Artificial Intelligence at Bihar Engineering University Patna. My academic path has given me a solid foundation in computer science core modules, which I have applied in industry-standard environments.
            </p>
            
            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              My core strengths lie in full-stack web application development, cross-platform mobile engineering, and deep learning implementations. Having completed two specialized internships, I understand how to bridge high-performing neural network modules with production-ready web servers and mobile applications.
            </p>

            <p className="font-sans text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              My career goal is to engineer intelligent, scalable SaaS platforms that solve real-world problems. I focus on clean code structure, micro-interaction transitions, and performance optimization to build professional-grade applications.
            </p>

            {/* Strengths List */}
            <div className="pt-4">
              <h4 className="font-display font-semibold text-slate-800 dark:text-white mb-4">Core Developer Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">✓</div>
                  <span className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">MERN Full-Stack Development</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">✓</div>
                  <span className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">Convolutional Neural Networks (CNN)</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">✓</div>
                  <span className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">Cross-Platform Flutter/Dart</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">✓</div>
                  <span className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">CRM Automation & APEX Coding</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {STATS.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Backdrop glowing sphere */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-md" />
                  
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color} border border-blue-500/10`}>
                    <StatIcon size={20} />
                  </div>
                  
                  <span className="block font-display font-extrabold text-2xl md:text-3xl text-slate-800 dark:text-white mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </span>
                  
                  <h4 className="font-display font-bold text-xs text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                    {stat.label}
                  </h4>
                  
                  <p className="font-sans text-[11px] text-slate-500 leading-normal">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
