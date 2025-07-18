import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const LoadingExample: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);

  const simulateLoading = () => {
    setShowLoading(true);
    // The loading screen will automatically hide when the page is fully loaded
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Loading Screen Demo
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How it works
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Shows a spinning logo while the page loads</li>
            <li>• Tracks actual resource loading progress (images, CSS, JS, fonts)</li>
            <li>• Displays a progress bar with percentage</li>
            <li>• Smoothly fades out when loading is complete</li>
            <li>• Includes fallback timing for slow connections</li>
            <li>• Respects accessibility preferences (reduced motion)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Spinning school logo</li>
              <li>✅ Real-time progress tracking</li>
              <li>✅ Animated progress bar</li>
              <li>✅ Pulsing loading dots</li>
              <li>✅ Smooth fade-out transition</li>
              <li>✅ Loading tips and messages</li>
              <li>✅ Responsive design</li>
              <li>✅ Accessibility support</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Customization
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>🎨 Custom logo path</li>
              <li>🎨 Background color</li>
              <li>🎨 Spinner color</li>
              <li>🎨 Loading messages</li>
              <li>🎨 Animation timing</li>
              <li>🎨 Progress bar style</li>
              <li>🎨 Callback functions</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={simulateLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Show Loading Screen
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Click to see the loading screen in action
          </p>
        </div>

        {/* Loading Screen */}
        {showLoading && (
          <LoadingScreen 
            onLoadingComplete={() => setShowLoading(false)}
            backgroundColor="#f8fafc"
            spinnerColor="#3b82f6"
          />
        )}
      </div>
    </div>
  );
};

export default LoadingExample; 