import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const StatCard = ({ label, value, icon: Icon }: StatCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.1,
        rotate: 5
      }}
      className="text-center p-6 rounded-xl bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] border border-[#8A4FFF]/10 shadow-sm hover:shadow-2xl hover:shadow-[#8A4FFF]/20 transition-all duration-200"
    >
      <motion.div
        whileHover={{
          rotate: 360
        }}
        transition={{
          duration: 0.5
        }}
      >
        <Icon size={28} className="text-[#8A4FFF] mx-auto mb-2" />
      </motion.div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

