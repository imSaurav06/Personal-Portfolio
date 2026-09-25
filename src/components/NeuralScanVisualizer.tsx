import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Eye, Layers, ShieldCheck, Zap } from 'lucide-react';

export const NeuralScanVisualizer: React.FC = () => {
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [sliceType, setSliceType] = useState<'axial' | 'coronal' | 'sagittal'>('axial');

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
            NeuroVision://cnn-inference-v2
          </span>
        </div>

        {/* Heatmap Toggle & Slice Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHeatmap(!showHeatmap)}
            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors flex items-center gap-1.5 ${
              showHeatmap 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' 
                : 'bg-white/5 text-slate-400 border border-white/10'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>{showHeatmap ? 'GRAD-CAM ON' : 'RAW SCAN'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Scan Canvas + Probabilities */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        
        {/* Synthetic MRI Simulation Canvas */}
        <div className="relative aspect-square max-h-[200px] mx-auto w-full rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center group">
          {/* Simulated Brain Outline */}
          <div className="w-32 h-36 rounded-full border-2 border-slate-700/60 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center">
            
            {/* Brain convolutions texture */}
            <div className="absolute inset-2 border border-slate-800 rounded-full opacity-50" />
            <div className="absolute inset-5 border border-slate-800/80 rounded-full opacity-40" />

            {/* Grad-CAM Saliency Heatmap Overlay */}
            {showHeatmap && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-8 right-6 w-12 h-12 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(239, 68, 68, 0.85) 0%, rgba(245, 158, 11, 0.6) 45%, rgba(59, 130, 246, 0.2) 75%, transparent 100%)',
                  filter: 'blur(4px)',
                }}
              />
            )}

            {/* Tumor coordinate highlight bounding box */}
            {showHeatmap && (
              <div className="absolute top-6 right-5 w-14 h-14 border border-rose-500/90 rounded-md pointer-events-none">
                <span className="absolute -top-3 left-0 bg-rose-600 text-white font-mono text-[7px] px-1 rounded">
                  GLIOMA (0.97)
                </span>
              </div>
            )}
          </div>

          {/* Interactive Scanning Laser Line */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee] animate-scanline pointer-events-none" />

          {/* Slice Tag */}
          <div className="absolute bottom-2 left-2 font-mono text-[8px] text-slate-400 bg-black/60 px-1.5 py-0.5 rounded border border-white/5">
            SLICE: T1-CONTRAST ({sliceType.toUpperCase()})
          </div>
        </div>

        {/* Prediction Probabilities & Metrics */}
        <div className="flex flex-col justify-center space-y-3">
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Diagnosis Probabilities</span>
            <span className="text-emerald-400 font-bold">97.4% CONF</span>
          </div>

          {/* Probability Bars */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[11px] font-sans-clean font-semibold text-white mb-1">
                <span>Glioma Subtype</span>
                <span className="text-cyan-400 font-mono">97.4%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '97.4%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-sans-clean text-slate-400 mb-1">
                <span>Pituitary Tumor</span>
                <span className="text-slate-400 font-mono">1.8%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-[1.8%] bg-slate-600 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-sans-clean text-slate-400 mb-1">
                <span>Meningioma</span>
                <span className="text-slate-400 font-mono">0.8%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-[0.8%] bg-slate-600 rounded-full" />
              </div>
            </div>
          </div>

          {/* Slice Selector Buttons */}
          <div className="pt-2 flex gap-1.5">
            {(['axial', 'coronal', 'sagittal'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSliceType(type)}
                className={`flex-1 py-1 rounded text-[9px] font-mono uppercase transition-colors ${
                  sliceType === type 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                    : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          GRAD-CAM VERIFIED
        </span>
        <span className="text-cyan-300">INFERENCE: 118ms</span>
        <span className="text-slate-500">TENSORFLOW 2.15</span>
      </div>
    </div>
  );
};

export default NeuralScanVisualizer;
