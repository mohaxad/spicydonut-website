import { motion } from 'framer-motion';
import { Search, Shield, Brain, Zap, ArrowRight, Star, Eye, Users, Workflow, Lock, Car } from 'lucide-react';
import ScrollSection from './ScrollSection';
import MagneticButton from './MagneticButton';
import { productsData, productStatusConfig } from '../config/products';
import { useIsMobile } from '../hooks/useIsMobile';

const ProductsSection = () => {
  const isMobile = useIsMobile();
  
  // Icon mapping for dynamic icon rendering
  const iconComponents = {
    Search,
    Eye,
    Users,
    Workflow,
    Car,
    Lock
  };

  // Process products with icon components
  const products = productsData.map(product => ({
    ...product,
    icon: iconComponents[product.icon]
  }));

  const cardVariants = {
    initial: { opacity: 0, y: isMobile ? 10 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.2 : 0.4, ease: "easeOut" }
  };

  return (
    <section id="products" className="py-16 md:py-32 bg-gradient-to-b from-blackened-kaaba to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Comprehensive</span>
              <span className="block text-white">AI Product Suite</span>
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              From intelligent search engines to SaaS management solutions, 
              our AI-powered products are designed to solve real-world challenges across industries.
            </p>
          </motion.div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ScrollSection key={product.name}>
              <motion.div
                variants={cardVariants}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border ${product.borderColor} rounded-2xl p-6 md:p-8 transition-all duration-300 glass overflow-hidden`}
                whileHover={isMobile ? {} : { y: -5 }}
                transition={{ duration: isMobile ? 0.1 : 0.2 }}
              >
                {/* Animated Background Pattern - Hidden on mobile for performance */}
                <div className="absolute inset-0 opacity-5 hidden md:block">
                  <motion.div
                    className={`w-full h-full ${product.bgGradient}`}
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${productStatusConfig[product.status]?.badgeStyle || 'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                    {product.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 ${isMobile ? '' : 'group-hover:scale-110'} transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className={`font-medium ${product.colorClass || 'text-gray-400'}`}>
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-muted-text leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Star className={`w-4 h-4 ${product.colorClass || 'text-gray-400'}`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <MagneticButton 
                      variant={product.status === 'Live' ? 'primary' : 'ghost'} 
                      className={`w-full group ${product.bgGradient} ${
                        product.status !== 'Live' ? 'bg-none border-2' : ''
                      }`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>
                          {productStatusConfig[product.status]?.cta || 'Learn More'}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </MagneticButton>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            </ScrollSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollSection className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Digital Operations?
            </h3>
            <p className="text-muted-text max-w-2xl mx-auto">
              Our available products are ready for purchase and implementation, while our in-development 
              solutions offer preview access. Choose what works best for your business needs.
            </p>
            <MagneticButton variant="primary" className="group">
              <span className="flex items-center space-x-2">
                <span>Explore Our Solutions</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </MagneticButton>
          </motion.div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default ProductsSection; 