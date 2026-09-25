import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Play, CheckCircle2, RefreshCw, GitBranch, Database, ShieldCheck } from 'lucide-react';

export const AgentGraphVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'graph' | 'terminal'>('graph');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Auto-cycle simulation
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev >= 4 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const steps = [
    {
      id: 1,
      title: 'Orchestrator',
      role: 'Planner Agent',
      desc: 'Decomposes spec into Directed Acyclic Graph (DAG)',
      status: 'active',
      icon: Cpu,
    },
    {
      id: 2,
      title: 'Vector RAG',
      role: 'Qdrant / AST',
      desc: 'Retrieves semantic code context & repo symbols',
      status: 'retrieving',
      icon: Database,
    },
    {
      id: 3,
      title: 'Docker Sandbox',
      role: 'Tool Execution',
      desc: 'Runs bash, linters & automated unit test suites',
      status: 'executing',
      icon: Terminal,
    },
    {
      id: 4,
      title: 'Verification',
      role: 'Self-Healing',
      desc: 'Zero-regression validation & atomic git commit',
      status: 'verified',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full h-full min-h-[340px] flex flex-col justify-between rounded-2xl bg-[#090d16]/90 border border-white/10 p-5 backdrop-blur-xl select-none overflow-hidden relative">
      
      {/* Visualizer Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-slate-300 font-semibold tracking-wider ml-2">
            ForgeAI_Engine://telemetry
          </span>
        </div>

        {/* Tab Selector & Run Button */}
        <div className="flex items-center gap-2">
          <div className="flex bg-black/40 p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'graph' ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40' : 'text-slate-400 hover:text-white'}`}
            >
              DAG_GRAPH
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'terminal' ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40' : 'text-slate-400 hover:text-white'}`}
            >
              LOGS
            </button>
          </div>

          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="p-1.5 rounded-md border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-colors"
            title={isSimulating ? 'Pause telemetry' : 'Resume telemetry'}
          >
            <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Visualizer Content */}
      <div className="flex-1 flex flex-col justify-center">
        {activeTab === 'graph' ? (
          <div className="relative py-4">
            {/* Connecting Flow Line */}
            <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-slate-800 -translate-y-1/2 z-0 hidden sm:block">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400"
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep / 4) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>

            {/* 4 Agent Pipeline Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
              {steps.map((step) => {
                const IconComponent = step.icon;
                const isCurrent = activeStep === step.id;
                const isPassed = activeStep > step.id;

                return (
                  <motion.div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: 1.04 }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? 'border-cyan-400/80 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                        : isPassed
                        ? 'border-emerald-500/40 bg-emerald-950/20'
                        : 'border-white/10 bg-slate-900/40 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-1.5 rounded-lg ${isCurrent ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/5 text-slate-400'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9px] text-slate-500">
                        0{step.id}
                      </span>
                    </div>

                    <div>
                      <div className="font-sans-clean font-bold text-xs text-white">
                        {step.title}
                      </div>
                      <div className="font-mono text-[10px] text-cyan-400/90 font-medium">
                        {step.role}
                      </div>
                      <div className="font-sans-clean text-[9px] text-slate-400 mt-1 leading-snug">
                        {step.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Live Terminal Log Stream */
          <div className="bg-black/70 rounded-xl p-4 font-mono text-[11px] text-slate-300 h-[210px] overflow-y-auto border border-white/5 space-y-2">
            <div className="text-slate-500">$ forge run --task "implement-auth-state-sync" --model gemini-1.5-pro</div>
            <div className="text-cyan-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              [ORCHESTRATOR] Generated DAG: 3 subtasks (Parser, DB Schema, Route Guard)
            </div>
            <div className="text-purple-300">
              [VECTOR_RAG] Indexed 48 repo symbols in 84ms via Qdrant cosine similarity
            </div>
            <div className="text-amber-300">
              [DOCKER] Spawning isolated sandbox container (id: f9a21e4)
            </div>
            <div className="text-slate-400">
              [DOCKER] pytest tests/test_auth_guard.py
            </div>
            <div className="text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              [VERIFIER] 14/14 tests passed with 0 regressions. Ready for atomic PR.
            </div>
          </div>
        )}
      </div>

      {/* Visualizer Bottom Metrics Bar */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          AUTONOMOUS LOOP: READY
        </span>
        <span className="text-cyan-300">LATENCY: 114ms</span>
        <span className="hidden sm:inline text-slate-500">ACCURACY: 84% 1st RUN</span>
      </div>
    </div>
  );
};

export default AgentGraphVisualizer;
