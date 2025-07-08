import React from 'react';
import { CheckCircle } from 'lucide-react';

const UpperPrimary = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Upper Primary (Grades 4-5)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building upon strong foundations. Our upper primary program deepens subject knowledge while developing critical thinking, problem-solving skills, and preparing students for the challenges of middle school.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-green-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Higher Primary at St. Britto's Academy – A Cambridge-Aligned Learning Experience
        </h1>

        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          <p className="mb-4">
            At St. Britto's Academy, our Higher Primary Programme (Grades III – V) follows the Cambridge Curriculum, with the school serving as a knowledge partner. Our curriculum is designed to ensure academic excellence, critical thinking, and holistic development.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4 font-bold">
                Subjects of Study
              </p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Languages – English, Tamil & Hindi</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Core Subjects – Mathematics, Science & Environmental Science (EVS)</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Technology – Computer Science</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Life Skills & Values – Value Education & Talent Hunt (TH)</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Creative & Physical Development – Art Education & Physical & Health Education</span>
                </li>
              </ul>
          </div>
          
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4 font-bold">
                Innovative Teaching Methodology
              </p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Interactive & student-centred learning</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Conversational & structured language introduction</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Hands-on experiments for concept clarity</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Group discussions & collaborative learning</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Real-life applications for practical understanding</span>
                </li>
              </ul>
          </div>
          
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4 font-bold">
                This approach fosters:
              </p>
              <ul className="list-none space-y-2 mb-8">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Seamless knowledge transition</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Love for learning & critical thinking</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Real-world application of concepts</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Talent identification & skill enhancement</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Knowledge sharing & peer engagement</span>
                </li>
              </ul>
        </div>
          </div>
          
          <p className="mb-8 mt-8">
            With a dynamic and engaging learning environment, we nurture confident, inquisitive, and capable learners prepared for future academic success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UpperPrimary;