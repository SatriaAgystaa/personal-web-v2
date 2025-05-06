import { motion } from 'framer-motion';
import { FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';

export default function Footer() {
  const techStack = [
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-700 dark:text-gray-300' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-sky-500 dark:text-sky-400' },
    { icon: SiFramer, name: 'Framer Motion', color: 'text-pink-500 dark:text-pink-400' },
    { icon: FaReact, name: 'React', color: 'text-blue-500 dark:text-blue-400' },
    { icon: FaFigma, name: 'Figma', color: 'text-purple-500 dark:text-purple-400' }
  ];

  return (
    <motion.footer 
      className="py-8 sm:py-10 border-t border-gray-100 dark:border-gray-800 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Tech Stack Icons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-900 shadow-sm"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <tech.icon className={`text-lg ${tech.color}`} />
                <span className="text-xs text-gray-600 dark:text-gray-300 hidden sm:inline-block">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-sm text-gray-600 dark:text-gray-400 text-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Satria Agysta. All rights reserved.
          </motion.p>

          {/* Built With */}
          <motion.p 
            className="text-xs text-gray-500 dark:text-gray-500 mt-2 sm:mt-3 text-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Designed and built with passion
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}