'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SpicyLensSection from '@/components/SpicyLensSection';
import Vision2030Section from '@/components/Vision2030Section';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';
import StarscapeBackground from '@/components/StarscapeBackground';
import { I18nProvider } from '@/components/I18nProvider';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <I18nProvider>
      <div className="min-h-screen bg-blackened-kaaba relative">
        {/* Starscape Background */}
        <StarscapeBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <SpicyLensSection />
          <ProductsSection />
          <Vision2030Section />
          <AboutSection />
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
