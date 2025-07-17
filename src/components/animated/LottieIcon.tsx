import React from 'react';
import Player from 'lottie-react';

interface LottieIconProps {
  animationData: object;
  width?: number;
  height?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieIcon: React.FC<LottieIconProps> = ({ animationData, width = 32, height = 32, className = '', loop = true, autoplay = true }) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      animationData={animationData}
      style={{ width, height }}
      className={className}
    />
  );
};

export default LottieIcon; 