import { motion } from 'framer-motion';
import { Search, Shield, Brain, Zap, ArrowRight, Star, Eye, Users, Workflow, Lock } from 'lucide-react';
import ScrollSection from './ScrollSection';
import MagneticButton from './MagneticButton';

const ProductsSection = () => {
  const products = [
    {
      icon: Search,
      name: 'SpicyLens',
      tagline: 'AI-Powered Customer Insight Engine',
      description: 'Real-time customer insight & CDP engine powered by AI. Understand your customers like never before with contextual intelligence.',
      features: ['Real-time Analytics', 'Customer Journey Mapping', 'Predictive Insights', 'Multi-channel Integration'],
      status: 'Live',
      gradient: 'from-aqua-500 to-purple-600',
      bgGradient: 'bg-spicylens-gradient',
      borderColor: 'border-aqua-400/30 hover:border-aqua-400/60',
      glowColor: 'from-aqua-400/5 to-purple-600/5'
    },
    {
      icon: Eye,
      name: 'AccessMind',
      tagline: 'AI Accessibility Intelligence',
      description: 'AI accessibility tools for inclusive web/app design. Make your digital products accessible to everyone with intelligent automation.',
      features: ['WCAG Compliance', 'Auto Alt-Text', 'Screen Reader Optimization', 'Color Contrast Analysis'],
      status: 'Live',
      gradient: 'from-bright-cyan-400 to-sandstone-gold',
      bgGradient: 'bg-accessmind-gradient',
      borderColor: 'border-bright-cyan-400/30 hover:border-bright-cyan-400/60',
      glowColor: 'from-bright-cyan-400/5 to-sandstone-gold/5'
    },
    {
      icon: Users,
      name: 'UserAura',
      tagline: 'Behavioral Intelligence Platform',
      description: 'Session replays, dynamic surveys, and behavioral heatmaps. Understand user behavior with AI-powered insights.',
      features: ['Session Recordings', 'Heatmap Analytics', 'User Journey Analysis', 'Behavioral Predictions'],
      status: 'Beta',
      gradient: 'from-vibrant-magenta-400 to-gray-900',
      bgGradient: 'bg-useraura-gradient',
      borderColor: 'border-vibrant-magenta-400/30 hover:border-vibrant-magenta-400/60',
      glowColor: 'from-vibrant-magenta-400/5 to-gray-900/5'
    },
    {
      icon: Workflow,
      name: 'FlowForge',
      tagline: 'AI-Powered Automation Engine',
      description: 'AI-powered business automation and workflow engine. Streamline operations with intelligent process automation.',
      features: ['Workflow Automation', 'AI Decision Trees', 'Process Mining', 'Integration Hub'],
      status: 'Beta',
      gradient: 'from-electric-blue-400 to-saudi-emerald',
      bgGradient: 'bg-flowforge-gradient',
      borderColor: 'border-electric-blue-400/30 hover:border-electric-blue-400/60',
      glowColor: 'from-electric-blue-400/5 to-saudi-emerald/5'
    },
    {
      icon: Lock,
      name: 'CoreVault',
      tagline: 'Private AI Deployment Suite',
      description: 'Private/secure AI deployments with tailored use cases for enterprises and government. Maximum security, complete control.',
      features: ['On-Premise Deployment', 'Military-Grade Security', 'Custom AI Models', 'Government Compliance'],
      status: 'Enterprise',
      gradient: 'from-defense-gray-400 to-blackened-kaaba',
      bgGradient: 'bg-corevault-gradient',
      borderColor: 'border-defense-gray-400/30 hover:border-defense-gray-400/60',
      glowColor: 'from-defense-gray-400/5 to-blackened-kaaba/5'
    }
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-blackened-kaaba to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Revolutionary</span>
              <span className="block text-white">AI Product Suite</span>
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              Discover our comprehensive suite of AI solutions designed to transform 
              every aspect of your digital operations.
            </p>
          </motion.div>
        </ScrollSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollSection key={product.name}>
              <motion.div
                variants={cardVariants}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border ${product.borderColor} rounded-2xl p-8 transition-all duration-500 glass overflow-hidden`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    className={`w-full h-full ${product.bgGradient}`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.status === 'Live' ? 'bg-saudi-emerald/20 text-saudi-emerald border border-saudi-emerald/30' :
                    product.status === 'Beta' ? 'bg-sandstone-gold/20 text-sandstone-gold border border-sandstone-gold/30' :
                    product.status === 'Enterprise' ? 'bg-defense-gray-400/20 text-defense-gray-400 border border-defense-gray-400/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {product.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className={`font-medium ${
                      product.name === 'SpicyLens' ? 'text-aqua-400' :
                      product.name === 'AccessMind' ? 'text-bright-cyan-400' :
                      product.name === 'UserAura' ? 'text-vibrant-magenta-400' :
                      product.name === 'FlowForge' ? 'text-electric-blue-400' :
                      'text-defense-gray-400'
                    }`}>
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
                        <Star className={`w-4 h-4 ${
                          product.name === 'SpicyLens' ? 'text-aqua-400' :
                          product.name === 'AccessMind' ? 'text-bright-cyan-400' :
                          product.name === 'UserAura' ? 'text-vibrant-magenta-400' :
                          product.name === 'FlowForge' ? 'text-electric-blue-400' :
                          'text-defense-gray-400'
                        }`} />
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
                          {product.status === 'Live' ? 'Try Now' : 
                           product.status === 'Beta' ? 'Join Beta' : 
                           product.status === 'Enterprise' ? 'Contact Sales' : 'Get Notified'}
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-text max-w-2xl mx-auto">
              Join thousands of companies already using SpicyDonut's AI solutions 
              to drive innovation and growth across every department.
            </p>
            <MagneticButton variant="primary" className="group">
              <span className="flex items-center space-x-2">
                <span>Start Your AI Journey</span>
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