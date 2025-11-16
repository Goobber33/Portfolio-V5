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
  category: 'Frontend'
}, {
  name: 'TypeScript',
  icon: '📘',
  color: '#3178C6',
  category: 'Frontend'
}, {
  name: 'JavaScript',
  icon: '🟨',
  color: '#F7DF1E',
  category: 'Frontend'
}, {
  name: 'HTML',
  icon: '🌐',
  color: '#E34F26',
  category: 'Frontend'
}, {
  name: 'CSS',
  icon: '🎨',
  color: '#1572B6',
  category: 'Frontend'
}, {
  name: 'Tailwind',
  icon: '💨',
  color: '#06B6D4',
  category: 'Frontend'
}, {
  name: 'Next.js',
  icon: '▲',
  color: '#000000',
  category: 'Frontend'
}, {
  name: 'Node.js',
  icon: '🟢',
  color: '#339933',
  category: 'Backend'
}, {
  name: 'Express',
  icon: '🚂',
  color: '#000000',
  category: 'Backend'
}, {
  name: 'GraphQL',
  icon: '◆',
  color: '#E10098',
  category: 'Backend'
}, {
  name: 'REST API',
  icon: '🔗',
  color: '#8A4FFF',
  category: 'Backend'
}, {
  name: 'MongoDB',
  icon: '🍃',
  color: '#47A248',
  category: 'Database'
}, {
  name: 'PostgreSQL',
  icon: '🐘',
  color: '#4169E1',
  category: 'Database'
}, {
  name: 'Git',
  icon: '📦',
  color: '#F05032',
  category: 'Tools'
}, {
  name: 'Docker',
  icon: '🐳',
  color: '#2496ED',
  category: 'Tools'
}, {
  name: 'AWS',
  icon: '☁️',
  color: '#FF9900',
  category: 'Tools'
}, {
  name: 'Webpack',
  icon: '📦',
  color: '#8DD6F9',
  category: 'Tools'
}, {
  name: 'Vite',
  icon: '⚡',
  color: '#646CFF',
  category: 'Tools'
}, {
  name: 'Jest',
  icon: '🃏',
  color: '#C21325',
  category: 'Testing'
}, {
  name: 'Testing Library',
  icon: '✅',
  color: '#4CAF50',
  category: 'Testing'
}] as any[];
const skillCategories = [{
  name: 'Frontend Development',
  icon: '🎨',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Frontend')
}, {
  name: 'Backend Development',
  icon: '⚙️',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Backend')
}, {
  name: 'Database & Storage',
  icon: '💾',
  color: '#C3BEF0',
  skills: technologies.filter(t => t.category === 'Database')
}, {
  name: 'Tools & DevOps',
  icon: '🛠️',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Tools')
}, {
  name: 'Testing & Quality',
  icon: '✓',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Testing')
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#'
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#'
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#'
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF'
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0'
}] as any[];

