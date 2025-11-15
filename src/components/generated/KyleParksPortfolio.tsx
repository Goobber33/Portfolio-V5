import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "ea63803f-f9e5-466e-858e-c4cbd2038e80"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "e98bf1b4-684f-4d7b-aa3c-a51949253a14"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "b682add0-9d92-46e1-ab27-5d8cfda81d5a"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "91e5ce86-76eb-48df-9eb9-f53a9aa71fdb"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "a24bf98f-2473-4eb4-a5fb-992aed9e897b"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "3185a0f3-8f69-49d6-bed7-c53ed257f773"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "e3955dad-81fa-47d1-8074-45a68d7d1d46"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "4e7539ea-22ec-4d80-80c1-cd95843c54ca"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "8105a530-39d4-4807-9c9c-5792d3eb35aa"
}] as any[];

// Floating decoration component
const FloatingOrb = ({
  delay = 0,
  duration = 20,
  size = 'large',
  color = '#8A4FFF'
}) => {
  return <motion.div data-magicpath-motion-tag="motion.div" className="absolute rounded-full blur-3xl opacity-20 pointer-events-none" style={{
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    width: size === 'large' ? '400px' : '250px',
    height: size === 'large' ? '400px' : '250px'
  }} animate={{
    x: ['0%', '100%', '0%'],
    y: ['0%', '100%', '0%'],
    scale: [1, 1.2, 1]
  }} transition={{
    duration,
    repeat: Infinity,
    delay,
    ease: 'easeInOut'
  }} data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx" />;
};

