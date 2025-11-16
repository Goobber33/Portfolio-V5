import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles, Award, Zap } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;

// Custom hook to detect mobile and reduced motion
const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceMotion: isMobile || prefersReducedMotion
  };
};

// Technology icons data for marquee
const technologies = [{
  name: 'React',
  icon: '⚛️',
  color: '#61DAFB',
  category: 'Frontend',
  mpid: "3fcfff40-b2c8-424a-8309-c9c25002ddbd"
}, {
  name: 'TypeScript',
  icon: '📘',
  color: '#3178C6',
  category: 'Frontend',
  mpid: "c768a9f1-927b-48c5-afdd-3614944ae993"
}, {
  name: 'JavaScript',
  icon: '🟨',
  color: '#F7DF1E',
  category: 'Frontend',
  mpid: "7dda41c4-0b42-41e0-8dde-a5ca249232b3"
}, {
  name: 'HTML',
  icon: '🌐',
  color: '#E34F26',
  category: 'Frontend',
  mpid: "36f1c636-b6c5-4242-8ad2-24218d213a67"
}, {
  name: 'CSS',
  icon: '🎨',
  color: '#1572B6',
  category: 'Frontend',
  mpid: "22936032-21a1-4fa0-a75a-4f37b2662c21"
}, {
  name: 'Tailwind',
  icon: '💨',
  color: '#06B6D4',
  category: 'Frontend',
  mpid: "0e96c43a-10b3-4de2-bd45-6c54012da51b"
}, {
  name: 'Next.js',
  icon: '▲',
  color: '#000000',
  category: 'Frontend',
  mpid: "15df6bc6-5f94-4061-b807-cc566f33417b"
}, {
  name: 'Node.js',
  icon: '🟢',
  color: '#339933',
  category: 'Backend',
  mpid: "b0ff3fa2-3380-4378-9551-6219f10ab948"
}, {
  name: 'Express',
  icon: '🚂',
  color: '#000000',
  category: 'Backend',
  mpid: "899315c1-0a3c-4193-a99e-bee2d2f2ede8"
}, {
  name: 'GraphQL',
  icon: '◆',
  color: '#E10098',
  category: 'Backend',
  mpid: "801012fa-6b4d-4fb0-b956-c4c7201b2bf7"
}, {
  name: 'REST API',
  icon: '🔗',
  color: '#8A4FFF',
  category: 'Backend',
  mpid: "5500a04f-f813-4d4a-85ce-413a5b69cc45"
}, {
  name: 'MongoDB',
  icon: '🍃',
  color: '#47A248',
  category: 'Database',
  mpid: "9085c005-2d3f-480c-b32f-5c79659c19e1"
}, {
  name: 'PostgreSQL',
  icon: '🐘',
  color: '#4169E1',
  category: 'Database',
  mpid: "6eecd303-dbef-41f5-a06c-a938fc5a2735"
}, {
  name: 'Git',
  icon: '📦',
  color: '#F05032',
  category: 'Tools',
  mpid: "4f9918ca-4628-4218-bc26-8014c61e9245"
}, {
  name: 'Docker',
  icon: '🐳',
  color: '#2496ED',
  category: 'Tools',
  mpid: "38d4207f-0076-453f-9fce-0f21616927e2"
}, {
  name: 'AWS',
  icon: '☁️',
  color: '#FF9900',
  category: 'Tools',
  mpid: "aaa853d4-593e-4288-841c-4c3ecac64529"
}, {
  name: 'Webpack',
  icon: '📦',
  color: '#8DD6F9',
  category: 'Tools',
  mpid: "a81adc30-ba74-4dad-a952-2dd238972dc9"
}, {
  name: 'Vite',
  icon: '⚡',
  color: '#646CFF',
  category: 'Tools',
  mpid: "b95f6e77-c541-4dba-9dce-f0f6a03edcc4"
}, {
  name: 'Jest',
  icon: '🃏',
  color: '#C21325',
  category: 'Testing',
  mpid: "36fcbe23-06b4-4f11-9376-7688ed620248"
}, {
  name: 'Testing Library',
  icon: '✅',
  color: '#4CAF50',
  category: 'Testing',
  mpid: "35f3ad7b-dc5f-4c07-b6a5-d2a8b508d177"
}] as any[];
const skillCategories = [{
  name: 'Frontend Development',
  icon: '🎨',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Frontend'),
  mpid: "31fa2fc9-2303-4c90-8352-66734379e4bf"
}, {
  name: 'Backend Development',
  icon: '⚙️',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Backend'),
  mpid: "4a0dd475-3601-41c2-b760-2fe6115fe2c3"
}, {
  name: 'Database & Storage',
  icon: '💾',
  color: '#C3BEF0',
  skills: technologies.filter(t => t.category === 'Database'),
  mpid: "a2053446-9584-4125-b091-d7da1487dbbb"
}, {
  name: 'Tools & DevOps',
  icon: '🛠️',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Tools'),
  mpid: "1f7e349c-eee4-4489-8ab1-13d8ff248e18"
}, {
  name: 'Testing & Quality',
  icon: '✓',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Testing'),
  mpid: "de7091fb-90ed-4811-a69e-f27c3f830ce6"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "3d69af7a-cd2c-48b7-9ab0-29c1ad62a1b7"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "43c45991-85f2-4441-a4c4-a003d274f477"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "7e0a368a-78ea-4424-ae17-8de4878d1d29"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "37632633-bc40-448b-9f3d-a1d70d375c31"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "47bf8a10-c70c-41ec-946f-cfbd2683d706"
}] as any[];

