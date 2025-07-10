import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdmissionPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedGrade, setSelectedGrade] = useState('Pre School');
  const [hasTyped, setHasTyped] = useState(false);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    const form = e.target as any;
    const name = form.name.value;
    const contactNo = form.contactNo.value;
    const grade = form.grade.value;

    try {
      const res = await fetch('http://localhost:5000/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email: '', // No email field in form, can add if needed
          phone: contactNo,
          message: `Grade: ${grade}`
        })
      });
      if (res.ok) {
        setSubmitMessage('Admission inquiry submitted successfully!');
        setTimeout(() => {
          setSubmitMessage(null);
          setSubmitting(false);
          onClose();
        }, 2000);
      } else {
        setSubmitMessage('Failed to submit. Please try again.');
        setSubmitting(false);
      }
    } catch (err) {
      setSubmitMessage('Failed to submit. Please try again.');
      setSubmitting(false);
    }
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
                onInput={handleInput}
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
                onInput={handleInput}
              />
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium mb-1">Choose your grade <span className="text-red-300">*</span></label>
              <select
                id="grade"
                name="grade" 
                required
                value={selectedGrade}
                onChange={(e) => { setSelectedGrade(e.target.value); handleInput(); }}
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
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitMessage && (
              <p className={`mt-2 text-center ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup; 