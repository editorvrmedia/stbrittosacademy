import React, { useRef, useEffect, forwardRef } from 'react';
import { useParallax } from './ParallaxProvider';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  className?: string;
  style?: React.CSSProperties;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({ 
  children, 
  speed = 0.5, 
  direction = 'up', 
  trigger, 
  start = 'top bottom', 
  end = 'bottom top', 
  scrub = true,
  className = '',
  style = {}
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { createParallaxEffect } = useParallax();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const scrollTrigger = createParallaxEffect(element, {
      speed,
      direction,
      trigger: trigger || element,
      start,
      end,
      scrub
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [speed, direction, trigger, start, end, scrub, createParallaxEffect]);

  return (
    <div
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

ParallaxElement.displayName = 'ParallaxElement'; 