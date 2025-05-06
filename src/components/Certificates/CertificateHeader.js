import { motion } from 'framer-motion';
import { FiAward } from "react-icons/fi";

const CertificateHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-6 sm:mb-8 px-4 sm:px-0"
    >
      <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-3 sm:mb-4">
        <FiAward className="text-indigo-600 dark:text-indigo-400 w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
        My Certifications
      </h1>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
        Professional credentials that validate my expertise and commitment to continuous learning.
      </p>
      <hr className="border-t border-gray-200 dark:border-gray-700" />
    </motion.div>
  );
};

export default CertificateHeader;