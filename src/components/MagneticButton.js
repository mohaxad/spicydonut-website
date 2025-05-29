import { useRef } from 'react';
import { motion } from 'framer-motion';
import { magneticEffect, resetMagnetic } from '@/lib/utils';

const MagneticButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick,
  ...props 
}) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      magneticEffect(e, buttonRef.current, 0.3);
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      resetMagnetic(buttonRef.current);
    }
  };

  const variants = {
    primary: 'bg-emerald-gradient text-white glow-border hover:shadow-lg hover:shadow-saudi-emerald/25',
    secondary: 'bg-transparent border-2 border-saudi-emerald text-saudi-emerald hover:bg-saudi-emerald hover:text-white glow-border',
    ghost: 'bg-transparent text-saudi-emerald hover:bg-saudi-emerald/10 border border-saudi-emerald/30'
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`
        px-8 py-4 rounded-lg font-semibold transition-all duration-300 magnetic
        ${variants[variant]}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton; 