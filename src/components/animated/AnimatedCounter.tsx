import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
  textColor?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 1000, className = '', suffix = '', textColor = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTriggerRef = useRef<number>(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Debounce: only trigger if at least 300ms since last trigger
            const now = Date.now();
            if (now - lastTriggerRef.current > 300) {
              lastTriggerRef.current = now;
              animateCount();
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line
  }, [target, duration]);

  const animateCount = () => {
    let startTime: number | null = null;
    const startCount = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(startCount + (target - startCount) * progress);
      setCount(current);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(step);
  };

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <span ref={elementRef} className={`font-bold ${className} ${textColor}`}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default AnimatedCounter; 