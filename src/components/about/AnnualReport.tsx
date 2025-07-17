import React from 'react';
import { motion } from 'framer-motion';

const logbooks = [
  {
    year: '2024-2025',
    url: 'https://drive.google.com/file/d/1lMy2oAw19Z688mHan5dS-PvjxvccwWT_/view?usp=sharing',
  },
  {
    year: '2023-2024',
    url: 'https://drive.google.com/file/d/11DilYiCrLw5QFz9TSVteBDwqzYKmwQEN/view?usp=sharing',
  },
  {
    year: '2022-2023',
    url: 'https://drive.google.com/file/d/1vaGu7KmBlUHSz0xLbFzN6TAB09QmsI1h/view?usp=sharing',
  },
  {
    year: '2021-2022',
    url: 'https://drive.google.com/file/d/1KnYPXSuUMG-eE8xYkRTyLqSESvu9fk22/view?usp=sharing',
  },
  {
    year: '2020-2021',
    url: 'https://drive.google.com/file/d/1_BYgvGIooeQf8U7xlT2TH88AxqshQLaJ/view?usp=sharing',
  },
  {
    year: '2019-2020',
    url: 'https://drive.google.com/file/d/1tYKBXStKK3-qE_Rtg0zAVxxNS6h7p6dS/view?usp=sharing',
  },
  {
    year: '2018-2019',
    url: 'https://drive.google.com/file/d/1gEknVCILk7ei5ZA1iRchb-IoV_HpY6UZ/view?usp=sharing',
  },
  {
    year: '2017-2018',
    url: 'https://drive.google.com/file/d/1AlQjbx0UEigx94bIKrOwVQMvFNeBYHqY/view?usp=sharing',
  },
  {
    year: '2016-2017',
    url: 'https://drive.google.com/file/d/1HWddmUEiu5n-CpmwLrGBxWod6VE7sCcg/view?usp=sharing',
  },
  {
    year: '2015-2016',
    url: 'https://drive.google.com/file/d/1HsfUgzR2AH925G6VXHSQtzXOdPf_Nxu3/view?usp=sharing',
  },
];

const AnnualReport = () => (
  <div className="min-h-screen flex flex-col items-center bg-white">
    {/* Hero/Intro Section */}
    <motion.section
      className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="bg-blue-900 py-6 px-4 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center" style={{fontFamily: 'sans-serif'}}>Annual Report | St.Britto's Academy.</h1>
      </div>
    </motion.section>
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full mx-4 mt-10 mb-10 border border-blue-200">
        <ul className="space-y-5">
          {logbooks.map((log) => (
            <li key={log.year} className="text-center">
              <a
                href={log.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold text-lg md:text-xl tracking-wide hover:underline transition-all duration-200 block"
                style={{fontFamily: 'sans-serif', letterSpacing: '0.02em'}}
              >
                LOGBOOK {log.year}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default AnnualReport;