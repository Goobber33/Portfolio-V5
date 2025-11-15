import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown, Sparkles, Award, Zap } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "b214b4fc-9df7-43f7-8fca-6a30528d38e9"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "aa9a0329-755f-4b7c-9cb0-830dee16e386"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "c604d35f-4df0-4d59-8f26-1d05a1de5035"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "76a640dc-0726-4aa1-8225-73534f441bfd"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  highlight: 'Most Popular',
  mpid: "6d35dbc3-35f8-4b32-95b1-01c0cfc9ad09"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  highlight: 'Featured',
  mpid: "fb6812c7-77d8-4ffd-a972-4f1638632fc2"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "21be68ec-6e90-40d4-9aab-089611c4e18d"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "5c0cfa44-4d27-44b2-8b5e-eed0021134bc"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "89c94c1d-27d9-48d9-abfe-b26159a25d42"
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
  return <SortableContainer dndKitId="ce15d56c-f313-463e-8afd-aba639810ef1" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white overflow-x-hidden" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
      {/* Enhanced Progress bar with gradient */}
      <motion.div data-magicpath-motion-tag="motion.div" className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/20" style={{
      scaleX: smoothProgress
    }} data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx" />

      {/* Enhanced Navigation */}
      <SortableContainer dndKitId="de25fe16-5267-436c-8ae6-351353caa9b0" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
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
        <SortableContainer dndKitId="553fb436-9724-487a-90d7-d9cfe894177f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="921fe067-7a6f-42a2-834b-835e176ef0f9" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="a6ae1143-45ca-4348-a945-9515c36824e8" containerType="regular" prevTag="motion.div" className="text-2xl font-bold cursor-pointer relative group" whileHover={{
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
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="4a9eccf9-fa0d-4253-890c-7a8f3844ad29" containerType="regular" prevTag="motion.button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
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

            <SortableContainer dndKitId="b1064f14-9f4c-4163-becc-c5e7e7a7f56c" containerType="regular" prevTag="motion.button" className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }} data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="8c4ee829-57ef-41c7-a045-ecb1bc1bbdfc" containerType="regular" prevTag="motion.div" animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx">
                {mobileMenuOpen ? <X size={24} data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="221970e1-f38f-4322-8922-aac11dcc7e2c" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="aff26e59-f72f-46b9-a73b-8c3ac1730ba7" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx" />

        <FloatingOrb delay={0} duration={20} size="large" color="#8A4FFF" data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={5} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx" />
        <FloatingOrb delay={10} duration={30} size="medium" color="#E5ECF4" data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="bda65aff-1362-4f04-b612-fe9becd45ca8" containerType="regular" prevTag="motion.div" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }} data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="5de16e83-7a5c-4757-bb33-ff21e4762e4b" containerType="regular" prevTag="motion.div" variants={containerVariants} initial="hidden" animate="visible" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="debb483d-8299-4d3c-8e86-c85b3ebd05ed" containerType="regular" prevTag="motion.div" variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full border border-[#E5ECF4] mb-8 shadow-xl shadow-[#8A4FFF]/5" whileHover={{
            scale: 1.05,
            y: -2
          }} data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="87700689-f5d7-4893-a8f6-54d35dfb23db" containerType="regular" prevTag="motion.div" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx">
                <Sparkles size={18} className="text-[#8A4FFF]" />
              </SortableContainer>
              <span className="text-sm font-semibold text-gray-700" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">Available for opportunities</span>
            </SortableContainer>

            <motion.h1 data-magicpath-motion-tag="motion.h1" variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-gray-900 tracking-tight" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </motion.h1>

            <SortableContainer dndKitId="a52cd398-b506-4a12-8f50-9ebdca45ba6c" containerType="regular" prevTag="motion.div" variants={itemVariants} className="mb-8" data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
              <GradientText className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed pb-1" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
                Software Engineer
              </GradientText>
            </SortableContainer>

            <motion.p data-magicpath-motion-tag="motion.p" variants={itemVariants} className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College.
              <br className="hidden sm:block" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx" />
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <SortableContainer dndKitId="e6c9b459-37b6-41c3-8040-1b3f50070ad3" containerType="collection" prevTag="motion.div" variants={itemVariants} className="flex items-center justify-center gap-4 mb-16" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
              mpid: "6da80a8e-b6e0-48d7-bb4e-410524b69ead"
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              mpid: "cbd904b2-4bb1-459c-93b9-cb4156a124d3"
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email',
              mpid: "4bd0e568-b9ea-45b1-9fd2-5c7d6940661a"
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
            }} className="p-4 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#8A4FFF]/20 group" aria-label={label} data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Icon size={24} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-id="39" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.a>)}
            </SortableContainer>

            <SortableContainer dndKitId="a5947dbb-0c56-4d7f-b489-e5804961bb06" containerType="regular" prevTag="motion.button" variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-2 mx-auto group" animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} whileHover={{
            scale: 1.1
          }} data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
              <span className="text-sm font-semibold group-hover:text-[#9D5FFF] transition-colors" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
                Scroll to explore
              </span>
              <SortableContainer dndKitId="7e4deeff-7951-433e-ba77-75023191627f" containerType="regular" prevTag="motion.div" animate={{
              y: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }} data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
                <ChevronDown size={32} data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Enhanced */}
      <SortableContainer dndKitId="18e33762-2dea-4bba-914b-4ba556db170f" containerType="regular" prevTag="section" id="about" className="py-32 bg-white relative" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="539491b0-a02d-4596-a281-9bf29a1d77ae" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c24a9311-d523-4618-953a-b4c785dba376" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="2caf9ea3-5c6f-41cb-8cbd-c8bedc208961" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="7c062c34-ff1a-4a5c-8001-b05721c87ba6" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
                <User size={32} className="text-white" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>

            <SortableContainer dndKitId="e6eac477-e709-4598-b218-c357a5ab864c" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-16 items-center" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="ddeb5b88-3ccc-4e96-9b17-edad54a76df7" containerType="regular" prevTag="motion.div" initial={{
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
            }} className="space-y-6" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="53" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm a dedicated Computer Science student at Arizona State University,
                  where I'm part of the prestigious Barrett Honors College. My journey in
                  software development began with the University of Washington's intensive
                  Full Stack Web Development bootcamp in 2023.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm passionate about creating efficient, user-friendly applications and
                  constantly expanding my technical expertise. My approach combines academic
                  rigor with practical, hands-on experience in modern web technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">
                  When I'm not coding, I enjoy exploring new technologies, contributing to
                  open-source projects, and collaborating with fellow developers to solve
                  challenging problems.
                </p>

                {/* Quick stats */}
                <SortableContainer dndKitId="924a3f3f-1a86-436e-9a56-c851bbf8d5c3" containerType="collection" prevTag="motion.div" className="grid grid-cols-3 gap-4 pt-6" initial={{
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
              }} data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  label: 'Projects',
                  value: '15+',
                  icon: Briefcase,
                  mpid: "097bb0bf-a1bb-401e-9315-7908ce2a2e8a"
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code,
                  mpid: "70c9ca98-a10e-42d7-8896-d393fd3c8216"
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award,
                  mpid: "93aa52fe-8259-487a-99c7-feefafe5a6a3"
                }].map(({
                  label,
                  value,
                  icon: Icon
                }) => <motion.div data-magicpath-motion-tag="motion.div" key={label} whileHover={{
                  y: -5,
                  scale: 1.05
                }} className="text-center p-4 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-lg transition-all duration-300" data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={24} className="text-[#8A4FFF] mx-auto mb-2" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx" />
                      <div className="text-2xl font-bold text-gray-900" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">{value}</div>
                      <div className="text-sm text-gray-600 font-medium" data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx">{label}</div>
                    </motion.div>)}
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="23ebf5cc-3a2f-48e6-a128-68d740d1151a" containerType="regular" prevTag="motion.div" className="relative" initial={{
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
            }} data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="d59e3ce7-8a04-42c1-8d18-2755be0c4cde" containerType="regular" prevTag="motion.div" className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.02,
                rotate: 1
              }} transition={{
                duration: 0.3
              }} data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="e8c5a80c-e133-418a-b0e8-e306e1265bef" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-[22px] overflow-hidden" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">
                    <motion.img data-magicpath-motion-tag="motion.img" src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.05
                  }} transition={{
                    duration: 0.4
                  }} data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>

                {/* Enhanced decorative elements */}
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -top-6 -right-6 w-32 h-32 bg-[#8A4FFF]/20 rounded-full blur-3xl -z-10" animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx" />
                <motion.div data-magicpath-motion-tag="motion.div" className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#C3BEF0]/20 rounded-full blur-3xl -z-10" animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.6, 0.3, 0.6]
              }} transition={{
                duration: 5,
                repeat: Infinity
              }} data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Education Section - Enhanced */}
      <SortableContainer dndKitId="edd389bf-21ca-48ff-b411-9f58136b670c" containerType="regular" prevTag="section" id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden" data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="d6498524-bbe8-4214-85c7-e228bc2582bd" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="b9c67528-c07c-44ad-9374-a6e5ee275638" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="9f02ab8b-42a5-43b6-a096-bb6b497510bd" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="a388ce31-b9be-4842-9185-7bd85fb02776" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
                <GraduationCap size={32} className="text-white" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>

            <SortableContainer dndKitId="48311cca-c6f7-4324-9d0c-f8489a598793" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">
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
            }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8A4FFF] transition-colors" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.institution}
                    </h3>
                    <motion.span data-magicpath-motion-tag="motion.span" className="px-5 py-2.5 rounded-full text-sm font-bold inline-block w-fit shadow-sm" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }} whileHover={{
                  scale: 1.1,
                  y: -2
                }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-lg font-semibold mb-3" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:unknown" data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
                    {edu.degree}
                  </p>
                  <p className="text-gray-700 leading-relaxed" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:unknown" data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Skills Section - Enhanced */}
      <SortableContainer dndKitId="91e6ce14-e550-4657-b85a-d3951b653659" containerType="regular" prevTag="section" id="skills" className="py-32 bg-white" data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="f3fe96a9-a44d-48a0-a2da-fd042014678f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="b209ed72-727d-425f-b879-567040b9b739" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="ce8d1459-9f20-4e8a-9220-129a5ec8c1e3" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="f68f4900-43a3-4ee7-bee1-62cc35f58949" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx">
                <Code size={32} className="text-white" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>

            <SortableContainer dndKitId="ff6be2c7-3357-4b72-b251-57ed25dbe470" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
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
            }} className="bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] rounded-3xl p-7 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#8A4FFF]/20 group" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold mb-6 flex items-center gap-2" style={{
                color: '#8A4FFF'
              }} whileHover={{
                scale: 1.05
              }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Zap size={20} className="group-hover:text-[#C3BEF0] transition-colors" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx" />
                    {skillGroup.category}
                  </motion.h3>
                  <ul className="space-y-3" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
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
                }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
                        <motion.span data-magicpath-motion-tag="motion.span" className="w-2 h-2 rounded-full bg-[#8A4FFF]" whileHover={{
                    scale: 2
                  }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx" />
                        {skill}
                      </motion.li>)}
                  </ul>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Projects Section - Enhanced */}
      <SortableContainer dndKitId="eef46e7b-7ac4-4d01-8050-d85e4595caf1" containerType="regular" prevTag="section" id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={5} duration={30} size="large" color="#8A4FFF" data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="fbe77987-65cb-42eb-97fc-9355abad7497" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="43628cac-af15-42a5-ac14-535302f437a0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="b6599e4d-5a26-49e0-a737-5270cc044ac4" containerType="regular" prevTag="motion.div" className="flex items-center gap-4 mb-20" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="1c80c20d-92df-433d-a298-bdd9a3a42f23" containerType="regular" prevTag="motion.div" whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20" data-magicpath-id="101" data-magicpath-path="KyleParksPortfolio.tsx">
                <Briefcase size={32} className="text-white" data-magicpath-id="102" data-magicpath-path="KyleParksPortfolio.tsx" />
              </SortableContainer>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="103" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>

            <SortableContainer dndKitId="47ab76a5-18ed-4fa4-9697-b74377fad02f" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-magicpath-id="104" data-magicpath-path="KyleParksPortfolio.tsx">
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
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#8A4FFF]/20 group relative overflow-hidden" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="KyleParksPortfolio.tsx">
                  {project.highlight && <motion.div data-magicpath-motion-tag="motion.div" className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] text-white text-xs font-bold rounded-full" initial={{
                scale: 0,
                rotate: -45
              }} animate={{
                scale: 1,
                rotate: 0
              }} transition={{
                delay: 0.5 + index * 0.1
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="highlight:unknown" data-magicpath-id="106" data-magicpath-path="KyleParksPortfolio.tsx">
                      {project.highlight}
                    </motion.div>}

                  <motion.h3 data-magicpath-motion-tag="motion.h3" className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors" whileHover={{
                scale: 1.02
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="107" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="108" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="KyleParksPortfolio.tsx">
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
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a data-magicpath-motion-tag="motion.a" href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold" whileHover={{
                x: 5
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project
                    <motion.span data-magicpath-motion-tag="motion.span" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  duration: 1.5,
                  repeat: Infinity
                }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="KyleParksPortfolio.tsx">
                      <ExternalLink size={18} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </SortableContainer>

            <SortableContainer dndKitId="cb732e33-bc0a-4812-b454-97569019aee0" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="114" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="115" data-magicpath-path="KyleParksPortfolio.tsx">
                <motion.span data-magicpath-motion-tag="motion.span" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} data-magicpath-id="116" data-magicpath-path="KyleParksPortfolio.tsx">
                  <Github size={24} data-magicpath-id="117" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
                View More Projects
                <motion.span data-magicpath-motion-tag="motion.span" className="transition-transform duration-300 group-hover:translate-x-2" data-magicpath-id="118" data-magicpath-path="KyleParksPortfolio.tsx">
                  <ExternalLink size={22} data-magicpath-id="119" data-magicpath-path="KyleParksPortfolio.tsx" />
                </motion.span>
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Enhanced */}
      <SortableContainer dndKitId="27b60ad7-e488-4680-ab31-d663c7ef53b9" containerType="regular" prevTag="section" id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden" data-magicpath-id="120" data-magicpath-path="KyleParksPortfolio.tsx">
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" data-magicpath-id="121" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="ba16426c-e0db-4139-8462-ba513924ea0c" containerType="regular" prevTag="div" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-magicpath-id="122" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="f88bd98d-8cc7-47e6-a415-c8b5a93bfa4a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="123" data-magicpath-path="KyleParksPortfolio.tsx">
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
          }} data-magicpath-id="124" data-magicpath-path="KyleParksPortfolio.tsx">
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
          }} data-magicpath-id="125" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </motion.p>

            <SortableContainer dndKitId="58d195c3-2957-411f-9236-404a38017f34" containerType="regular" prevTag="motion.div" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" initial={{
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
          }} data-magicpath-id="126" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="px-10 py-5 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl" data-magicpath-id="127" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={22} data-magicpath-id="128" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -3
            }} whileTap={{
              scale: 0.95
            }} className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl" data-magicpath-id="129" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={22} data-magicpath-id="130" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>

            {/* Footer content */}
            <SortableContainer dndKitId="c7dc4aeb-5d98-4af5-8cd6-43d948e179ca" containerType="regular" prevTag="motion.div" className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} viewport={{
            once: true
          }} data-magicpath-id="131" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="83bc592c-1974-4241-8c04-1c1caceacb91" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between gap-6" data-magicpath-id="132" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-white/90 text-base font-medium" data-magicpath-id="133" data-magicpath-path="KyleParksPortfolio.tsx">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <SortableContainer dndKitId="d4141cf6-e60d-4b1b-ae4a-f4e457ac219c" containerType="collection" prevTag="div" className="flex items-center gap-5" data-magicpath-id="134" data-magicpath-path="KyleParksPortfolio.tsx">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  mpid: "94467b1d-a185-4761-8721-3ed662c034be"
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  mpid: "59218c37-443a-47c5-9a8b-8046ed900f9d"
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email',
                  mpid: "b7d2cc93-6eae-4c58-89c7-775b17e3a4d6"
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a data-magicpath-motion-tag="motion.a" key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.15,
                  y: -3
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label} data-magicpath-id="135" data-magicpath-path="KyleParksPortfolio.tsx">
                      <Icon size={22} data-magicpath-id="136" data-magicpath-path="KyleParksPortfolio.tsx" />
                    </motion.a>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};