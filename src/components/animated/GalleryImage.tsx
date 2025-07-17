import React from 'react';
import { motion } from 'framer-motion';

interface GalleryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, caption, className = '', ...rest }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg group ${className}`} style={{ cursor: 'pointer' }}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-full h-full object-cover transition-transform duration-300"
        {...(rest as any)}
      />
      {caption && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ pointerEvents: 'none' }}
        >
          {caption}
        </motion.div>
      )}
    </div>
  );
};

export default GalleryImage; 