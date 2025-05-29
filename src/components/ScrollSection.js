import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

const ScrollSection = ({ 
  children, 
  className = '', 
  animation = fadeInUp,
  stagger = false,
  threshold = 0.1,
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={stagger ? "initial" : animation.initial}
      animate={isInView ? (stagger ? "animate" : animation.animate) : (stagger ? "initial" : animation.initial)}
      transition={stagger ? staggerContainer.animate.transition : animation.transition}
      variants={stagger ? staggerContainer : undefined}
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection; 