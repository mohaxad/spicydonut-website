import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from './I18nProvider';

const LanguageSwitcher = ({ className = '' }) => {
  const { locale, switchLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleLanguageSwitch = (langCode) => {
    switchLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-black/20 backdrop-blur-lg border border-saudi-emerald/30 rounded-full px-4 py-2 text-sm text-white hover:bg-black/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-saudi-emerald" />
        <span className="flex items-center space-x-1">
          <span>{currentLanguage?.flag}</span>
          <span>{currentLanguage?.name}</span>
        </span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-lg border border-saudi-emerald/30 rounded-xl overflow-hidden shadow-xl z-50"
          style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSwitch(language.code)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors
                ${locale === language.code 
                  ? 'bg-saudi-emerald/20 text-saudi-emerald' 
                  : 'text-white hover:bg-saudi-emerald/10'
                }
              `}
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
              {locale === language.code && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 