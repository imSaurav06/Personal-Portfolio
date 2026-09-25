import React, { useState, useRef, useEffect } from 'react';
import { CinematicHero } from '../components/CinematicHero';
import { RefractionLens } from '../components/RefractionLens';
import { ColorfulProjectShowcase } from '../components/ColorfulProjectShowcase';
import { InteractiveSkillsMap } from '../components/InteractiveSkillsMap';
import { EditorialAbout } from '../components/EditorialAbout';
import { EditorialTimeline } from '../components/EditorialTimeline';
import { EditorialContact } from '../components/EditorialContact';
import { ProjectModal } from '../components/ProjectModal';
import { projects } from '../data/projects';
import { Project } from '../types';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHeroActive, setIsHeroActive] = useState<boolean>(true);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Keep lens active primarily when viewing hero section
      setIsHeroActive(window.scrollY < 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsEl = document.getElementById('projects-section');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#07090e] min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 1. Interactive Refraction Magnifier Lens (Ref Frame 0001, 0015, 0251) */}
      <RefractionLens isHeroActive={isHeroActive} />

      {/* 2. Hero Identity (0–6 sec in Reference: Dark Cinematic, Oversized Typography, Volumetric Glow) */}
      <div ref={heroRef}>
        <CinematicHero onExploreClick={scrollToProjects} />
      </div>

      {/* 3. Portfolio & Project Showcase (6–12 sec in Reference: Explosion of Color, Stacked Cards, Editorial Manifesto) */}
      <ColorfulProjectShowcase 
        projects={projects} 
        onSelectProject={(project) => setSelectedProject(project)} 
      />

      {/* 4. Interactive Technical Architecture Map (Skills & System Topology) */}
      <InteractiveSkillsMap />

      {/* 5. Editorial About Section (Philosophy, 5 Engineering Pillars & Credentials) */}
      <EditorialAbout />

      {/* 6. Professional Journey & Timeline (Animated Progressive Scroll Drawing) */}
      <EditorialTimeline />

      {/* 7. Minimal Ending Contact (Huge Typography: LET'S BUILD SOMETHING INTELLIGENT.) */}
      <EditorialContact />

      {/* 8. Full Architecture Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
