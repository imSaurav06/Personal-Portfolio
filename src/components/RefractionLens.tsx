import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

interface RefractionLensProps {
  isHeroActive?: boolean;
}

export const RefractionLens: React.FC<RefractionLensProps> = () => {
  const [hudMode, setHudMode] = useState<number>(0);
  const [isOverClickable, setIsOverClickable] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Smooth spring physics for fluid cursor tracking
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth * 0.45 : 400);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight * 0.42 : 300);

  const springConfig = { damping: 26, stiffness: 280, mass: 0.45 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const idleTimerRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isUserMovingRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      isUserMovingRef.current = true;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if mouse is hovering over ANY clickable element
      const target = e.target as HTMLElement | null;
      const clickable = !!target?.closest(
        'button, a, input, textarea, select, [role="button"], [data-clickable="true"], .cursor-pointer, [onclick]'
      );
      setIsOverClickable(clickable);

      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        isUserMovingRef.current = false;
      }, 3000);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Subtle drift when user is idle
    let angle = 0;
    const animateIdleDrift = () => {
      if (!isUserMovingRef.current && !isOverClickable) {
        angle += 0.01;
        const centerX = window.innerWidth * 0.42;
        const centerY = window.innerHeight * 0.42;
        const radiusX = window.innerWidth * 0.1;
        const radiusY = window.innerHeight * 0.07;

        mouseX.set(centerX + Math.cos(angle) * radiusX);
        mouseY.set(centerY + Math.sin(angle * 1.5) * radiusY);
      }
      animationFrameRef.current = requestAnimationFrame(animateIdleDrift);
    };

    animationFrameRef.current = requestAnimationFrame(animateIdleDrift);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [mouseX, mouseY, isOverClickable]);

  const hudModes = [
    { label: 'ORCHESTRATOR', info: 'DAG: 04 NODES', metric: 'LATENT: 1536d' },
    { label: 'NEURAL TENSOR', info: 'CNN: 97.4%', metric: 'GRAD-CAM: ON' },
    { label: 'AGENT TOOL', info: 'RAG: 0.12ms', metric: 'SANDBOX: OK' },
  ];

  const currentHud = hudModes[hudMode % hudModes.length];

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      /* Crucial: pointer-events-none ensures it NEVER blocks any click or hover underneath! */
      className="fixed pointer-events-none z-50 select-none hidden md:block"
    >
      {/* Outer Animated Container with fluid transition */}
      <motion.div
        animate={{
          scale: isMouseDown ? 0.22 : isOverClickable ? 0.28 : 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 24,
          mass: 0.5,
        }}
        className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full flex items-center justify-center"
      >
        {/* Chromatic aberration simulated halo */}
        <motion.div 
          animate={{
            opacity: isOverClickable ? 0.9 : 0.65,
            filter: isOverClickable ? 'blur(1px)' : 'blur(2px)',
          }}
          transition={{ duration: 0.25 }}
          className="absolute -inset-1 rounded-full"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, rgba(34, 211, 238, 0.6) 0deg, rgba(59, 130, 246, 0.5) 90deg, rgba(245, 158, 11, 0.5) 180deg, rgba(168, 85, 247, 0.5) 270deg, rgba(34, 211, 238, 0.6) 360deg)'
          }}
        />

        {/* High-Index Glass Disc */}
        <div className="relative w-full h-full rounded-full border border-white/50 shadow-[0_0_50px_rgba(37,99,235,0.35),inset_0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-[5px] backdrop-brightness-110 backdrop-contrast-125 overflow-hidden flex items-center justify-center">
          
          {/* Subtle Surface Reflection */}
          <div className="absolute top-1 left-4 right-4 h-16 rounded-t-full bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />

          {/* Central Precision Reticle & Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Crosshair lines - shrink or fade smoothly when over clickable */}
            <motion.div 
              animate={{ 
                scale: isOverClickable ? 0.5 : 1,
                opacity: isOverClickable ? 0.2 : 0.8,
              }}
              className="w-12 h-[1px] bg-cyan-400 absolute"
            />
            <motion.div 
              animate={{ 
                scale: isOverClickable ? 0.5 : 1,
                opacity: isOverClickable ? 0.2 : 0.8,
              }}
              className="h-12 w-[1px] bg-cyan-400 absolute"
            />

            {/* Center targeting dot */}
            <motion.div 
              animate={{
                scale: isOverClickable ? 2.2 : 1,
                backgroundColor: isOverClickable ? '#22d3ee' : '#38bdf8',
                boxShadow: isOverClickable ? '0 0 15px #22d3ee' : '0 0 8px #38bdf8',
              }}
              transition={{ duration: 0.2 }}
              className="w-2 h-2 rounded-full absolute"
            />

            {/* Concentric Ping Ring */}
            <motion.div 
              animate={{
                scale: isOverClickable ? [1, 1.8, 1] : 1,
                opacity: isOverClickable ? [0.8, 0, 0.8] : 0,
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-8 h-8 rounded-full border border-cyan-400 absolute"
            />
          </div>

          {/* Corner Framing Brackets - hide smoothly when shrunk */}
          <motion.div 
            animate={{ opacity: isOverClickable ? 0 : 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-6 left-6 text-white font-mono text-[8px] leading-none">┌</div>
            <div className="absolute top-6 right-6 text-white font-mono text-[8px] leading-none">┐</div>
            <div className="absolute bottom-6 left-6 text-white font-mono text-[8px] leading-none">└</div>
            <div className="absolute bottom-6 right-6 text-white font-mono text-[8px] leading-none">┘</div>
          </motion.div>

          {/* Internal HUD Telemetry Data - fades out completely when over clickable object */}
          <motion.div 
            animate={{ 
              opacity: isOverClickable ? 0 : 1,
              scale: isOverClickable ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col justify-between p-7 text-[9px] font-mono tracking-wider pointer-events-none text-cyan-200/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <div className="flex justify-between items-center">
              <span className="bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded text-[8px] border border-cyan-400/30">
                {currentHud.label}
              </span>
              <span className="text-[7px] text-amber-300 font-semibold tracking-widest animate-pulse">
                [AI ACTIVE]
              </span>
            </div>

            <div className="flex justify-between items-center text-[8px] text-slate-300/80">
              <span>{currentHud.info}</span>
              <span className="text-cyan-400 font-mono">{currentHud.metric}</span>
            </div>
          </motion.div>

          {/* Compact Click Hint */}
          <motion.div 
            animate={{ opacity: isOverClickable ? 0 : 0.6 }}
            className="absolute bottom-2 text-[7px] font-mono text-slate-400 tracking-tight pointer-events-none"
          >
            AUTONOMOUS LENS
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RefractionLens;
