import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { FloatingOrb } from './FloatingOrb';
import { education } from './data';

interface EducationProps {
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export const Education: React.FC<EducationProps> = ({ isMobile, shouldReduceMotion }) => {
  return (
    <section id="education" className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden">
      {!isMobile && (
        <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" shouldReduceMotion={shouldReduceMotion} />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              type: "spring"
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
              <GraduationCap size={32} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Education</h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{
                  once: true
                }}
                className="bg-white rounded-3xl p-8 border-l-[8px] hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                style={{
                  borderColor: edu.color
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8A4FFF] transition-colors">
                    {edu.institution}
                  </h3>
                  <motion.span
                    className="px-5 py-2.5 rounded-full text-sm font-bold inline-block w-fit shadow-sm"
                    style={{
                      backgroundColor: `${edu.color}20`,
                      color: edu.color
                    }}
                  >
                    {edu.period}
                  </motion.span>
                </div>
                <p className="text-lg font-semibold mb-3" style={{ color: edu.color }}>
                  {edu.degree}
                </p>
                <p className="text-gray-700 leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
