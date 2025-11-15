import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles, Award, Zap } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "53637cd2-759a-4eb9-9871-de2ffafbcdac"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "327ecba8-4460-45ad-aa43-4a5a94d24ed8"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "29838630-f4de-4629-b88a-4b09ca5fbf2b"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "317dca94-d7c2-47f1-9a80-06d2686d5f33"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "230226bc-f400-48de-b5a3-8f98322bc33f"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "658fe99d-8264-4105-83f0-a4de2e44105f"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "656b1bbc-2f9f-407d-9647-b6cf0a49f40f"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "330e2622-1932-4190-b3e2-415c58accb80"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "92674644-a54a-4ef7-923e-f012b230674f"
}] as any[];

// Floating decoration component with enhanced motion
const FloatingOrb = ({
  delay = 0,
  duration = 20,
  size = 'large',
  color = '#8A4FFF'
}) => {
  return <motion.div data-magicpath-motion-tag="motion.div" className="absolute rounded-full blur-3xl opacity-20 pointer-events-none" style={{
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    width: size === 'large' ? '500px' : '300px',
    height: size === 'large' ? '500px' : '300px'
  }} animate={{
    x: ['0%', '100%', '0%'],
    y: ['0%', '100%', '0%'],
    scale: [1, 1.3, 1]
  }} transition={{
    duration,
    repeat: Infinity,
    delay,
    ease: 'easeInOut'
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

  // Enhanced parallax effects
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.95]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0.9, 0.98]);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // @return
  return <SortableContainer dndKitId="30c09d08-4502-4540-9e22-477dca616128" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/20" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="fab6b563-01e4-4ef4-91f4-06eb78995bb1" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
      backgroundColor: 'rgba(255, 255, 255, var(--nav-opacity))',
      '--nav-opacity': navOpacity
    } as any} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }} data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="89875424-4d5d-46ea-90d4-bb80fe0223c3" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c58636fe-8645-4c72-9648-b9525b42c19b" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="0c782cfd-2858-4aa3-b6d4-cfbc87f1578d" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
            scale: 1.05
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
              scale: 1.3,
              opacity: 1
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx" />
            </SortableContainer>

            <div className="hidden md:flex items-center space-x-1" data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="1202ded6-ce7a-4a4a-a450-c99a197eef14" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-id="11" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                y: -2
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

            <SortableContainer dndKitId="dd9d54fb-f4c5-4ab3-b21c-f5cff436c9d2" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="b4a753e9-aff6-4add-a19f-10aa4cf10019" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="2ad2d7cf-6d7a-4ab7-aa26-162a2ac28819" containerType="regular" prevTag="motion.div" initial={{
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

      {/* Hero Section - Enhanced */}
      <SortableContainer dndKitId="dddaa951-2418-47a1-80d4-24fa814eb78c" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <FloatingOrb delay={0} duration={20} size="large" color="#8A4FFF" data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={5} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={10} duration={30} size="medium" color="#E5ECF4" data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="607d9a98-009b-47b0-a10d-7ac8d3c54bf9" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="44c1f432-2040-413b-95e0-d426f8d43901" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-gray-900" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-[#8A4FFF] font-semibold mb-8" data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              Software Engineer
            </motion.p>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="469a62c6-6d91-44c5-aa1f-bd8875f88458" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-4 mb-16" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "19a85064-54e7-45a0-ad74-7bf3b3aa4117"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "b95d1166-435f-4192-bc83-bd20e73ac339"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "f688d4cd-c5a3-4ba2-8373-cfea744ed5fe"
            }].map(({
              icon: Icon,
              href,
              label
            }, idx) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
              scale: 1.15,
              rotate: idx % 2 === 0 ? 5 : -5,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="p-4 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#8A4FFF]/20 group" aria-label={label} data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Icon size={24} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.a>)}
            </SortableContainer>

            <SortableContainer dndKitId="31cfbff1-a8f2-48d4-a43d-7ba33374f14e" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-2 mx-auto group" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} whileHover={{
            scale: 1.1
          }} data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-sm font-semibold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="15451392-4d8a-4a19-88c3-829b384a9ad1" containerType="regular" prevTag="motion.div" animate={{
              y: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }} data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
                <ChevronDown size={32} data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Enhanced */}
      <SortableContainer dndKitId="6bbc14e1-3b49-46a6-8dfd-7eda3cc3e161" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="39" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="eb7b8e17-fbb2-4d52-bec8-9c2abd4e62a9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="28038795-3bd3-419c-89f8-dbe9d8dca066" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="eccfca19-431a-4100-99a7-1b55c9e3febf" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="e65dcf33-3a85-40b9-b80b-d5b8cf664a51" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="120d1278-0d41-410d-bab8-dcb9c5c7c550" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="15d7aaf4-1b38-4c72-9320-5f7bdd798087" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="space-y-6" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm a dedicated Computer Science student at Arizona State University,
                  where I'm part of the prestigious Barrett Honors College. My journey in
                  software development began with the University of Washington's intensive
                  Full Stack Web Development bootcamp in 2023.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm passionate about creating efficient, user-friendly applications and
                  constantly expanding my technical expertise. My approach combines academic
                  rigor with practical, hands-on experience in modern web technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx">
                  When I'm not coding, I enjoy exploring new technologies, contributing to
                  open-source projects, and collaborating with fellow developers to solve
                  challenging problems.
                </p>

                {/* Quick stats */}
                <SortableContainer dndKitId="89cab43b-fec7-44eb-a40a-b982dbab5696" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }} viewport={{
                once: true
              }} data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  label: 'Projects',
                  value: '15+',
                  icon: Briefcase,
                  mpid: "bb2fe6a0-7f0d-4cee-9bfc-fd7977ce546c"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "720bf152-78e2-4206-94aa-d671f16ff72c"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "1a6bf5b5-c166-46ad-8f96-f56749e3248f"
                }].map(({
                  label,
                  value,
                  icon: Icon
                }) => <motion.div data-magicpath-motion-tag="motion.div" key={label} whileHover={{
                  y: -5,
                  scale: 1.05
                }} className="text-center p-4 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-lg transition-all duration-300" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={24} className="text-[#8A4FFF] mx-auto mb-2" data-magicpath-id="53" data-magicpath-path="KyleParksPortfolio.tsx" />
                      <div className="text-2xl font-bold text-gray-900" data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">{value}</div>
                      <div className="text-sm text-gray-600 font-medium" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">{label}</div>
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="7b1edcdd-77e2-4a43-b3b7-f6d8e1d9094a" containerType="regular" prevTag="motion.div" className="relative" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} viewport={{
              once: true
            }} data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="5a841b2f-2dcf-499e-babf-290b7478b972" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.02,
                rotate: 1
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="51a00da1-31f1-45b8-b62a-984a8a6c11e5" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.img data-magicpath-motion-tag="motion.img" src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.05
                  }} transition={{
                    duration: 0.4
                  }} data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>

                {/* Enhanced decorative elements */}
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -top-6 -right-6 w-32 h-32 bg-[#8A4FFF]/20 rounded-full blur-3xl -z-10" animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx" />
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#C3BEF0]/20 rounded-full blur-3xl -z-10" animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.6, 0.3, 0.6]
              }} transition={{
                duration: 5,
                repeat: Infinity
              }} data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Education Section - Enhanced */}
      <SortableContainer dndKitId="01dccb6c-8f95-4fed-b684-e2bc3971e14b" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="056aa507-b0af-4511-a39b-923d217fe716" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="dd92c288-81a1-46af-97ee-0fcde892feb8" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="269db0a6-1cd0-4044-9ba5-6f7d154d7281" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="e0a089cd-3cbb-416e-9282-74c5cfa2fe11" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="9ec574b6-6731-40b7-9acc-5d3dbb7e6610" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
              {education.map((edu, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.02,
              x: 10
            }} className="bg-white rounded-3xl p-8 border-l-[6px] hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{
              borderColor: edu.color
            }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.institution}
                    </h3>
                    <motion.span data-magicpath-motion-tag="motion.span" className="px-5 py-2.5 rounded-full text-sm font-bold inline-block w-fit shadow-sm" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }} whileHover={{
                  scale: 1.1,
                  y: -2
                }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-lg font-semibold mb-3" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:unknown" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
                    {edu.degree}
                  </p>
                  <p className="text-gray-700 leading-relaxed" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:unknown" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Skills Section - Enhanced */}
      <SortableContainer dndKitId="001b29ee-1065-41c1-bcb8-ca0ccc116348" containerType="regular" prevTag="section" id="skills" className="py-32 bg-white" data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="f7ec2eb0-ecf7-4b0a-a671-3b5f7d250a43" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="4744d5c3-4e15-4e21-9c25-b98d47b3b32e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="2489a03e-a498-468f-85ca-cd61e68ddd77" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="0377674f-93c6-49d8-a268-a4a1eedb3ecc" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={32} className="text-white" data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>

            <SortableContainer dndKitId="95a23976-f7f3-459d-9dcc-d940c62b9198" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">
              {skills.map((skillGroup, groupIndex) => <motion.div data-magicpath-motion-tag="motion.div" key={groupIndex} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: groupIndex * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              y: -10,
              scale: 1.03
            }} className="bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] rounded-3xl p-7 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#8A4FFF]/20 group" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-6 flex items-center gap-2" style={{
                color: '#8A4FFF'
              }} whileHover={{
                scale: 1.05
              }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Zap size={20} className="group-hover:text-[#C3BEF0] transition-colors" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx" />
                    {skillGroup.category}
                  </motion.h3>
                  <ul className="space-y-3" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">
                    {skillGroup.items.map((skill, skillIndex) => <motion.li data-magicpath-motion-tag="motion.li" key={skillIndex} className="text-gray-700 flex items-center gap-3 font-medium" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: groupIndex * 0.1 + skillIndex * 0.05
                }} viewport={{
                  once: true
                }} whileHover={{
                  x: 8
                }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
                        <motion.span data-magicpath-motion-tag="motion.span" className="w-2 h-2 rounded-full bg-[#8A4FFF]" whileHover={{
                    scale: 2
                  }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx" />
                        {skill}
                      </motion.li>)}
                  </ul>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects Section - Enhanced */}
      <SortableContainer dndKitId="4415614e-ef4a-4b61-83a5-7fe4985cf22b" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={30} size="large" color="#8A4FFF" data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="2274c55a-71d4-43d9-b66a-eec91b1990d2" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="620b66ac-5fcf-46e0-a97b-d0da227be567" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="f79b8b49-7da0-44a0-8d2f-05380eed330e" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="33c8d2d8-5407-4dae-8052-0f176e981771" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="41337caa-ebf5-4b41-89c5-38c5a69856f8" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
              {projects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              y: -15,
              scale: 1.03
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group relative overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
                scale: 1.02
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="101" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="102" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.tech.map((tech, techIndex) => <motion.span data-magicpath-motion-tag="motion.span" key={techIndex} className="px-3 py-1.5 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-semibold border border-[#8A4FFF]/10" whileHover={{
                  scale: 1.1,
                  y: -2
                }} initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: index * 0.1 + techIndex * 0.05
                }} viewport={{
                  once: true
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a data-magicpath-motion-tag="motion.a" href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold" whileHover={{
                x: 5
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project
                    <motion.span data-magicpath-motion-tag="motion.span" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                      <ExternalLink size={18} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </SortableContainer>

            <SortableContainer dndKitId="011c5fd6-5f73-472c-83a3-3f3eb210511c" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="109" data-magicpath-path="KyleParksPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Github size={24} data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
                View More Projects
                <motion.span data-magicpath-motion-tag="motion.span" className="transition-transform duration-300 group-hover:translate-x-2" data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
                  <ExternalLink size={22} data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Enhanced */}
      <SortableContainer dndKitId="61ab113a-af73-4d7e-b346-1426a241db79" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="34351aea-e3a3-45d8-9537-f83fd18a7f1a" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="8d6e5451-97dd-4998-ae49-485a0bea09ea" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-4xl md:text-5xl font-bold text-white mb-8" initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx">
              Let's Work Together
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-white/95 mb-14 max-w-2xl mx-auto leading-relaxed" initial={{
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
          }} data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </motion.p>

            <SortableContainer dndKitId="ac663763-6eb1-4ee1-92c5-0cb5e5664fae" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} data-magicpath-id="120" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="px-10 py-5 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl" data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={22} data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl" data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={22} data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>

            {/* Footer content */}
            <SortableContainer dndKitId="5ea917ee-5fd5-466c-a500-3105e1ea3e02" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="de1f2394-e616-4948-be4f-7a91972f99f0" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="1fe403d2-dcd8-4fe7-80a9-8a09b245857a" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "f1b23c12-cd88-48b2-894f-0a6e59e57127"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "6c9d24ef-d734-4497-be9c-a7e4a76cdd29"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "c15e108c-2873-4531-a2c3-beca1f45109e"
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.15,
                  y: -3
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label} data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={22} data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.a>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};