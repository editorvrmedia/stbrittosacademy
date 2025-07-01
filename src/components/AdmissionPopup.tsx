import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AdmissionPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedGrade, setSelectedGrade] = useState('Pre School');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

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
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl flex flex-col md:flex-row overflow-hidden md:max-h-[90vh] overflow-y-auto">
        {/* Left Section - Image and Info */}
        <div className="md:w-1/2 bg-blue-500 text-white p-3 sm:p-4 flex flex-col items-center justify-center relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>
          <img 
            src="/SBA.png" 
            alt="St. Britto's Academy Logo" 
            className="h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] w-auto object-contain mb-0"
          />
          <div className="w-full overflow-x-auto">
            <h3
              className="font-revue text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 text-center w-full uppercase tracking-wide leading-tight whitespace-nowrap px-2"
              style={{
                lineHeight: 1.1,
                margin: 0
              }}
            >
              ST. BRITTO'S ACADEMY
            </h3>
          </div>
        </div>

        {/* Right Section - Admission Form */}
        <div className="md:w-1/2 bg-blue-600 p-3 sm:p-4 text-white flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-4 text-center whitespace-nowrap">Admission Open for 2025-26</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name <span className="text-red-300">*</span></label>
              <input
                type="text"
                id="name"
                name="name" 
                required
                className="w-full p-2 rounded-md bg-blue-700 border border-blue-800 text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Your Name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium mb-1">Contact no <span className="text-red-300">*</span></label>
              <input
                type="tel"
                id="contactNo" 
                name="contactNo" 
                required
                className="w-full p-2 rounded-md bg-blue-700 border border-blue-800 text-white placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Your Contact Number"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium mb-1">Choose your grade <span className="text-red-300">*</span></label>
              <select
                id="grade"
                name="grade" 
                required
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full p-2 rounded-md bg-blue-700 border border-blue-800 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="Pre School">Pre School</option>
                <option value="Pre-KG">Pre-KG</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Class I">Class I</option>
                <option value="Class II">Class II</option>
                <option value="Class III">Class III</option>
                <option value="Class IV">Class IV</option>
                <option value="Class V">Class V</option>
                <option value="Class VI">Class VI</option>
                <option value="Class VII">Class VII</option>
                <option value="Class VIII">Class VIII</option>
                <option value="Class IX">Class IX</option>
                <option value="Class XI">Class XI</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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