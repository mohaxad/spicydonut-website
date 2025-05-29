import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // SpicyDonut Neo-Saudi Emerald Palette
        'blackened-kaaba': '#0D0D0D',
        'saudi-emerald': '#10B981',
        'sandstone-gold': '#FACC15',
        'muted-text': '#9CA3AF',
        'emerald-gradient-start': '#10B981',
        'emerald-gradient-end': '#14B8A6',
        
        // Product-specific colors
        // SpicyLens - Aqua + Neon Purple
        'aqua': {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        
        // AccessMind - Bright Cyan + Gold
        'bright-cyan': {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        
        // UserAura - Vibrant Magenta
        'vibrant-magenta': {
          400: '#E879F9',
          500: '#D946EF',
          600: '#C026D3',
        },
        
        // FlowForge - Electric Blue
        'electric-blue': {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        
        // CoreVault - Defense style
        'defense-gray': {
          400: '#6B7280',
          500: '#4B5563',
          600: '#374151',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'emerald-gradient': 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
        'emerald-gradient-radial': 'radial-gradient(circle, #10B981 0%, #14B8A6 100%)',
        
        // Product gradients
        'spicylens-gradient': 'linear-gradient(135deg, #22D3EE 0%, #D946EF 100%)',
        'accessmind-gradient': 'linear-gradient(135deg, #22D3EE 0%, #FACC15 100%)',
        'useraura-gradient': 'linear-gradient(135deg, #E879F9 0%, #1F2937 100%)',
        'flowforge-gradient': 'linear-gradient(135deg, #60A5FA 0%, #10B981 100%)',
        'corevault-gradient': 'linear-gradient(135deg, #4B5563 0%, #1F2937 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'rotate-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            'box-shadow': '0 0 5px #10B981, 0 0 10px #10B981, 0 0 15px #10B981',
          },
          '100%': {
            'box-shadow': '0 0 10px #10B981, 0 0 20px #10B981, 0 0 30px #10B981',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            'box-shadow': '0 0 20px #10B981',
          },
          '50%': {
            opacity: '.8',
            'box-shadow': '0 0 40px #10B981, 0 0 60px #10B981',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
