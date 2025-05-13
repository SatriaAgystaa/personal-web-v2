import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiDownload } from "react-icons/fi";
import TechIcons from './TechIcons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectCard = ({ project, index }) => {
  const handleDemoClick = (demoLink) => {
    if (!demoLink) {
      toast.info('Demo link not available for this project', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="mb-12 px-4 sm:px-0">
        <motion.section
        className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-900 bg-white/50 dark:bg-[#0a0a0a]/50 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 * index }}
        whileHover={{ y: -5 }}
        >
        <div className="w-full aspect-video flex items-center justify-center overflow-hidden">
            <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
        </div>
        
        <div className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                {project.title}
                </h3>
                <span
                className={`px-2 py-1 text-xs rounded-full w-fit ${
                    project.status === "Finished"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : project.status === "On Going"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                >
                {project.status}
                </span>
            </div>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>

            {project.features && project.features.length > 0 && (
                <div className="mt-4 mb-5">
                <h4 className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Features:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul>
                </div>
            )}
            
            <div className="mb-4">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{project.type}</span>
            </div>

            <TechIcons techIcons={project.techIcons} />

            <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.isPrivate ? (
                <>
                    {project.proofLink && (
                    <motion.a
                        href={project.proofLink}
                        download
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-1.5 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <FiDownload className="text-xs sm:text-sm" /> Proof
                    </motion.a>
                    )}
                </>
                ) : (
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 flex items-center gap-1.5 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <FiGithub className="text-xs sm:text-sm" /> Source
                </motion.a>
                )}
                {project.demoLink ? (
                <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm"
                >
                    <FiExternalLink className="text-xs sm:text-sm" /> Demo
                </motion.a>
                ) : (
                <motion.button
                    onClick={() => handleDemoClick(project.demoLink)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center gap-1.5 shadow-sm cursor-not-allowed"
                    disabled
                >
                    <FiExternalLink className="text-xs sm:text-sm" /> Demo
                </motion.button>
                )}
            </div>
        </div>

        </motion.section>
    </div>
  );
};

export default ProjectCard;