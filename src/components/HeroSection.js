import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ChevronDown } from 'lucide-react';
import { useTranslation } from './I18nProvider';
import MagneticButton from './MagneticButton';
import RotatingGlowBackground from './RotatingGlowBackground';
import { useIsMobile } from '../hooks/useIsMobile';

const HeroSection = () => {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';
  const isMobile = useIsMobile();
  
  const textAnimation = {
    initial: { opacity: 0, y: isMobile ? 30 : 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        delayChildren: isMobile ? 0.1 : 0.3
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-blackened-kaaba">
        {/* Rotating Glow Background */}
        <RotatingGlowBackground />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={textAnimation} className="mx-4">
            <div className="inline-flex items-center space-x-2 bg-saudi-emerald/10 border border-saudi-emerald/30 rounded-full px-4 py-2 md:px-6 md:py-3 glass">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-saudi-emerald flex-shrink-0" />
              <span className={`text-xs md:text-sm font-medium text-saudi-emerald ${isRTL ? 'font-arabic' : ''} text-center`}>
                {locale === 'ar' 
                  ? 'رواد الابتكار في الذكاء الاصطناعي بالسعودية'
                  : 'Leading AI Innovation in Saudi Arabia'
                }
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={textAnimation} className="space-y-6">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <span className="block text-white">{t('hero.title')}</span>
              <motion.span 
                className="block gradient-text glow-text"
                animate={isMobile ? {} : {
                  textShadow: [
                    '0 0 10px #10B981',
                    '0 0 20px #10B981, 0 0 30px #10B981',
                    '0 0 10px #10B981'
                  ]
                }}
                transition={isMobile ? {} : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {t('hero.subtitle')}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={textAnimation}
            className={`text-xl md:text-2xl text-muted-text max-w-4xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('hero.description')}
          </motion.p>


          {/* CTA Buttons */}
          <motion.div 
            variants={textAnimation}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <MagneticButton variant="primary" className="group">
              <span className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse font-arabic' : ''}`}>
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
            
            <MagneticButton variant="secondary" className="group">
              <span className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse font-arabic' : ''}`}>
                <Zap className="w-5 h-5" />
                <span>
                  {locale === 'ar' ? 'انضم للثورة التقنية' : 'Join the Revolution'}
                </span>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={textAnimation}
            className="pt-16"
          >
            <motion.div className="flex flex-col items-center space-y-4">
              {/* Animated Scroll Mouse */}
              <motion.div
                animate={{ y: [0, isMobile ? 5 : 10, 0] }}
                transition={{ repeat: Infinity, duration: isMobile ? 1.5 : 2, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-saudi-emerald rounded-full mx-auto relative"
              >
                <motion.div
                  animate={{ y: [0, isMobile ? 8 : 12, 0] }}
                  transition={{ repeat: Infinity, duration: isMobile ? 1.5 : 2, ease: "easeInOut", delay: isMobile ? 0.3 : 0.5 }}
                  className="w-1 h-3 bg-saudi-emerald rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                />
              </motion.div>

              {/* Bouncing Arrow */}
              <motion.div
                animate={{ 
                  y: [0, isMobile ? 5 : 8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: isMobile ? 1 : 1.5, 
                  ease: "easeInOut" 
                }}
                className="text-saudi-emerald"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>

              <p className={`text-muted-text text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {locale === 'ar' ? 'مرر للاستكشاف' : 'Scroll to explore'}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[...Array(10)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration issues
          const positions = [
            { left: '10%', top: '20%' },
            { left: '25%', top: '80%' },
            { left: '40%', top: '15%' },
            { left: '60%', top: '70%' },
            { left: '75%', top: '30%' },
            { left: '85%', top: '90%' },
            { left: '15%', top: '60%' },
            { left: '90%', top: '40%' },
            { left: '35%', top: '85%' },
            { left: '70%', top: '10%' }
          ];
          const delays = [0, 0.3, 0.6, 0.9, 1.2, 0.2, 0.5, 0.8, 1.1, 0.1];
          const durations = [2, 2.5, 2.2, 2.8, 2.1, 2.4, 2.6, 2.3, 2.7, 2.9];
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-saudi-emerald/30 rounded-full"
              style={positions[i]}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: durations[i],
                repeat: Infinity,
                delay: delays[i],
                ease: "easeOut"
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection; 