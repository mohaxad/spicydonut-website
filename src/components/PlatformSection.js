import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Cpu, Network, ArrowRight } from 'lucide-react';
import ScrollSection from './ScrollSection';
import MagneticButton from './MagneticButton';

const PlatformSection = () => {
  const techStack = [
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      technologies: ['TensorFlow', 'PyTorch', 'Hugging Face', 'OpenAI GPT', 'LangChain', 'Vector Databases'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Backend Infrastructure',
      icon: Database,
      technologies: ['Node.js', 'Python', 'Kubernetes', 'Docker', 'Redis', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'GitLab CI/CD', 'Monitoring'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      technologies: ['OAuth 2.0', 'SAML', 'Zero Trust', 'GDPR', 'SOC 2', 'ISO 27001'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: '🏢' },
    { name: 'Microsoft 365', logo: '📊' },
    { name: 'Slack', logo: '💬' },
    { name: 'Tableau', logo: '📈' },
    { name: 'PowerBI', logo: '📋' },
    { name: 'Zapier', logo: '🔗' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Shopify', logo: '🛒' }
  ];

  return (
    <section id="platform" className="py-32 bg-gradient-to-b from-gray-900 via-blackened-kaaba to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Powerful </span>
              <span className="gradient-text">AI Platform</span>
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              Built on cutting-edge technology stack with enterprise-grade security, 
              scalability, and seamless integrations.
            </p>
          </motion.div>
        </ScrollSection>

        {/* Tech Stack Grid */}
        <ScrollSection className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border border-saudi-emerald/20 rounded-2xl p-8 hover:border-saudi-emerald/40 transition-all duration-500 glass"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stack.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="px-3 py-1 bg-saudi-emerald/10 border border-saudi-emerald/30 rounded-full text-sm text-saudi-emerald hover:bg-saudi-emerald/20 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* AI Capabilities */}
        <ScrollSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                Advanced AI Capabilities
              </h3>
              <div className="space-y-4">
                {[
                  'Natural Language Processing (Arabic & English)',
                  'Contextual Search Understanding',
                  'Real-time Content Indexing',
                  'Scalable Cloud Infrastructure',
                  'Custom AI Model Development',
                  'Enterprise-Grade Security'
                ].map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-saudi-emerald rounded-full" />
                    <p className="text-muted-text">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-saudi-emerald/20 to-emerald-gradient-end/20 rounded-2xl p-8 glass border border-saudi-emerald/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-gradient rounded-full flex items-center justify-center mx-auto mb-6 glow-border">
                    <Network className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Building the Future</h4>
                  <p className="text-muted-text">
                    Our AI platform is being built with cutting-edge technology to deliver unprecedented performance and reliability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollSection>

        {/* Integrations */}
        <ScrollSection className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            Seamless Integrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border border-saudi-emerald/20 rounded-xl p-4 hover:border-saudi-emerald/40 transition-all duration-300 glass text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <p className="text-xs text-muted-text group-hover:text-saudi-emerald transition-colors">
                  {integration.name}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* CTA */}
        <ScrollSection className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Ready to Build on Our Platform?
            </h3>
            <p className="text-muted-text max-w-2xl mx-auto">
              Get access to our developer tools, APIs, and comprehensive documentation 
              to start building your AI-powered applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton variant="primary" className="group">
                <span className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>API Documentation</span>
                </span>
              </MagneticButton>
              <MagneticButton variant="secondary" className="group">
                <span className="flex items-center space-x-2">
                  <span>Contact Engineering</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>
            </div>
          </motion.div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default PlatformSection; 