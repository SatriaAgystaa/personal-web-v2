import { motion } from 'framer-motion';
import Image from "next/image";
import { FiUser, FiCalendar, FiExternalLink } from "react-icons/fi";

const CertificateCard = ({ cert, handleViewDetails }) => {
  const Icon = cert.icon;
  
  return (
    <div className="mb-12 px-4 sm:px-0">
        <motion.div
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl bg-white/50 dark:bg-[#0d0d0d]/50 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col h-full"
        >
        <div className="relative h-48 w-full overflow-hidden">
            <Image
            src={cert.imageUrl}
            alt={cert.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 right-4">
            <div className={`p-2 rounded-lg backdrop-blur-sm bg-white/10 ${cert.iconColor}`}>
                <Icon className="w-5 h-5" />
            </div>
            </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow" style={{ minHeight: '160px' }}>
            <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {cert.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>{cert.date}</span>
                </div>
            </div>
            </div>
            
            <div className="mt-4 flex justify-end">
            <button 
                onClick={() => handleViewDetails(cert.pdfUrl)}
                className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors px-3 py-1 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            >
                View Details <FiExternalLink className="w-3 h-3" />
            </button>
            </div>
        </div>
        </motion.div>
    </div>
  );
};

export default CertificateCard;