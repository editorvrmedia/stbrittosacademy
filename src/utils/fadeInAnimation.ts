import React from 'react';

// Fade-in Animation Utility
export class FadeInAnimation {
  private observer: IntersectionObserver | null = null;
  private animationDelay: number = 100; // Default delay in ms

  constructor(options: { delay?: number; threshold?: number; rootMargin?: string } = {}) {
    this.animationDelay = options.delay || 100;
    
    // Create intersection observer for fade-in animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );
  }

  private animateElement(element: Element): void {
    // Add a small delay for staggered animations
    setTimeout(() => {
      element.classList.add('animate');
    }, this.animationDelay);
  }

  // Initialize animations for all fade-in elements
  public init(): void {
    const fadeInElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale'
    );

    fadeInElements.forEach((element) => {
      this.observer?.observe(element);
    });
  }

  // Animate specific element immediately
  public animateElementImmediately(element: Element): void {
    this.animateElement(element);
  }

  // Animate all visible elements immediately
  public animateAllVisible(): void {
    const fadeInElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale'
    );

    fadeInElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * this.animationDelay);
    });
  }

  // Reset animations (remove animate class)
  public reset(): void {
    const fadeInElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale'
    );

    fadeInElements.forEach((element) => {
      element.classList.remove('animate');
    });
  }

  // Destroy observer
  public destroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}

// React Hook for fade-in animations
export const useFadeInAnimation = (options: { delay?: number; threshold?: number; rootMargin?: string } = {}) => {
  const [animation] = React.useState(() => new FadeInAnimation(options));

  React.useEffect(() => {
    // Initialize animations when component mounts
    animation.init();

    // Cleanup when component unmounts
    return () => {
      animation.destroy();
    };
  }, [animation]);

  return {
    animateElement: animation.animateElementImmediately.bind(animation),
    animateAllVisible: animation.animateAllVisible.bind(animation),
    reset: animation.reset.bind(animation)
  };
};

// Utility function to add fade-in classes to elements
export const addFadeInClass = (
  element: HTMLElement,
  type: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'fade-in-scale' = 'fade-in',
  stagger?: number
): void => {
  element.classList.add(type);
  if (stagger && stagger > 0 && stagger <= 10) {
    element.classList.add(`fade-in-stagger-${stagger}`);
  }
};

// Utility function to remove fade-in classes
export const removeFadeInClass = (element: HTMLElement): void => {
  element.classList.remove(
    'fade-in',
    'fade-in-up',
    'fade-in-down',
    'fade-in-left',
    'fade-in-right',
    'fade-in-scale',
    'animate'
  );
  
  // Remove stagger classes
  for (let i = 1; i <= 10; i++) {
    element.classList.remove(`fade-in-stagger-${i}`);
  }
};

// Global animation instance
let globalAnimation: FadeInAnimation | null = null;

// Initialize global fade-in animation system
export const initGlobalFadeInAnimation = (options: { delay?: number; threshold?: number; rootMargin?: string } = {}): void => {
  if (globalAnimation) {
    globalAnimation.destroy();
  }
  
  globalAnimation = new FadeInAnimation(options);
  globalAnimation.init();
};

// Get global animation instance
export const getGlobalAnimation = (): FadeInAnimation | null => {
  return globalAnimation;
};

// Cleanup global animation
export const cleanupGlobalFadeInAnimation = (): void => {
  if (globalAnimation) {
    globalAnimation.destroy();
    globalAnimation = null;
  }
}; 