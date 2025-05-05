import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDownload } from "react-icons/fi";
import { FaLaptopCode, FaLaravel, FaBootstrap } from 'react-icons/fa';
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { SiExpress, SiDbeaver, SiPostgresql, SiFigma, SiVite, SiPostman } from "react-icons/si";


const projects = [
  {
    title: "AbsenQu",
    desc: "A web-based application to help schools efficiently record student tardiness. Allows teachers and staff to record tardiness, monitor student statistics, and generate easily accessible reports.",
    image: "/images/rekap.jpg",
    techIcons: [
      { icon: FaLaravel, color: "#FF2424" },
      { icon: DiMysql, color: "#FF7733" },
      { icon: FaBootstrap, color: "#A034FF" },
      { icon: RiTailwindCssFill, color: "#34A4FF" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/AppsRekapSatria.git",
    demoLink: "#",
    isPrivate: false,
    type: "School Project - SMK Wikrama Bogor"
  },
  {
    title: "Public Complaints",
    desc: "A web-based complaint platform that allows users to report complaints easily and quickly. Equipped with user role features (User, Staff, Head Staff) and interaction through likes and number of views on the report.",
    image: "/images/adu.png",
    techIcons: [
      { icon: DiMysql, color: "#FF6C37" },
      { icon: RiTailwindCssFill, color: "#34A4FF" },
      { icon: FaLaravel, color: "#FF2D20" },
      { icon: SiVite, color: "#646CFF" },
      { icon: SiPostman, color: "#FF6C37" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/Ujikom-Pengaduan.git",
    demoLink: "",
    isPrivate: false,
    type: "School Project - SMK Wikrama Bogor"
  },
  {
    title: "Cloudy Z",
    desc: "Weather forecast application with real-time data from weather API. Features include 5-day forecast, location-based weather, and beautiful UI animations. Built with Next.js and Tailwind CSS.",
    image: "/images/cloudyz.png",
    techIcons: [
      { icon: RiNextjsFill, color: "#131313" },
      { icon: RiTailwindCssFill, color: "#34A4FF" },
      { icon: SiVite, color: "#646CFF" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/cloudy-z",
    demoLink: "https://cloudyz-web.vercel.app/",
    isPrivate: false,
    type: "Personal Project"
  }  
];

export default function FeaturesProjects() {
  return (
    <motion.section 
      id="projects"
      className="mb-16 sm:mb-20 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white mb-1">Featured Projects</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Some of my personal projects</p>
        </div>
        <Link href="/projects" legacyBehavior>
          <motion.a 
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View all <FiExternalLink className="text-xs sm:text-sm" />
          </motion.a>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-900 bg-white dark:bg-[#0a0a0a] hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -5 }}
          >
            {/* Project Image/Placeholder - 16:9 Aspect Ratio */}
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full w-fit ${
                  project.status === "Finished" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
              
              <div className="mb-4">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{project.type}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techIcons.map((tech, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="p-2 bg-gray-50 dark:bg-[#070707] rounded-full shadow-sm"
                  >
                    <tech.icon className="text-lg sm:text-xl" style={{ color: tech.color }} />
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.isPrivate ? (
                  <motion.button 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-md bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-1.5 shadow-sm"
                  >
                    <FiExternalLink className="text-xs sm:text-sm" /> Proof
                  </motion.button>
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
                {project.demoLink && (
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
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}