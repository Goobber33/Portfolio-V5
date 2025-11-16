import { motion } from 'framer-motion';

interface FloatingOrbProps {
  delay?: number;
  duration?: number;
  size?: 'large' | 'medium' | 'small';
  color?: string;
  className?: string;
}

export const FloatingOrb = ({
  delay = 0,
  duration = 20,
  size = 'large',
  color = '#8A4FFF',
  className = ''
}: FloatingOrbProps) => {
  const sizeMap = {
    large: '800px',
    medium: '600px',
    small: '400px'
  };

  return (
    <motion.div
      className={`${className} absolute rounded-full blur-3xl opacity-40 pointer-events-none`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: sizeMap[size],
        height: sizeMap[size]
      }}
      animate={{
        x: ['-20%', '120%', '-20%'],
        y: ['-10%', '10%', '-10%'],
        scale: [1, 1.5, 1]
      }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
        repeatType: 'loop'
      }}
    />
  );
};

