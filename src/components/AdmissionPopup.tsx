import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const classOptions = [
  'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'XI'
];

const AdmissionPopup = ({ isOpen, onClose, onUserTyped }: { isOpen: boolean; onClose: () => void; onUserTyped?: () => void }) => {
  const navigate = useNavigate();

  const handleInput = () => {
    if (onUserTyped) onUserTyped();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl overflow-hidden"
        style={{ 
          display: 'flex', 
          background: 'linear-gradient(to right, #2196F3 50%, white 50%)', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          maxWidth: '700px', 
          margin: 'auto', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)' 
        }}
      >
        {/* Left: Logo Section */}
        <div 
          className="flex-1 text-center text-white p-4 sm:p-6 md:p-8"
          style={{ backgroundColor: '#2196F3' }}
        >
          <img 
            src="/LOGOS/SBA.png" 
            alt="Logo" 
            className="max-w-[80px] sm:max-w-[100px] mx-auto mb-2 sm:mb-3"
            style={{ marginBottom: '10px' }}
          />
          <h2 
            className="text-lg sm:text-xl md:text-2xl font-bold"
            style={{ margin: 0, fontFamily: 'Poppins, sans-serif' }}
          >
            St. Britto's Academy
          </h2>
        </div>

        {/* Right: Form Section */}
        <div 
          className="flex-1 p-4 sm:p-6 md:p-8 relative"
          style={{ backgroundColor: 'white' }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
          
          <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#0d47a1' }}>
            Admission Open for 2025–26
          </h3>

          <form action="https://formsubmit.co/facelessmangopi@gmail.com" method="POST">
            {/* Formsubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Admission Form" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://stbrittosacademy.edu.in/thank-you.html" />

            {/* Name Field */}
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onInput={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3"
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '6px', 
                marginBottom: '10px', 
                border: '1px solid #ccc' 
              }}
            />

            {/* Phone Number Field */}
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
            <input
              type="text"
              id="number"
              name="number"
              required
              onInput={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3"
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '6px', 
                marginBottom: '10px', 
                border: '1px solid #ccc' 
              }}
            />

            {/* Class Field */}
            <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">Class:</label>
            <input
              type="text"
              id="class"
              name="class"
              required
              onInput={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3"
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '6px', 
                marginBottom: '10px', 
                border: '1px solid #ccc' 
              }}
            />

            {/* Email Field */}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onInput={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-5"
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '6px', 
                marginBottom: '20px', 
                border: '1px solid #ccc' 
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
              style={{ 
                backgroundColor: '#28a745', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer' 
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup; 