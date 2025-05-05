import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { FiCode, FiAward } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

export default function HighlightBar() {
  return (
    <div className="px-4 sm:px-0">
      <motion.div 
        className="bg-white dark:bg-[#0a0a0a] rounded-lg p-4 sm:p-6 mb-12 sm:mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-100 dark:border-gray-900 sm:gap-6 shadow-md hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <motion.div 
            className="bg-indigo-50 dark:bg-indigo-900 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-inner"
            whileHover={{ scale: 1.05 }}
          >
            <FiAward className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-300" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">Vocational Graduate</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">SMK Wikrama Bogor with focus on software development</p>
          </div>
        </div>
        
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <motion.div 
            className="bg-green-50 dark:bg-green-900 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-inner"
            whileHover={{ scale: 1.05 }}
          >
            <FaLaptopCode className="text-lg sm:text-xl text-green-600 dark:text-green-300" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">Immediate Availability</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Ready to start new opportunities</p>
          </div>
        </div>
        
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <motion.div 
            className="bg-blue-50 dark:bg-blue-900 p-2 sm:p-3 rounded-full flex-shrink-0 shadow-inner"
            whileHover={{ scale: 1.05 }}
          >
            <FiCode className="text-lg sm:text-xl text-blue-600 dark:text-blue-300" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">Frontend Developer</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Specializing in React and Next.js</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}