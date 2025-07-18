import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
  children: React.ReactNode;
  config?: {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back';
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: 'top-bottom' | 'center-bottom' | 'bottom-bottom' | 'top-center' | 'center-center' | 'bottom-center' | 'top-top' | 'center-top' | 'bottom-top';
  };
}

export const AOSProvider: React.FC<AOSProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  useEffect(() => {
    // Initialize AOS with custom configuration
    AOS.init({
      // Global settings
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      // Custom settings
      ...config,
      
      // Disable on mobile for better performance
      disable: window.innerWidth < 768,
      
      // Start event
      startEvent: 'DOMContentLoaded',
      
      // Throttle delay
      throttleDelay: 99,
    });

    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      AOS.refresh();
    };
  }, [config]);

  // Refresh AOS when children change (for dynamic content)
  useEffect(() => {
    AOS.refresh();
  });

  return <>{children}</>;
}; 