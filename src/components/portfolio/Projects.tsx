import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Github, ExternalLink } from 'lucide-react';
import { FloatingOrb } from './FloatingOrb';
import { projects } from './data';

interface ProjectsProps {
  isMobile: boolean;
  shouldReduceMotion: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isMobile, shouldReduceMotion }) => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-[#E5ECF4] via-white to-[#EFFFFA] relative overflow-hidden">
      {!isMobile && (
        <FloatingOrb delay={5} duration={25} size="large" color="#8A4FFF" shouldReduceMotion={shouldReduceMotion} />
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
              <Briefcase size={32} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
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
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-200 cursor-pointer border-2 border-gray-200 hover:border-[#8A4FFF]/40 group relative overflow-hidden"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#8A4FFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm font-semibold border border-[#8A4FFF]/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200 font-bold"
                  whileHover={{
                    x: 10
                  }}
                >
                  View Project
                  <motion.span>
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
              href="https://github.com/Goobber33"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#8A4FFF] rounded-2xl font-bold hover:shadow-2xl transition-all duration-200 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group"
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
