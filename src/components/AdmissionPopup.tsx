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
    <div className="fixed left-0 right-0 top-[80px] bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-30 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl flex flex-col md:flex-row overflow-hidden md:max-h-[90vh]">
        {/* Left Section - Image and Info */}
        <div className="md:w-1/2 bg-blue-500 text-white p-3 sm:p-4 flex flex-col items-center justify-center relative">
          <img 
            src="/LOGOS/SBA.png" 
            alt="St. Britto's Academy Logo" 
            className="h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] w-auto object-contain mb-0 cursor-pointer"
            onClick={() => { onClose(); navigate('/'); }}
            aria-label="Close admission popup"
          />
          <div className="w-full overflow-x-auto">
            <h3
              className="font-revue-white text-lg sm:text-xl md:text-2xl mb-1 text-center w-full tracking-wide leading-tight whitespace-nowrap px-2"
              style={{
                lineHeight: 1.1,
                margin: 0
              }}
            >
              St. Britto&rsquo;s Academy
            </h3>
          </div>
        </div>

        {/* Right Section - Admission Info Only */}
        <div className="md:w-1/2 bg-blue-600 p-3 sm:p-4 text-white flex flex-col justify-center items-center">
          <div className="flex items-center justify-between mb-4 w-full">
            <h2 className="text-lg font-bold text-left whitespace-nowrap">Admission Open for 2025-26</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 focus:outline-none ml-4"
              aria-label="Close popup"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <form action="https://formsubmit.co/facelessmangopi@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Admission Form" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />

            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                onInput={handleInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-white mb-1">Phone:</label>
              <input
                type="text"
                id="number"
                name="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                onInput={handleInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="class" className="block text-sm font-medium text-white mb-1">Class:</label>
              <select
                id="class"
                name="class"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                onInput={handleInput}
              >
                <option value="">Select Class</option>
                {classOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                onInput={handleInput}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200"
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