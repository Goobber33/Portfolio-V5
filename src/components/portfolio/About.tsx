import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Award } from 'lucide-react';
import aboutImage from '../../assets/images/about-image.jpg';

interface AboutProps {
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export const About: React.FC<AboutProps> = ({ isMobile, shouldReduceMotion }) => {
  return (
    <section id="about" className="py-32 bg-white relative">
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
          <motion.div
            className="flex items-center gap-4 mb-20"
            initial={{
              opacity: 0,
              x: -100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{
              once: true
            }}
          >
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.3
              }}
              transition={{
                duration: 0.6
              }}
              className="p-3 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] shadow-lg shadow-[#8A4FFF]/20"
            >
              <User size={32} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              viewport={{
                once: true
              }}
              className="space-y-6"
            >
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
              <motion.div
                className="grid grid-cols-3 gap-4 pt-6"
                initial={{
                  opacity: 0,
                  y: 50
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
                }].map(({ label, value, icon: Icon }) => (
                  <motion.div
                    key={label}
                    whileHover={{
                      y: -10,
                      scale: 1.1,
                      rotate: 5
                    }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-2xl hover:shadow-[#8A4FFF]/20 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={28} className="text-[#8A4FFF] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -5
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              viewport={{
                once: true
              }}
            >
              <motion.div
                className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] p-1.5 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 2
                }}
                transition={{
                  duration: 0.3
                }}
              >
                <div className="w-full h-full bg-white rounded-[22px] overflow-hidden">
                  <motion.img
                    src={aboutImage}
                    alt="Kyle Parks"
                    className="w-full h-full object-cover object-[center_20%] cursor-pointer"
                    transition={{
                      duration: 0.4
                    }}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Enhanced decorative elements */}
              {!isMobile && (
                <>
                  <motion.div
                    className="absolute -top-6 -right-6 w-40 h-40 bg-[#8A4FFF]/30 rounded-full blur-3xl -z-10"
                    animate={shouldReduceMotion ? {} : {
                      scale: [1, 1.6, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={shouldReduceMotion ? {} : {
                      duration: 3,
                      repeat: Infinity
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C3BEF0]/30 rounded-full blur-3xl -z-10"
                    animate={shouldReduceMotion ? {} : {
                      scale: [1.6, 1, 1.6],
                      opacity: [0.7, 0.3, 0.7]
                    }}
                    transition={shouldReduceMotion ? {} : {
                      duration: 4,
                      repeat: Infinity
                    }}
                  />
                </>
              )}

              {/* Professional shadow for mobile */}
              {isMobile && (
                <div className="absolute -inset-2 bg-gradient-to-br from-[#8A4FFF]/20 via-[#9D5FFF]/20 to-[#C3BEF0]/20 rounded-3xl -z-10 blur-xl" />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
