import React from 'react';
import { SlideIn, SlideInContainer } from './animated';

const SlideInExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with slide-down animation */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 slide-down">
            Slide-in Animation Examples
          </h1>
          <p className="text-xl text-gray-600 mt-4 slide-down slide-down-stagger-2">
            Watch elements slide in from different directions on page load
          </p>
        </header>

        {/* Grid of cards with different slide animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <SlideIn type="slide-up" stagger={1}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Slide Up</h3>
              <p className="text-gray-600">This card slides up from below when the page loads.</p>
            </div>
          </SlideIn>

          <SlideIn type="slide-down" stagger={2}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Slide Down</h3>
              <p className="text-gray-600">This card slides down from above when the page loads.</p>
            </div>
          </SlideIn>

          <SlideIn type="slide-left" stagger={3}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Slide Left</h3>
              <p className="text-gray-600">This card slides in from the right side.</p>
            </div>
          </SlideIn>

          <SlideIn type="slide-right" stagger={4}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Slide Right</h3>
              <p className="text-gray-600">This card slides in from the left side.</p>
            </div>
          </SlideIn>
        </div>

        {/* Content sections with SlideInContainer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 slide-left">
              Automatic Staggering
            </h2>
            <SlideInContainer type="slide-up">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <h4 className="font-semibold text-blue-600">Item 1</h4>
                <p className="text-gray-600">Automatically staggered with 0.1s delay</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <h4 className="font-semibold text-blue-600">Item 2</h4>
                <p className="text-gray-600">Automatically staggered with 0.2s delay</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <h4 className="font-semibold text-blue-600">Item 3</h4>
                <p className="text-gray-600">Automatically staggered with 0.3s delay</p>
              </div>
            </SlideInContainer>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 slide-right">
              Manual Staggering
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-6 slide-left slide-left-stagger-1">
                <h4 className="font-semibold text-green-600">Manual Item 1</h4>
                <p className="text-gray-600">Manually set stagger delay</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-left slide-left-stagger-2">
                <h4 className="font-semibold text-green-600">Manual Item 2</h4>
                <p className="text-gray-600">Manually set stagger delay</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 slide-left slide-left-stagger-3">
                <h4 className="font-semibold text-green-600">Manual Item 3</h4>
                <p className="text-gray-600">Manually set stagger delay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action with slide-up animation */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white slide-up slide-up-stagger-5">
            <h2 className="text-3xl font-bold mb-4">Ready to Use?</h2>
            <p className="text-xl mb-6">
              Add these slide-in animations to your own components!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideInExample; 