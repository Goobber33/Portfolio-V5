import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FloatingOrb } from '../ui/FloatingOrb';
import { projects } from '../../../data/portfolio';

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden"
    >
      <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 0.2
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
        >
          <SectionHeader icon={Briefcase} title="Projects" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                viewport={{
                  once: true
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  y: -10,
                  transition: {
                    duration: 0.2
                  }
                }}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border border-[#8A4FFF]/10 hover:border-[#8A4FFF]/20 group relative overflow-hidden"
              >
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors"
                  whileHover={{
                    scale: 1.05
                  }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-semibold border border-[#8A4FFF]/10"
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        rotate: 5
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.6
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{
                        delay: index * 0.15 + techIndex * 0.08
                      }}
                      viewport={{
                        once: true
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold"
                  whileHover={{
                    x: 10
                  }}
                >
                  View Project
                  <motion.span
                    animate={{
                      x: [0, 8, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  >
                    <ExternalLink size={20} />
                  </motion.span>
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div
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
              delay: 0.3
            }}
            viewport={{
              once: true
            }}
            className="flex justify-center"
          >
            <motion.a
              href="https://github.com/kyleparks"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group"
            >
              <motion.span
                whileHover={{
                  rotate: 360
                }}
                transition={{
                  duration: 0.5
                }}
              >
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
  );
};

