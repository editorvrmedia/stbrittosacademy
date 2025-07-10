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

    try {
      window.addEventListener('keydown', handleKeyDown);
    } catch (error) {
      console.error('AdmissionPopup event listener error:', error);
    }

    return () => {
      try {
        window.removeEventListener('keydown', handleKeyDown);
      } catch (error) {
        console.error('AdmissionPopup cleanup error:', error);
      }
    };
  }, [isOpen, onClose]);

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
          <div style={{ padding: '2rem', background: '#f0f8ff', color: '#222', borderRadius: '8px' }}>
            <h2 style={{ color: '#222', marginBottom: '1rem' }}>📄 Admission Form Test</h2>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSezQNOc9en-cUWn73ePppMlfmnH7X_0Ygn7D32cuK1zWRaUFQ/formResponse"
              method="POST"
              target="hidden_iframe"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
            >
              <input
                type="text"
                name="entry.1940558930"
                placeholder="Your Name"
                required
                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                name="entry.607470366"
                placeholder="Your Contact Number"
                required
                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <select
                name="entry.1262789795"
                required
                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value="">Choose your grade</option>
                <option value="Pre School">Pre School</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
              </select>
              <button type="submit" style={{ padding: '0.75rem', borderRadius: '4px', background: '#4f46e5', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Submit
              </button>
            </form>
            <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup; 