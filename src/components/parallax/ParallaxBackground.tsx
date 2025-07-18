import React, { useRef, useEffect } from 'react';
import { useParallax } from './ParallaxProvider';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  scale?: boolean;
  className?: string;
  style?: React.CSSProperties;
  imageSrc?: string;
  videoSrc?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  trigger,
  start = 'top bottom',
  end = 'bottom top',
  scrub = true,
  scale = true,
  className = '',
  style = {},
  imageSrc,
  videoSrc,
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  overlayOpacity = 0.3
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { createBackgroundParallax } = useParallax();

  useEffect(() => {
    const element = backgroundRef.current;
    if (!element) return;

    const scrollTrigger = createBackgroundParallax(element, {
      speed,
      direction,
      trigger: trigger || element,
      start,
      end,
      scrub,
      scale
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [speed, direction, trigger, start, end, scrub, scale, createBackgroundParallax]);

  const backgroundStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  const mediaStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
    zIndex: 2
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 3
  };

  return (
    <div
      ref={backgroundRef}
      className={`parallax-background ${className}`}
      style={backgroundStyle}
    >
      {/* Background Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Parallax background"
          style={mediaStyle}
        />
      )}

      {/* Background Video */}
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={mediaStyle}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div style={overlayStyle} />
      )}

      {/* Content */}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
}; 