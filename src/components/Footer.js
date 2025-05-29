import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Globe } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: 'SpicySearch', href: '#' },
      { name: 'SpicyAudit', href: '#' },
      { name: 'SpicyMind', href: '#' },
      { name: 'Enterprise API', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Status', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-gradient-to-t from-blackened-kaaba to-gray-900 border-t border-saudi-emerald/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-emerald-gradient rounded-lg flex items-center justify-center glow-border">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <span className="text-2xl font-bold gradient-text">SpicyDonut</span>
              </div>
              
              <p className="text-muted-text mb-6 leading-relaxed">
                Leading AI innovation from Saudi Arabia to the world. 
                Building the future of artificial intelligence, one solution at a time.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-saudi-emerald" />
                  <span className="text-muted-text">Riyadh, Saudi Arabia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-saudi-emerald" />
                  <span className="text-muted-text">hello@spicydonut.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-saudi-emerald" />
                  <span className="text-muted-text">+966 11 123 4567</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-text hover:text-saudi-emerald transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-saudi-emerald/10 to-emerald-gradient-end/10 rounded-2xl p-8 mb-12 glass border border-saudi-emerald/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-muted-text">
                Get the latest updates on our AI innovations and product releases.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-blackened-kaaba/50 border border-saudi-emerald/30 rounded-lg text-white placeholder-muted-text focus:outline-none focus:border-saudi-emerald transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-emerald-gradient text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-saudi-emerald/25 transition-all duration-300 glow-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-saudi-emerald/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-muted-text">
              © 2025 SpicyDonut. All rights reserved.
            </p>
            <span className="text-muted-text">•</span>
            <span className="text-saudi-emerald font-medium">Made in Saudi Arabia 🇸🇦</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-saudi-emerald/10 border border-saudi-emerald/30 rounded-lg flex items-center justify-center text-saudi-emerald hover:bg-saudi-emerald hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 