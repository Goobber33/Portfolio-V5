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
  mpid: "0fac7875-7adb-4209-953c-7da514792c49"
}, {
  name: 'TypeScript',
  icon: '📘',
  color: '#3178C6',
  category: 'Frontend',
  mpid: "c6f04bab-f5a6-45ca-8b13-e3472756c2ef"
}, {
  name: 'JavaScript',
  icon: '🟨',
  color: '#F7DF1E',
  category: 'Frontend',
  mpid: "a81492c3-eff9-48f4-878b-e4377efc331b"
}, {
  name: 'HTML',
  icon: '🌐',
  color: '#E34F26',
  category: 'Frontend',
  mpid: "cb5eb6b9-71b1-4a1a-858e-aea1c9675909"
}, {
  name: 'CSS',
  icon: '🎨',
  color: '#1572B6',
  category: 'Frontend',
  mpid: "0a683a69-6748-405c-99ed-89a7784247f7"
}, {
  name: 'Tailwind',
  icon: '💨',
  color: '#06B6D4',
  category: 'Frontend',
  mpid: "8ceb7b8b-08ea-48f3-9a6d-282c7cc3139c"
}, {
  name: 'Next.js',
  icon: '▲',
  color: '#000000',
  category: 'Frontend',
  mpid: "9ef90375-e4d4-44fa-91fa-b7d3548de466"
}, {
  name: 'Node.js',
  icon: '🟢',
  color: '#339933',
  category: 'Backend',
  mpid: "0a6c06e0-4ebf-4f0f-9708-da569195ce22"
}, {
  name: 'Express',
  icon: '🚂',
  color: '#000000',
  category: 'Backend',
  mpid: "af24c691-7319-44a0-8e3c-83902d466f4c"
}, {
  name: 'GraphQL',
  icon: '◆',
  color: '#E10098',
  category: 'Backend',
  mpid: "a81d7009-d320-4429-acf8-f7563b004cde"
}, {
  name: 'REST API',
  icon: '🔗',
  color: '#8A4FFF',
  category: 'Backend',
  mpid: "32e8a3ed-bfd0-4766-970f-61d1667c0bf4"
}, {
  name: 'MongoDB',
  icon: '🍃',
  color: '#47A248',
  category: 'Database',
  mpid: "8a2d8361-dfe9-4e11-b2e3-7aab8ba1ff1e"
}, {
  name: 'PostgreSQL',
  icon: '🐘',
  color: '#4169E1',
  category: 'Database',
  mpid: "c840801a-5e79-43a0-af63-437162312e44"
}, {
  name: 'Git',
  icon: '📦',
  color: '#F05032',
  category: 'Tools',
  mpid: "3791e553-25d9-423f-afa5-aaa87e63b6f3"
}, {
  name: 'Docker',
  icon: '🐳',
  color: '#2496ED',
  category: 'Tools',
  mpid: "38c6444a-a9d7-4062-a432-1c1c2d685a81"
}, {
  name: 'AWS',
  icon: '☁️',
  color: '#FF9900',
  category: 'Tools',
  mpid: "95eddd37-b4af-4ae3-b500-84daa71f41a1"
}, {
  name: 'Webpack',
  icon: '📦',
  color: '#8DD6F9',
  category: 'Tools',
  mpid: "67598b89-328c-405c-8b2b-d73a7bec92d3"
}, {
  name: 'Vite',
  icon: '⚡',
  color: '#646CFF',
  category: 'Tools',
  mpid: "ba915c04-e0cf-4fd5-b452-4b210eb36f12"
}, {
  name: 'Jest',
  icon: '🃏',
  color: '#C21325',
  category: 'Testing',
  mpid: "46dec9a3-564c-4f6f-aa09-ca0e83c3e243"
}, {
  name: 'Testing Library',
  icon: '✅',
  color: '#4CAF50',
  category: 'Testing',
  mpid: "00e47d00-af64-435f-8712-07498662a169"
}] as any[];
const skillCategories = [{
  name: 'Frontend Development',
  icon: '🎨',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Frontend'),
  mpid: "ff0718df-0c6f-4265-887f-3bb4e77bd90c"
}, {
  name: 'Backend Development',
  icon: '⚙️',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Backend'),
  mpid: "dfeaed81-7f4b-4b19-8d3b-d9221edb39ef"
}, {
  name: 'Database & Storage',
  icon: '💾',
  color: '#C3BEF0',
  skills: technologies.filter(t => t.category === 'Database'),
  mpid: "33febbd9-aa36-4f72-86cd-381bd4baa423"
}, {
  name: 'Tools & DevOps',
  icon: '🛠️',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Tools'),
  mpid: "42cfa485-630b-46c2-8240-15e4b56a72f1"
}, {
  name: 'Testing & Quality',
  icon: '✓',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Testing'),
  mpid: "43ab2855-e12e-4866-b013-3b315fc847be"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "02b1a856-73a4-486e-937d-396574dbc587"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "cf3b2bb3-d944-4f95-b87a-b4917be5165c"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "b7cc37df-1256-411e-a432-8428f4555fa9"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "f6a1523c-4d98-4d8e-baff-9dfced3bfb0c"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "234c4796-cd22-40d8-989d-8ede394e2b13"
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
  return <SortableContainer dndKitId="0a6ae2e7-2f78-42ee-8974-93687beb7032" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="e3a78bda-59fc-4dcb-b73e-6e4d52ad65d3" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
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
        <SortableContainer dndKitId="f160e445-02bd-4ea3-b94b-660789bc3c6d" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="faf20c4b-cda4-4d56-99e3-b5052c02703e" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="46fa981b-6221-4df6-a70d-b9ebe1b60471" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="bf22f7f3-b6da-4097-9ba4-2449b34bdfa5" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
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

            <SortableContainer dndKitId="c1c90104-a805-471c-93c8-5499b78f6280" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="ab13ef80-85a0-41f6-ba95-d5ccc5a2a468" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="e305f1fe-eb3a-41f2-a873-1ab5a5bb2819" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="b91860df-fb0b-4121-8d0b-9d912d9edfaf" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <FloatingOrb delay={0} duration={8} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={2} duration={10} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={4} duration={12} size="medium" color="#E5ECF4" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="f5806008-2bf2-4099-b688-bae55f906f30" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="00fa555f-7de9-4b05-8066-1bd34218432d" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gray-900" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <SortableContainer dndKitId="89bde32d-386a-486b-ba27-2f1d9cdbfd7f" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              <p className="text-xl sm:text-2xl md:text-4xl text-[#8A4FFF] font-semibold mb-10" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
                Software Engineer
              </p>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="a2b1dc8d-d9b2-445b-b0fd-547040d5a814" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-6 mb-20" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "450015bb-74c3-486c-8ab5-69b32cbeb217"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "32d76869-1319-4f00-99cd-615433287c31"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "afc61674-769b-402c-82e0-8f96f2f2ce29"
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

            <SortableContainer dndKitId="2fe54a87-3425-416e-939a-d0c7cdc9c9a0" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="b78381bc-5483-442a-8941-f61d1c61d407" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="3f1e8389-a06d-4bba-a35b-0a1b3f8e2e43" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="a9708494-9de2-4f28-bead-9d5f7eb1ebaf" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="3db83e93-0af0-4277-8864-6c3484c3f603" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="2b08ad46-e89e-4c33-a813-c2aaddcf1540" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="aa8d29f7-16a1-4dbf-b163-b34b98478c27" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="4f346708-148e-487c-989d-0c41996c26d0" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="27326ef6-2d81-41ce-a21f-85df93bf8511" containerType="regular" prevTag="motion.div" initial={{
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
                <SortableContainer dndKitId="787b82aa-039d-4af5-8abe-d268d43795b0" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
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
                  mpid: "8e55ac1b-0c7a-45af-921f-61dc37d86966"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "c2f3fa5c-87df-4f9b-bd00-77fb78233323"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "1369e5e8-8270-4762-9a69-f3eb624e8369"
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

              <SortableContainer dndKitId="1edab7c5-0e84-4136-a9b5-9f07baa3b915" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
                <SortableContainer dndKitId="d4527fd6-88c2-48ff-b4fd-2385c3e0ff58" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="0cbbadfd-5e98-4f35-bd69-8a20d4a7bf1d" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.img data-magicpath-motion-tag="motion.img" src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.4
                  }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>

                {/* Enhanced decorative elements */}
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
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Education Section - Enhanced */}
      <SortableContainer dndKitId="d0a2ea92-af37-4f06-918d-14b5834421c8" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="c4f496d1-910d-4867-90ae-38cb16ccd745" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="3ef6a8b9-3104-4972-93de-d68e2e627986" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="04e8076f-4460-4c62-9e48-e87d1ce5e4cf" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
          }} data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="24a58331-1ab6-4634-ad79-c7e879edffbf" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="eef00914-82a8-4e9a-a000-d33af1e0a436" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
              {education.map((edu, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              x: -100,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              x: 0,
              scale: 1
            }} transition={{
              duration: 0.7,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.05,
              x: 20
            }} className="bg-white rounded-3xl p-8 border-l-[8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{
              borderColor: edu.color
            }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.institution}
                    </h3>
                    <motion.span data-magicpath-motion-tag="motion.span" className="px-5 py-2.5 rounded-full text-sm font-bold inline-block w-fit shadow-sm" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }} whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5
                }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-lg font-semibold mb-3" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:unknown" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
                    {edu.degree}
                  </p>
                  <p className="text-gray-700 leading-relaxed" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:unknown" data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Skills Section - Enhanced */}
      <SortableContainer dndKitId="4afd5c67-1ace-4398-91f3-8e6764a0ef6a" containerType="regular" prevTag="section" id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="179e29cd-2971-4116-82e6-05de34313629" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="ec462d74-cfaa-4b55-aa7d-a5f03415c51b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="64477351-96af-4250-86cb-7ad9c45b5e2a" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-6 justify-center" initial={{
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
          }} data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="825aab75-3e32-42b3-9537-60699623698c" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={32} className="text-white" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">Skills & Technologies</h2>
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
          }} data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">
              A comprehensive toolkit of modern technologies and frameworks
            </motion.p>

            {/* Infinite Marquee Animation */}
            <SortableContainer dndKitId="ce896dea-3ae3-473e-9d79-d031f8941b92" containerType="regular" prevTag="div" className="relative" data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
              
              {/* Marquee Container */}
              <SortableContainer dndKitId="95e9d17d-2c89-49b2-83b2-da2c3c3f6990" containerType="regular" prevTag="div" className="flex overflow-hidden py-8" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
                {/* First set of technologies */}
                <SortableContainer dndKitId="122e2a1f-2906-4520-ace7-713eabb51c37" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
                x: [0, -1920]
              }} transition={{
                duration: shouldReduceMotion ? 80 : 40,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
                  {technologies.map((tech, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`tech-1-${index}`} whileHover={shouldReduceMotion ? {} : {
                  scale: 1.15,
                  y: -8
                }} className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx" />
                      
                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
                        <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.icon}
                        </span>
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                  }} data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.div>)}
                </SortableContainer>

                {/* Second set (duplicate for seamless loop) */}
                <SortableContainer dndKitId="07c35124-e72f-4ed1-a02e-2a6a5ae4d222" containerType="collection" prevTag="motion.div" className="flex gap-8 shrink-0" animate={{
                x: [0, -1920]
              }} transition={{
                duration: shouldReduceMotion ? 80 : 40,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx">
                  {technologies.map((tech, index) => <motion.div data-magicpath-motion-tag="motion.div" key={`tech-2-${index}`} whileHover={shouldReduceMotion ? {} : {
                  scale: 1.15,
                  y: -8
                }} className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx" />
                      
                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
                        <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="101" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.icon}
                        </span>
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300" data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="102" data-magicpath-path="KyleParksPortfolio.tsx">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div data-magicpath-motion-tag="motion.div" className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                  }} data-magicpath-uuid={(tech as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Tech Summary - Professional Badge */}
            <SortableContainer dndKitId="6b6a0895-5b68-4247-9e57-aa85411650d6" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="mt-16 flex justify-center" data-magicpath-id="104" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="0c51b8ae-d7cd-42c2-bd07-7d3e305b3826" containerType="regular" prevTag="div" className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm" data-magicpath-id="105" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="4c6be60e-8554-4f47-9969-5ec87916f31f" containerType="regular" prevTag="div" className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Sparkles className="text-white" size={20} />
                </SortableContainer>
                <SortableContainer dndKitId="eddbe142-6c14-4292-8899-7360dd109683" containerType="regular" prevTag="div" className="text-left" data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">Technologies Mastered</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent" data-magicpath-id="109" data-magicpath-path="KyleParksPortfolio.tsx">
                    {technologies.length}+
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects Section - Enhanced */}
      <SortableContainer dndKitId="5493be30-8146-4f57-a17e-b87f52705da1" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="fd23bc2c-0b9a-4aca-a486-7b16b8cac821" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="a21cdfa0-e89c-4229-9312-8d2c2a2f21c5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="1cd2ad38-b977-4547-b22e-717edf8d28ee" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
          }} data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="25df8390-e4e3-4439-9d55-7ae715d8e4f2" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="fe5f9d50-57af-43b7-8eb4-31ba37b41545" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx">
              {projects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              scale: 0.8,
              y: 50
            }} whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.05,
              rotate: 2
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group relative overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
                scale: 1.05
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="120" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">
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
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a data-magicpath-motion-tag="motion.a" href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold" whileHover={{
                x: 10
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project
                    <motion.span data-magicpath-motion-tag="motion.span" animate={{
                  x: [0, 8, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
                      <ExternalLink size={20} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </SortableContainer>

            <SortableContainer dndKitId="a25857e4-fdcf-49ac-b405-3532188dc559" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Github size={26} data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
                View More Projects
                <motion.span data-magicpath-motion-tag="motion.span" className="transition-transform duration-300 group-hover:translate-x-2" data-magicpath-id="131" data-magicpath-path="KyleParksPortfolio.tsx">
                  <ExternalLink size={24} data-magicpath-id="132" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Enhanced */}
      <SortableContainer dndKitId="d96dfeba-cecb-42ee-b0ec-be8b1aa546b8" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="133" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" shouldReduceMotion={shouldReduceMotion} data-magicpath-id="134" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="0340c930-0f56-4a35-8f74-b19b333791fd" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="135" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c4f8020c-dfb3-4ca2-ab0a-d0c6d606b2e1" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 80
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} viewport={{
          once: true
        }} data-magicpath-id="136" data-magicpath-path="KyleParksPortfolio.tsx">
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
          }} data-magicpath-id="137" data-magicpath-path="KyleParksPortfolio.tsx">
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
          }} data-magicpath-id="138" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </motion.p>

            <SortableContainer dndKitId="3e8ab30d-ae87-40a6-9794-e9745a946a7e" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20" initial={{
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
          }} data-magicpath-id="139" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl" data-magicpath-id="140" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={24} data-magicpath-id="141" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl" data-magicpath-id="142" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={24} data-magicpath-id="143" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>

            {/* Footer content */}
            <SortableContainer dndKitId="87f006f9-221c-4c0c-bc1f-ae478dc20665" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="144" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="f507ea55-996a-4a92-8962-f81c258bafd9" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="145" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="146" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="b0712659-c8fb-4b8d-b359-747a222bfdb2" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="147" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "89aeae15-07d5-40cd-a932-5f2d4cfb46b1"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "6ce3e11e-aaef-4ad7-b070-d276f0c5da85"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "3332e257-d0e0-48de-9d84-a59a185f9072"
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.3,
                  y: -5,
                  rotate: 10
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label} data-magicpath-id="148" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={24} data-magicpath-id="149" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.a>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};