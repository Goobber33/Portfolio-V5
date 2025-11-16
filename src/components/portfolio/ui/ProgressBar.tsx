import { motion, MotionValue } from 'framer-motion';

interface ProgressBarProps {
  scrollProgress: MotionValue<number>;
}

export const ProgressBar = ({ scrollProgress }: ProgressBarProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8A4FFF] via-[#9D5FFF] to-[#C3BEF0] origin-left z-50 shadow-lg shadow-[#8A4FFF]/30"
      style={{
        scaleX: scrollProgress
      }}
    />
  );
};

