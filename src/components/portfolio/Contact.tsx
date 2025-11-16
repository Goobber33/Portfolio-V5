import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { FloatingOrb } from './FloatingOrb';

interface ContactProps {
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isMobile, shouldReduceMotion }) => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] relative overflow-hidden">
      {!isMobile && (
        <FloatingOrb delay={0} duration={20} size="large" color="#FFFFFF" shouldReduceMotion={shouldReduceMotion} />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 80
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              type: "spring"
            }}
            viewport={{
              once: true
            }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-xl text-white/95 mb-16 max-w-2xl mx-auto leading-relaxed"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{
              once: true
            }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            viewport={{
              once: true
            }}
          >
            <motion.a
              href={isMobile ? 'mailto:kcparks1234@gmail.com' : 'https://mail.google.com/mail/?view=cm&fs=1&to=kcparks1234@gmail.com'}
              target={!isMobile ? '_blank' : undefined}
              rel={!isMobile ? 'noopener noreferrer' : undefined}
              whileHover={{
                scale: 1.1,
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 flex items-center gap-3 shadow-xl cursor-pointer"
            >
              <Mail size={24} />
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kyle-parks-b0a74017b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl"
            >
              <Linkedin size={24} />
              Connect on LinkedIn
            </motion.a>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.5
            }}
            viewport={{
              once: true
            }}
          >
            <motion.a
              href="/Kyle-Parks-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center gap-3 border-2 border-white/30 hover:border-white/50 shadow-xl"
            >
              <Download size={24} />
              View Resume
            </motion.a>
          </motion.div>

          {/* Footer content */}
          <motion.div
            className="pt-10 border-t border-white/20"
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            viewport={{
              once: true
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/90 text-base font-medium">
                © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex items-center gap-5">
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
                }].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{
                      scale: 1.3,
                      y: -5,
                      rotate: 10
                    }}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