// Enhanced Floating decoration component with much more prominent motion
const FloatingOrb = (({
  delay = 0,
  duration = 20,
  size = 'large',
  color = '#8A4FFF',
  shouldReduceMotion = false
}) => {
  return <motion.div data-magicpath-motion-tag="motion.div" className="absolute rounded-full blur-3xl opacity-40 pointer-events-none" style={{
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    width: size === 'large' ? '800px' : '600px',
    height: size === 'large' ? '800px' : '600px'
  }} animate={shouldReduceMotion ? {} : {
    x: ['-20%', '120%', '-20%'],
    y: ['-10%', '10%', '-10%'],
    scale: [1, 1.5, 1]
  }} transition={shouldReduceMotion ? {} : {
    duration: duration * 2,
    repeat: Infinity,
    delay,
    ease: 'easeInOut',
    repeatType: 'loop'
  }} data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx" />;
}) as React.FC<{
  delay?: number;
  duration?: number;
  size?: string;
  color?: string;
  shouldReduceMotion?: boolean;
}>;

// Animated gradient text component
const GradientText = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => <motion.span data-magicpath-motion-tag="motion.span" className={`bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] bg-clip-text text-transparent ${className}`} animate={{
  backgroundPosition: ['0%', '100%', '0%']
}} transition={{
  duration: 5,
  repeat: Infinity,
  ease: 'linear'
}} style={{
  backgroundSize: '200% auto'
}} data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
    {children}
  </motion.span>;

