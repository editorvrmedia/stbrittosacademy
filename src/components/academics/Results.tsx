import React, { useState } from 'react';
import { Trophy, TrendingUp, Award, Users, Download, Eye, Calendar, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Topper {
  name: string;
  percentage: string;
  total: string;
  position: string;
  subjects?: string;
  stream?: string;
}

interface SubjectWise {
  subject: string;
  average: string;
  highest: string;
}

interface StreamWise {
  stream: string;
  students: number;
  passRate: string;
  average: string;
}

interface ClassData {
  totalStudents: number;
  passRate: string;
  distinctionRate: string;
  firstClassRate: string;
  toppers?: Topper[];
  specialAchievements?: string;
  subjectWise?: SubjectWise[];
  scienceToppers?: Topper[];
  commerceToppers?: Topper[];
  streamWise?: StreamWise[];
  images?: string[];
}

interface ClassResultsData {
  [key: string]: {
    class10: ClassData;
    class12: ClassData;
  };
}

const Results = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const academicYears = [
    { 
      year: '2024-25', 
      title: 'Academic Year 2024-25',
      sslcImage: '/results/2024-25/2024-25 10th.jpg',
      hssImage: '/results/2024-25/2024-25 12th.jpg'
    },
    { 
      year: '2023-24', 
      title: 'Academic Year 2023-24',
      sslcImage: '/results/2023-24/2023-24 10th.jpg',
      hssImage: '/results/2023-24/2023-24 12th.jpg'
    },
    { 
      year: '2022-23', 
      title: 'Academic Year 2022-23',
      sslcImage: '/results/2022-23/2022-23 10th.jpg',
      hssImage: '/results/2022-23/2022-23 12th.jpg'
    },
    { 
      year: '2021-22', 
      title: 'Academic Year 2021-22',
      sslcImage: '/results/2021-22/2021-22 10th.jpg',
      hssImage: '/results/2021-22/2021-22 12th.jpg'
    },
    { 
      year: '2020-21', 
      title: 'Academic Year 2020-21',
      sslcImage: '/results/2020-21/2020-21 10th.jpg',
      hssImage: '/results/2020-21/2020-21 12th.jpg'
    },
    { 
      year: '2019-20', 
      title: 'Academic Year 2019-20',
      sslcImage: '/results/2019-20/2019-20 10th.jpg',
      hssImage: '/results/2019-20/2019-20 12th.jpg'
    },
    { 
      year: '2018-19', 
      title: 'Academic Year 2018-19',
      sslcImage: '/results/2018-19/2018-19 10th.jpg',
      hssImage: '/results/2018-19/2018-19 12th.jpg'
    },
    { 
      year: '2017-18', 
      title: 'Academic Year 2017-18',
      sslcImage: '/results/2017-18/2017-18 10th.jpg',
      hssImage: '/results/2017-18/2017-18 12th.jpg'
    },
    {
      year: '2016-17', 
      title: 'Academic Year 2016-17',
      sslcImage: '/results/2016-17/2016-17 10th.jpg',
      hssImage: '/results/2016-17/2016-17 12th.jpg'
    },
    {
      year: '2015-16', 
      title: 'Academic Year 2015-16',
      sslcImage: '/results/2015-16/2015-16 10th.jpg',
      hssImage: '/results/2015-16/2015-16 12th.jpg'
    },
  ];

  const selectedYearData = academicYears.find(year => year.year === selectedYear);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Academic Results
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Celebrating our students' achievements and academic excellence
          </p>
          </div>
          
        {/* Year Selector */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <label htmlFor="year-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Academic Year
            </label>
              <select
              id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
              >
              {academicYears.map((year) => (
                <option key={year.year} value={year.year}>
                  {year.title}
                </option>
              ))}
            </select>
          </div>
            </div>
            
        {/* Selected Year Results */}
        {selectedYearData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  {selectedYearData.title}
                </h3>
                  <div className="space-y-6">
                  <div className="relative group">
                    <img
                      src={selectedYearData.sslcImage}
                      alt={`SSLC Results ${selectedYearData.year}`}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/sba-logo.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={`/results/${selectedYearData.year}/sslc`}
                        className="text-white font-medium flex items-center"
                      >
                        View SSLC Results
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div className="relative group">
                    <img 
                      src={selectedYearData.hssImage}
                      alt={`HSS Results ${selectedYearData.year}`}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/sba-logo.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={`/results/${selectedYearData.year}/hss`}
                        className="text-white font-medium flex items-center"
                      >
                        View HSS Results
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        </div>
    </div>
  );
};

export default Results;