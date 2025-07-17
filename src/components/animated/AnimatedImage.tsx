import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ className = '', ...rest }) => {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.7 }}
      className={className}
      {...(rest as any)}
    />
  );
};

export default AnimatedImage; 