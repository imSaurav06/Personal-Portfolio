import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Brain, Server, Database, Layout, Sparkles, Network, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SkillNode {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  usedIn: string;
  level: string;
  connections: string[];
}

export const InteractiveSkillsMap: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ai-agents');
  const [selectedNode, setSelectedNode] = useState<string>('langgraph');

  const nodes: Record<string, SkillNode> = {
    langgraph: {
      id: 'langgraph',
      name: 'Multi-Agent AI Architecture',
      category: 'ai-agents',
      role: 'Stateful Agent Orchestration & Verification',
      description: 'Engineered multi-agent AI architecture with planning, code generation, verification, and automated self-repair pipelines using Clean Architecture.',
      usedIn: 'AI Website Builder (Multi-Agent Platform)',
      level: 'Production Grade',
      connections: ['rag', 'fastapi', 'docker'],
    },
    rag: {
      id: 'rag',
      name: 'Hybrid RAG & Vector Embeddings',
      category: 'ai-agents',
      role: 'Semantic Context & ProjectSpec Engine',
      description: 'Implemented semantic retrieval, embeddings evaluation, and ProjectSpec engine structuring natural-language prompts into development plans.',
      usedIn: 'AI Website Builder, Vector RAG Pipelines',
      level: 'Advanced',
      connections: ['langgraph', 'gemini-api', 'fastapi'],
    },
    'gemini-api': {
      id: 'gemini-api',
      name: 'LLM APIs & AI Provider Gateway',
      category: 'ai-agents',
      role: 'Adaptive Provider Gateway & Resilience',
      description: 'Integrated Claude, OpenAI, and Gemini APIs with an AI Provider Gateway (Z.ai primary, OpenRouter fallback) featuring retry policies, circuit breakers, and prompt evaluation.',
      usedIn: 'AI Website Builder, Software Development at Pashupatastra',
      level: 'Expert',
      connections: ['rag', 'fastapi', 'node-express'],
    },
    tensorflow: {
      id: 'tensorflow',
      name: 'TensorFlow & CNN Architectures',
      category: 'deep-learning',
      role: 'Medical Imaging & CNN Classification',
      description: 'Trained custom Convolutional Neural Networks (CNN) with Scikit-learn and NumPy to classify MRI brain tumors (Glioma, Meningioma, Pituitary) with high confidence scoring.',
      usedIn: 'Brain Tumor Detection & Classification',
      level: 'Advanced',
      connections: ['opencv', 'fastapi'],
    },
    opencv: {
      id: 'opencv',
      name: 'OpenCV Computer Vision Pipeline',
      category: 'deep-learning',
      role: 'Image Preprocessing & Edge Detection',
      description: 'Constructed automated image preprocessing filters, histogram equalizations, skull-stripping, and contour bounding boxes for raw medical scans.',
      usedIn: 'Brain Tumor Detection, Computer Vision Pipelines',
      level: 'Proficient',
      connections: ['tensorflow', 'fastapi'],
    },
    fastapi: {
      id: 'fastapi',
      name: 'Python & FastAPI / REST Services',
      category: 'backend',
      role: 'High-Throughput APIs & Automation',
      description: 'Built and tested Python-based applications, APIs, automation scripts, and RESTful inference endpoints with Pydantic validation and clean code practices.',
      usedIn: 'Pashupatastra Solutions, Brain Tumor Detection API',
      level: 'Expert',
      connections: ['docker', 'langgraph', 'tensorflow'],
    },
    'node-express': {
      id: 'node-express',
      name: 'Node.js & Express.js Backends',
      category: 'backend',
      role: 'Production REST APIs & JWT Auth',
      description: 'Engineered server-side logic, secure JWT authentication middleware, workout CRUD operations, and clean architecture schemas across full-stack applications.',
      usedIn: 'FitTrack MERN, Elevate Labs, AI Website Builder',
      level: 'Expert',
      connections: ['mongodb', 'react'],
    },
    mongodb: {
      id: 'mongodb',
      name: 'MongoDB Atlas & SQL Databases',
      category: 'backend',
      role: 'Document Schemas & Database Analytics',
      description: 'Structured optimized NoSQL collections with indexes in MongoDB Atlas for date-wise history and analytics, along with MySQL and PostgreSQL query design.',
      usedIn: 'FitTrack, Elevate Labs Web Intern, AI Website Builder',
      level: 'Advanced',
      connections: ['node-express', 'react'],
    },
    docker: {
      id: 'docker',
      name: 'Docker & DevOps Deployment',
      category: 'backend',
      role: 'Containerization & CI/CD Pipelines',
      description: 'Docker basics, containerized development environments, Git/GitHub version control, AWS exposure, and automated deployment pipelines.',
      usedIn: 'Pashupatastra Solutions, Elevate Labs Projects',
      level: 'Proficient',
      connections: ['fastapi', 'node-express'],
    },
    react: {
      id: 'react',
      name: 'React.js & Redux Toolkit',
      category: 'frontend',
      role: 'Component Architecture & State Flow',
      description: 'Engineered responsive single-page applications with Redux Toolkit state slices, normalized caching, interactive charts, and date-wise history dashboards.',
      usedIn: 'FitTrack MERN, Elevate Labs, AI Website Builder',
      level: 'Expert',
      connections: ['node-express', 'tailwind'],
    },
    tailwind: {
      id: 'tailwind',
      name: 'Tailwind CSS & Material UI',
      category: 'frontend',
      role: 'Modern Editorial Aesthetics & UI Design',
      description: 'Designed production-grade responsive user interfaces with Tailwind CSS, Material UI, Bootstrap, and smooth Framer Motion micro-animations.',
      usedIn: 'AI Website Builder, FitTrack, Personal Portfolio',
      level: 'Expert',
      connections: ['react', 'nextjs'],
    },
    nextjs: {
      id: 'nextjs',
      name: 'Next.js & TypeScript',
      category: 'frontend',
      role: 'Full-Stack Web App Engineering',
      description: 'Built production-ready web platforms with Next.js, TypeScript, and React that convert natural-language prompts into deployable full-stack applications.',
      usedIn: 'AI Website Builder (Multi-Agent Platform)',
      level: 'Expert',
      connections: ['react', 'node-express'],
    },
  };

  const categories = [
    { id: 'ai-agents', label: 'GEN AI & AGENTS', icon: Cpu },
    { id: 'deep-learning', label: 'COMPUTER VISION', icon: Brain },
    { id: 'backend', label: 'BACKEND & CLOUD', icon: Server },
    { id: 'frontend', label: 'FRONTEND & UX', icon: Layout },
  ];

  const activeNodeData = nodes[selectedNode] || nodes.langgraph;

  return (
    <section 
      id="skills-section"
      className="relative min-h-screen w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#07090e] select-none"
    >
      {/* Background Volumetric Glow */}
      <div 
        className="absolute top-1/3 left-1/4 w-[50vw] h-[50vh] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 70%)'
        }}
      />
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-950/20 backdrop-blur-md mb-4">
              <Network className="w-3.5 h-3.5 text-purple-300" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-purple-200">
                03 — Technical Architecture
              </span>
            </div>
            
            <h2 className="font-sans-clean font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Systems Topology & Skills Map
            </h2>
            <p className="font-sans-clean text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              An interactive diagram of technologies, frameworks, and architectural layers engineered across production systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 transition-all duration-300 border ${
                    isActive
                      ? 'bg-purple-500/20 text-purple-200 border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Interactive Topology Graph + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Node Cloud / Graph Layout (8 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {Object.values(nodes).map((node) => {
              const isSelected = selectedNode === node.id;
              const isCategoryMatch = node.category === activeCategory;

              return (
                <motion.div
                  key={node.id}
                  onClick={() => {
                    setSelectedNode(node.id);
                    setActiveCategory(node.category);
                  }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? 'bg-gradient-to-br from-purple-950/60 to-black border-cyan-400/80 shadow-[0_0_25px_rgba(34,211,238,0.25)]'
                      : isCategoryMatch
                      ? 'bg-slate-900/60 border-purple-500/40 text-slate-200'
                      : 'bg-slate-950/40 border-white/5 text-slate-500 opacity-60 hover:opacity-100 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                      {node.role}
                    </span>
                    <span className="font-mono text-[9px] text-slate-400">
                      {node.level}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="font-sans-clean font-bold text-sm sm:text-base text-white">
                      {node.name}
                    </h4>
                    <p className="font-sans-clean text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {node.usedIn}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Node Deep Dive Inspector Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNodeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/20 bg-black/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6"
              >
                {/* Node Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                      // NODE_SPECIFICATION
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {activeNodeData.level}
                    </span>
                  </div>

                  <h3 className="font-sans-clean font-extrabold text-2xl text-white">
                    {activeNodeData.name}
                  </h3>
                  <p className="font-mono text-xs text-purple-300 mt-1">
                    Role: {activeNodeData.role}
                  </p>
                </div>

                {/* Description */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <h5 className="font-mono text-[10px] uppercase text-slate-400 mb-1.5">
                    Engineering Implementation
                  </h5>
                  <p className="font-sans-clean text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {activeNodeData.description}
                  </p>
                </div>

                {/* Where it is used */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                    Proven In Production Workflows
                  </span>
                  <div className="font-sans-clean font-semibold text-sm text-cyan-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{activeNodeData.usedIn}</span>
                  </div>
                </div>

                {/* Pipeline Interconnects */}
                <div className="pt-4 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-2">
                    Connected Architecture Nodes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeNodeData.connections.map((connId) => {
                      const connNode = nodes[connId];
                      if (!connNode) return null;
                      return (
                        <button
                          key={connId}
                          onClick={() => {
                            setSelectedNode(connId);
                            setActiveCategory(connNode.category);
                          }}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                        >
                          <span>{connNode.name.split(' ')[0]}</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillsMap;
