import React, { ReactNode, Children, isValidElement, cloneElement } from 'react';

interface SlideInContainerProps {
  children: ReactNode;
  type?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SlideInContainer: React.FC<SlideInContainerProps> = ({
  children,
  type = 'slide-up',
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
          const newClassName = `${type} ${type}-stagger-${stagger} ${childClassName}`.trim();
          
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

export default SlideInContainer; 