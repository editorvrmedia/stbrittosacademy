import React, { ReactNode, Children, isValidElement, cloneElement } from 'react';

interface FadeInContainerProps {
  children: ReactNode;
  type?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'fade-in-scale';
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FadeInContainer: React.FC<FadeInContainerProps> = ({
  children,
  type = 'fade-in',
  staggerDelay = 100,
  className = '',
  style = {}
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={className} style={style}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          const stagger = Math.min(index + 1, 10); // Max stagger of 10
          const childClassName = child.props.className || '';
          const newClassName = `${type} fade-in-stagger-${stagger} ${childClassName}`.trim();
          
          return cloneElement(child, {
            ...child.props,
            className: newClassName,
            key: child.key || index
          });
        }
        return child;
      })}
    </div>
  );
};

export default FadeInContainer; 