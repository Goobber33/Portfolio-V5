import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles, Award, Zap } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "657085ec-a46e-4ea0-9e26-c60cef7499fe"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "3aed7d81-c3be-4d46-82be-0c5e520568f6"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "68c0414b-a351-4eef-8503-4f025b0092a1"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "e4ce3542-4233-445e-9e7f-37caa4e9e53a"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "edb39709-ccaa-4454-9ed4-43fcb7c0c54e"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "89ec353d-1cab-4caa-8c1d-081a64c14125"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "6e99bf95-26ae-47c4-9081-6a2f31da856a"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "938e429e-cb83-47aa-b3b3-7b9dbd4e1e4d"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "5a428878-f124-4d01-a38f-b67766c6f3dc"
}] as any[];

// Enhanced Floating decoration component with much more prominent motion
const FloatingOrb = ({
  delay = 0,
  duration = 20,
  size = 'large',
  color = '#8A4FFF'
}) => {
  return <motion.div data-magicpath-motion-tag="motion.div" className="absolute rounded-full blur-3xl opacity-40 pointer-events-none" style={{
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    width: size === 'large' ? '800px' : '600px',
    height: size === 'large' ? '800px' : '600px'
  }} animate={{
    x: ['-20%', '120%', '-20%'],
    y: ['-10%', '10%', '-10%'],
    scale: [1, 1.5, 1]
  }} transition={{
    duration: duration * 2,
    repeat: Infinity,
    delay,
    ease: 'easeInOut',
    repeatType: 'loop'
  }} data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx" />;
};

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
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 300]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.85]);
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
  return <SortableContainer dndKitId="c4658c8e-ccbd-4b7c-9d6d-304704fbad21" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="c8706533-c477-4f9e-b199-ffd396ed66f5" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
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
        <SortableContainer dndKitId="7814f496-be41-422e-9412-35ab7c6375d3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1386be4d-9c85-4b8e-86cf-5d27d88e91eb" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="329b80c5-ce9a-483e-a16d-c479ce5987eb" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="2f474da4-d7e1-4c4a-9fa4-ca16118e05a5" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
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

            <SortableContainer dndKitId="1fb648d1-0a9a-4ba7-aea5-64594019a81f" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="97fd07ae-96f4-49ea-a20a-1c9031b2efa4" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="947e7d32-77a8-4fe0-b28e-99fe021dfd73" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="b6544a3d-c143-4e2c-b1fc-1203b9be08bb" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <FloatingOrb delay={0} duration={15} size="large" color="#8A4FFF" data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={3} duration={18} size="medium" color="#C3BEF0" data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={6} duration={22} size="medium" color="#E5ECF4" data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="23676a33-8af3-4d2f-8880-2f80778d0846" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="7004ec0d-449b-4530-9ced-0208ffbb010e" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gray-900" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <SortableContainer dndKitId="cdace7f2-5005-4c92-bfb6-da53e2e4e544" containerType="regular" prevTag="motion.div" variants={itemVariants} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              <p className="text-xl sm:text-2xl md:text-4xl text-[#8A4FFF] font-semibold mb-10" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
                Software Engineer
              </p>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="176ab696-eda3-4957-8b4a-546fab308201" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-6 mb-20" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "813f9b02-cc80-4c09-a4c7-630e5ba95299"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "a4b6d450-ea06-4383-b661-1cbdd682330c"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "fb4d87c0-d71a-45d5-9418-5b391186b19b"
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

            <SortableContainer dndKitId="ff1294f0-6d78-4a93-9c16-42705056d34f" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group" animate={{
            y: [0, 20, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} whileHover={{
            scale: 1.2
          }} data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="e1c8d62e-5ed9-44ee-abef-8dccfc0783ce" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="46bfe176-3803-4148-9227-47c61c987cd4" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="4dae757e-af6b-40b3-9530-fed0a8820106" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="6168706a-8565-4969-b70f-ff1d9b302a73" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="d03e1015-27b7-47fe-ba0b-950a0cea96de" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="f7ab7691-b0b8-411c-8b8f-f67e887de349" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="0db146df-822c-4c6b-921e-0445550c28ed" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="49a7828c-b8f2-4a5d-ba00-3c483a2fbdc6" containerType="regular" prevTag="motion.div" initial={{
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
                <SortableContainer dndKitId="057f14b0-a9c4-40da-b5e8-610cd1ab2f1d" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
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
                  mpid: "39c93b94-f6d8-4d8b-ab8d-f8b78d71e60e"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "1bec373e-7e85-4270-905f-04b423b9d381"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "34efbfe4-7a62-4c07-b309-cba65094b2b3"
                }].map(({
                  label,
                  value,
                  icon: Icon
                }) => <motion.div data-magicpath-motion-tag="motion.div" key={label} whileHover={{
                  y: -10,
                  scale: 1.1,
                  rotate: 5
                }} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-2xl hover:shadow-[#8A4FFF]/20 transition-all duration-300" data-magicpath-id="53" data-magicpath-path="KyleParksPortfolio.tsx">
                      <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                    rotate: 360
                  }} transition={{
                    duration: 0.5
                  }} data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">
                        <Icon size={28} className="text-[#8A4FFF] mx-auto mb-2" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx" />
                      </motion.div>
                      <div className="text-3xl font-bold text-gray-900" data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx">{value}</div>
                      <div className="text-sm text-gray-600 font-medium" data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">{label}</div>
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="f0b41825-e0a7-40b4-89ed-aa10a48390eb" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
            }} data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="83c1cefa-c691-4ca8-9f7d-3985d9a3fdfa" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="a60cb797-462e-4884-829e-8005b17f6e0e" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.img data-magicpath-motion-tag="motion.img" src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.4
                  }} data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>

                {/* Enhanced decorative elements */}
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -top-6 -right-6 w-40 h-40 bg-[#8A4FFF]/30 rounded-full blur-3xl -z-10" animate={{
                scale: [1, 1.6, 1],
                opacity: [0.3, 0.7, 0.3]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }} data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx" />
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C3BEF0]/30 rounded-full blur-3xl -z-10" animate={{
                scale: [1.6, 1, 1.6],
                opacity: [0.7, 0.3, 0.7]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Education Section - Enhanced */}
      <SortableContainer dndKitId="1ebf3fb9-8e17-4ae5-89ce-0bfbe17a8769" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="1141473a-e7cf-49da-b43e-523f97d9dc84" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="58a7ce26-7b85-480e-b2a0-399eab5a727e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="d097f318-cde5-4571-bf1d-98a0b916304f" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="cc5767f0-35ed-4597-81f8-b95068faf7fd" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="b3a3c836-3b33-42c2-a12a-da7284351172" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="26ceeeb8-625a-4aa1-be9d-e6a70b721602" containerType="regular" prevTag="section" id="skills" className="py-32 bg-white" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="9f206d24-115b-49ae-8b5f-0ce9b9563857" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="e869fdb8-dd2e-4de3-80fa-ad4eda5a99d6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="c269b972-3feb-4ce7-b928-8c72ca75c2ec" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
          }} data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="31e8c7be-3f75-45a3-98d7-2ae3497b275b" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={32} className="text-white" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>

            <SortableContainer dndKitId="3bb4e094-7b54-4471-b8c5-edc127b09213" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx">
              {skills.map((skillGroup, groupIndex) => <motion.div data-magicpath-motion-tag="motion.div" key={groupIndex} initial={{
              opacity: 0,
              y: 80,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              duration: 0.7,
              delay: groupIndex * 0.15,
              type: "spring",
              stiffness: 100
            }} viewport={{
              once: true
            }} whileHover={{
              y: -15,
              scale: 1.05,
              rotate: 2
            }} className="bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] rounded-3xl p-7 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#8A4FFF]/20 group" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-6 flex items-center gap-2" style={{
                color: '#8A4FFF'
              }} whileHover={{
                scale: 1.08
              }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Zap size={22} className="group-hover:text-[#C3BEF0] transition-colors" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.div>
                    {skillGroup.category}
                  </motion.h3>
                  <ul className="space-y-3" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
                    {skillGroup.items.map((skill, skillIndex) => <motion.li data-magicpath-motion-tag="motion.li" key={skillIndex} className="text-gray-700 flex items-center gap-3 font-medium" initial={{
                  opacity: 0,
                  x: -30
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: groupIndex * 0.15 + skillIndex * 0.08
                }} viewport={{
                  once: true
                }} whileHover={{
                  x: 12,
                  scale: 1.05
                }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
                        <motion.span data-magicpath-motion-tag="motion.span" className="w-2.5 h-2.5 rounded-full bg-[#8A4FFF]" whileHover={{
                    scale: 2.5
                  }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx" />
                        {skill}
                      </motion.li>)}
                  </ul>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects Section - Enhanced */}
      <SortableContainer dndKitId="c78f22b4-2f1d-4511-b58f-103b56c8267f" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="a4db2119-a359-44b2-90e1-13f6fc520b98" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="0b4fdeaa-9984-4590-9c6e-271aa783e5cd" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="12aeddd2-6bac-4e79-a773-295e5477d8b2" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
          }} data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="9a70a8b7-990a-4945-bc81-d352d9dcbf00" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="101" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="96c9a34b-8b0d-4e78-85a5-d41c9172d28e" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="102" data-magicpath-path="KyleParksPortfolio.tsx">
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
              y: -20,
              scale: 1.05,
              rotate: 2
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group relative overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
                scale: 1.05
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="104" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="105" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
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
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a data-magicpath-motion-tag="motion.a" href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold" whileHover={{
                x: 10
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project
                    <motion.span data-magicpath-motion-tag="motion.span" animate={{
                  x: [0, 8, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="KyleParksPortfolio.tsx">
                      <ExternalLink size={20} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </SortableContainer>

            <SortableContainer dndKitId="a1c5f450-7252-428e-a0fe-a48928e5c80f" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Github size={26} data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
                View More Projects
                <motion.span data-magicpath-motion-tag="motion.span" className="transition-transform duration-300 group-hover:translate-x-2" data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx">
                  <ExternalLink size={24} data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Enhanced */}
      <SortableContainer dndKitId="50e2d671-0ca4-4012-9764-6eafd2c5409c" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="c5cd00b8-4c92-4fe7-b6fd-d1539eaae703" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="4c4fdfcf-a064-458c-9134-b1893b92f5aa" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 80
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} viewport={{
          once: true
        }} data-magicpath-id="120" data-magicpath-path="KyleParksPortfolio.tsx">
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
          }} data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">
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
          }} data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </motion.p>

            <SortableContainer dndKitId="0da54071-bab8-4d54-9321-c9c1501433b9" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20" initial={{
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
          }} data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl" data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={24} data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl" data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={24} data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>

            {/* Footer content */}
            <SortableContainer dndKitId="af777b72-9d01-4819-bf9d-8371187992b3" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="1eeba419-5458-4b4c-9d49-5af32c6dcf3e" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="ec8aee6f-a8a6-4fc9-88b8-96c618c7b3fc" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="131" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "46fa14d7-7333-4579-8896-6fbea4ba2a16"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "d2b6259d-6df5-4352-9c8f-fefef9fabe06"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "81a54015-2fe8-4036-a344-2467a0c6e9f5"
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.3,
                  y: -5,
                  rotate: 10
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label} data-magicpath-id="132" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={24} data-magicpath-id="133" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.a>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};