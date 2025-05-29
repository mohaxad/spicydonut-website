import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Zap, Star, TrendingUp, ArrowRight, Brain } from 'lucide-react';
import { Highlight } from 'react-instantsearch';
import { searchTranslations } from '@/lib/meilisearch';

const SpicyLensSearchResults = ({ hits, language = 'en', onHitClick }) => {
  console.log('🔥 SpicyLensSearchResults called with:', { hits, hitsLength: hits?.length });
  
  const t = searchTranslations[language];
  const isRTL = language === 'ar';

  // Brand colors cycle
  const brandColors = [
    { primary: '#10B981', secondary: '#14B8A6', name: 'emerald' }, // Emerald Teal
    { primary: '#F59E0B', secondary: '#FBBF24', name: 'amber' },   // Golden Amber
    { primary: '#7F3FFF', secondary: '#8B5CF6', name: 'violet' }   // Royal Violet
  ];

  if (!hits || hits.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 relative"
      >
        <div className="relative z-10">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-emerald-500 via-amber-500 to-violet-500 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-500 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Star className="w-12 h-12 text-white relative z-10" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 futuristic-text">
            {t.noResults}
          </h3>
          <p className="text-gray-400 text-lg">
            {language === 'ar' ? 'جرب مصطلحات بحث مختلفة' : 'Try different search terms'}
          </p>
        </div>
        
        {/* Animated particles for no results */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Limit to 9 products for 3x3 grid
  const displayHits = hits.slice(0, 9);

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
              style={{ left: `${(i * 5)}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              style={{ top: `${(i * 5)}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.15,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: brandColors[i % 3].primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${brandColors[i].primary}, ${brandColors[i].secondary})`,
              boxShadow: `0 0 20px ${brandColors[i].primary}`,
            }}
            animate={{
              x: [-100, (typeof window !== 'undefined' ? window.innerWidth : 1200) + 100],
              y: [Math.random() * 200, Math.random() * 200 + 100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 p-8 relative"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-violet-500/10 rounded-3xl" />
        </div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-16 h-16 bg-gradient-to-r from-emerald-500 via-amber-500 to-violet-500 rounded-full flex items-center justify-center relative"
              style={{ 
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.5), 0 0 60px rgba(245, 158, 11, 0.3), 0 0 80px rgba(127, 63, 255, 0.2)' 
              }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="futuristic-text">{displayHits.length}</span>
                <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-violet-400 bg-clip-text text-transparent">
                  {displayHits.length === 1 ? t.result : t.results}
                </span>
              </h2>
              <p className="text-gray-300 text-lg mt-2 futuristic-text">
                {t.poweredBy}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(16, 185, 129, 0.5)',
                '0 0 30px rgba(245, 158, 11, 0.5)',
                '0 0 20px rgba(127, 63, 255, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-lg rounded-full border border-white/20"
          >
            <Brain className="w-5 h-5 text-emerald-400" />
            <span className="text-white text-lg font-medium futuristic-text">AI Powered</span>
          </motion.div>
        </div>
      </motion.div>

      {/* 3x3 Grid */}
      <motion.div 
        key="futuristic-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {displayHits.map((hit, index) => {
            const colorScheme = brandColors[index % 3];
            
            return (
              <motion.div
                key={hit.objectID || hit.id}
                layout
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -50, rotateY: 30 }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="group relative perspective-1000"
              >
                {/* Futuristic Card Container */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  className="relative h-96 overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl group-hover:border-white/30 transition-all duration-700 cursor-pointer"
                  style={{
                    background: `linear-gradient(145deg, 
                      rgba(0,0,0,0.8) 0%, 
                      rgba(${parseInt(colorScheme.primary.slice(1,3), 16)}, ${parseInt(colorScheme.primary.slice(3,5), 16)}, ${parseInt(colorScheme.primary.slice(5,7), 16)}, 0.1) 50%,
                      rgba(0,0,0,0.9) 100%)`,
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)`,
                  }}
                  onClick={() => onHitClick && onHitClick(hit)}
                >
                  {/* Animated Border Glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(145deg, ${colorScheme.primary}20, ${colorScheme.secondary}20)`,
                      filter: 'blur(20px)',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Pulsating Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100"
                    style={{ borderColor: colorScheme.primary }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Scanning Line Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colorScheme.primary}40, transparent)`,
                    }}
                    animate={{
                      x: [-100, 400],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Product Image/Icon */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-t-3xl">
                    {hit.image ? (
                      <motion.img 
                        src={hit.image} 
                        alt={hit.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center relative">
                        {/* Holographic Overlay */}
                        <motion.div 
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(45deg, ${colorScheme.primary}20, transparent, ${colorScheme.secondary}20)`,
                          }}
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        
                        <motion.div 
                          className="text-6xl opacity-50 relative z-10"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          style={{ filter: `drop-shadow(0 0 20px ${colorScheme.primary})` }}
                        >
                          {hit.type === 'Smartphone' ? '📱' : 
                           hit.type === 'Smartwatch' ? '⌚' :
                           hit.type === 'Headphones' ? '🎧' :
                           hit.type === 'Tablet' ? '📟' :
                           hit.type === 'Laptop' ? '💻' : '📱'}
                        </motion.div>
                        
                        {/* Scanning Lines */}
                        <motion.div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `repeating-linear-gradient(
                              0deg,
                              transparent,
                              transparent 2px,
                              ${colorScheme.primary}40 2px,
                              ${colorScheme.primary}40 4px
                            )`,
                          }}
                          animate={{
                            y: [-100, 200],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Floating Type Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="absolute top-4 left-4 px-4 py-2 text-white text-xs font-bold rounded-full backdrop-blur-lg border"
                      style={{
                        background: `linear-gradient(135deg, ${colorScheme.primary}90, ${colorScheme.secondary}90)`,
                        borderColor: `${colorScheme.primary}50`,
                        boxShadow: `0 0 20px ${colorScheme.primary}50`,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {hit.type || 'Product'}
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="relative p-6 space-y-4">
                    {/* Glowing Product Name */}
                    <motion.h3 
                      className="text-xl font-bold text-white line-clamp-2 transition-all duration-300"
                      style={{
                        textShadow: `0 0 10px ${colorScheme.primary}80`,
                      }}
                      whileHover={{
                        textShadow: `0 0 20px ${colorScheme.primary}`,
                      }}
                    >
                      {hit._highlightResult?.name ? (
                        <Highlight hit={hit} attribute="name" />
                      ) : (
                        hit.name || 'Unknown Product'
                      )}
                    </motion.h3>

                    {/* Brand with Animated Dot */}
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-3 h-3 rounded-full"
                        style={{ background: colorScheme.primary }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <p className="text-gray-300 text-sm font-medium">{hit.brand || 'Unknown Brand'}</p>
                    </div>

                    {/* Futuristic Price Display */}
                    {hit.price && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-2xl border backdrop-blur-lg transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${colorScheme.primary}10, ${colorScheme.secondary}10)`,
                          borderColor: `${colorScheme.primary}30`,
                        }}
                      >
                        <motion.span 
                          className="text-2xl font-bold"
                          style={{
                            color: colorScheme.primary,
                            textShadow: `0 0 10px ${colorScheme.primary}50`,
                          }}
                          animate={{
                            textShadow: [
                              `0 0 10px ${colorScheme.primary}50`,
                              `0 0 20px ${colorScheme.primary}70`,
                              `0 0 10px ${colorScheme.primary}50`,
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ﷼ {hit.price}
                        </motion.span>
                      </motion.div>
                    )}

                    {/* Interactive Action Button */}
                    <motion.button
                      className="w-full py-4 px-6 text-white hover:text-black font-bold rounded-2xl transition-all duration-500 text-sm flex items-center justify-center gap-3 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${colorScheme.primary}20, ${colorScheme.secondary}20)`,
                        border: `1px solid ${colorScheme.primary}40`,
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                        boxShadow: `0 0 30px ${colorScheme.primary}50`,
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onHitClick && onHitClick(hit);
                      }}
                    >
                      <span className="relative z-10">
                        {language === 'ar' ? 'عرض المنتج' : 'View Product'}
                      </span>
                      <ArrowRight className="w-5 h-5 relative z-10" />
                      
                      {/* Energy beam effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(45deg, transparent, ${colorScheme.primary}40, transparent)`,
                        }}
                        animate={{
                          x: [-100, 300],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.button>
                  </div>

                  {/* Floating sparkles on hover */}
                  <AnimatePresence>
                    {[...Array(8)].map((_, sparkleIndex) => (
                      <motion.div
                        key={sparkleIndex}
                        className="absolute w-1 h-1 rounded-full pointer-events-none"
                        style={{
                          background: colorScheme.primary,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [0, -20, -40],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: sparkleIndex * 0.2,
                        }}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpicyLensSearchResults; 