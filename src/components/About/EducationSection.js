import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/educationData';

export default function EducationSection() {
  return (
    <section className="mb-12 px-4 sm:px-0">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white mb-1">Education</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">My formal education background</p>
      </div>

      {/* Education Cards */}
      <div className="space-y-4 sm:space-y-6">
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            className="p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            {/* Institution Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
              <div className="flex-shrink-0">
                <img
                  src={education.image}
                  alt={education.institution}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-200 dark:border-[#262626] shadow-xs"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{education.institution}</h3>
                <p className="text-gray-700 dark:text-gray-400">{education.major}</p>
                <span className="text-sm text-gray-600 dark:text-gray-400">{education.duration}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              {education.description}
            </p>

            {/* Internship */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Internship Experience:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-400">{education.internship.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{education.internship.details}</p>
            </div>

            {/* Vocational Test */}
            <div>
              <h4 className="text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">Vocational Test:</h4>
              <p className="text-sm text-gray-700 dark:text-gray-400">{education.vocationalTest.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{education.vocationalTest.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}