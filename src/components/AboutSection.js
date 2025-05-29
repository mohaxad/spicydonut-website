import { motion } from 'framer-motion';
import { Globe, Users, Rocket, Award, MapPin, Calendar } from 'lucide-react';
import ScrollSection from './ScrollSection';
import AnimatedCounter from './AnimatedCounter';

const AboutSection = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Founded in Riyadh',
      description: 'SpicyDonut was born with a vision to lead AI innovation in the Middle East'
    },
    {
      year: '2024',
      title: 'SpicySearch Launch',
      description: 'Revolutionary search engine deployed, serving millions of queries daily'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding operations across MENA region with enterprise partnerships'
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology'
    },
    {
      icon: Users,
      title: 'Human-Centered',
      description: 'Our AI solutions are designed to augment human capabilities'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building technology that transforms businesses worldwide'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality AI solutions'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-900 to-blackened-kaaba">
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
              <span className="text-saudi-emerald font-medium">Riyadh, Saudi Arabia</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Pioneering</span>
              <span className="block gradient-text">AI Innovation</span>
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              From the heart of Saudi Arabia, we're building the future of artificial intelligence. 
              SpicyDonut represents the new generation of tech companies driving digital transformation 
              across the Middle East and beyond.
            </p>
          </motion.div>
        </ScrollSection>

        {/* Stats Grid */}
        <ScrollSection className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={2023} />
              </div>
              <p className="text-muted-text">Founded</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="text-muted-text">Team Members</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={25} suffix="M+" />
              </div>
              <p className="text-muted-text">API Calls/Month</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-muted-text">Countries Served</p>
            </motion.div>
          </div>
        </ScrollSection>

        {/* Mission Statement */}
        <ScrollSection className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-text leading-relaxed mb-6">
                To democratize artificial intelligence and make cutting-edge AI technology 
                accessible to businesses of all sizes. We believe that AI should empower 
                human potential, not replace it.
              </p>
              <p className="text-lg text-muted-text leading-relaxed">
                As a Saudi-based company, we're proud to contribute to Vision 2030 and 
                position the Kingdom as a global leader in technology and innovation.
              </p>
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
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Vision 2030</h4>
                  <p className="text-muted-text">
                    Contributing to Saudi Arabia's transformation into a global technology hub
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollSection>

        {/* Timeline */}
        <ScrollSection className="mb-32">
          <h3 className="text-4xl font-bold text-center text-white mb-16">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-saudi-emerald to-emerald-gradient-end"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-1 px-8">
                    <div className={`bg-gradient-to-br from-gray-900/50 to-blackened-kaaba/80 backdrop-blur-lg border border-saudi-emerald/20 rounded-xl p-6 glass ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-5 h-5 text-saudi-emerald" />
                        <span className="text-saudi-emerald font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                      <p className="text-muted-text">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-saudi-emerald rounded-full border-4 border-blackened-kaaba glow-border flex-shrink-0"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Values */}
        <ScrollSection>
          <h3 className="text-4xl font-bold text-center text-white mb-16">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-emerald-gradient rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-border">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-muted-text">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default AboutSection; 