// Configurable product data for SpicyDonut website
// Edit this file to easily update product information, statuses, and features

export const productsData = [
  {
    id: 'spicylens',
    icon: 'Search',
    name: 'SpicyLens',
    tagline: 'AI-Powered Search Engine',
    description: 'Revolutionary search engine powered by AI that understands context, learns from interactions, and delivers precise results instantly.',
    features: [
      'Natural Language Processing',
      'Real-time Indexing', 
      'Contextual Understanding',
      'Multi-language Support'
    ],
    status: 'In Development', // Options: 'Available', 'In Development', 'Coming Soon'
    gradient: 'from-aqua-500 to-purple-600',
    bgGradient: 'bg-spicylens-gradient',
    borderColor: 'border-aqua-400/30 hover:border-aqua-400/60',
    glowColor: 'from-aqua-400/5 to-purple-600/5',
    colorClass: 'text-aqua-400'
  },
  {
    id: 'accessmind',
    icon: 'Eye',
    name: 'AccessMind',
    tagline: 'AI Accessibility Intelligence',
    description: 'AI accessibility tools for inclusive web/app design. Make your digital products accessible to everyone with intelligent automation.',
    features: [
      'WCAG Compliance',
      'Auto Alt-Text',
      'Screen Reader Optimization',
      'Color Contrast Analysis'
    ],
    status: 'In Development',
    gradient: 'from-bright-cyan-400 to-sandstone-gold',
    bgGradient: 'bg-accessmind-gradient',
    borderColor: 'border-bright-cyan-400/30 hover:border-bright-cyan-400/60',
    glowColor: 'from-bright-cyan-400/5 to-sandstone-gold/5',
    colorClass: 'text-bright-cyan-400'
  },
  {
    id: 'useraura',
    icon: 'Users',
    name: 'UserAura',
    tagline: 'Behavioral Intelligence Platform',
    description: 'Session replays, dynamic surveys, and behavioral heatmaps. Understand user behavior with AI-powered insights.',
    features: [
      'Session Recordings',
      'Heatmap Analytics',
      'User Journey Analysis',
      'Behavioral Predictions'
    ],
    status: 'Available', // Ready for sale
    gradient: 'from-vibrant-magenta-400 to-gray-900',
    bgGradient: 'bg-useraura-gradient',
    borderColor: 'border-vibrant-magenta-400/30 hover:border-vibrant-magenta-400/60',
    glowColor: 'from-vibrant-magenta-400/5 to-gray-900/5',
    colorClass: 'text-vibrant-magenta-400'
  },
  {
    id: 'flowforge',
    icon: 'Workflow',
    name: 'FlowForge',
    tagline: 'AI-Powered Automation Engine',
    description: 'AI-powered business automation and workflow engine. Streamline operations with intelligent process automation.',
    features: [
      'Workflow Automation',
      'AI Decision Trees',
      'Process Mining',
      'Integration Hub'
    ],
    status: 'Available', // Ready for sale
    gradient: 'from-electric-blue-400 to-saudi-emerald',
    bgGradient: 'bg-flowforge-gradient',
    borderColor: 'border-electric-blue-400/30 hover:border-electric-blue-400/60',
    glowColor: 'from-electric-blue-400/5 to-saudi-emerald/5',
    colorClass: 'text-electric-blue-400'
  },
  {
    id: 'spicyvalet',
    icon: 'Car',
    name: 'SpicyValet',
    tagline: 'Valet Service Management Platform',
    description: 'Complete valet service management platform for hotels, boulevards, and businesses. Manage branches, employees, and operations with daily, monthly, and yearly contracts.',
    features: [
      'Branch Management',
      'Employee Scheduling',
      'Contract Management',
      'Real-time Operations'
    ],
    status: 'In Development',
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
    borderColor: 'border-emerald-400/30 hover:border-emerald-400/60',
    glowColor: 'from-emerald-400/5 to-teal-600/5',
    colorClass: 'text-emerald-400'
  },
  {
    id: 'corevault',
    icon: 'Lock',
    name: 'CoreVault',
    tagline: 'Private AI Deployment Suite',
    description: 'Private/secure AI deployments with tailored use cases for enterprises and government. Maximum security, complete control.',
    features: [
      'On-Premise Deployment',
      'Military-Grade Security',
      'Custom AI Models',
      'Government Compliance'
    ],
    status: 'Available', // Ready for sale
    gradient: 'from-defense-gray-400 to-blackened-kaaba',
    bgGradient: 'bg-corevault-gradient',
    borderColor: 'border-defense-gray-400/30 hover:border-defense-gray-400/60',
    glowColor: 'from-defense-gray-400/5 to-blackened-kaaba/5',
    colorClass: 'text-defense-gray-400'
  }
];

// Product status configuration
export const productStatusConfig = {
  'Available': {
    badgeStyle: 'bg-saudi-emerald/20 text-saudi-emerald border border-saudi-emerald/30',
    cta: 'Get Started',
    description: 'Ready for implementation'
  },
  'In Development': {
    badgeStyle: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    cta: 'Join Preview',
    description: 'Currently in development'
  },
  'Coming Soon': {
    badgeStyle: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    cta: 'Get Notified',
    description: 'Coming soon'
  }
};

// Icon mapping for dynamic imports
export const iconMap = {
  'Search': 'Search',
  'Eye': 'Eye', 
  'Users': 'Users',
  'Workflow': 'Workflow',
  'Car': 'Car',
  'Lock': 'Lock'
};