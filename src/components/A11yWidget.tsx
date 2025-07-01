'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function A11yWidget() {
  useEffect(() => {
    // Add global error handler for widget errors
    const handleError = (event: ErrorEvent) => {
      if (event.filename && event.filename.includes('accessibility-widget.js')) {
        console.error('🚨 A11y widget runtime error:', {
          message: event.message,
          filename: event.filename,
          line: event.lineno,
          column: event.colno,
          error: event.error
        });
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <Script 
      src="http://10.0.0.92/widget/accessibility-widget.js" 
      strategy="afterInteractive"
      onLoad={() => {
        console.log('🟢 A11y widget loaded successfully');
        
        // Check if widget initialized properly
        setTimeout(() => {
          console.log('🔍 Checking widget status after load...');
          console.log('🌐 Window properties:', Object.keys(window).filter(key => key.toLowerCase().includes('a11y') || key.toLowerCase().includes('accessibility') || key.toLowerCase().includes('widget')));
          
          // Check for common widget global variables
          const possibleGlobals = ['a11y', 'accessibility', 'widget', 'accessibilityWidget', 'A11Y', 'ACCESSIBILITY'];
          possibleGlobals.forEach(prop => {
            if ((window as any)[prop]) {
              console.log(`✅ Found widget global: ${prop}`, (window as any)[prop]);
            }
          });
        }, 1000);
      }}
      onError={(e) => {
        console.error('🔴 A11y widget failed to load:', e);
      }}
      onReady={() => {
        console.log('🟡 A11y widget is ready');
      }}
    />
  );
}
