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
  mpid: "20d4681c-c0c9-4eb0-9db8-e027e32e4da5"
}, {
  name: 'TypeScript',
  icon: '📘',
  color: '#3178C6',
  category: 'Frontend',
  mpid: "645d6372-2608-4150-a5a0-e0bcec7bb3eb"
}, {
  name: 'JavaScript',
  icon: '🟨',
  color: '#F7DF1E',
  category: 'Frontend',
  mpid: "e014beb4-daed-40f7-bc6f-d6b68d0b8739"
}, {
  name: 'HTML',
  icon: '🌐',
  color: '#E34F26',
  category: 'Frontend',
  mpid: "751325a6-9d97-48c9-947a-875d6bd4845e"
}, {
  name: 'CSS',
  icon: '🎨',
  color: '#1572B6',
  category: 'Frontend',
  mpid: "3a003e17-42ca-45c5-97d8-d4cef808f27e"
}, {
  name: 'Tailwind',
  icon: '💨',
  color: '#06B6D4',
  category: 'Frontend',
  mpid: "13fee716-2aca-4dde-876d-2c515a56cec7"
}, {
  name: 'Next.js',
  icon: '▲',
  color: '#000000',
  category: 'Frontend',
  mpid: "11bf3820-a78f-4b94-b0f9-ef111ed6f880"
}, {
  name: 'Node.js',
  icon: '🟢',
  color: '#339933',
  category: 'Backend',
  mpid: "ed19053f-0baf-4f28-ab38-79a0d3bab152"
}, {
  name: 'Express',
  icon: '🚂',
  color: '#000000',
  category: 'Backend',
  mpid: "92fde850-a3be-40b7-976c-5e3073ac5c8c"
}, {
  name: 'GraphQL',
  icon: '◆',
  color: '#E10098',
  category: 'Backend',
  mpid: "3ca768dd-f376-49c5-87ec-4080018102ee"
}, {
  name: 'REST API',
  icon: '🔗',
  color: '#8A4FFF',
  category: 'Backend',
  mpid: "92943007-3021-49f3-9902-2fc2c2170052"
}, {
  name: 'MongoDB',
  icon: '🍃',
  color: '#47A248',
  category: 'Database',
  mpid: "ec20041c-8c4f-4a2f-8d9e-d64f1ae4471c"
}, {
  name: 'PostgreSQL',
  icon: '🐘',
  color: '#4169E1',
  category: 'Database',
  mpid: "81c20cf5-5105-4a37-8bb3-1722131ed224"
}, {
  name: 'Git',
  icon: '📦',
  color: '#F05032',
  category: 'Tools',
  mpid: "86eb45d6-5e86-4d33-9e2d-104c73a13742"
}, {
  name: 'Docker',
  icon: '🐳',
  color: '#2496ED',
  category: 'Tools',
  mpid: "1a3c67d3-3f77-4eeb-8910-470156c0466c"
}, {
  name: 'AWS',
  icon: '☁️',
  color: '#FF9900',
  category: 'Tools',
  mpid: "5291a61b-22c3-49a4-934b-1e70c8187d43"
}, {
  name: 'Webpack',
  icon: '📦',
  color: '#8DD6F9',
  category: 'Tools',
  mpid: "403e8429-8326-42a0-b31e-27a3a7c1e9c2"
}, {
  name: 'Vite',
  icon: '⚡',
  color: '#646CFF',
  category: 'Tools',
  mpid: "0dbb06f5-77b2-429d-b952-1c010994325a"
}, {
  name: 'Jest',
  icon: '🃏',
  color: '#C21325',
  category: 'Testing',
  mpid: "20d0235e-a5a9-41a7-8084-04688b09015e"
}, {
  name: 'Testing Library',
  icon: '✅',
  color: '#4CAF50',
  category: 'Testing',
  mpid: "4c237bdd-54a8-413b-8a1e-607bb123ccb9"
}] as any[];
const skillCategories = [{
  name: 'Frontend Development',
  icon: '🎨',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Frontend'),
  mpid: "34a2400c-5999-4ff7-bf91-430c904a0bc7"
}, {
  name: 'Backend Development',
  icon: '⚙️',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Backend'),
  mpid: "22dd9eeb-2ed1-43ed-8986-f7a1a3c35fff"
}, {
  name: 'Database & Storage',
  icon: '💾',
  color: '#C3BEF0',
  skills: technologies.filter(t => t.category === 'Database'),
  mpid: "00f9793c-bbeb-4c30-8ef8-30571c54816e"
}, {
  name: 'Tools & DevOps',
  icon: '🛠️',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Tools'),
  mpid: "4e10697a-c074-4c42-b494-6adb7b71fb34"
}, {
  name: 'Testing & Quality',
  icon: '✓',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Testing'),
  mpid: "7252e308-641a-438d-a370-13f5acd60a1b"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "3b7f9103-4a49-45f0-9f90-dc367f1ed1bc"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "26401879-8794-4bea-8213-5b70a0a88e7d"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "29442efa-e0a6-4e66-aaec-580a3fccbe44"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "48f04703-c70c-4f5d-8e3f-cd3efb2edc06"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "23613fc0-d2ca-4868-8ddc-63c11d30f077"
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
  return <SortableContainer dndKitId="5e561749-0d29-429b-8882-0e9460c2d07b" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient - Hidden on mobile */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30 hidden md:block" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="b406cbc4-aab5-4b20-9002-bde69ef63253" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
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
        <SortableContainer dndKitId="5b9082a6-d5cd-4ed1-9fd1-29b04018c500" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="5789c96c-ecb7-4f03-9be6-323d6ee23bfe" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="b9fa6e9f-abed-4a89-99f8-94fb2d3ec436" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="3f552839-3997-4f40-b7b2-eaf7a9340d5e" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
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

            <SortableContainer dndKitId="bc120360-a740-4505-9790-5567055f311b" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="30c33ddb-bbeb-49b5-a88c-6bfa06b63fae" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="82258038-15b3-4024-b752-5a2f2f0a259a" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="f7bdf3b4-f5f4-4eee-a59e-4d2d9b69d390" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        {!isMobile && <>
            <FloatingOrb delay={0} duration={8} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
            <FloatingOrb delay={2} duration={10} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
            <FloatingOrb delay={4} duration={12} size="medium" color="#E5ECF4" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />
          </>}

        <SortableContainer dndKitId="69b85e9a-4aa0-43d9-8212-802e94afcd17" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="14697be3-81aa-4b51-9230-38dfa0e80274" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gray-900" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <SortableContainer dndKitId="6d151150-6c8a-430e-bd09-3a10a41d025a" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              <p className="text-xl sm:text-2xl md:text-4xl text-[#8A4FFF] font-semibold mb-10" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
                Software Engineer
              </p>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="22e6db2c-4424-4efc-b0cb-bbc47301906f" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-6 mb-20" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "18e35e7b-a074-4a3c-b20b-8f5bb2c99454"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "826b9abb-3919-4dcb-ba53-55e3e354d44c"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "7c6c232a-97af-4229-89fc-2e26c73c6e4a"
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
            }} whileHover={{
              scale: 1.3,
              rotate: idx % 2 === 0 ? 15 : -15,
              y: -10
            }} whileTap={{
              scale: 0.9
            }} className="p-5 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8A4FFF]/40 group" aria-label={label} data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Icon size={28} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.a>)}
            </SortableContainer>

            <SortableContainer dndKitId="e5e4648d-512a-4526-8b80-0602a06a4695" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="d319af90-3c8c-4734-9508-8e041d4803dd" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="9e1546ee-b38e-4ccf-8b7c-f0644a4e1eb6" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="ec9959e1-d4a6-482d-960e-9a46b9f75108" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="620c4403-310b-4d72-bf86-bd9de29c3089" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="813961b6-85a0-4194-aa32-9ee2a48ce4b2" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="037c61dc-9657-4329-a7c9-9d186df411af" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="b4087b97-c7fa-4ed7-9946-3c2520aedd54" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="e813b519-761f-47cc-b212-b8349e27f071" containerType="regular" prevTag="motion.div" initial={{
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
                <SortableContainer dndKitId="895106c1-7783-4f0d-ad77-8c2f798aef44" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
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
                  mpid: "f7b063c5-d333-43c4-b253-992d017e84df"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "30f037cb-8f14-429c-a300-440fb0c3dbe7"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "8e556d32-fe27-441c-996c-4eee0b0e8f20"
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

              <SortableContainer dndKitId="db19873d-cffe-423e-a641-91ba3b788f30" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
                <SortableContainer dndKitId="d707b2f3-def9-40a7-9364-5d3b30951e83" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="5597b827-9a14-4512-b510-dcd16fcd39ae" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="0a83f5fc-ad85-4520-8ebf-23957be7108e" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="a8c2bc55-2aef-448e-9db4-df4fb377abb4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="7a660b58-b4b1-4d62-bcb7-12d0d61d00dc" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="b7fe9f40-f2b2-4bdb-8a49-6c812701229b" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="4ce127e1-5d58-48d3-9db7-464064695e25" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="b4000472-0d70-4f43-8153-910d0f5475a9" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="0860a7bf-e1c6-481a-9456-a5bde8517b55" containerType="regular" prevTag="section" id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="1547fbad-392a-42e9-98ad-bfc37c76b5be" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="3840e0f5-2ee8-4394-baae-45eeb87fa1dd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="c47a7b19-c7cc-4be3-bfab-ac1e55b3e99f" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-6 justify-center" initial={{
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
              <SortableContainer dndKitId="520165b5-7a67-45f3-89bd-a1d4bca43ea6" containerType="regular" prevTag="motion.div" whileHover={{
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
            <SortableContainer dndKitId="4d3d630e-9896-460e-907b-9e82b450f9e2" containerType="regular" prevTag="div" className="relative" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx" />
              
              {/* Marquee Container */}
              <SortableContainer dndKitId="7aaa795e-b600-4d73-b75c-e1a703598757" containerType="regular" prevTag="div" className="flex overflow-hidden py-8" data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
                {/* First set of technologies */}
                <SortableContainer dndKitId="4e9d8656-79c1-430b-b49d-acb5a702d223" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
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
                <SortableContainer dndKitId="0e0fc9e6-fd69-40d7-87f6-9bf73c7bddcf" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
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
            <SortableContainer dndKitId="a20ad43e-b2d0-4f14-a291-25f2e6055150" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="89934a6c-0c42-402c-a0d9-c078f778ee09" containerType="regular" prevTag="div" className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm" data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="3b0c042f-c3c2-43fa-b399-7586f2fcd6ac" containerType="regular" prevTag="div" className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Sparkles className="text-white" size={20} />
                </SortableContainer>
                <SortableContainer dndKitId="53a27f24-e97c-40ad-bde2-e801a145bb38" containerType="regular" prevTag="div" className="text-left" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="55108711-94c5-4ef1-be15-f13c5294cb46" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="bb72c745-9d57-4f68-a525-3381a45b8b3f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1ef346d8-5c3b-4f5e-93b4-28ddd9e99cf8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="457e4106-c17c-4ace-b672-521fb417c51a" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="48ec390b-2221-44bf-b95f-c240650ddb2a" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="83a76167-c870-4d15-9248-c339c6c9799e" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
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

            <SortableContainer dndKitId="b2dad707-3eb7-4379-aa59-dbb531166930" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="3b277be1-419f-4237-8f48-f95ac0ce8ee2" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="134" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="135" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="37ab1d4a-5855-4a9e-a08d-bb95e0c0fc5d" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="136" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="2e2cc4b0-4c8f-4491-a5f9-30d6b7e035e1" containerType="regular" prevTag="motion.div" initial={{
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

            <SortableContainer dndKitId="c9047e10-9988-4393-b228-5be82dbc5975" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20" initial={{
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
            <SortableContainer dndKitId="9010a852-91ff-45e9-b36a-d6f0c074e227" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="145" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="651f59a8-b074-445d-96ec-5f9fd86cec4f" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="146" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="147" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="cf22a25c-9754-4fca-a753-1acb964bb2ea" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="148" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "5666816f-86fb-4f50-9431-0b9f219c3841"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "c6b2d460-2933-47b3-be3a-5dad53bd3553"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "30734126-a0f7-464f-bab0-f2c5a811634c"
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