import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  navOpacity: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  navOpacity
}) => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 border-b border-[#E5ECF4]/80 backdrop-blur-xl shadow-sm"
      style={{
        backgroundColor: 'rgba(255, 255, 255, var(--nav-opacity))',
        '--nav-opacity': navOpacity
      } as any}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold cursor-pointer relative group"
            whileHover={{
              scale: 1.1,
              rotate: 5
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => scrollToSection('home')}
          >
            <span className="relative z-10 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0] bg-clip-text text-transparent font-extrabold">
              KP
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/10 to-[#C3BEF0]/10 rounded-lg -z-10"
              initial={{
                scale: 0,
                opacity: 0
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1
              }}
              transition={{
                duration: 0.3
              }}
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative px-4 py-2 text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer font-medium rounded-lg"
                whileHover={{
                  scale: 1.08,
                  y: -2
                }}
                whileTap={{
                  scale: 0.95
                }}
              >
                <motion.span
                  whileHover={{
                    y: -3
                  }}
                  transition={{
                    duration: 0.2
                  }}
                >
                  {item}
                </motion.span>
                {activeSection === item.toLowerCase() && (
                  <>
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8A4FFF] to-[#C3BEF0]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#8A4FFF]/5 to-[#C3BEF0]/5 rounded-lg -z-10"
                      layoutId="activeBg"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-[#EFFFFA] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{
              scale: 0.95
            }}
          >
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? 90 : 0
              }}
              transition={{
                duration: 0.2
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden border-t border-[#E5ECF4] bg-white/98 backdrop-blur-xl"
        >
          <div className="px-4 py-4 space-y-1">
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#EFFFFA] hover:to-[#E5ECF4] hover:text-[#8A4FFF] rounded-lg transition-all duration-200 font-medium"
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: idx * 0.05
                }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