// @component: KyleParksPortfolio
export const KyleParksPortfolio = (props: KyleParksPortfolioProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const {
    isMobile,
    shouldReduceMotion
  } = useDeviceDetection();
  const {
    scrollYProgress
  } = useScroll();

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

  // DRAMATICALLY enhanced animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // @return
  return <SortableContainer dndKitId="f806b6b5-7a1b-43d4-bd4a-6985b7fd517e" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient - Hidden on mobile */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30 hidden md:block" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="92d89aad-5624-4d35-893f-d37e42263c10" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
      backgroundColor: 'rgba(255, 255, 255, var(--nav-opacity))',
      '--nav-opacity': navOpacity
    } as any} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }} data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="cab18ae1-0a16-4055-a871-bb9d12fc69ea" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="bc27d82c-0139-450a-8d33-0b20326f42fa" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="07ca46dc-1c92-42bf-a180-160938fc2dba" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
            scale: 1.1,
            rotate: 5
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scrollToSection('home')} data-magicpath-id="7" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="relative z-10 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent font-extrabold" data-magicpath-id="8" data-magicpath-path="KyleParksPortfolio.tsx">
                KP
              </span>
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/10 to-[#C3BEF0]/10 rounded-lg -z-10" initial={{
              scale: 0,
              opacity: 0
            }} whileHover={{
              scale: 1.5,
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx" />
            </SortableContainer>

            <div className="hidden md:flex items-center space-x-1" data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="24a56738-8712-46ff-ba42-611c69ac3947" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
              scale: 1.08,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="11" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                y: -3
              }} transition={{
                duration: 0.2
              }} data-magicpath-id="12" data-magicpath-path="KyleParksPortfolio.tsx">
                    {item}
                  </motion.span>
                  {activeSection === item.toLowerCase() && <>
                      <motion.div data-magicpath-motion-tag="motion.div" layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0]" transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} data-magicpath-id="13" data-magicpath-path="KyleParksPortfolio.tsx" />
                      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/5 to-[#C3BEF0]/5 rounded-lg -z-10" layoutId="activeBg" transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </>}
                </SortableContainer>)}
            </div>

            <SortableContainer dndKitId="668f6e7c-b84f-4082-b659-35bc53f2fe01" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="e31f1ead-7cdf-442e-ba17-b32279d83710" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="6e5c0701-4cd6-4298-9209-56459895c04d" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden border-t border-[#E5ECF4] bg-white/98 backdrop-blur-xl" data-magicpath-id="19" data-magicpath-path="KyleParksPortfolio.tsx">
            <div className="px-4 py-4 space-y-1" data-magicpath-id="20" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, idx) => <motion.button data-magicpath-motion-tag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#EFFFFA] hover:to-[#E5ECF4] hover:text-[#8A4FFF] rounded-lg transition-all duration-200 font-medium" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: idx * 0.05
          }} data-magicpath-id="21" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                </motion.button>)}
            </div>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero Section - DRAMATICALLY Enhanced */}
      <SortableContainer dndKitId="05dc77b9-94e8-4293-99b5-db75d7770eb9" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        {!isMobile && <>
            <FloatingOrb delay={0} duration={8} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
            <FloatingOrb delay={2} duration={10} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
            <FloatingOrb delay={4} duration={12} size="medium" color="#E5ECF4" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />
          </>}

        <SortableContainer dndKitId="155e5f53-61d5-4bdb-9dd0-0266e9a82054" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="b57ff2f6-7c41-4552-bad3-9f40f2c2e2ed" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gray-900" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <SortableContainer dndKitId="2a0cf745-6d6e-4257-802e-f6d6ecfa325a" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              <p className="text-xl sm:text-2xl md:text-4xl text-[#8A4FFF] font-semibold mb-10" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
                Software Engineer
              </p>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="fc735bb1-3ca2-41f6-bf30-06ed65c0ea6a" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-6 mb-20" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "e3388b5e-a63e-486a-80c8-fc800d9e1619"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "c1d36456-6724-41fe-b158-16f30d9caf2e"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "1d69817b-9dbd-4767-ad04-bcb74ed2c4f9"
            }].map(({
              icon: Icon,
              href,
              label
            }, idx) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{
              scale: 0,
              rotate: -180
            }} animate={{
              scale: 1,
              rotate: 0
            }} transition={{
              delay: 0.8 + idx * 0.1,
              type: "spring",
              stiffness: 200
            }} whileTap={{
              scale: 0.9
            }} className="p-5 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8A4FFF]/40 group" aria-label={label} data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Icon size={28} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.a>)}
            </SortableContainer>

            <SortableContainer dndKitId="ccb9673c-d222-4153-a5bb-77cd0cc2e616" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="be2070de-7e30-4f4a-80d1-fdcf6cfc45f8" containerType="regular" prevTag="motion.div" animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }} data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
                <ChevronDown size={40} data-magicpath-id="39" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Enhanced */}
      <SortableContainer dndKitId="4fcb8955-2010-4aa5-93db-64cfdf231fd3" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="0ac85a11-9433-41a7-b15d-8829bae05a50" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1fdaf303-3f74-4c2e-aabb-79ba1a72a71b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="8fb94e02-af81-43fb-9c03-5710d1c2167b" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -100
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }} viewport={{
            once: true
          }} data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="3c0b33c6-2c39-4a43-bbe8-24deac221ce2" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="5ab6b237-b416-4862-9bf8-342f90930a46" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="86a095bf-ad38-4f1e-952c-ed9743a8bc81" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              x: -100
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="space-y-6" data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm a dedicated Computer Science student at Arizona State University,
                  where I'm part of the prestigious Barrett Honors College. My journey in
                  software development began with the University of Washington's intensive
                  Full Stack Web Development bootcamp in 2023.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm passionate about creating efficient, user-friendly applications and
                  constantly expanding my technical expertise. My approach combines academic
                  rigor with practical, hands-on experience in modern web technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">
                  When I'm not coding, I enjoy exploring new technologies, contributing to
                  open-source projects, and collaborating with fellow developers to solve
                  challenging problems.
                </p>

                {/* Quick stats - ENHANCED */}
                <SortableContainer dndKitId="a5f51b60-247e-4f2a-b901-e8cefa9e2fb9" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
                opacity: 0,
                y: 50
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4
              }} viewport={{
                once: true
              }} data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  label: 'Projects',
                  value: '15+',
                  icon: Briefcase,
                  mpid: "136c1900-4631-4cc3-a6d3-ac29ae53fa21"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "e648f5c3-c717-4519-a58c-c6bd03a1cd89"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "42a1c9b1-4583-48c0-a8f2-5116348bfeb6"
                }].map(({
                  label,
                  value,
                  icon: Icon
                }) => <motion.div data-magicpath-motion-tag="motion.div" key={label} whileHover={{
                  y: -10,
                  scale: 1.1,
                  rotate: 5
                }} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-2xl hover:shadow-[#8A4FFF]/20 transition-all duration-300" data-magicpath-id="53" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={28} className="text-[#8A4FFF] mx-auto mb-2" data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx" />
                      <div className="text-3xl font-bold text-gray-900" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">{value}</div>
                      <div className="text-sm text-gray-600 font-medium" data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx">{label}</div>
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="e787b7b3-8958-4c33-9a43-6b5ffaec2c2f" containerType="regular" prevTag="motion.div" className="relative" initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -5
            }} whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} viewport={{
              once: true
            }} data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="156d9d34-6eb2-41ab-805b-302cc57d8cfe" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="d84161d4-50cf-497c-8e39-8b76ca7dd74f" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.img data-magicpath-motion-tag="motion.img" src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.4
                  }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>

                {/* Enhanced decorative elements */}
                {!isMobile && <>
                    <motion.div data-magicpath-motion-tag="motion.div" className="absolute -top-6 -right-6 w-40 h-40 bg-[#8A4FFF]/30 rounded-full blur-3xl -z-10" animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0.7, 0.3]
                }} transition={shouldReduceMotion ? {} : {
                  duration: 3,
                  repeat: Infinity
                }} data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx" />
                    <motion.div data-magicpath-motion-tag="motion.div" className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C3BEF0]/30 rounded-full blur-3xl -z-10" animate={shouldReduceMotion ? {} : {
                  scale: [1.6, 1, 1.6],
                  opacity: [0.7, 0.3, 0.7]
                }} transition={shouldReduceMotion ? {} : {
                  duration: 4,
                  repeat: Infinity
                }} data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </>}

                {/* Professional shadow for mobile */}
                {isMobile && <div className="absolute -inset-2 bg-gradient-to-br from-[#8A4FFF]/20 via-[#9D5FFF]/20 to-[#C3BEF0]/20 rounded-3xl -z-10 blur-xl" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Education Section - Enhanced */}
      <SortableContainer dndKitId="22f0dc12-865b-4c2b-922c-9c1920e46663" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="669e275d-a685-43e2-b9e6-b65503e725b9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="85ddd942-4515-4e85-b223-7a1e8480e523" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="20c1f539-fb08-485c-92a5-0736391fabca" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -100
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            type: "spring"
          }} viewport={{
            once: true
          }} data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="207ad0ad-487a-4fb5-90d3-d94e0aef6697" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="ecd80f3d-ac4c-471a-a5be-3de4033112c9" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
              {education.map((edu, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-3xl p-8 border-l-[8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{
              borderColor: edu.color
            }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.institution}
                    </h3>
                    <motion.span data-magicpath-motion-tag="motion.span" className="px-5 py-2.5 rounded-full text-sm font-bold inline-block w-fit shadow-sm" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }} whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5
                }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-lg font-semibold mb-3" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:unknown" data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">
                    {edu.degree}
                  </p>
                  <p className="text-gray-700 leading-relaxed" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:unknown" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Skills Section - Enhanced */}
      <SortableContainer dndKitId="b42e3e54-0c82-4375-9a8d-8668e673ea92" containerType="regular" prevTag="section" id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="e32e3b08-8d33-43b5-9576-929ce7fc71f4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="465b032c-ae9e-42c5-abb1-d64a7f9995b6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="2f5107bd-38c5-4bdc-8d36-03212e835db3" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-6 justify-center" initial={{
            opacity: 0,
            y: -50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            type: "spring"
          }} viewport={{
            once: true
          }} data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="6afa299a-70aa-4dc4-a999-0ece77496c1b" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={32} className="text-white" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">Skills & Technologies</h2>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx">
              A comprehensive toolkit of modern technologies and frameworks
            </motion.p>

            {/* Infinite Marquee Animation */}
            <SortableContainer dndKitId="a3522fe9-abbc-442e-ad62-745a539dfb06" containerType="regular" prevTag="div" className="relative" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx" />
              
              {/* Marquee Container */}
              <SortableContainer dndKitId="50acdddc-fc3b-4891-afa2-6582049a61b9" containerType="regular" prevTag="div" className="flex overflow-hidden py-8" data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
                {/* First set of technologies */}
                <SortableContainer dndKitId="ecbe429b-7a6b-446c-a755-86cee14f00cd" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
                x: [0, -1920]
              }} transition={{
                duration: shouldReduceMotion ? 80 : 40,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
                  {technologies.map((tech, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`tech-1-${index}`} whileHover={shouldReduceMotion ? {} : {
                  scale: 1.15,
                  y: -8
                }} className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx" />
                      
                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
                        <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.icon}
                        </span>
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                  }} data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.div>)}
                </SortableContainer>

                {/* Second set (duplicate for seamless loop) */}
                <SortableContainer dndKitId="5f1f4b0e-022d-460f-a207-ca211a8d4701" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
                x: [0, -1920]
              }} transition={{
                duration: shouldReduceMotion ? 80 : 40,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
                  {technologies.map((tech, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`tech-2-${index}`} whileHover={shouldReduceMotion ? {} : {
                  scale: 1.15,
                  y: -8
                }} className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx" />
                      
                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="KyleParksPortfolio.tsx">
                        <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="102" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.icon}
                        </span>
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="103" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                  }} data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Summary - Professional Badge */}
            <SortableContainer dndKitId="57e61c34-9c3f-4723-8584-be5f21c2a09c" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="mt-16 flex justify-center" data-magicpath-id="105" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="8fd58160-0a04-4e73-a945-a55da6891202" containerType="regular" prevTag="div" className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm" data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="5ea245f4-384d-4e4a-a7bd-bdb9bc11e2f6" containerType="regular" prevTag="div" className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Sparkles className="text-white" size={20} />
                </SortableContainer>
                <SortableContainer dndKitId="63c3898f-350d-4448-a197-43b8cc7a4ded" containerType="regular" prevTag="div" className="text-left" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide" data-magicpath-id="109" data-magicpath-path="KyleParksPortfolio.tsx">Technologies Mastered</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent" data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
                    {technologies.length}+
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects Section - Enhanced */}
      <SortableContainer dndKitId="8d3ff307-ee9a-465a-b9ed-ac0a8dea692a" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="0e212364-3c23-4355-a9e8-025a2e62bfc2" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="96c9d149-60dc-48f9-8821-1ba714c3090d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="d6a348dd-e985-4a65-8aba-c2dcf0cc6c27" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -100
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            type: "spring"
          }} viewport={{
            once: true
          }} data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="05c9aeb0-2cfb-4ae1-af85-2a5cdd9a3ef9" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="e5602230-d9e5-4d43-aa4f-803640c08077" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
              {projects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group relative overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
                scale: 1.05
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.tech.map((tech, techIndex) => <motion.span data-magicpath-motion-tag="motion.span" key={techIndex} className="px-3 py-1.5 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-semibold border border-[#8A4FFF]/10" whileHover={{
                  scale: 1.15,
                  y: -3,
                  rotate: 5
                }} initial={{
                  opacity: 0,
                  scale: 0.6
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: index * 0.15 + techIndex * 0.08
                }} viewport={{
                  once: true
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a data-magicpath-motion-tag="motion.a" href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold" whileHover={{
                x: 10
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project
                    <motion.span data-magicpath-motion-tag="motion.span" animate={{
                  x: [0, 8, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx">
                      <ExternalLink size={20} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </SortableContainer>

            <SortableContainer dndKitId="25a48839-63d5-4cd1-87bb-20376275205a" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="flex justify-center" data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Github size={26} data-magicpath-id="131" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
                View More Projects
                <motion.span data-magicpath-motion-tag="motion.span" className="transition-transform duration-300 group-hover:translate-x-2" data-magicpath-id="132" data-magicpath-path="KyleParksPortfolio.tsx">
                  <ExternalLink size={24} data-magicpath-id="133" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Enhanced */}
      <SortableContainer dndKitId="63c71acf-df26-4938-9271-4a32368957ab" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="134" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="135" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="9bf1a769-3bc0-4502-a625-9c0ecd1d29c0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="136" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="6659ff8f-335f-4781-8a41-ff040c3d77b6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 80
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} viewport={{
          once: true
        }} data-magicpath-id="137" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-4xl md:text-6xl font-bold text-white mb-8" initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            type: "spring"
          }} viewport={{
            once: true
          }} data-magicpath-id="138" data-magicpath-path="KyleParksPortfolio.tsx">
              Let's Work Together
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-white/95 mb-16 max-w-2xl mx-auto leading-relaxed" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }} data-magicpath-id="139" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </motion.p>

            <SortableContainer dndKitId="bf147df8-edbb-45f1-baee-a36d65b87ce5" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} viewport={{
            once: true
          }} data-magicpath-id="140" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl" data-magicpath-id="141" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={24} data-magicpath-id="142" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl" data-magicpath-id="143" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={24} data-magicpath-id="144" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>

            {/* Footer content */}
            <SortableContainer dndKitId="5060933d-ebfe-49b4-be66-83a9e0138fc8" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="145" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="5adb3526-2898-4290-bf10-45435ad6b1d4" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="146" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="147" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="92cedb95-8c1d-49c3-8c79-cf28a4649b87" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="148" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "1034543d-624c-4cc3-9ac0-0b89bcaa71f8"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "8989503c-2a68-4791-a9dc-a3eb86ef3b21"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "ff76bed8-03a1-481a-a31b-83904a73c61a"
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.3,
                  y: -5,
                  rotate: 10
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label} data-magicpath-id="149" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={24} data-magicpath-id="150" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.a>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};