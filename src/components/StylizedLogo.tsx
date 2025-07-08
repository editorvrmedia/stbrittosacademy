import React from 'react';

const StylizedLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center gap-5 md:gap-3 mr-8">
        <img 
          src="/LOGOS/sba-logo.png" 
          alt="St. Britto's Academy Logo" 
          className="h-[100px] md:h-[75px] w-auto object-contain"
        />
        <img
          src="/school name.jpg"
          alt="St. Britto's Academy Name"
          className="h-10 md:h-12 w-auto object-contain ml-2 mr-2"
        />
      </div>
    </div>
  );
};

export default StylizedLogo;