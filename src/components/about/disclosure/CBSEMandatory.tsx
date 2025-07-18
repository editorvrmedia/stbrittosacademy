import React from 'react';
import { FileText, Download, CheckCircle, Calendar, Users, Building, BookOpen, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const CBSEMandatory = () => (
  <motion.div
    className="max-w-4xl mx-auto py-8 px-2 sm:px-4 mt-8"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
    viewport={{ once: true, amount: 0.7 }}
  >
    <motion.h1
      className="text-2xl font-bold text-blue-900 mb-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      CBSE MANDATORY
    </motion.h1>
    <motion.div
      className="overflow-x-auto mb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <table className="min-w-full rounded-xl shadow-lg bg-white/90 text-sm">
        <thead>
          <tr className="bg-blue-100 text-blue-900">
            <th className="p-3 font-semibold">SL No.</th>
            <th className="p-3 font-semibold border-r border-blue-200">INFORMATION</th>
            <th className="p-3 font-semibold">DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">1</td><td className="p-3 border-r border-blue-200">NAME OF THE SCHOOL</td><td className="p-3">St. Britto's Academy</td></tr>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">2</td><td className="p-3 border-r border-blue-200">AFFILIATION NO.(IF APPLICABLE)</td><td className="p-3">1930174</td></tr>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">3</td><td className="p-3 border-r border-blue-200">SCHOOL CODE (IF APPLICABLE)</td><td className="p-3">55122</td></tr>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">4</td><td className="p-3 border-r border-blue-200">COMPLETE ADDRESS WITH PIN CODE</td><td className="p-3">R-3/3 Netaji Road Velachery Chennai, TAMILNADU – 600042</td></tr>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">5</td><td className="p-3 border-r border-blue-200">PRINCIPAL NAME</td><td className="p-3">Mary Vasantha Kumari</td></tr>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">6</td><td className="p-3 border-r border-blue-200">PRINCIPAL QUALIFICATION</td><td className="p-3">M.A., M.B.A., M. Phil., B. Ed.</td></tr>
          <tr className="even:bg-blue-50 border-b"><td className="p-3 border-r border-blue-200">7</td><td className="p-3 border-r border-blue-200">SCHOOL EMAIL ID</td><td className="p-3">admin@stbrittosacademy.edu.in</td></tr>
          <tr className="even:bg-blue-50"><td className="p-3 border-r border-blue-200">8</td><td className="p-3 border-r border-blue-200">CONTACT DETAILS (LANDLINE/MOBILE)</td><td className="p-3">4422447514 / 9840866053</td></tr>
        </tbody>
      </table>
    </motion.div>
    <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <table className="min-w-full rounded-xl shadow-lg bg-white/90 text-sm">
        <thead>
          <tr className="bg-blue-100 text-blue-900">
            <th className="p-3 font-semibold">SNO</th>
            <th className="p-3 font-semibold border-r border-blue-200">DOCUMENTS/INFORMATION</th>
            <th className="p-3 font-semibold text-center">LINKS OF UPLOADED DOCUMENTS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">1</td>
            <td className="p-3 border-r border-blue-200">COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1z3-QWMdRR0XwFkWl8-5JAhdSx5s71oBh/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">2</td>
            <td className="p-3 border-r border-blue-200">COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/10ZDNDfcMrNyqsbYOGaxkyY7MIRMVWOH5/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">3</td>
            <td className="p-3 border-r border-blue-200">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1_jSSTYHiSGy5jdTzlBgV8THklohLHLdf/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">4</td>
            <td className="p-3 border-r border-blue-200">COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1kGLE3-nuQBRqKPXyjP3_okr_A3NdSCw5/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">5</td>
            <td className="p-3 border-r border-blue-200">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1jKWU3FhEF4cih7PScvulbXAwYRV5ZJQv/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">6</td>
            <td className="p-3 border-r border-blue-200">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1NUzGdtyzdDH4LdBTo3HZNKSm1tVExmLp/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50 border-b">
            <td className="p-3 border-r border-blue-200">7</td>
            <td className="p-3 border-r border-blue-200">COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
            <td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1lmqEeF5yltWtDyEGCNSzUhSA6CoSCYLa/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td>
          </tr>
          <tr className="even:bg-blue-50"><td className="p-3 border-r border-blue-200">8</td><td className="p-3 border-r border-blue-200">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td><td className="p-3 text-center">
              <a 
                href="https://drive.google.com/file/d/1wRlX_tJbaxUPXmIoAbFVsgyUB0XnfWpi/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline cursor-pointer hover:text-blue-900"
              >
                View
              </a>
            </td></tr>
        </tbody>
      </table>
    </motion.div>
  </motion.div>
);

export default CBSEMandatory;