// @component: KyleParksPortfolio
export const KyleParksPortfolio = (props: KyleParksPortfolioProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const {
    scrollYProgress
  } = useScroll();

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const backgroundColor = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], ['#FFFFFF', '#FAFFFE', '#F8FFFD', '#F5FFFC', '#EFFFFA']);

  // Parallax effects
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0.9, 0.95]);
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
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // @return
  return <SortableContainer dndKitId="49569c93-c9c0-4658-a5d0-2e5199174f0b" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Progress bar */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A4FFF] via-[#C3BEF0] to-[#8A4FFF] origin-left z-50" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx" />

      <SortableContainer dndKitId="543bb1ed-09a8-4d88-a87e-29448a6a7706" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4] backdrop-blur-md" style={{
      backgroundColor: 'rgba(255, 255, 255, var(--nav-opacity))',
      '--nav-opacity': navOpacity
    } as any} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5,
      ease: 'easeOut'
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="244c3094-a44e-437a-9f56-25846914c266" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c24fda8e-b2f4-4729-89bf-a7be0032f468" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="0923f50f-d310-49cb-8644-b0af5c5ea0b4" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scrollToSection('home')} style={{
            color: '#8A4FFF'
          }} data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="relative z-10" data-magicpath-id="7" data-magicpath-path="KyleParksPortfolio.tsx">KP</span>
              <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/10 to-[#C3BEF0]/10 rounded-lg -z-10" initial={{
              scale: 0
            }} whileHover={{
              scale: 1.2
            }} transition={{
              duration: 0.3
            }} data-magicpath-id="8" data-magicpath-path="KyleParksPortfolio.tsx" />
            </SortableContainer>

            <div className="hidden md:flex items-center space-x-8" data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="7fc25a87-843e-49dd-b64d-dc62c42332c3" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium" data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-id="11" data-magicpath-path="KyleParksPortfolio.tsx">
                    {item}
                  </motion.span>
                  {activeSection === item.toLowerCase() && <motion.div data-magicpath-motion-tag="motion.div" layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0]" transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }} data-magicpath-id="12" data-magicpath-path="KyleParksPortfolio.tsx" />}
                </SortableContainer>)}
            </div>

            <SortableContainer dndKitId="79cc974f-8ce6-4510-9bd8-30e63232f990" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="13" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="c1ca2791-e0c5-4c67-9926-4a9a34b987a4" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden border-t border-[#E5ECF4] bg-white/95 backdrop-blur-lg" data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
            <div className="px-4 py-4 space-y-2" data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, idx) => <motion.button data-magicpath-motion-tag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#EFFFFA] hover:to-[#E5ECF4] hover:text-[#8A4FFF] rounded-lg transition-all duration-200 font-medium" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: idx * 0.05
          }} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                </motion.button>)}
            </div>
          </SortableContainer>}
      </SortableContainer>

      <SortableContainer dndKitId="77979e13-7792-4d57-b160-36569d369df3" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="19" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="20" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <FloatingOrb delay={0} duration={20} size="large" color="#8A4FFF" data-magicpath-id="21" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={5} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={10} duration={30} size="medium" color="#E5ECF4" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="73a73e8d-e5c0-4174-9056-a25293f5ca8c" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity
      }} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="eb173e17-f194-4c19-9e55-59205fe0fa76" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="4fb6fc0e-027a-4a9b-8307-3c886bd4f5eb" containerType="regular" prevTag="motion.div" initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#E5ECF4] mb-8 shadow-lg" data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx">
              <Sparkles size={18} className="text-[#8A4FFF]" />
              <span className="text-sm font-medium text-gray-700" data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">Available for opportunities</span>
            </SortableContainer>

            <motion.h1 data-magicpath-motion-tag="motion.h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>
            
            <motion.p data-magicpath-motion-tag="motion.p" className="text-xl sm:text-2xl md:text-3xl mb-8 font-semibold bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent leading-relaxed pb-1" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              Software Engineer
            </motion.p>
            
            <motion.p data-magicpath-motion-tag="motion.p" className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College. 
              Passionate about building elegant solutions to complex problems.
            </motion.p>
            
            <SortableContainer dndKitId="d1214091-b293-47e5-94ba-0dac8afa5094" containerType="regular" prevTag="motion.div" className="flex items-center justify-center gap-4 mb-12" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.9
          }} data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="p-4 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-200 shadow-lg hover:shadow-xl" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
                <Github size={24} className="text-gray-700" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              rotate: -5,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="p-4 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-200 shadow-lg hover:shadow-xl" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={24} className="text-gray-700" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="p-4 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-200 shadow-lg hover:shadow-xl" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={24} className="text-gray-700" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
            </SortableContainer>
            
            <SortableContainer dndKitId="e9d6889a-f5e0-4649-bfca-fcdcb614df96" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-2 mx-auto" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} whileHover={{
            scale: 1.1
          }} data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-sm font-medium" data-magicpath-id="39" data-magicpath-path="KyleParksPortfolio.tsx">Scroll to explore</span>
              <ChevronDown size={32} data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="3a263f87-168f-483f-8349-fdee777f4300" containerType="regular" prevTag="section" id="about" className="py-24 bg-white relative" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="4781b1cc-3c5b-4f7c-a628-22a0ba1e670b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="37454379-549f-465d-b878-1d81aa6b7ab3" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="601dcc60-5af9-41ab-9ddd-12c5636101dc" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="ab347e6d-83c9-43c4-acb9-177708ef6d93" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={36} className="text-[#8A4FFF]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="b9be7762-c1de-4b20-8118-32635eeb3357" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="30556eed-838b-4ded-ab70-d26017087314" containerType="regular" prevTag="motion.div" initial={{
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
            }} className="space-y-6" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-lg text-gray-600 leading-relaxed" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm a dedicated Computer Science student at Arizona State University, 
                  where I'm part of the prestigious Barrett Honors College. My journey in 
                  software development began with the University of Washington's intensive 
                  Full Stack Web Development bootcamp in 2023.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm passionate about creating efficient, user-friendly applications and 
                  constantly expanding my technical expertise. My approach combines academic 
                  rigor with practical, hands-on experience in modern web technologies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
                  When I'm not coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and collaborating with fellow developers to solve 
                  challenging problems.
                </p>
              </SortableContainer>
              
              <SortableContainer dndKitId="47d1adf7-15ff-4894-893c-e734eebcc174" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
            }} data-magicpath-id="53" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="9415bbe1-1fd8-4053-8760-42ac50b6df1e" containerType="regular" prevTag="motion.div" className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1 shadow-2xl" whileHover={{
                scale: 1.02,
                rotate: 1
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="f33f16c4-23c2-4440-bcb3-8dafc72666e4" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl overflow-hidden" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.img data-magicpath-motion-tag="motion.img" src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.05
                  }} transition={{
                    duration: 0.3
                  }} data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
                
                {/* Decorative elements */}
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -top-4 -right-4 w-24 h-24 bg-[#8A4FFF]/20 rounded-full blur-2xl -z-10" animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx" />
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C3BEF0]/20 rounded-full blur-2xl -z-10" animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              }} transition={{
                duration: 5,
                repeat: Infinity
              }} data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="e5ad23d6-442c-4659-9690-9bc29b8b0ec1" containerType="regular" prevTag="section" id="education" className="py-24 bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="9754bddb-4a7a-4008-84b7-6ff532469afa" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="4c993fcb-70ea-4ba9-bdff-438eabff6b83" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="709f034e-70c3-4cad-9ab4-8436703c9db5" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="49b74504-5c5c-47d5-bb3e-7a378917efb0" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={36} className="text-[#8A4FFF]" data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="45945efc-a28b-4e4f-8cf2-aebc2a698849" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
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
            }} className="bg-white rounded-2xl p-8 border-l-4 hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{
              borderColor: edu.color
            }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">
                    <h3 className="text-xl font-bold text-gray-900" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">{edu.institution}</h3>
                    <motion.span data-magicpath-motion-tag="motion.span" className="px-4 py-2 rounded-full text-sm font-semibold inline-block w-fit" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }} whileHover={{
                  scale: 1.05
                }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-base font-semibold mb-2" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:unknown" data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
                    {edu.degree}
                  </p>
                  <p className="text-gray-700" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:unknown" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="a3395791-ebae-42a1-bb53-c63d281b3667" containerType="regular" prevTag="section" id="skills" className="py-24 bg-white" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="62c80bd5-b42e-4beb-a296-cfb2a2ed8e10" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="cd602a4b-64c1-4179-8b71-b77593c7d81e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="01387b8b-2803-47f3-bd4a-12370e0dded3" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="a0e182d0-bf0d-4ec4-a073-e09093ecc6d1" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={36} className="text-[#8A4FFF]" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="1bbedf39-961c-459e-b727-4eda1aa650c1" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
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
              scale: 1.02
            }} className="bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#8A4FFF]/20" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-lg font-bold mb-5" style={{
                color: '#8A4FFF'
              }} whileHover={{
                scale: 1.05
              }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx">
                    {skillGroup.category}
                  </motion.h3>
                  <ul className="space-y-3" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">
                    {skillGroup.items.map((skill, skillIndex) => <motion.li data-magicpath-motion-tag="motion.li" key={skillIndex} className="text-gray-700 flex items-center gap-3" initial={{
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
                  x: 5
                }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">
                        <motion.span data-magicpath-motion-tag="motion.span" className="w-2 h-2 rounded-full bg-[#8A4FFF]" whileHover={{
                    scale: 1.5
                  }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx" />
                        {skill}
                      </motion.li>)}
                  </ul>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="f8371fc5-cb9d-410c-8f16-852052577525" containerType="regular" prevTag="section" id="projects" className="py-24 bg-gradient-to-br from-[#E5ECF4] to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={30} size="large" color="#8A4FFF" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="88d11097-8ac4-4bad-9803-96cffa9baa16" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="04d37d81-03f3-49e1-af5d-5d4892748eb9" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="3b64183b-1845-4ad2-a201-f432609fbe2a" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="64f53fdd-ea17-4845-929c-289d9791a118" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={36} className="text-[#8A4FFF]" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="e399c0e9-6a07-4653-8f6f-4e8b3a9760fa" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
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
              scale: 1.02
            }} className="bg-white rounded-2xl p-7 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
                scale: 1.02
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-5 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.tech.map((tech, techIndex) => <motion.span data-magicpath-motion-tag="motion.span" key={techIndex} className="px-3 py-1 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-medium border border-[#8A4FFF]/10" whileHover={{
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
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a data-magicpath-motion-tag="motion.a" href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-semibold" whileHover={{
                x: 5
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project 
                    <motion.span data-magicpath-motion-tag="motion.span" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="KyleParksPortfolio.tsx">
                      <ExternalLink size={16} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </SortableContainer>
            
            <SortableContainer dndKitId="5c8a45f1-4d49-410f-9492-6d8e6c34f56b" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="104" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#8A4FFF] rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="105" data-magicpath-path="KyleParksPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Github size={24} data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
                View More Projects
                <motion.span data-magicpath-motion-tag="motion.span" className="transition-transform duration-300 group-hover:translate-x-1" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">
                  <ExternalLink size={20} data-magicpath-id="109" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="b937ea0e-9076-43a2-a8d3-6dca43e2c203" containerType="regular" prevTag="section" id="contact" className="py-24 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="bb5379d5-0554-4c25-ab77-e7067d54cd82" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="e1def846-e214-4166-ac6e-646d3a5e7fcb" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-3xl md:text-4xl font-bold text-white mb-6" initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
              Let's Work Together
            </motion.h2>
            <motion.p data-magicpath-motion-tag="motion.p" className="text-lg text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed" initial={{
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
          }} data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </motion.p>
            
            <SortableContainer dndKitId="78e0c6cf-b234-4508-941e-6c4796788f02" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{
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
          }} data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-white text-[#8A4FFF] rounded-xl font-semibold hover:shadow-2xl transition-all duration-200 flex items-center gap-2" data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={20} data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center gap-2 border-2 border-white/30 hover:border-white/50" data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={20} data-magicpath-id="120" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="fa49fe3f-9b7e-48ef-804e-bedd8b2a835e" containerType="regular" prevTag="footer" className="bg-white border-t border-[#E5ECF4] py-8" data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="677a1ae1-283b-49b5-99e9-c1df5893d432" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="d989fa48-595e-4dc0-b8aa-9ca172740c29" containerType="regular" prevTag="motion.div" className="flex flex-col md:flex-row items-center justify-between gap-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
            <p className="text-gray-600" data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
              © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <SortableContainer dndKitId="3925d0ec-f0cf-4cfb-bd6b-3ca3ad82674d" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -2
            }} className="text-gray-600 hover:text-[#8A4FFF] transition-colors" data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx">
                <Github size={20} data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -2
            }} className="text-gray-600 hover:text-[#8A4FFF] transition-colors" data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={20} data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              y: -2
            }} className="text-gray-600 hover:text-[#8A4FFF] transition-colors" data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={20} data-magicpath-id="131" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};