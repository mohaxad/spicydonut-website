import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Zap, Globe, Brain, ArrowRight } from 'lucide-react';
import { useTranslation } from './I18nProvider';
import { siteData } from '../config/data';
import MagneticButton from './MagneticButton';
import ScrollSection from './ScrollSection';

const SpicyLensSection = () => {
  const { t, locale } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const isRTL = locale === 'ar';

  // Use configurable sample products
  const sampleProducts = siteData.sampleProducts;

  // Use configurable total hits
  const totalHits = siteData.search.totalHits;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate search with delay
    setTimeout(() => {
      if (query.trim()) {
        const filtered = sampleProducts.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase()) ||
          product.type.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered.slice(0, 9)); // Limit to 9 results for display
      } else {
        setSearchResults(sampleProducts.slice(0, 9));
      }
      setIsSearching(false);
    }, 150); // Use configurable response time
  };

  useEffect(() => {
    // Show sample results on mount
    if (mounted) {
      setSearchResults(sampleProducts.slice(0, 9));
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <section 
        id="spicylens"
        ref={ref}
        className="py-16 md:py-32 bg-gradient-to-b from-blackened-kaaba via-gray-900/50 to-blackened-kaaba relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 md:h-16 bg-gray-800 rounded-lg mb-6 md:mb-8 w-64 md:w-96 mx-auto"></div>
              <div className="h-4 bg-gray-800 rounded w-48 md:w-64 mx-auto mb-6 md:mb-8"></div>
              <div className="h-10 md:h-12 bg-gray-800 rounded-xl w-full max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="spicylens"
      ref={ref}
      className="py-16 md:py-32 bg-gradient-to-b from-blackened-kaaba via-gray-900/50 to-blackened-kaaba relative overflow-hidden"
    >
      {/* Theme gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-violet-500/5"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollSection className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`flex items-center justify-center space-x-3 mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div 
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 via-amber-500 to-violet-500 rounded-2xl flex items-center justify-center"
                style={{ 
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.4), 0 0 50px rgba(245, 158, 11, 0.2), 0 0 70px rgba(127, 63, 255, 0.1)' 
                }}
              >
                <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ${isRTL ? 'font-arabic' : ''}`}>
                <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-violet-400 bg-clip-text text-transparent">
                  {t('spicylens.title')}
                </span>
              </h2>
            </div>
            <p className={`text-lg md:text-xl text-muted-text max-w-3xl mx-auto mb-6 px-4 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              {t('spicylens.description')}
            </p>
          </motion.div>
        </ScrollSection>

        {/* Search Interface */}
        <ScrollSection className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Search Box */}
            <div className="mb-8">
              <div className="relative w-full max-w-2xl mx-auto">
                <div 
                  className="relative bg-black/20 backdrop-blur-xl border-2 border-saudi-emerald/30 rounded-2xl transition-all duration-300 overflow-hidden"
                  style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-violet-500/10 rounded-2xl" />
                  
                  <div className={`relative flex items-center p-4 space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="flex-shrink-0">
                      <Search className="w-5 h-5 text-saudi-emerald" />
                    </div>

                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder={t('spicylens.searchPlaceholder')}
                      className={`
                        flex-1 bg-transparent text-white text-lg font-medium
                        placeholder-gray-400 outline-none border-none resize-none
                        ${isRTL ? 'text-right font-arabic' : 'text-left'}
                      `}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />

                    <div className="flex-shrink-0">
                      {isSearching ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Brain className="w-5 h-5 text-saudi-emerald" />
                        </motion.div>
                      ) : (
                        <Brain className="w-5 h-5 text-saudi-emerald/70" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results List */}
            <div className="space-y-3">
              {searchResults.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.03,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="group relative"
                >
                  {/* Horizontal Card */}
                  <div 
                    className="bg-black/20 backdrop-blur-lg border border-gray-600/30 rounded-2xl p-4 hover:border-saudi-emerald/50 hover:bg-black/30 transition-all duration-300 cursor-pointer"
                    style={{ 
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' 
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        {product.image ? (
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-600/30">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div 
                              className="w-full h-full hidden items-center justify-center text-2xl"
                              style={{ display: 'none' }}
                            >
                              {product.type === 'Smartphone' ? '📱' : 
                               product.type === 'Smartwatch' ? '⌚' :
                               product.type === 'Headphones' ? '🎧' :
                               product.type === 'Tablet' ? '📟' :
                               product.type === 'Laptop' ? '💻' : '📱'}
                            </div>
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-xl bg-gray-800/50 border border-gray-600/30 flex items-center justify-center text-2xl">
                            {product.type === 'Smartphone' ? '📱' : 
                             product.type === 'Smartwatch' ? '⌚' :
                             product.type === 'Headphones' ? '🎧' :
                             product.type === 'Tablet' ? '📟' :
                             product.type === 'Laptop' ? '💻' : '📱'}
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-lg truncate">
                          {product.name}
                        </h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-gray-300 text-sm">{product.brand}</span>
                          <span className="text-gray-500 text-sm">•</span>
                          <span className="text-gray-300 text-sm">{product.type}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex-shrink-0">
                        <div className="text-right">
                          <div className="text-saudi-emerald font-bold text-lg">
                            ﷼ {product.price}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {t('spicylens.currency')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Results Counter with Large Dataset Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8 p-6 bg-black/20 backdrop-blur-lg rounded-2xl border border-saudi-emerald/30"
              style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)' }}
            >
              <div className="flex items-center justify-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">{t('spicylens.resultsIn')}</span>
                  <span 
                    className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-amber-400 to-violet-400 bg-clip-text text-transparent"
                    style={{ textShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
                  >
                    {totalHits.toLocaleString()}
                  </span>
                  <span className="text-gray-400">{totalHits === 1 ? t('spicylens.result') : t('spicylens.results')}</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-saudi-emerald">{siteData.search.responseTime}</span>
                  <Zap className="w-5 h-5 text-saudi-emerald" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                {t('spicylens.massiveDataset')}
              </p>
            </motion.div>
          </motion.div>
        </ScrollSection>

        {/* Features Grid */}
        <ScrollSection className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Zap,
                title: t('spicylens.features.fast.title'),
                description: t('spicylens.features.fast.description'),
                color: { primary: '#10B981', secondary: '#14B8A6' }
              },
              {
                icon: Brain,
                title: t('spicylens.features.ai.title'),
                description: t('spicylens.features.ai.description'),
                color: { primary: '#F59E0B', secondary: '#FBBF24' }
              },
              {
                icon: Globe,
                title: t('spicylens.features.multilingual.title'),
                description: t('spicylens.features.multilingual.description'),
                color: { primary: '#7F3FFF', secondary: '#8B5CF6' }
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`text-center p-4 md:p-6 bg-black/20 backdrop-blur-xl rounded-xl border border-gray-600/30 ${isRTL ? 'font-arabic' : ''}`}
                style={{
                  background: `linear-gradient(135deg, ${feature.color.primary}10, ${feature.color.secondary}10)`,
                  borderColor: `${feature.color.primary}30`,
                }}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color.primary}, ${feature.color.secondary})`,
                    boxShadow: `0 0 20px ${feature.color.primary}40`,
                  }}
                >
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* CTA */}
        <ScrollSection className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButton 
              variant="primary" 
              className="bg-gradient-to-r from-emerald-500 via-amber-500 to-violet-500 hover:from-emerald-400 hover:via-amber-400 hover:to-violet-400 text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
              style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}
            >
              <span className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse font-arabic' : ''}`}>
                <span>{t('spicylens.cta')}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </MagneticButton>
          </motion.div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default SpicyLensSection; 