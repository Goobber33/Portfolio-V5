import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles, Award, Zap } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "beffb585-f430-46ae-aa65-95139de64602"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "b372251e-48ce-4ba5-ac73-713cfd84c399"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "43a9ca00-a9a3-4528-9047-c2413889082c"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "7998af06-368a-4680-993a-4d641b24442a"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "66217ee8-cd9c-40fb-a758-c53fa18d6fa0"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "a6371cda-209d-42bd-bddf-b9e0cbc724ef"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "5977fc56-51bd-4217-9f92-6c04be8178fa"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "7b376381-cea4-477b-9ee0-5a7020bb32ab"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "f9240c92-3c09-491f-af02-11169bc2bcd4"
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
  return <SortableContainer dndKitId="87373fdf-da6e-4f6c-a8e3-02bc9dbdbf1d" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/20" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="e708377a-483b-43ee-9d3b-3684ae897d04" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
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
        <SortableContainer dndKitId="d01c4d26-a445-4b1c-958a-c549e7fc1ccd" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c58716e4-17c0-4a42-8ca0-cd9e2d1a8008" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="c2e4b514-bee7-4629-aa4c-9c3f9cca7c20" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="a0a8a442-63aa-429a-8373-bf4859e81a5b" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
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

            <SortableContainer dndKitId="2a761af9-ad60-4948-b2ed-03124c96b55a" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="20afe9b3-66d9-42d6-bb39-c843f38ad31f" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="847c5445-5a59-40db-a8b6-339a1c43a16c" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="716b147b-6d45-4720-a27b-11966695829f" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <FloatingOrb delay={0} duration={20} size="large" color="#8A4FFF" data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={5} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={10} duration={30} size="medium" color="#E5ECF4" data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="38e13f40-7b36-4660-9347-f5f8bb3101b8" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="233f12a0-8eca-40e5-8649-9062a40af4f9" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
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

            <SortableContainer dndKitId="2797909e-d8f3-4ece-8951-2f8433a59ba3" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-4 mb-16" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "3b9104af-1c9c-49b6-bdda-745fd20edf30"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "397911e2-f93c-4ca8-a69a-1c6684d50f7b"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "4d28c66f-9870-44e4-9fb3-bfe1e1663780"
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

            <SortableContainer dndKitId="d663796b-afcb-41b7-9b35-266553d64c0d" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-2 mx-auto group" animate={{
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
              <SortableContainer dndKitId="a10c4d38-0cb8-44f8-af70-83204e80d877" containerType="regular" prevTag="motion.div" animate={{
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
      <SortableContainer dndKitId="5176ca38-5aa0-49bb-b661-e8212bd9dcdb" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="39" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="4ed0088e-0023-4958-b498-05337e9c0afa" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="7e876eac-e2a6-4aae-be7a-c4c6b16bc190" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="89d114e8-8022-4511-94de-59353143b407" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="0d6ff2d9-901e-41f0-b0d3-ade10f907742" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="f1316891-eb85-4bdd-91ff-bf85ea65593f" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="9c25ff31-de28-40bd-8647-264071de7727" containerType="regular" prevTag="motion.div" initial={{
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
                <SortableContainer dndKitId="22adfa43-3d59-4dfc-8724-ede148e492a8" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
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
                  mpid: "7bbc9125-32af-44b4-81e8-94abf08adf67"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "ceea7f27-c038-4df4-bf09-fb16945e7e30"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "17464a31-46f3-4ac9-888e-719ff0db6f03"
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

              <SortableContainer dndKitId="69704618-64aa-486c-87c3-0970948e7af0" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
                <SortableContainer dndKitId="6235e90b-0fe2-4db1-a4e5-ca950d744988" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.02,
                rotate: 1
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="5afee164-8da1-42a8-8c71-d3dc8320fe30" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="97d8d4db-7ddf-4c2d-9b94-e1980ebd89bf" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="9f9e239e-bda5-48bf-9f37-b5bac1a34c47" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="2286afca-a9f3-4fa0-abc8-3134a8c59031" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="e3cb6527-6af9-4311-984e-e1e31dc044bb" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="33bd1b2c-6a4a-475e-baff-81d03c115489" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="ac6c20bf-2b7e-4e7e-80e5-775a18f14475" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="fc18315c-2e15-40b1-939f-9561c10358f4" containerType="regular" prevTag="section" id="skills" className="py-32 bg-white" data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="343130bf-b6f8-47a4-b31f-32d7c9f97b37" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="bb31fe7c-aa9d-47de-b10b-ca93e6ea541a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="dfe7ba9f-ae29-483e-90ea-df8d37cf0a74" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="8a7ad28f-382b-4b6d-9179-a8863024ec35" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={32} className="text-white" data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>

            <SortableContainer dndKitId="4f5982c2-e1eb-4b13-b6c6-39f496f95a41" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">
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
      <SortableContainer dndKitId="605ad22c-565b-450a-8b63-d7e1c552cbdd" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={30} size="large" color="#8A4FFF" data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="9468554a-9633-487b-9e17-d7ed88fa6160" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="6f319c3e-8f75-4ca8-a9bd-a53b760139ae" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="aea12bf5-7fe3-4fee-b4d8-2dd2d53d440d" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
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
              <SortableContainer dndKitId="80876118-4a17-41be-b24e-80e5ccc0c528" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="7c287298-67c9-4d3e-bbb8-1ad628227525" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
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
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group relative overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
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

            <SortableContainer dndKitId="aabd0818-5f32-4f5c-a75f-d119461d303a" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="29056f69-2f24-471b-9449-a6e5a17f66a5" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="eec0160c-0f9c-4e91-b8f2-36beb5bddac7" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="639f0301-b4c6-41b8-b515-51df41602ea9" containerType="regular" prevTag="motion.div" initial={{
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

            <SortableContainer dndKitId="d03125b6-f3e2-4213-ad85-90f415ab96e5" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" initial={{
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
            <SortableContainer dndKitId="697d7aa5-f02b-4b27-89d0-9d704ee03746" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="2736b28c-168e-4e9b-8817-1f6aac368f22" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="1db98e75-3c18-4c19-9977-5d6c6c179f57" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "04c20c36-3b02-4118-be8b-82562c1a0d1b"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "02852cd9-2598-4c4b-bfdf-698025ac0fa4"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "6930917c-75f7-402b-a6b8-8f81ef60ba7a"
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