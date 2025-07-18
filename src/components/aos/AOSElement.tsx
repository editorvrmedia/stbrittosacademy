import React from 'react';

interface AOSElementProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-up-right' | 'fade-up-left' | 'fade-down-right' | 'fade-down-left' | 'zoom-in' | 'zoom-in-up' | 'zoom-in-down' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-out' | 'zoom-out-up' | 'zoom-out-down' | 'zoom-out-left' | 'zoom-out-right' | 'slide-up' | 'slide-down' | 'slide-right' | 'slide-left' | 'flip-left' | 'flip-right' | 'flip-up' | 'flip-down';
  delay?: number;
  duration?: number;
  offset?: number;
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back';
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: 'top-bottom' | 'center-bottom' | 'bottom-bottom' | 'top-center' | 'center-center' | 'bottom-center' | 'top-top' | 'center-top' | 'bottom-top';
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export const AOSElement: React.FC<AOSElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  offset = 120,
  easing = 'ease-in-out',
  once = true,
  mirror = false,
  anchorPlacement = 'top-bottom',
  className = '',
  style = {},
  as: Component = 'div'
}) => {
  const aosAttributes = {
    'data-aos': animation,
    'data-aos-delay': delay,
    'data-aos-duration': duration,
    'data-aos-offset': offset,
    'data-aos-easing': easing,
    'data-aos-once': once,
    'data-aos-mirror': mirror,
    'data-aos-anchor-placement': anchorPlacement,
  };

  return (
    <Component
      {...aosAttributes}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}; 