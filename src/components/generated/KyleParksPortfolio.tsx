import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "5b98e4f5-f34f-41e0-8a42-44fa1fff93bd"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "00003b2d-fe67-43c9-b77c-6a38bbaf4e4d"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "db964e7c-0191-4e42-b9ab-91d245dbbdde"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "ec1b57b3-8b13-4e48-9f97-40d68c69f99d"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "11e5a0c5-ee73-42e0-85e2-1354855e95de"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "e98d7945-308f-4957-889f-9be5a1bc0509"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "4ce85cd3-2793-43aa-ad79-4a81b6010f4d"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "4dc390f8-c86b-4e96-b1c9-56907435c5bf"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "c7b2b87a-ea2c-4999-a53f-480aa1562f9b"
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
  return <SortableContainer dndKitId="abb3ed2c-2192-4cf1-a33c-db761359b877" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Progress bar */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A4FFF] via-[#C3BEF0] to-[#8A4FFF] origin-left z-50" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx" />

      <SortableContainer dndKitId="90905318-1cb3-4ad3-99fb-813dea3a1dbf" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4] backdrop-blur-md" style={{
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
        <SortableContainer dndKitId="aa12882d-f428-41a6-92b4-86e365cc870a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="3c5bfc66-bbdf-4cd8-9a51-301548ae495c" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="e8596ac8-1f57-4926-8231-b4744890cf5d" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="b45dae73-3979-41e3-878a-863b72cc9e3e" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium" data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx">
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

            <SortableContainer dndKitId="e646fc15-1a61-432e-819b-fdd7d72d9314" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="13" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="57a83dd5-1535-4877-949d-d9d2853e097f" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="d1f543df-9395-459e-854b-fd8a3c293042" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="19" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="20" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <FloatingOrb delay={0} duration={20} size="large" color="#8A4FFF" data-magicpath-id="21" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={5} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={10} duration={30} size="medium" color="#E5ECF4" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="e9bbe1b6-fbc9-4e90-a813-4015c07eb691" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity
      }} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="9ad6309b-4906-44fb-918c-8a800be8f3fc" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="e3b1b2c1-be50-4690-9199-7b628ee1d381" containerType="regular" prevTag="motion.div" initial={{
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
            
            <SortableContainer dndKitId="3ad3501f-edcc-462e-adff-99fe139d8bcc" containerType="regular" prevTag="motion.div" className="flex items-center justify-center gap-4 mb-12" initial={{
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
            
            <SortableContainer dndKitId="9fd97c0f-cd93-4bb9-8b31-b773bad53b27" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-2 mx-auto" animate={{
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

      <SortableContainer dndKitId="7263c224-5499-4d17-9e70-d67f67135130" containerType="regular" prevTag="section" id="about" className="py-24 bg-white relative" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="37f737a9-7c27-4dbd-8a36-d560d278c704" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="73ae4262-f303-4edb-9b04-d0ce598b7f8e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="d866aff8-cd7e-4b22-8556-1a2d1e9a0c05" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="fa0f6cfd-432b-4aaa-be31-2ce5f6e2bc40" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={36} className="text-[#8A4FFF]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="ff401223-d1a1-4e2f-b2bc-34259743403d" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="e4450a67-f191-4d06-8975-d197d3e4469d" containerType="regular" prevTag="motion.div" initial={{
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
              
              <SortableContainer dndKitId="7f1e0ceb-1239-43d3-975f-4fdca6934d1c" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
                <SortableContainer dndKitId="d80ec537-924e-497d-baf1-ec43a89c0679" containerType="regular" prevTag="motion.div" className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1 shadow-2xl" whileHover={{
                scale: 1.02,
                rotate: 1
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="71bc97d1-5d44-4640-8466-6d494e2a3789" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl overflow-hidden" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="c2e5dedf-24b1-4d3e-ba32-261d94dda4e7" containerType="regular" prevTag="section" id="education" className="py-24 bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="f0c7be05-b177-438b-a535-8fb1cd05b8a9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="15dd55bd-cb15-4d78-9fd0-b650310eb368" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="e783f4f1-e01b-478e-a053-4ad15739ea4a" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="cbb965db-de95-40e8-96c3-2c49f1fad687" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={36} className="text-[#8A4FFF]" data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="7cfb8492-84fa-4411-b9fe-79e1660ae4af" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="96985672-7468-477b-bcd1-a4d410819928" containerType="regular" prevTag="section" id="skills" className="py-24 bg-white" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="929bc4d8-4717-41d0-bda6-5d5f2ff50b26" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="19b33c39-a98f-452f-94e4-1b9f15a860ef" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="3f94fe0d-2dab-48e9-89d6-13c42d0aa892" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="daadef60-ce4d-4f05-842b-6defb768d3d5" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={36} className="text-[#8A4FFF]" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="8aca6d29-2cd4-4854-ae41-9d96bd50f39e" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="9c370ce9-4489-479c-b192-afc9c30b5190" containerType="regular" prevTag="section" id="projects" className="py-24 bg-gradient-to-br from-[#E5ECF4] to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={30} size="large" color="#8A4FFF" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="da79cab0-2b13-418f-ab15-cca55bb216be" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="e06b4124-bf22-4a2f-af8f-f20fb907b16a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="b54b6bc2-30e3-477e-8f79-75c9280c0cd8" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="f82909a8-b9fe-497a-98fe-88acdcf32c95" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={36} className="text-[#8A4FFF]" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="fb866ab3-b5b3-4380-86ce-d6ee9b6b0b81" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
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
            
            <SortableContainer dndKitId="5b2a4a64-040a-4879-a485-59faccb2a092" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="1b00e6d8-5d75-492f-a90b-7b5a02b57984" containerType="regular" prevTag="section" id="contact" className="py-24 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="0e2fc030-23c2-4045-b9df-45b0e569a88e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="b6483210-01b0-4057-a580-4c7ee483e4ed" containerType="regular" prevTag="motion.div" initial={{
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
            
            <SortableContainer dndKitId="8edbb12d-32a6-4c46-b10b-79aa768ecc37" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" initial={{
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

            {/* Footer content moved here */}
            <SortableContainer dndKitId="98eeb70a-8e66-446e-8f74-a50a2d11b76f" containerType="regular" prevTag="motion.div" className="pt-8 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="d6dbcf16-55f7-462c-bcea-55488ded54a2" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-sm" data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="096c4fba-b313-4cbe-a79d-5b3e3aaaac40" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{
                  scale: 1.1,
                  y: -2
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Github size={20} data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </motion.a>
                  <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
                  scale: 1.1,
                  y: -2
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Linkedin size={20} data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </motion.a>
                  <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
                  scale: 1.1,
                  y: -2
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Mail size={20} data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </motion.a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};