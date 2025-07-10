import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdmissionPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedGrade, setSelectedGrade] = useState('Pre School');
  const [hasTyped, setHasTyped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    let timer: ReturnType<typeof setTimeout> | undefined;

    try {
      window.addEventListener('keydown', handleKeyDown);
      
      if (!hasTyped) {
        timer = setTimeout(() => {
          onClose();
        }, 10000);
      }
    } catch (error) {
      console.error('AdmissionPopup event listener error:', error);
    }

    return () => {
      try {
        window.removeEventListener('keydown', handleKeyDown);
        if (timer) clearTimeout(timer);
      } catch (error) {
        console.error('AdmissionPopup cleanup error:', error);
      }
    };
  }, [isOpen, onClose, hasTyped]);

  const handleInput = () => {
    setHasTyped(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name: (e.target as any).name.value,
      contactNo: (e.target as any).contactNo.value,
      grade: selectedGrade,
    });
    alert('Admission inquiry submitted!');
    onClose(); // Call the onClose prop when form is submitted
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl flex flex-col md:flex-row overflow-hidden md:max-h-[90vh] overflow-hidden">
        {/* Left Section - Image and Info */}
        <div className="md:w-1/2 bg-blue-500 text-white p-3 sm:p-4 flex flex-col items-center justify-center relative">
          <img 
            src="/LOGOS/SBA.png" 
            alt="St. Britto's Academy Logo" 
            className="h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] w-auto object-contain mb-0 cursor-pointer"
            onClick={() => { onClose(); navigate('/'); }}
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

        {/* Right Section - Admission Form */}
        <div className="md:w-1/2 bg-blue-600 p-3 sm:p-4 text-white flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-left whitespace-nowrap">Admission Open for 2025-26</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 focus:outline-none ml-4"
              aria-label="Close popup"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSezQNOc9en-cUWn73ePppMlfmnH7X_0Ygn7D32cuK1zWRaUFQ/formResponse" 
            method="POST" 
            target="hidden_iframe"
            className="space-y-3"
          >
            <div>
              <label htmlFor="entry.1940558930" className="block text-sm font-medium mb-1">Name <span className="text-red-300">*</span></label>
              <input 
                type="text" 
                name="entry.1940558930" 
                id="entry.1940558930"
                placeholder="Your Name" 
                required
                className="w-full p-2 rounded-md bg-blue-700 border border-blue-800 text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="entry.607470366" className="block text-sm font-medium mb-1">Contact no <span className="text-red-300">*</span></label>
              <input 
                type="text" 
                name="entry.607470366" 
                id="entry.607470366"
                placeholder="Your Contact Number" 
                required
                className="w-full p-2 rounded-md bg-blue-700 border border-blue-800 text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="entry.1262789795" className="block text-sm font-medium mb-1">Choose your grade <span className="text-red-300">*</span></label>
              <select 
                name="entry.1262789795" 
                id="entry.1262789795"
                required
                className="w-full p-2 rounded-md bg-blue-700 border border-blue-800 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="">Choose your grade</option>
                <option value="Pre School">Pre School</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup; 