import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

export const SectionHeader = ({ icon: Icon, title }: SectionHeaderProps) => {
  return (
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
        <Icon size={32} className="text-white" />
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
    </motion.div>
  );
};

