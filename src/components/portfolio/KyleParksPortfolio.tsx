import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Education } from './Education';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

type KyleParksPortfolioProps = Record<string, never>;

export const KyleParksPortfolio: React.FC<KyleParksPortfolioProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isMobile, shouldReduceMotion } = useDeviceDetection();
  const { scrollYProgress } = useScroll();

  // Enhanced smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const backgroundColor = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], ['#FFFFFF', '#FAFFFE', '#F8FFFD', '#F5FFFC', '#EFFFFA']);

  // MUCH MORE PROMINENT parallax effects
  const heroY = useTransform(smoothProgress, [0, 0.3], shouldReduceMotion ? [0, 0] : [0, 300]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, shouldReduceMotion ? 1 : 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], shouldReduceMotion ? [1, 1] : [1, 0.85]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0.9, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

      // Check if we're near the bottom of the page for contact section
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (documentHeight - scrollPosition < 100) {
        setActiveSection('contact');
        return;
      }
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* Enhanced Progress bar with gradient - Hidden on mobile */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30 hidden md:block"
        style={{
          scaleX: smoothProgress
        }}
      />

      {/* Enhanced Navigation */}
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        navOpacity={navOpacity}
      />

      {/* Hero Section - DRAMATICALLY Enhanced */}
      <Hero
        isMobile={isMobile}
        shouldReduceMotion={shouldReduceMotion}
        heroY={heroY}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        scrollToSection={scrollToSection}
      />

      {/* About Section - Enhanced */}
      <About isMobile={isMobile} shouldReduceMotion={shouldReduceMotion} />

      {/* Education Section - Enhanced */}
      <Education isMobile={isMobile} shouldReduceMotion={shouldReduceMotion} />

      {/* Skills Section - Enhanced */}
      <Skills shouldReduceMotion={shouldReduceMotion} />

      {/* Projects Section - Enhanced */}
      <Projects isMobile={isMobile} shouldReduceMotion={shouldReduceMotion} />

      {/* Contact Section - Enhanced */}
      <Contact isMobile={isMobile} shouldReduceMotion={shouldReduceMotion} />
    </div>
  );
};
