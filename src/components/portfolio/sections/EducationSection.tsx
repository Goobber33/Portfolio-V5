import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FloatingOrb } from '../ui/FloatingOrb';
import { education } from '../../../data/portfolio';

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-32 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4] relative overflow-hidden"
    >
      <FloatingOrb delay={0} duration={25} size="medium" color="#C3BEF0" className="hidden md:block" />

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
          <SectionHeader icon={GraduationCap} title="Education" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -100,
                  scale: 0.9
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{
                  once: true
                }}
                whileHover={{
                  scale: 1.05,
                  x: 20
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
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      rotate: 5
                    }}
                  >
                    {edu.period}
                  </motion.span>
                </div>
                <p
                  className="text-lg font-semibold mb-3"
                  style={{
                    color: edu.color
                  }}
                >
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

