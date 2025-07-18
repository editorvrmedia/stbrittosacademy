import React, { useEffect, useState } from 'react';
import { getLoadingManager } from '../utils/loadingManager';

interface LoadingScreenProps {
  logo?: string;
  backgroundColor?: string;
  spinnerColor?: string;
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  logo = '/LOGOS/SBA LOGO FOR WEBSITE.png',
  backgroundColor = '#ffffff',
  spinnerColor = '#0077b6',
  onLoadingComplete
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const loadingManager = getLoadingManager();
    
    // Subscribe to progress updates
    const handleProgressUpdate = (newProgress: number) => {
      setProgress(newProgress);
      
      // If progress reaches 100%, start fade out
      if (newProgress >= 100 && !isFadingOut) {
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
          }, 800); // Match the CSS transition duration
        }, 500); // Small delay to show 100% completion
      }
    };

    loadingManager.addListener(handleProgressUpdate);

    // Fallback: hide loader after 8 seconds maximum
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        setProgress(100);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
          }, 800);
        }, 500);
      }
    }, 8000);

    return () => {
      loadingManager.removeListener(handleProgressUpdate);
      clearTimeout(fallbackTimer);
    };
  }, [isLoading, isFadingOut, onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center loading-fade-in ${
        isFadingOut ? 'loading-screen-fade-out' : ''
      }`}
      style={{ backgroundColor }}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="Loading..." 
            className="w-24 h-24 mx-auto spinning-logo"
          />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 loading-bounce">
          St. Britto's Academy
        </h2>
        <p className="text-gray-600 mb-6 loading-pulse">
          Loading your educational journey...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-2 rounded-full progress-bar-fill"
              style={{ 
                width: `${progress}%`,
                backgroundColor: spinnerColor
              }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-sm text-gray-500 font-medium">
          {Math.round(progress)}%
        </p>

        {/* Spinning Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <div 
            className="w-3 h-3 rounded-full loading-pulse"
            style={{ 
              backgroundColor: spinnerColor,
              animationDelay: '0ms'
            }}
          />
          <div 
            className="w-3 h-3 rounded-full loading-pulse"
            style={{ 
              backgroundColor: spinnerColor,
              animationDelay: '200ms'
            }}
          />
          <div 
            className="w-3 h-3 rounded-full loading-pulse"
            style={{ 
              backgroundColor: spinnerColor,
              animationDelay: '400ms'
            }}
          />
        </div>

        {/* Loading Tips */}
        <div className="mt-8 text-xs text-gray-400 max-w-sm mx-auto">
          <p className="loading-shimmer px-4 py-2 rounded">
            Did you know? St. Britto's Academy has been shaping minds for over 28 years
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 