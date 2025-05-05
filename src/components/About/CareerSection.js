import React from 'react';
import { careerData } from '../data/careerData';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJs, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiDbeaver, SiRedux, SiPostgresql, SiPostman, SiGitlab } from 'react-icons/si';
import { FiDownload } from "react-icons/fi";
import { motion } from 'framer-motion';

const techIcons = {
  'React': { icon: <FaReact />, color: '#61DBFB' },
  'Next.js': { icon: <SiNextdotjs />, color: '#000000' },
  'Node.js': { icon: <FaNodeJs />, color: '#8CC84B' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: '#38B2AC' },
  'CSS3': { icon: <FaCss3Alt />, color: '#1572B6' },
  'HTML5': { icon: <FaHtml5 />, color: '#E44D26' },
  'JavaScript': { icon: <FaJs />, color: '#F7DF1E' },
  'Git': { icon: <FaGitAlt />, color: '#F34F29' },
  'MySQL': { icon: <SiMysql />, color: '#00758F' },
  'DBeaver': { icon: <SiDbeaver />, color: '#372A47' },
  'Database': { icon: <FaDatabase />, color: '#F0DB4F' },
  'Figma': { icon: <FaFigma />, color: '#F24E1E' },
  'Redux': { icon: <SiRedux />, color: '#764ABC' },
  'PostgreSQL': { icon: <SiPostgresql />, color: '#336791' },
  'Postman': { icon: <SiPostman />, color: '#EF5B25' },
  'GitLab': { icon: <SiGitlab />, color: '#FCA121' },
};

export default function CareerSection() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/images/cv/CV-ATS-SatriaAgysta.pdf";
    link.download = "CV-Satria-Agysta.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mb-12 w-full px-4 sm:px-0">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white mb-1">Career</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">My professional career journey</p>
        </div>
        <motion.button
          className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-sm font-medium shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={downloadResume}
        >
          <FiDownload className="text-base" />
          <span>Download Resume</span>
        </motion.button>
      </div>

      {/* Career Items */}
      <div className="space-y-4 sm:space-y-6">
        {careerData.map((job, index) => (
          <motion.div
            key={index}
            className="p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <img
                  src={job.image}
                  alt={job.corp}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg border border-gray-200 dark:border-[#262626] p-1"
                />
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{job.role}</h3>
                  <span className="text-xs sm:text-sm px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-fit">
                    {job.time}
                  </span>
                </div>

                {/* Company Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="font-medium">{job.corp}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.location}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.period}</span>
                </div>

                {/* Job Description */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>

                {/* Responsibilities */}
                {job.responsibilities && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {job.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((tech, i) => {
                      const iconData = techIcons[tech];
                      return (
                        <motion.div
                          key={i}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-gray-50 dark:bg-[#070707] border border-gray-200 dark:border-gray-800 rounded-full shadow-xs"
                          whileHover={{ y: -2 }}
                        >
                          {iconData && (
                            <span className="text-sm" style={{ color: iconData.color }}>
                              {iconData.icon}
                            </span>
                          )}
                          <span className="text-gray-700 dark:text-white">{tech}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}