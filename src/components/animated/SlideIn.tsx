import React, { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  type?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SlideIn: React.FC<SlideInProps> = ({
  children,
  type = 'slide-up',
  stagger,
  className = '',
  style = {}
}) => {
  const baseClass = type;
  const staggerClass = stagger && stagger > 0 && stagger <= 10 ? `${type}-stagger-${stagger}` : '';
  
  return (
    <div 
      className={`${baseClass} ${staggerClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideIn; 