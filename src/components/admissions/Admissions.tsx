import React, { useState } from 'react';
import AnimatedHeading from '../animated/AnimatedHeading';

const Admissions = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading as="h1" className="text-5xl font-bold mb-6">Admissions</AnimatedHeading>
          <p className="text-xl max-w-3xl mx-auto">
            Join the St. Britto's Academy family. Discover our admission process, requirements, and how to begin your child's educational journey with us.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <AnimatedHeading as="h2" className="text-3xl font-bold mb-4">Admission Requirements</AnimatedHeading>
            <ul className="list-disc list-inside text-lg">
              <li>Age: 3-6 years</li>
              <li>Health certificate</li>
              <li>Birth certificate</li>
              <li>Previous school records (if applicable)</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <AnimatedHeading as="h2" className="text-3xl font-bold mb-4">Application Process</AnimatedHeading>
            <p className="text-lg mb-4">
              To apply for admission, please complete the online application form and submit it along with the required documents.
            </p>
            <p className="text-lg">
              Upon receipt of your application, we will review it and schedule an interview with you and your child.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <AnimatedHeading as="h2" className="text-3xl font-bold mb-4">Fees</AnimatedHeading>
            <p className="text-lg">
              Tuition fees are competitive and affordable. We offer flexible payment options to suit your family's needs.
            </p>
            <p className="text-lg">
              Please contact our admissions office for detailed fee information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading as="h2" className="text-4xl font-bold mb-6">Ready to Apply?</AnimatedHeading>
          <p className="text-xl max-w-3xl mx-auto">
            If you are interested in enrolling your child at St. Britto's Academy, please contact our admissions office.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-100 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admissions; 