import React, { createContext, useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxContextType {
  createParallaxEffect: (element: HTMLElement, options: ParallaxOptions) => ScrollTrigger;
  createLayeredParallax: (elements: HTMLElement[], options: LayeredParallaxOptions) => ScrollTrigger[];
  createTextParallax: (element: HTMLElement, options: TextParallaxOptions) => ScrollTrigger;
  createBackgroundParallax: (element: HTMLElement, options: BackgroundParallaxOptions) => ScrollTrigger;
}

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  ease?: string;
}

interface LayeredParallaxOptions {
  speeds: number[];
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

interface TextParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  stagger?: number;
}

interface BackgroundParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  scale?: boolean;
}

const ParallaxContext = createContext<ParallaxContextType | null>(null);

export const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error('useParallax must be used within a ParallaxProvider');
  }
  return context;
};

interface ParallaxProviderProps {
  children: React.ReactNode;
}

export const ParallaxProvider: React.FC<ParallaxProviderProps> = ({ children }) => {
  const scrollTriggers = useRef<ScrollTrigger[]>([]);

  const createParallaxEffect = (element: HTMLElement, options: ParallaxOptions = {}): ScrollTrigger => {
    const {
      speed = 0.5,
      direction = 'up',
      trigger: triggerElement = element,
      start = 'top bottom',
      end = 'bottom top',
      scrub = true
    } = options;

    const getTransform = (progress: number) => {
      const distance = progress * 100 * speed;
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start,
      end,
      scrub,
      onUpdate: (self) => {
        const transform = getTransform(self.progress);
        gsap.set(element, { transform });
      }
    });

    scrollTriggers.current.push(scrollTrigger);
    return scrollTrigger;
  };

  const createLayeredParallax = (elements: HTMLElement[], options: LayeredParallaxOptions): ScrollTrigger[] => {
    const {
      speeds,
      direction = 'up',
      trigger: triggerElement = elements[0],
      start = 'top bottom',
      end = 'bottom top',
      scrub = true
    } = options;

    return elements.map((element, index) => {
      const speed = speeds[index] || 0.5;
      return createParallaxEffect(element, {
        speed,
        direction,
        trigger: triggerElement,
        start,
        end,
        scrub
      });
    });
  };

  const createTextParallax = (element: HTMLElement, options: TextParallaxOptions = {}): ScrollTrigger => {
    const {
      speed = 0.3,
      direction = 'up',
      trigger: triggerElement = element,
      start = 'top bottom',
      end = 'bottom top',
      scrub = true,
      stagger = 0.1
    } = options;

    const textElements = element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start,
      end,
      scrub,
      onUpdate: (self) => {
        textElements.forEach((el, index) => {
          const delay = index * stagger;
          const progress = Math.max(0, Math.min(1, self.progress - delay));
          const distance = progress * 50 * speed;
          
          let transform = '';
          switch (direction) {
            case 'up':
              transform = `translateY(${distance}px)`;
              break;
            case 'down':
              transform = `translateY(-${distance}px)`;
              break;
            case 'left':
              transform = `translateX(${distance}px)`;
              break;
            case 'right':
              transform = `translateX(-${distance}px)`;
              break;
          }
          
          gsap.set(el, { 
            transform,
            opacity: progress
          });
        });
      }
    });

    scrollTriggers.current.push(scrollTrigger);
    return scrollTrigger;
  };

  const createBackgroundParallax = (element: HTMLElement, options: BackgroundParallaxOptions = {}): ScrollTrigger => {
    const {
      speed = 0.5,
      direction = 'up',
      trigger: triggerElement = element,
      start = 'top bottom',
      end = 'bottom top',
      scrub = true,
      scale = true
    } = options;

    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start,
      end,
      scrub,
      onUpdate: (self) => {
        const progress = self.progress;
        const distance = progress * 100 * speed;
        
        let transform = '';
        switch (direction) {
          case 'up':
            transform = `translateY(${distance}px)`;
            break;
          case 'down':
            transform = `translateY(-${distance}px)`;
            break;
          case 'left':
            transform = `translateX(${distance}px)`;
            break;
          case 'right':
            transform = `translateX(-${distance}px)`;
            break;
        }

        if (scale) {
          const scaleValue = 1 + (progress * 0.1);
          transform += ` scale(${scaleValue})`;
        }

        gsap.set(element, { transform });
      }
    });

    scrollTriggers.current.push(scrollTrigger);
    return scrollTrigger;
  };

  useEffect(() => {
    return () => {
      // Cleanup all scroll triggers on unmount
      scrollTriggers.current.forEach(trigger => trigger.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const value: ParallaxContextType = {
    createParallaxEffect,
    createLayeredParallax,
    createTextParallax,
    createBackgroundParallax
  };

  return (
    <ParallaxContext.Provider value={value}>
      {children}
    </ParallaxContext.Provider>
  );
}; 