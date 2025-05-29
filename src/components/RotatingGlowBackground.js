import { motion } from 'framer-motion';

const RotatingGlowBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saudi-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-gradient-end/15 rounded-full blur-3xl" />
      </motion.div>

      {/* Medium counter-rotating glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-sandstone-gold/8 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-saudi-emerald/12 rounded-full blur-3xl" />
      </motion.div>

      {/* Small fast rotating glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-gradient-end/20 rounded-full blur-xl" />
      </motion.div>

      {/* Pulsing core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-saudi-emerald/25 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default RotatingGlowBackground; 