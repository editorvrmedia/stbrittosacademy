import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollContextType {
  locomotiveScroll: LocomotiveScroll | null;
  isReady: boolean;
  scrollTo: (target: string | number, options?: any) => void;
  scrollToElement: (element: HTMLElement, options?: any) => void;
  updateScroll: () => void;
  destroy: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  options?: {
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    class?: string;
    reloadOnContextChange?: boolean;
    touchMultiplier?: number;
    firefoxMultiplier?: number;
    useKeyboard?: boolean;
    infinite?: boolean;
    horizontal?: boolean;
    breakpoints?: any[];
    smartphone?: any;
    tablet?: any;
  };
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ 
  children, 
  options = {} 
}) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null);
  const [isReady, setIsReady] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const defaultOptions = {
      el: scrollContainerRef.current,
      smooth: true,
      lerp: 0.1, // Linear interpolation (smoothness)
      multiplier: 1, // Scroll speed multiplier
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2,
      firefoxMultiplier: 50,
      useKeyboard: true,
      infinite: false,
      horizontal: false,
      breakpoints: [
        {
          breakpoint: 768,
          settings: {
            smooth: true,
            lerp: 0.08,
            multiplier: 0.8,
          }
        },
        {
          breakpoint: 480,
          settings: {
            smooth: true,
            lerp: 0.06,
            multiplier: 0.6,
          }
        }
      ],
      smartphone: {
        smooth: true,
        lerp: 0.06,
        multiplier: 0.6,
      },
      tablet: {
        smooth: true,
        lerp: 0.08,
        multiplier: 0.8,
      }
    };

    if (!scrollContainerRef.current) return;

    const scroll = new LocomotiveScroll({
      ...defaultOptions,
      ...options,
      el: scrollContainerRef.current
    });

    // Update ScrollTrigger when Locomotive Scroll updates
    scroll.on('scroll', ScrollTrigger.update);

    // Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element
    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value || 0) : (scroll as any).scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollContainerRef.current?.style.transform ? 'transform' : 'fixed'
    });

    // Each time the window updates, we should refresh ScrollTrigger and locomotive scroll
    ScrollTrigger.addEventListener('refresh', () => {
      scroll.update();
    });

    // After everything is set up, refresh ScrollTrigger
    ScrollTrigger.refresh();

    setLocomotiveScroll(scroll);
    setIsReady(true);

    // Cleanup function
    return () => {
      if (scroll) {
        scroll.destroy();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, [options]);

  const scrollTo = (target: string | number, scrollOptions?: any) => {
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo(target, scrollOptions);
    }
  };

  const scrollToElement = (element: HTMLElement, scrollOptions?: any) => {
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo(element, scrollOptions);
    }
  };

  const updateScroll = () => {
    if (locomotiveScroll) {
      locomotiveScroll.update();
    }
  };

  const destroy = () => {
    if (locomotiveScroll) {
      locomotiveScroll.destroy();
    }
  };

  const value: SmoothScrollContextType = {
    locomotiveScroll,
    isReady,
    scrollTo,
    scrollToElement,
    updateScroll,
    destroy
  };

  return (
    <SmoothScrollContext.Provider value={value}>
      <div 
        ref={scrollContainerRef}
        data-scroll-container
        className="smooth-scroll-container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100vh',
          width: '100%'
        }}
      >
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
}; 