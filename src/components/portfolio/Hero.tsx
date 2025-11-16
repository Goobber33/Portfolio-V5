import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { FloatingOrb } from './FloatingOrb';

interface HeroProps {
  isMobile: boolean;
  shouldReduceMotion: boolean;
  heroY: any;
  heroOpacity: any;
  heroScale: any;
  scrollToSection: (sectionId: string) => void;
}

const containerVariants: Variants = {
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

const itemVariants: Variants = {
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export const Hero: React.FC<HeroProps> = ({
  isMobile,
  shouldReduceMotion,
  heroY,
  heroOpacity,
  heroScale,
  scrollToSection
}) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA]" />

      {!isMobile && (
        <>
          <FloatingOrb delay={0} duration={8} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} />
          <FloatingOrb delay={2} duration={10} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} />
          <FloatingOrb delay={4} duration={12} size="medium" color="#E5ECF4" shouldReduceMotion={shouldReduceMotion} />
        </>
      )}

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale
        }}
      >
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
              href: 'https://github.com/Goobber33',
              label: 'GitHub'
            }, {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/kyle-parks-b0a74017b',
              label: 'LinkedIn'
            }, {
              icon: Mail,
              href: isMobile ? 'mailto:kcparks1234@gmail.com' : 'https://mail.google.com/mail/?view=cm&fs=1&to=kcparks1234@gmail.com',
              label: 'Email'
            }].map(({ icon: Icon, href, label }, idx) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{
                    scale: 0,
                    rotate: -180
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{
                    delay: 1.5 + idx * 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  className="p-5 rounded-full bg-white border-2 border-[#E5ECF4] hover:border-[#8A4FFF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8A4FFF]/40 group"
                  aria-label={label}
                >
                  <Icon size={28} className="text-gray-700 group-hover:text-[#8A4FFF] transition-colors" />
                </motion.a>
            ))}
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={() => scrollToSection('about')}
            className="text-[#8A4FFF] flex flex-col items-center gap-3 mx-auto group"
          >
            <span className="text-base font-bold group-hover:text-[#9D5FFF] transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <ChevronDown size={40} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
