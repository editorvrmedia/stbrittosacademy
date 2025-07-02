import React, { useState } from 'react';

const imageNames = [
  'IMG_0276.JPG','IMG_0277.JPG','IMG_0280.JPG','IMG_0284.JPG','IMG_0289.JPG','IMG_0291.JPG','IMG_0292.JPG','IMG_0295.JPG','IMG_0296.JPG','IMG_0298.JPG','IMG_0299.JPG','IMG_0300.JPG','IMG_0301.JPG',
  'IMG_0306.JPG','IMG_0308.JPG','IMG_0309.JPG','IMG_0310.JPG','IMG_0317.JPG','IMG_0318.JPG','IMG_0335.JPG','IMG_0336.JPG','IMG_0337.JPG','IMG_0339.JPG','IMG_0344.JPG','IMG_0350.JPG','IMG_0352.JPG',
  'IMG_0365.JPG','IMG_0370.JPG','IMG_0377.JPG','IMG_0383.JPG','IMG_0388.JPG','IMG_0389.JPG','IMG_0390.JPG','IMG_0392.JPG','IMG_0395.JPG','IMG_0397.JPG','IMG_0398.JPG','IMG_0399.JPG','IMG_0400.JPG',
  'IMG_0402.JPG','IMG_0404.JPG','IMG_0406.JPG','IMG_0412.JPG','IMG_0415.JPG','IMG_0419.JPG','IMG_0423.JPG','IMG_0424.JPG','IMG_0427.JPG','IMG_0429.JPG','IMG_0431.JPG','IMG_0448.JPG','IMG_0449.JPG',
  'IMG_0450.JPG','IMG_0452.JPG','IMG_0458.JPG','IMG_0465.JPG','IMG_0466.JPG','IMG_0469.JPG','IMG_0472.JPG','IMG_0476.JPG','IMG_0477.JPG','IMG_0478.JPG','IMG_0479.JPG','IMG_0480.JPG','IMG_0481.JPG',
  'IMG_0487.JPG','IMG_0488.JPG','IMG_0489.JPG','IMG_0490.JPG','IMG_0491.JPG','IMG_0492.JPG','IMG_0493.JPG','IMG_0494.JPG','IMG_0495.JPG','IMG_0496.JPG','IMG_0497.JPG','IMG_0498.JPG','IMG_0499.JPG',
  'IMG_0500.JPG','IMG_0501.JPG','IMG_0502.JPG','IMG_0503.JPG','IMG_0504.JPG','IMG_0505.JPG','IMG_0506.JPG','IMG_0507.JPG','IMG_0508.JPG','IMG_0509.JPG','IMG_0510.JPG','IMG_0511.JPG','IMG_0512.JPG',
  'IMG_0513.JPG','IMG_0514.JPG','IMG_0515.JPG','IMG_0516.JPG','IMG_0517.JPG','IMG_0518.JPG','IMG_0519.JPG','IMG_0520.JPG','IMG_0521.JPG','IMG_0523.JPG','IMG_0524.JPG','IMG_0525.JPG','IMG_0526.JPG',
  'IMG_0527.JPG','IMG_0528.JPG','IMG_0529.JPG','IMG_0530.JPG','IMG_0531.JPG','IMG_0532.JPG','IMG_0533.JPG','IMG_0534.JPG','IMG_0535.JPG','IMG_0536.JPG','IMG_1044.JPG','IMG_1045.JPG','IMG_1050.JPG',
  'IMG_1051.JPG','IMG_1342.JPG','IMG_1343.JPG','IMG_1345.JPG','IMG_1346.JPG','IMG_1348.JPG','IMG_1353.JPG','IMG_1356.JPG','IMG_1364.JPG','IMG_1366.JPG','IMG_1369.JPG','IMG_1374.JPG','IMG_1381.JPG',
  'IMG_1386.JPG','IMG_1389.JPG','IMG_1401.JPG','IMG_1414.JPG','IMG_1419.JPG','IMG_1420.JPG','IMG_1421.JPG','IMG_1423.JPG',
];

const images = imageNames.map(name => ({
  src: `/SCHOOL EVENTS/Food Stall/${name}`,
  alt: 'Food Stall Activity',
}));

const FoodStallSection = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#03045e' }}>
          Food Stall – School Events
        </h2>
        <p className="text-lg text-center mb-10" style={{ color: '#0077b6' }}>
          Students Engaging in Food Stall Activities – Fun, Learning, and Entrepreneurship
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white"
              style={{ border: '2px solid #0077b6' }}
              onClick={() => setModalImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {modalImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative max-w-3xl w-full p-4">
              <button
                onClick={() => setModalImg(null)}
                className="absolute top-2 right-2 bg-white text-[#03045e] rounded-full p-2 shadow hover:bg-[#0077b6] hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={modalImg} alt="Food Stall Activity" className="w-full max-h-[80vh] object-contain rounded-lg border-4 border-[#0077b6] bg-white" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodStallSection; 