// Enhanced Floating decoration component with much more prominent motion
const FloatingOrb = (({
  delay = 0,
  duration = 20,
  size = 'large',
  color = '#8A4FFF',
  shouldReduceMotion = false
}) => {
  return <motion.div className="absolute rounded-full blur-3xl opacity-40 pointer-events-none" style={{
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
  }} />;
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
}) => <motion.span className={`bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] bg-clip-text text-transparent ${className}`} animate={{
  backgroundPosition: ['0%', '100%', '0%']
}} transition={{
  duration: 5,
  repeat: Infinity,
  ease: 'linear'
}} style={{
  backgroundSize: '200% auto'
}}>
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
  return <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* Enhanced Progress bar with gradient - Hidden on mobile */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30 hidden md:block" style={{
      scaleX: smoothProgress
    }} />

      {/* Enhanced Navigation */}
      <motion.nav className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm" style={{
      backgroundColor: 'rgba(255, 255, 255, var(--nav-opacity))',
      '--nav-opacity': navOpacity
    } as any} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div className="text-2xl font-bold cursor-pointer relative group" whileHover={{
            scale: 1.1,
            rotate: 5
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scrollToSection('home')}>
              <span className="relative z-10 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent font-extrabold">
                KP
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/10 to-[#C3BEF0]/10 rounded-lg -z-10" initial={{
              scale: 0,
              opacity: 0
            }} whileHover={{
              scale: 1.5,
              opacity: 1
            }} transition={{
              duration: 0.3
            }} />
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <motion.button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg" whileHover={{
              scale: 1.08,
              y: -2
            }} whileTap={{
              scale: 0.95
            }}>
                  <motion.span whileHover={{
                y: -3
              }} transition={{
                duration: 0.2
              }}>
                    {item}
                  </motion.span>
                  {activeSection === item.toLowerCase() && <>
                      <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0]" transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/5 to-[#C3BEF0]/5 rounded-lg -z-10" layoutId="activeBg" transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />
                    </>}
                </motion.button>)}
            </div>

            <motion.button className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} whileTap={{
            scale: 0.95
          }}>
              <motion.div animate={{
              rotate: mobileMenuOpen ? 90 : 0
            }} transition={{
              duration: 0.2
            }}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden border-t border-[#E5ECF4] bg-white/98 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-1">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, idx) => <motion.button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#EFFFFA] hover:to-[#E5ECF4] hover:text-[#8A4FFF] rounded-lg transition-all duration-200 font-medium" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: idx * 0.05
          }}>
                  {item}
                </motion.button>)}
            </div>
          </motion.div>}
      </motion.nav>

      {/* Hero Section - DRAMATICALLY Enhanced */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA]" />

        {!isMobile && <>
            <FloatingOrb delay={0} duration={8} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} />
            <FloatingOrb delay={2} duration={10} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} />
            <FloatingOrb delay={4} duration={12} size="medium" color="#E5ECF4" shouldReduceMotion={shouldReduceMotion} />
          </>}

        <motion.div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale
      }}>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gray-900">
              Kyle Parks
            </motion.h1>

            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl md:text-4xl text-[#8A4FFF] font-semibold mb-10">
                Software Engineer
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              Computer Science student at Arizona State University, Barrett Honors College.
              Passionate about building elegant solutions to complex problems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-20">
              {[{
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub'
            }, {
              icon: Linkedin,
              href: 'https://linkedin.com',
              label: 'LinkedIn'
            }, {
              icon: Mail,
              href: 'mailto:kyle@example.com',
              label: 'Email'
            }].map(({
              icon: Icon,
              href,
              label
            }, idx) => <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{
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
            }} className="p-5 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8A4FFF]/40 group" aria-label={label}>
                  <Icon size={28} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" />
                </motion.a>)}
            </motion.div>

            <motion.button variants={itemVariants} onClick={() => scrollToSection('about')} className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group">
              <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors">
                Scroll to explore
              </span>
              <motion.div animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <ChevronDown size={40} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }}>
            <motion.div className="flex items-center gap-4 mb-20" initial={{
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
          }}>
              <motion.div whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20">
                <User size={32} className="text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
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
            }} className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a dedicated Computer Science student at Arizona State University,
                  where I'm part of the prestigious Barrett Honors College. My journey in
                  software development began with the University of Washington's intensive
                  Full Stack Web Development bootcamp in 2023.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm passionate about creating efficient, user-friendly applications and
                  constantly expanding my technical expertise. My approach combines academic
                  rigor with practical, hands-on experience in modern web technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to
                  open-source projects, and collaborating with fellow developers to solve
                  challenging problems.
                </p>

                {/* Quick stats - ENHANCED */}
                <motion.div className="grid grid-cols-3 gap-4 pt-6" initial={{
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
              }}>
                  {[{
                  label: 'Projects',
                  value: '15+',
                  icon: Briefcase
                }, {
                  label: 'Skills',
                  value: '24+',
                  icon: Code
                }, {
                  label: 'Certifications',
                  value: '3',
                  icon: Award
                }].map(({
                  label,
                  value,
                  icon: Icon
                }) => <motion.div key={label} whileHover={{
                  y: -10,
                  scale: 1.1,
                  rotate: 5
                }} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-2xl hover:shadow-[#8A4FFF]/20 transition-all duration-300 cursor-pointer">
                      <Icon size={28} className="text-[#8A4FFF] mx-auto mb-2" />
                      <div className="text-3xl font-bold text-gray-900">{value}</div>
                      <div className="text-sm text-gray-600 font-medium">{label}</div>
                    </motion.div>)}
                </motion.div>
              </motion.div>

              <motion.div className="relative" initial={{
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
            }}>
                <motion.div className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl" whileHover={{
                scale: 1.05,
                rotate: 2
              }} transition={{
                duration: 0.3
              }}>
                  <div className="w-full h-full bg-white rounded-[22px] overflow-hidden">
                    <motion.img src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.4
                  }} />
                  </div>
                </motion.div>

                {/* Enhanced decorative elements */}
                {!isMobile && <>
                    <motion.div className="absolute -top-6 -right-6 w-40 h-40 bg-[#8A4FFF]/30 rounded-full blur-3xl -z-10" animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0.7, 0.3]
                }} transition={shouldReduceMotion ? {} : {
                  duration: 3,
                  repeat: Infinity
                }} />
                    <motion.div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C3BEF0]/30 rounded-full blur-3xl -z-10" animate={shouldReduceMotion ? {} : {
                  scale: [1.6, 1, 1.6],
                  opacity: [0.7, 0.3, 0.7]
                }} transition={shouldReduceMotion ? {} : {
                  duration: 4,
                  repeat: Infinity
                }} />
                  </>}

                {/* Professional shadow for mobile */}
                {isMobile && <div className="absolute -inset-2 bg-gradient-to-br from-[#8A4FFF]/20 via-[#9D5FFF]/20 to-[#C3BEF0]/20 rounded-3xl -z-10 blur-xl" />}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section - Enhanced */}
      <section id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden">
        {!isMobile && <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} />}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }}>
            <motion.div className="flex items-center gap-4 mb-20" initial={{
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
          }}>
              <motion.div whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20">
                <GraduationCap size={32} className="text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Education</h2>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => <motion.div key={index} initial={{
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
            }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8A4FFF] transition-colors">
                      {edu.institution}
                    </h3>
                    <motion.span className="px-5 py-2.5 rounded-full text-sm font-bold inline-block w-fit shadow-sm" style={{
                  backgroundColor: `${edu.color}20`,
                  color: edu.color
                }}>
                      {edu.period}
                    </motion.span>
                  </div>
                  <p className="text-lg font-semibold mb-3" style={{
                color: edu.color
              }}>
                    {edu.degree}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{edu.details}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }}>
            <motion.div className="flex items-center gap-4 mb-6 justify-center" initial={{
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
          }}>
              <motion.div whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20">
                <Code size={32} className="text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills & Technologies</h2>
            </motion.div>

            <motion.p className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto" initial={{
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
          }}>
              A comprehensive toolkit of modern technologies and frameworks
            </motion.p>

            {/* Infinite Marquee Animation */}
            <div className="relative">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
              
              {/* Marquee Container */}
              <div className="flex overflow-hidden py-8">
                {/* First set of technologies */}
                <motion.div className="flex gap-8 shrink-0" animate={{
                x: [0, -1920]
              }} transition={{
                duration: shouldReduceMotion ? 80 : 40,
                repeat: Infinity,
                ease: "linear"
              }}>
                  {technologies.map((tech, index) => <motion.div key={`tech-1-${index}`} whileHover={shouldReduceMotion ? {} : {
                  scale: 1.15,
                  y: -8
                }} className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]">
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" />
                      
                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative">
                        <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125">
                          {tech.icon}
                        </span>
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                  }} />
                    </motion.div>)}
                </motion.div>

                {/* Second set (duplicate for seamless loop) */}
                <motion.div className="flex gap-8 shrink-0" animate={{
                x: [0, -1920]
              }} transition={{
                duration: shouldReduceMotion ? 80 : 40,
                repeat: Infinity,
                ease: "linear"
              }}>
                  {technologies.map((tech, index) => <motion.div key={`tech-2-${index}`} whileHover={shouldReduceMotion ? {} : {
                  scale: 1.15,
                  y: -8
                }} className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]">
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" />
                      
                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative">
                        <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125">
                          {tech.icon}
                        </span>
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                  }} />
                    </motion.div>)}
                </motion.div>
              </div>
            </div>

            {/* Tech Summary - Professional Badge */}
            <motion.div initial={{
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
          }} className="mt-16 flex justify-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Technologies Mastered</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent">
                    {technologies.length}+
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden">
        {!isMobile && <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} />}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }}>
            <motion.div className="flex items-center gap-4 mb-20" initial={{
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
          }}>
              <motion.div whileHover={{
              rotate: 360,
              scale: 1.3
            }} transition={{
              duration: 0.6
            }} className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20">
                <Briefcase size={32} className="text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => <motion.div key={index} initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border-2 border-gray-200 hover:border-[#8A4FFF]/40 group relative overflow-hidden">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => <motion.span key={techIndex} className="px-3 py-1.5 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-semibold border border-[#8A4FFF]/10">
                        {tech}
                      </motion.span>)}
                  </div>
                  <motion.a href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold" whileHover={{
                x: 10
              }}>
                    View Project
                    <motion.span>
                      <ExternalLink size={20} />
                    </motion.span>
                  </motion.a>
                </motion.div>)}
            </div>

            <motion.div initial={{
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
          }} className="flex justify-center">
              <motion.a href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group">
                <motion.span whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }}>
                  <Github size={26} />
                </motion.span>
                View More Projects
                <motion.span className="transition-transform duration-300 group-hover:translate-x-2">
                  <ExternalLink size={24} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden">
        {!isMobile && <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" shouldReduceMotion={shouldReduceMotion} />}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 80
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1
        }} viewport={{
          once: true
        }}>
            <motion.h2 className="text-4xl md:text-6xl font-bold text-white mb-8" initial={{
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
          }}>
              Let's Work Together
            </motion.h2>
            <motion.p className="text-xl text-white/95 mb-16 max-w-2xl mx-auto leading-relaxed" initial={{
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
          }}>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20" initial={{
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
          }}>
              <motion.a href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl">
                <Mail size={24} />
                Send Email
              </motion.a>
              <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl">
                <Linkedin size={24} />
                Connect on LinkedIn
              </motion.a>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div className="flex items-center justify-center mb-16" initial={{
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
          }}>
              <motion.a href="/resume.pdf" download whileHover={{
              scale: 1.1,
              y: -5
            }} whileTap={{
              scale: 0.95
            }} className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl">
                <Download size={24} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Footer content */}
            <motion.div className="pt-10 border-t border-white/20" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} viewport={{
            once: true
          }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-white/90 text-base font-medium">
                  © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
                </p>
                <div className="flex items-center gap-5">
                  {[{
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub'
                }, {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn'
                }, {
                  icon: Mail,
                  href: 'mailto:kyle@example.com',
                  label: 'Email'
                }].map(({
                  icon: Icon,
                  href,
                  label
                }) => <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{
                  scale: 1.3,
                  y: -5,
                  rotate: 10
                }} className="text-white/80 hover:text-white transition-colors" aria-label={label}>
                      <Icon size={24} />
                    </motion.a>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>;
};