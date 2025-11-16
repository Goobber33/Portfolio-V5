import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ProgressBar } from './ui/ProgressBar';
import { Navigation } from './layout/Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { containerVariants, itemVariants } from './constants/animations';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useIsMobile } from '../../hooks/use-mobile';

type KyleParksPortfolioProps = Record<string, never>;

export const KyleParksPortfolio = (props: KyleParksPortfolioProps) => {
  const { activeSection, scrollToSection } = useScrollTracking();
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();

  // Enhanced smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0.9, 0.98]);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {!isMobile && <ProgressBar scrollProgress={smoothProgress} />}

      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        navOpacity={navOpacity}
      />

      <HeroSection
        onNavigate={scrollToSection}
        heroY={heroY}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <AboutSection />

      <EducationSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
};

