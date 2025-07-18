import React, { Children, cloneElement, isValidElement } from 'react';

interface StaggeredAOSProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-up-right' | 'fade-up-left' | 'fade-down-right' | 'fade-down-left' | 'zoom-in' | 'zoom-in-up' | 'zoom-in-down' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-out' | 'zoom-out-up' | 'zoom-out-down' | 'zoom-out-left' | 'zoom-out-right' | 'slide-up' | 'slide-down' | 'slide-right' | 'slide-left' | 'flip-left' | 'flip-right' | 'flip-up' | 'flip-down';
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  offset?: number;
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back';
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: 'top-bottom' | 'center-bottom' | 'bottom-bottom' | 'top-center' | 'center-center' | 'bottom-center' | 'top-top' | 'center-top' | 'bottom-top';
  className?: string;
  style?: React.CSSProperties;
}

export const StaggeredAOS: React.FC<StaggeredAOSProps> = ({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  baseDelay = 0,
  duration = 800,
  offset = 120,
  easing = 'ease-in-out',
  once = true,
  mirror = false,
  anchorPlacement = 'top-bottom',
  className = '',
  style = {}
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={className} style={style}>
      {childrenArray.map((child, index) => {
        if (!isValidElement(child)) return child;

        const delay = baseDelay + (index * staggerDelay);

        return cloneElement(child, {
          key: index,
          ...{
            'data-aos': animation,
            'data-aos-delay': delay,
            'data-aos-duration': duration,
            'data-aos-offset': offset,
            'data-aos-easing': easing,
            'data-aos-once': once,
            'data-aos-mirror': mirror,
            'data-aos-anchor-placement': anchorPlacement,
          }
        });
      })}
    </div>
  );
}; 