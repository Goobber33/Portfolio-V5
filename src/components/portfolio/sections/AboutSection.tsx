import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { StatCard } from '../ui/StatCard';
import { stats } from '../../../data/portfolio';

export const AboutSection = () => {
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
          <SectionHeader icon={User} title="About Me" />

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
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
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
                    src="/images/about/IMG_1250.JPEG"
                    alt="Portrait of Kyle Parks"
                    className="w-full h-full object-cover object-center select-none"
                    style={{ objectPosition: 'center 20%' }}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 768px) 500px, 384px"
                    whileHover={{
                      scale: 1.00
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 w-40 h-40 bg-[#8A4FFF]/30 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C3BEF0]/30 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1.6, 1, 1.6],
                  opacity: [0.7, 0.3, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

