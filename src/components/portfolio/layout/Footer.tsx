import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../../data/portfolio';

export const Footer = () => {
  return (
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
          {socialLinks.map(({ icon: Icon, href, label }) => (
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
  );
};

