import React, { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  type?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'fade-in-scale';
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  type = 'fade-in',
  stagger,
  className = '',
  style = {}
}) => {
  const baseClass = type;
  const staggerClass = stagger && stagger > 0 && stagger <= 10 ? `fade-in-stagger-${stagger}` : '';
  
  return (
    <div 
      className={`${baseClass} ${staggerClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default FadeIn; 