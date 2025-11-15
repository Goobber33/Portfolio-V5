import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "5ae9967a-658f-4b73-b851-e4475b795bb8"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "340f52e9-ff51-4a78-abd7-78e99ca0b696"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "a33e720f-9f13-4a8b-9c89-f3386d402461"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "6fb19c85-3901-4553-8dab-502bd19bf9be"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "6c9f6b44-9761-4713-8ad8-71f2e41e5fe1"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "7f25c474-aaeb-444e-ba23-10436b54998b"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "32ae1459-6fbd-4eb2-8839-67bac76835b7"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "b2fc7836-3ab0-4ef9-a314-05c903053b07"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "6b4363e3-90fb-47f4-bc69-0e0da622a395"
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
  return <SortableContainer dndKitId="c0dc0fd8-bd8c-446b-a6b6-0f6e54868c41" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Progress bar */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A4FFF] via-[#C3BEF0] to-[#8A4FFF] origin-left z-50" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx" />

      <SortableContainer dndKitId="bae01f79-c08c-4829-8d17-385909fc9561" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4] backdrop-blur-md" style={{
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
        <SortableContainer dndKitId="1647258c-5e25-4a6d-8c4e-f469399d7984" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="2b330dce-e65c-49b8-a5bb-20d289facff9" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="7e56d830-6cf6-4622-bce8-b755bc955741" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="c0cbcfb9-aeb1-44c2-8aa5-c18d05e97ec9" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium" data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx">
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

            <SortableContainer dndKitId="22517188-dfee-40d1-80d6-7a4dd24ef0e1" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="13" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="267841fc-5c2f-4f5e-afd9-5da2873723fd" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="aa1edaf4-7645-40b5-baa8-20bc5dccaad3" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="19" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="20" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <FloatingOrb delay={0} duration={20} size="large" color="#8A4FFF" data-magicpath-id="21" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={5} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={10} duration={30} size="medium" color="#E5ECF4" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="4299ba6c-edc1-4fd2-9863-04be782bdff2" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity
      }} data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="8cd2be1a-3361-4a29-a765-bcece8cee57d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="ab680660-94ad-4623-8e6a-f4e9a8388fbc" containerType="regular" prevTag="motion.div" initial={{
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

            <motion.h1 data-magicpath-motion-tag="motion.h1" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900" initial={{
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
            
            <motion.p data-magicpath-motion-tag="motion.p" className="text-2xl sm:text-3xl md:text-4xl mb-6 font-semibold bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent" initial={{
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
            
            <motion.p data-magicpath-motion-tag="motion.p" className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed" initial={{
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
            
            <SortableContainer dndKitId="f9e49d6d-92dc-4306-a795-36bee4d486b8" containerType="regular" prevTag="motion.div" className="flex items-center justify-center gap-4 mb-12" initial={{
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
            
            <SortableContainer dndKitId="3842ac15-ee67-4083-90a8-326bcb7ffd6b" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-2 mx-auto" animate={{
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

      <SortableContainer dndKitId="621679ed-34ff-4e7c-827c-88a3bebc1cda" containerType="regular" prevTag="section" id="about" className="py-24 bg-white relative" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="ec2dc834-76cf-419b-af09-b794396ec14d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="857ded1b-838b-43a7-8865-3a66af333f13" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="0142b58f-7262-48a9-b8cd-88c81237be08" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="2756c6f8-67eb-4dac-8074-5070b3580b46" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={36} className="text-[#8A4FFF]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="747d7d8c-2cf6-4375-932f-e91937d816af" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="67582d16-b27b-471a-8e51-7875874a14af" containerType="regular" prevTag="motion.div" initial={{
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
              
              <SortableContainer dndKitId="e19b47fb-0ecf-484c-87d8-f1786a94ab5e" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
                <SortableContainer dndKitId="5380e9d1-fb46-4c4d-b273-7dc64ee99ea8" containerType="regular" prevTag="motion.div" className="w-full h-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1 shadow-2xl" whileHover={{
                scale: 1.02,
                rotate: 1
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="b09db3a8-3bbb-4349-a994-82e3b6dd8028" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl overflow-hidden" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="1e742796-3b91-4078-ab41-9196fc659474" containerType="regular" prevTag="section" id="education" className="py-24 bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="d7dc93c2-4a37-4fb7-a1a4-c230c7530b4d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="8fe90a96-037a-4dd4-b9dd-496936bd6adb" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="994af1e6-8b50-48ff-9c97-a3dda8ab6d53" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="9c60515a-269c-4a6a-bff6-01a1b3c9b1c3" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={36} className="text-[#8A4FFF]" data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="7ebd7c52-60d2-41be-868d-c06aa710bdab" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
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
                    <h3 className="text-2xl font-bold text-gray-900" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">{edu.institution}</h3>
                    <motion.span data-magicpath-motion-tag="motion.span" className="px-4 py-2 rounded-full text-sm font-semibold inline-block w-fit" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }} whileHover={{
                  scale: 1.05
                }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-lg font-semibold mb-2" style={{
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

      <SortableContainer dndKitId="8dd2929b-7997-47bd-b9d0-e6eb5b285027" containerType="regular" prevTag="section" id="skills" className="py-24 bg-white" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="ec5bae90-9e95-45ce-9236-724b2eaf3c39" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1a05849b-c224-4289-8eb3-9c8ae89e1e7c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="5d41ed23-a936-4ad1-a43d-f3f215269e0f" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="3925f67a-677d-489c-afab-23ecbbdeac86" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={36} className="text-[#8A4FFF]" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="af5cd74c-9f7f-4d25-8d1a-324a9cb0670e" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
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
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-5" style={{
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

      <SortableContainer dndKitId="cbef4995-0366-4e54-9bbe-d18feb7821d4" containerType="regular" prevTag="section" id="projects" className="py-24 bg-gradient-to-br from-[#E5ECF4] to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={30} size="large" color="#8A4FFF" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="5b650bbd-caf3-4b33-9a94-977b28371ef7" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c05f8705-1c22-40a3-97c2-80d941f528a3" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="6249ac18-fce5-4766-a2ef-a6b14a0d8459" containerType="regular" prevTag="motion.div" className="flex items-center gap-3 mb-16" initial={{
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
              <SortableContainer dndKitId="7fcc2195-f539-4fd0-b2c7-ea13d30b7c4c" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={36} className="text-[#8A4FFF]" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            
            <SortableContainer dndKitId="42c42ce6-1eec-4128-baf0-da0be305f335" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
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
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
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
            
            <SortableContainer dndKitId="94f5506e-89b7-4d97-a459-aad26fae8c7c" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="b507ac47-419d-482e-9e83-aaa65a284a76" containerType="regular" prevTag="section" id="contact" className="py-24 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <SortableContainer dndKitId="86abf5b5-3a5c-4a6d-b888-93a22f2b036e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="57ff71d5-c73d-4412-a6e3-38104867688b" containerType="regular" prevTag="motion.div" initial={{
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
            <motion.h2 data-magicpath-motion-tag="motion.h2" className="text-4xl md:text-5xl font-bold text-white mb-6" initial={{
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
            <motion.p data-magicpath-motion-tag="motion.p" className="text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed" initial={{
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
            
            <SortableContainer dndKitId="43a0a1ce-132d-46a8-b97d-174ca7c2a693" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{
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

      <SortableContainer dndKitId="6f668979-3439-4603-ba9b-bfb9062a1938" containerType="regular" prevTag="footer" className="bg-white border-t border-[#E5ECF4] py-8" data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="4e42513c-0139-4f8f-a45e-2a8c587f4b56" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="4dbb0595-57c3-4f5a-833c-58ad265b5a1d" containerType="regular" prevTag="motion.div" className="flex flex-col md:flex-row items-center justify-between gap-4" initial={{
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
            <SortableContainer dndKitId="e867e70b-cab8-4acc-9c2f-56f1626174ec" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
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