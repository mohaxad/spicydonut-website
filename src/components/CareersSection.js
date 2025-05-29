import { motion } from 'framer-motion';
import { Users, Heart, Zap, Globe, MapPin, ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import ScrollSection from './ScrollSection';
import MagneticButton from './MagneticButton';

const CareersSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Continuous learning budget, conference attendance, and career development'
    },
    {
      icon: Globe,
      title: 'Remote Flexibility',
      description: 'Hybrid work options with flexible hours and remote-first culture'
    },
    {
      icon: Users,
      title: 'Inclusive Culture',
      description: 'Diverse, inclusive environment where every voice matters and innovation thrives'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Lead the development of next-generation AI models and algorithms',
      requirements: ['5+ years AI/ML experience', 'PhD in CS/AI preferred', 'Python, TensorFlow']
    },
    {
      title: 'Product Manager - SpicyLens',
      department: 'Product',
      location: 'Riyadh / Remote',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our flagship SpicyLens platform',
      requirements: ['Product management experience', 'AI/ML product background', 'Arabic + English']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      description: 'Scale our AI infrastructure to serve millions of users globally',
      requirements: ['Kubernetes experience', 'Cloud platforms (AWS/Azure)', '3+ years DevOps']
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design intuitive interfaces for complex AI-powered applications',
      requirements: ['5+ years UX design', 'B2B SaaS experience', 'Figma proficiency']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and challenge the status quo every day',
      emoji: '🚀'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest feedback drive our culture',
      emoji: '🔍'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      emoji: '⭐'
    },
    {
      title: 'Impact',
      description: 'Every team member contributes to meaningful change',
      emoji: '🌟'
    }
  ];

  return (
    <section id="careers" className="py-32 bg-gradient-to-b from-blackened-kaaba via-gray-900 to-blackened-kaaba">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-6 h-6 text-saudi-emerald" />
              <span className="text-saudi-emerald font-medium">Join Us in Riyadh & Beyond</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Shape the Future of </span>
              <span className="gradient-text">AI Innovation</span>
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              Join a team of world-class engineers, researchers, and innovators 
              building the next generation of AI technology from Saudi Arabia.
            </p>
          </motion.div>
        </ScrollSection>

        {/* Values */}
        <ScrollSection className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.emoji}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-muted-text">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* Benefits */}
        <ScrollSection className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Why SpicyDonut?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border border-saudi-emerald/20 rounded-2xl p-8 hover:border-saudi-emerald/40 transition-all duration-500 glass"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{benefit.title}</h4>
                </div>
                <p className="text-muted-text leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* Open Positions */}
        <ScrollSection className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Open Positions</h3>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border border-saudi-emerald/20 rounded-2xl p-8 hover:border-saudi-emerald/40 transition-all duration-500 glass"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h4 className="text-2xl font-bold text-white">{position.title}</h4>
                      <span className="px-3 py-1 bg-saudi-emerald/10 border border-saudi-emerald/30 rounded-full text-sm text-saudi-emerald">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-sandstone-gold/10 border border-sandstone-gold/30 rounded-full text-sm text-sandstone-gold">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-text" />
                      <span className="text-muted-text">{position.location}</span>
                    </div>
                    
                    <p className="text-muted-text mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <MagneticButton variant="secondary" className="group">
                      <span className="flex items-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* Culture Stats */}
        <ScrollSection className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Team Members', value: '150+' },
              { label: 'Countries', value: '12' },
              { label: 'Avg. Age', value: '28' },
              { label: 'Women in Tech', value: '45%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-muted-text">{stat.label}</p>
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
              Don't See Your Perfect Role?
            </h3>
            <p className="text-muted-text max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume 
              and tell us how you'd like to contribute to the future of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton variant="primary" className="group">
                <span className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Send Open Application</span>
                </span>
              </MagneticButton>
              <MagneticButton variant="ghost" className="group">
                <span className="flex items-center space-x-2">
                  <span>Life at SpicyDonut</span>
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

export default CareersSection; 