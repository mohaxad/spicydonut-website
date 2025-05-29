import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ChevronDown } from 'lucide-react';
import { useTranslation } from './I18nProvider';
import { siteData } from '../config/data';
import MagneticButton from './MagneticButton';
import AnimatedCounter from './AnimatedCounter';
import RotatingGlowBackground from './RotatingGlowBackground';

const HeroSection = () => {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  // Helper function to parse numbers from strings
  const parseNumber = (value) => {
    if (typeof value === 'number') return value;
    const parsed = parseInt(value.toString().replace(/[^0-9]/g, ''), 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  const textAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={textAnimation}>
            <div className="inline-flex items-center space-x-2 bg-saudi-emerald/10 border border-saudi-emerald/30 rounded-full px-6 py-3 glass">
              <Sparkles className="w-5 h-5 text-saudi-emerald" />
              <span className={`text-sm font-medium text-saudi-emerald ${isRTL ? 'font-arabic' : ''}`}>
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
                animate={{
                  textShadow: [
                    '0 0 10px #10B981',
                    '0 0 20px #10B981, 0 0 30px #10B981',
                    '0 0 10px #10B981'
                  ]
                }}
                transition={{
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

          {/* Stats */}
          <motion.div 
            variants={textAnimation}
            className="flex flex-wrap justify-center gap-8 md:gap-16 py-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <AnimatedCounter end={parseNumber(siteData.company.clientsServed)} suffix="+" />
              </div>
              <p className={`text-muted-text mt-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.stats.clients')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <AnimatedCounter end={parseNumber(siteData.company.projectsCompleted)} suffix="+" />
              </div>
              <p className={`text-muted-text mt-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.stats.projects')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <AnimatedCounter end={parseNumber(siteData.company.countriesServed)} suffix="" />
              </div>
              <p className={`text-muted-text mt-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.stats.countries')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                <AnimatedCounter end={parseNumber(siteData.search.accuracy)} suffix="%" />
              </div>
              <p className={`text-muted-text mt-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.stats.accuracy')}
              </p>
            </div>
          </motion.div>

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
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-saudi-emerald rounded-full mx-auto relative"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                  className="w-1 h-3 bg-saudi-emerald rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                />
              </motion.div>

              {/* Bouncing Arrow */}
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
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
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-saudi-emerald/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 