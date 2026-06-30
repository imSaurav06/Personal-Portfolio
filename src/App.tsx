import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

// Lazy load the pages for Lighthouse performance optimization (LCP/FID)
const Home = React.lazy(() => import('./pages/Home'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

// Scroll restoration helper to ensure routing to details resets viewport coordinates to top
const ScrollRestoration: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollRestoration />
      <ScrollProgressBar />
      <LoadingScreen />
      
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        {/* Navbar is persistent across routing views */}
        <Navbar />
        
        <main className="flex-grow pt-16">
          <React.Suspense fallback={
            <div className="w-full h-[60vh] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:projectId" element={<ProjectDetail />} />
              {/* Fallback route redirection */}
              <Route path="*" element={<Home />} />
            </Routes>
          </React.Suspense>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};
export default App;
