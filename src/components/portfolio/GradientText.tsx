import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = ''
}) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0%', '100%', '0%']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        backgroundSize: '200% auto'
      }}
    >
      {children}
    </motion.span>
  );
};
