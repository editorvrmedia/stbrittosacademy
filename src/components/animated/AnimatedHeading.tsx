import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ as = 'h2', className = '', children, ...rest }) => {
  const Tag = as as any;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <Tag className={className} {...rest}>{children}</Tag>
    </motion.div>
  );
};

export default AnimatedHeading; 