import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedHeading from '../animated/AnimatedHeading';

const AdmissionsProcedure = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-16 px-2 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-3xl text-center mb-10">
        <AnimatedHeading as="h1" className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm">Admission Procedure</AnimatedHeading>
        <p className="text-lg md:text-xl text-blue-800 font-medium mb-2">St.Britto’s Academy welcomes all deserving and meritorious students, irrespective of caste and creed. The Management is not particular about the qualifications and background of the parent. We stand proud stepping into the 25th year, seeking inspiration from our achievement and continuing the quest for excellence.</p>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mb-10 border border-blue-100">
        <div className="flex items-center mb-4">
          <FileText className="h-7 w-7 text-sky-500 mr-2" />
          <AnimatedHeading as="h2" className="text-2xl font-bold text-blue-800">Offline Admission</AnimatedHeading>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-3 text-base">
          <li>The student should satisfy the age rule: <span className="font-semibold">3 yrs</span> for Pre-Kg, <span className="font-semibold">4 yrs</span> for LKG, <span className="font-semibold">5 yrs</span> for UKG, <span className="font-semibold">5+</span> for I Std as on <span className="font-semibold">31st May</span> of the year of admission.</li>
          <li>The application cost is <span className="font-semibold">Rs 750 /-</span> (Rupees Seven hundred and fifty only). Parents seeking admission to their ward should obtain the application form from the office.</li>
          <li>The duly completed application form should be submitted within <span className="font-semibold">three days</span>.</li>
          <li>The following documents have to be submitted along with the filled application:</li>
          <ul className="list-disc pl-8 text-gray-600 space-y-1 text-sm">
            <li>Photocopy of the Birth Certificate, Community Certificate, Aadhar card, and original copy of the Transfer Certificate.</li>
            <li>Recently taken passport size color photograph (3 nos).</li>
            <li>Overseas students, non-resident Indians holding passports should submit a photocopy of the passport for verification.</li>
          </ul>
          <li>The entrance test will be conducted in <span className="font-semibold">Languages and Mathematics</span> for those seeking admission to Standards III-IX and <span className="font-semibold">merit is the ONLY CRITERION</span> for admission.</li>
        </ul>
      </div>

      {/* Online Admission Button */}
      <div className="flex flex-col items-center gap-2">
        <a
          href="/admissions/online-admission"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-200 text-center"
        >
          Online Admission
        </a>
        <span className="text-sm text-blue-700 mt-1 flex items-center gap-1"><Mail className="h-4 w-4 inline-block" /> For queries: <a href="mailto:admin@stbrittosacademy.edu.in" className="underline hover:text-blue-900">admin@stbrittosacademy.edu.in</a></span>
      </div>
    </div>
  );
};

export default AdmissionsProcedure;