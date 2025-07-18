import React, { useRef, useEffect } from 'react';
import { useParallax } from './ParallaxProvider';

interface LayeredParallaxProps {
  children: React.ReactNode;
  speeds?: number[];
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  className?: string;
  style?: React.CSSProperties;
}

export const LayeredParallax: React.FC<LayeredParallaxProps> = ({
  children,
  speeds = [0.2, 0.4, 0.6, 0.8],
  direction = 'up',
  trigger,
  start = 'top bottom',
  end = 'bottom top',
  scrub = true,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { createLayeredParallax } = useParallax();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.children) as HTMLElement[];
    if (elements.length === 0) return;

    const scrollTriggers = createLayeredParallax(elements, {
      speeds: speeds.slice(0, elements.length),
      direction,
      trigger: trigger || container,
      start,
      end,
      scrub
    });

    return () => {
      scrollTriggers.forEach(trigger => trigger.kill());
    };
  }, [speeds, direction, trigger, start, end, scrub, createLayeredParallax]);

  return (
    <div
      ref={containerRef}
      className={`layered-parallax ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}; 