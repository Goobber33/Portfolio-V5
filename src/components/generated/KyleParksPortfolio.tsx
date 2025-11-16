import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles, Award, Zap, Download } from 'lucide-react';
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
  mpid: "2ebb8cf9-eb66-448e-a6a3-23d3956ce82d"
}, {
  name: 'TypeScript',
  icon: '📘',
  color: '#3178C6',
  category: 'Frontend',
  mpid: "bccea74b-bfe3-4727-9a6e-fda50dfb228c"
}, {
  name: 'JavaScript',
  icon: '🟨',
  color: '#F7DF1E',
  category: 'Frontend',
  mpid: "0efd9dab-d7e0-49ec-bab0-42e4694cfefd"
}, {
  name: 'HTML',
  icon: '🌐',
  color: '#E34F26',
  category: 'Frontend',
  mpid: "d85cd1cc-0dc5-49f3-9c33-ee89be0da33a"
}, {
  name: 'CSS',
  icon: '🎨',
  color: '#1572B6',
  category: 'Frontend',
  mpid: "c1883022-6faf-4960-b034-36881ed1d6b5"
}, {
  name: 'Tailwind',
  icon: '💨',
  color: '#06B6D4',
  category: 'Frontend',
  mpid: "34aec654-f112-475f-b926-aa818df0958e"
}, {
  name: 'Next.js',
  icon: '▲',
  color: '#000000',
  category: 'Frontend',
  mpid: "50b6d089-3cd1-46f4-a759-d21a2dcf87d1"
}, {
  name: 'Node.js',
  icon: '🟢',
  color: '#339933',
  category: 'Backend',
  mpid: "1dc70ae7-e3b8-47fc-8873-3fcd12a39b86"
}, {
  name: 'Express',
  icon: '🚂',
  color: '#000000',
  category: 'Backend',
  mpid: "fd436144-e18c-47b3-9eb4-bc8f68f92864"
}, {
  name: 'GraphQL',
  icon: '◆',
  color: '#E10098',
  category: 'Backend',
  mpid: "b465a62c-709d-453d-b1cd-5862330686e5"
}, {
  name: 'REST API',
  icon: '🔗',
  color: '#8A4FFF',
  category: 'Backend',
  mpid: "ba2d4abe-0022-4e47-9be2-ab33685b0013"
}, {
  name: 'MongoDB',
  icon: '🍃',
  color: '#47A248',
  category: 'Database',
  mpid: "d2bab43e-976e-40f1-a39a-1ff0734ff04e"
}, {
  name: 'PostgreSQL',
  icon: '🐘',
  color: '#4169E1',
  category: 'Database',
  mpid: "4180623b-3dee-4f02-b95e-75c708e142a5"
}, {
  name: 'Git',
  icon: '📦',
  color: '#F05032',
  category: 'Tools',
  mpid: "10b8a98e-7ef8-4e2b-a744-d68bf1907518"
}, {
  name: 'Docker',
  icon: '🐳',
  color: '#2496ED',
  category: 'Tools',
  mpid: "4a101dda-f3d6-4fc4-bddf-4fc833d0cd79"
}, {
  name: 'AWS',
  icon: '☁️',
  color: '#FF9900',
  category: 'Tools',
  mpid: "60e720ab-621f-4f55-b8bc-759044e6419d"
}, {
  name: 'Webpack',
  icon: '📦',
  color: '#8DD6F9',
  category: 'Tools',
  mpid: "5c5344cc-4e09-48f5-9df2-de5fc5d5fa8f"
}, {
  name: 'Vite',
  icon: '⚡',
  color: '#646CFF',
  category: 'Tools',
  mpid: "03f0ad88-acdb-4009-aa93-987a02265322"
}, {
  name: 'Jest',
  icon: '🃏',
  color: '#C21325',
  category: 'Testing',
  mpid: "f63e01ee-c183-4394-b6ec-fe7335cd17cb"
}, {
  name: 'Testing Library',
  icon: '✅',
  color: '#4CAF50',
  category: 'Testing',
  mpid: "01a7ebb6-cbec-4e53-beb5-f01c97f521e9"
}] as any[];
const skillCategories = [{
  name: 'Frontend Development',
  icon: '🎨',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Frontend'),
  mpid: "dcde443c-25ab-47c1-bf02-82bcce9f0814"
}, {
  name: 'Backend Development',
  icon: '⚙️',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Backend'),
  mpid: "7dc86ccf-d92c-4f95-a7a4-7c6179426b4e"
}, {
  name: 'Database & Storage',
  icon: '💾',
  color: '#C3BEF0',
  skills: technologies.filter(t => t.category === 'Database'),
  mpid: "8e9baa00-2d92-4a4e-ad0f-35474a4ae8b5"
}, {
  name: 'Tools & DevOps',
  icon: '🛠️',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Tools'),
  mpid: "99d06b38-1d1f-4727-8c58-f29769fb5c4f"
}, {
  name: 'Testing & Quality',
  icon: '✓',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Testing'),
  mpid: "4cb7478b-8e22-4de6-b89e-804d9ff3667f"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "127ea6ac-83b0-4a98-b39a-9c7dde461a0f"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "ea9d978e-3310-4565-b2ea-5cefad00adfe"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "e7aaef32-ad88-4ad4-861b-cc76f326f4ad"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "b33dab4f-b6f9-47f1-a89a-dc70fbd0df66"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "b2a0b83c-5f46-4b4c-aab1-d3b0e1da3761"
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
  return <SortableContainer dndKitId="bf6d5b10-a240-42af-846a-29f0c73376cd" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient - Hidden on mobile */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30 hidden md:block" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="6b1f1da1-6628-4c4c-a63c-b65a4bd6238e" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
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
        <SortableContainer dndKitId="69d81eca-089f-4a3f-a851-3eab93880087" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="f18f22a9-52a7-44ec-963b-869fb30fb7e5" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="5fb37c8c-f2f2-4c19-a021-cb16b84373bc" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="c4f90274-22a1-47ba-893f-0a981eb39863" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
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

            <SortableContainer dndKitId="7ca91a44-3b90-4f26-8d60-06a135053b4a" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="373de15a-019c-4540-b52d-0cd659d0ca8a" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="0cda3578-0c32-43c8-9400-1bd06e69d471" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="f9ecd222-d363-43eb-aa78-1bf22d0c0728" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        {!isMobile && <>
            <FloatingOrb delay={0} duration={8} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
            <FloatingOrb delay={2} duration={10} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
            <FloatingOrb delay={4} duration={12} size="medium" color="#E5ECF4" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />
          </>}

        <SortableContainer dndKitId="a5fdc2d0-4976-46f8-a4bf-503c7bb00142" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="db4d6039-27d6-4dec-9ded-c6ff67ae9750" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gray-900" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <SortableContainer dndKitId="29dc7e54-ea68-4e1d-8226-c0c5afbbfe26" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              <p className="text-xl sm:text-2xl md:text-4xl text-[#8A4FFF] font-semibold mb-10" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
                Software Engineer
              </p>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="58c337e6-a817-46e3-b220-19ac9a825522" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-6 mb-20" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "fa419a37-d9ac-4652-8234-1e9392eb6792"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "5bbea087-6c1f-4ee3-b9bb-6605eb4e6fc2"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "76fe9fff-837e-43bd-bdc7-be89ecf04e95"
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
              delay: 1.5 + idx * 0.3,
              type: "spring",
              stiffness: 200
            }} whileTap={{
              scale: 0.9
            }} className="p-5 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8A4FFF]/40 group" aria-label={label} data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Icon size={28} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.a>)}
            </SortableContainer>

            <SortableContainer dndKitId="3be8356c-73f9-4f77-b9fe-a8db82890bad" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="116ebea0-49e8-4637-9ef0-8e7bb491992f" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="0c456865-6bab-4c53-abb6-4f4f764ed7f9" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="4adc2c4c-9fd4-4336-b5a2-97e07abb9c1e" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="92b20ba9-edef-4fce-8bf3-18cd8bb77ef8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="2bef7fc7-5bd4-4dbc-9021-c53e81fbb749" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="5dd1ef21-d35a-4501-8494-528e7b5fcc19" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="bbdfac73-05fa-4426-bf17-3c7cc47c5f1e" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="d4fb3774-1d58-4bfe-b025-5ac16787476e" containerType="regular" prevTag="motion.div" initial={{
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
                <SortableContainer dndKitId="32194f04-8526-4806-9523-1703ecc7564b" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
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
                  mpid: "a70f29c6-59d9-439b-b740-d2c0f7b16485"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "3ca5707f-db9b-42d8-a7c2-11523a65080d"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "eee61be1-caab-406f-b8b9-b5eea97b07bd"
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

              <SortableContainer dndKitId="7de8ad5a-3c25-480b-ab70-c68d1a4585f9" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
                <SortableContainer dndKitId="f5f18184-b76f-4e26-8d48-e7045a891f10" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="2c1ae211-00b0-455f-a60a-3b55cf80f261" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="74e90177-0aef-45d7-8461-1406c89b83b4" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="96d91ea8-2554-4746-b399-77b6b77f0976" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="d6850635-164e-49fe-ab1c-d8dddbeca75c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="49c930cd-81a2-4abe-a9a6-796245118f4d" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="63735404-4e67-4d57-8c8f-c9ea4faab460" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="9d72355c-720a-4143-88c7-0e024ec8ebdd" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="a6646a96-4e1f-4b39-a9fc-6b500005710f" containerType="regular" prevTag="section" id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="2cb36e95-9584-4803-b60b-836b22453f10" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1e1d714b-98e7-4490-9d3f-fcc9cedf427a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="0fdbb9cb-1144-4f38-a26c-29f8dd350d25" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-6 justify-center" initial={{
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
              <SortableContainer dndKitId="ec5a0b4a-d761-45ee-83f7-39344f99c07e" containerType="regular" prevTag="motion.div" whileHover={{
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
            <SortableContainer dndKitId="9753d2a3-a303-4be0-81e2-e85bb526a4b0" containerType="regular" prevTag="div" className="relative" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx" />
              
              {/* Marquee Container */}
              <SortableContainer dndKitId="81a99609-7d35-421a-bca8-ef5dce66e2c6" containerType="regular" prevTag="div" className="flex overflow-hidden py-8" data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
                {/* First set of technologies */}
                <SortableContainer dndKitId="8ce61f2b-92ed-47e7-bacd-f197c8dab3ef" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
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
                <SortableContainer dndKitId="bc29eb5f-e7ad-4c7f-8a11-39cbc74ffa72" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
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
            <SortableContainer dndKitId="2f33355f-acbd-437b-925f-70f0b9392c20" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="bcb83ba5-6ac1-4fc3-951c-ba884ac6bcf5" containerType="regular" prevTag="div" className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm" data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="5b524ff5-dbae-44ce-b064-643f1e794a5a" containerType="regular" prevTag="div" className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Sparkles className="text-white" size={20} />
                </SortableContainer>
                <SortableContainer dndKitId="ccee4f00-0996-4952-ad93-543078eeda77" containerType="regular" prevTag="div" className="text-left" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="3f99b382-52ff-4de3-9fcd-cb09ec47d3d5" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="89b51469-d3d6-4d0c-8a05-0a39cb4c13bc" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="64b6acd9-2c5a-45ee-af62-019c9a3448cd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="5867adb4-63c8-4c29-a2e2-b2e9cb19ebc2" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="bf8265ea-94fd-4a77-a4df-901a01ead7f5" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="b06d1841-72d1-48b0-8c1f-7a8093e2e413" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
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
                    {project.tech.map((tech, techIndex) => <motion.span data-magicpath-motion-tag="motion.span" key={techIndex} className="px-3 py-1.5 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-semibold border border-[#8A4FFF]/10" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
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

            <SortableContainer dndKitId="82e46cee-a181-46c2-87cc-ffa0d148b967" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="85c1f9bd-6d9c-4613-a27b-8fa43ab5c1bd" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="134" data-magicpath-path="KyleParksPortfolio.tsx">
        {!isMobile && <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="135" data-magicpath-path="KyleParksPortfolio.tsx" />}

        <SortableContainer dndKitId="384b6572-c4ad-4b52-b80a-70ebc25a9a12" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="136" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="3784e8f7-c5b6-4d64-b65f-09c78a56ab94" containerType="regular" prevTag="motion.div" initial={{
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

            <SortableContainer dndKitId="66e1295a-03d9-4dfb-ae1c-e14b8e71328b" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20" initial={{
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

            {/* Download Resume Button */}
            <SortableContainer dndKitId="ea9f7675-7b09-48a1-aa2c-5af8572ffa0b" containerType="regular" prevTag="motion.div" className="flex items-center justify-center mb-16" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} viewport={{
            once: true
          }} data-magicpath-id="145" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="/resume.pdf" download whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl" data-magicpath-id="146" data-magicpath-path="KyleParksPortfolio.tsx">
                <Download size={24} data-magicpath-id="147" data-magicpath-path="KyleParksPortfolio.tsx" />
                Download Resume
              </motion.a>
            </SortableContainer>

            {/* Footer content */}
            <SortableContainer dndKitId="9661752a-14f6-4b8c-84ff-516f18dc6958" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="148" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="0fee9432-e373-4a7f-a202-ab9348756259" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="149" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="150" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="4ddab6aa-c16b-4dfe-a6dd-31e2f5cd9871" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="151" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "3a07d1cb-8b78-4b47-a0bf-46a860edf11a"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "ad42d4e7-46f9-4a6f-a92c-4c4c73a2f1a6"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "d710366a-d974-4bdb-8238-ed4baab97dda"
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.3,
                  y: -5,
                  rotate: 10
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label} data-magicpath-id="152" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={24} data-magicpath-id="153" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.a>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};