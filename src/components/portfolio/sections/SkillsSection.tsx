import { motion } from 'framer-motion';
import { Code, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { skills } from '../../../data/portfolio';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <SectionHeader icon={Code} title="Skills" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.7,
                  delay: groupIndex * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{
                  once: true
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotate: 2
                }}
                className="bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] rounded-3xl p-7 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#8A4FFF]/20 group"
              >
                <motion.h3
                  className="text-xl font-bold mb-6 flex items-center gap-2"
                  style={{
                    color: '#8A4FFF'
                  }}
                  whileHover={{
                    scale: 1.08
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 0.5
                    }}
                  >
                    <Zap size={22} className="group-hover:text-[#C3BEF0] transition-colors" />
                  </motion.div>
                  {skillGroup.category}
                </motion.h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="text-gray-700 flex items-center gap-3 font-medium"
                      initial={{
                        opacity: 0,
                        x: -30
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: groupIndex * 0.15 + skillIndex * 0.08
                      }}
                      viewport={{
                        once: true
                      }}
                      whileHover={{
                        x: 12,
                        scale: 1.05
                      }}
                    >
                      <motion.span
                        className="w-2.5 h-2.5 rounded-full bg-[#8A4FFF]"
                        whileHover={{
                          scale: 2.5
                        }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

