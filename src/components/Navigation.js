import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from './I18nProvider';
import MagneticButton from './MagneticButton';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t, locale } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.spicylens'), href: '#spicylens' },
    { label: 'Vision 2030', href: '#vision2030' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.products'), href: '#products' },
    { label: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-blackened-kaaba/95 backdrop-blur-lg border-b border-saudi-emerald/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-emerald-gradient rounded-lg flex items-center justify-center glow-border">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <span className="text-2xl font-bold gradient-text">SpicyDonut</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`text-white hover:text-saudi-emerald transition-colors duration-300 font-medium ${isRTL ? 'font-arabic' : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Right side: Language Switcher + CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <MagneticButton variant="primary">
                <span className={isRTL ? 'font-arabic' : ''}>
                  {t('navigation.getStarted')}
                </span>
              </MagneticButton>
            </div>

            {/* Mobile: Language Switcher + Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <LanguageSwitcher />
              <motion.button
                className="text-white hover:text-saudi-emerald transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-blackened-kaaba/95 backdrop-blur-lg" />
            <motion.div
              className="relative z-50 flex flex-col items-center justify-center h-full space-y-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`text-2xl font-medium text-white hover:text-saudi-emerald transition-colors ${isRTL ? 'font-arabic' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <MagneticButton 
                  variant="primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={isRTL ? 'font-arabic' : ''}>
                    {t('navigation.getStarted')}
                  </span>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 