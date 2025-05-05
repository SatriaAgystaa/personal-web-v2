import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";

const offerings = [
  { 
    icon: FaLaptopCode, 
    title: 'Modern Development', 
    desc: 'Clean, efficient code using React, Next.js and TypeScript. Experience with state management, API integration, and performance optimization.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/50'
  },
  { 
    icon: HiOutlinePaintBrush, 
    title: 'Design Sensibility', 
    desc: 'Strong understanding of UI/UX principles with ability to implement pixel-perfect interfaces from Figma designs.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/50'
  },
  { 
    icon: IoDocumentTextOutline, 
    title: 'Quick Learning', 
    desc: 'Proven ability to quickly adapt to new technologies, frameworks, and team workflows.',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/50'
  },
  { 
    icon: FiUsers, 
    title: 'Collaborative Mindset', 
    desc: 'Experience working in agile teams with tools like Git, Jira, and effective communication practices.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/50'
  }
];

export default function WhatIOffer() {
  return (
    <motion.section 
      className="mb-16 sm:mb-20 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white mb-1">What I Offer</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">I offer a wide range of services to help you bring your ideas to life</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            className="p-5 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-[#0a0a0a] hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
            }}
          >
            <motion.div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${item.bg} transition-transform duration-300`}
              whileHover={{ 
                rotate: [0, 5, -5, 0],
                transition: { 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 300 
                }
              }}
            >
              <item.icon className={`text-xl sm:text-2xl ${item.color}`} />
            </motion.div>
            
            <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${item.color}`}>
              {item.title}
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}