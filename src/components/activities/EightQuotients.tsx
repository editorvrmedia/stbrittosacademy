import React from 'react';

const EightQuotients = () => {
  const quotients = [
    {
      name: 'EDU - EQUITY QUOTIENT',
      image: '/EDU EQUITY-1.jpg',
    },
    {
      name: 'COGNITIVE QUOTIENT',
      image: '/COGNITIVE-2.jpg',
    },
    {
      name: 'SOCIAL & EMOTIONAL QUOTIENT',
      image: '/03 SOCIAL & EMOTIONAL.jpg',
    },
    {
      name: 'VIRTUOUS QUOTIENT',
      image: '/VIRTUOUS-4.jpg',
    },
    {
      name: 'CIVIC QUOTIENT',
      image: '/CIVIC-5.jpg',
    },
    {
      name: 'RELATIONAL QUOTIENT',
      image: '/RELATIONAL-6.jpg',
    },
    {
      name: 'COLLABORATIVE QUOTIENT',
      image: '/COLLABORATIVE-7.jpg',
    },
    {
      name: 'PEDAGOGUES QUOTIENT',
      image: '/PEDAGOGUES-8.jpg',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our 8 Quotients</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {quotients.map((quotient, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={quotient.image}
                  alt={quotient.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EightQuotients;