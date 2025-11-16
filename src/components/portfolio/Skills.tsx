import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles } from 'lucide-react';
import { technologies } from './data';

interface SkillsProps {
  shouldReduceMotion: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ shouldReduceMotion }) => {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
        >
          <motion.div
            className="flex items-center gap-4 mb-6 justify-center"
            initial={{
              opacity: 0,
              y: -50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              type: "spring"
            }}
            viewport={{
              once: true
            }}
          >
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.1
              }}
              transition={{
                duration: 0.6
              }}
              className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20"
            >
              <Code size={32} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills & Technologies</h2>
          </motion.div>

          <motion.p
            className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto"
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            viewport={{
              once: true
            }}
          >
            A comprehensive toolkit of modern technologies and frameworks
          </motion.p>

          {/* Infinite Marquee Animation */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="flex overflow-hidden py-8">
              {/* Wrapper with both sets for seamless loop */}
              <motion.div
                className="flex gap-8 shrink-0"
                animate={{
                  x: ['0%', '-50%']
                }}
                transition={{
                  duration: shouldReduceMotion ? 120 : 60,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                style={{
                  width: 'max-content'
                }}
              >
                {/* First set of technologies */}
                <div className="flex gap-8 shrink-0">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={`tech-1-${index}`}
                      whileHover={shouldReduceMotion ? {} : {
                        scale: 1.15,
                        y: -8
                      }}
                      className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]"
                    >
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" />

                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative">
                        {tech.logo ? (
                          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.parentElement?.querySelector('.emoji-fallback');
                                if (fallback) {
                                  (fallback as HTMLElement).style.display = 'block';
                                }
                              }}
                              loading="lazy"
                            />
                            <span className="emoji-fallback text-3xl md:text-5xl hidden">{tech.icon}</span>
                          </div>
                        ) : (
                          <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125">
                            {tech.icon}
                          </span>
                        )}
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Second set (duplicate for seamless loop) */}
                <div className="flex gap-8 shrink-0">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={`tech-2-${index}`}
                      whileHover={shouldReduceMotion ? {} : {
                        scale: 1.15,
                        y: -8
                      }}
                      className="group relative bg-white rounded-2xl p-4 md:p-8 border border-gray-200 hover:border-[#8A4FFF]/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl min-w-[120px] md:min-w-[180px]"
                    >
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A4FFF]/0 via-[#9D5FFF]/0 to-[#C3BEF0]/0 group-hover:from-[#8A4FFF]/8 group-hover:via-[#9D5FFF]/8 group-hover:to-[#C3BEF0]/8 transition-all duration-300" />

                      {/* Tech content */}
                      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 relative">
                        {tech.logo ? (
                          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.parentElement?.querySelector('.emoji-fallback');
                                if (fallback) {
                                  (fallback as HTMLElement).style.display = 'block';
                                }
                              }}
                              loading="lazy"
                            />
                            <span className="emoji-fallback text-3xl md:text-5xl hidden">{tech.icon}</span>
                          </div>
                        ) : (
                          <span className="text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-125">
                            {tech.icon}
                          </span>
                        )}
                        <span className="text-xs md:text-base font-semibold text-gray-800 text-center group-hover:text-[#8A4FFF] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tech Summary - Professional Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            viewport={{
              once: true
            }}
            className="mt-16 flex justify-center"
          >
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
  );
};
