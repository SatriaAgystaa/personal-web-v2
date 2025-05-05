import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCode,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { 
  HiOutlineSparkles 
} from "react-icons/hi2";
import { 
  IoRocketOutline 
} from "react-icons/io5";

const typingVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { 
    opacity: 1,
    width: "auto",
    transition: { 
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  },
  exit: { 
    opacity: 0,
    width: 0,
    transition: { 
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

const rocketVariants = {
  hover: {
    y: [0, -5, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

export default function HeroSection({ index, typingComplete, names }) {
  return (
    <motion.section 
      className="min-h-[80vh] flex flex-col justify-center mb-12 md:mb-20 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 md:mb-12">
        <motion.div 
          className="flex items-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4 sm:mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiOutlineSparkles className="text-yellow-500 text-lg" />
          </motion.div>
          <span>Fresh Graduate from SMK Wikrama Bogor</span>
        </motion.div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight h-12 sm:h-20 mb-0 sm:mb-4 overflow-hidden">
          <motion.div
            key={index}
            initial="hidden"
            animate={typingComplete ? "visible" : "hidden"}
            exit="exit"
            variants={typingVariants}
            className="text-gray-900 dark:text-white whitespace-nowrap"
          >
            {names[index]}
          </motion.div>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl">
          Passionate about building beautiful, functional digital experiences with clean code and thoughtful design. 
          Specializing in React and Next.js applications with responsive, accessible interfaces.
        </p>
        
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
          <Link href="#projects" legacyBehavior>
            <motion.a
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-transparent border border-indigo-600 hover:border-indigo-700 text-gray-900 dark:text-white font-medium flex items-center gap-2 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.4)",
                backgroundColor: "rgba(79, 70, 229, 0.05)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCode className="text-base sm:text-lg" /> View Projects
            </motion.a>
          </Link>
          <Link href="https://wa.me/6285710386045" legacyBehavior>
            <motion.a
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-transparent border border-green-600 hover:border-green-700 text-green-600 dark:text-green-400 font-medium flex items-center gap-2 text-sm sm:text-base"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 4px 12px rgba(5, 150, 105, 0.4)",
                backgroundColor: "rgba(5, 150, 105, 0.05)"
              }}
              whileTap="tap"
            >
              <motion.span
                variants={rocketVariants}
                whileHover="hover"
                className="inline-block"
              >
                <IoRocketOutline className="text-base sm:text-lg" />
              </motion.span> 
              Hire Me
            </motion.a>
          </Link>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <motion.a 
            href="https://github.com/SatriaAgystaa" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              y: -3,
              color: "#181717"
            }} 
            className="text-gray-500 dark:text-gray-400 hover:text-[#181717] dark:hover:text-[#f0f0f0] transition-colors"
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </motion.a>
          <motion.a 
            href="https://gitlab.com/SatriaAgysta" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              y: -3,
              color: "#FC6D26"
            }} 
            className="text-gray-500 dark:text-gray-400 hover:text-[#FC6D26] dark:hover:text-[#FC6D26] transition-colors"
          >
            <FaGitlab className="text-xl sm:text-2xl" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/satria-agysta-b520572a5/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              y: -3,
              color: "#0A66C2"
            }} 
            className="text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </motion.a>
          <motion.a 
            href="https://instagram.com/sagystaa" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              y: -3,
              color: "#E4405F"
            }} 
            className="text-gray-500 dark:text-gray-400 hover:text-[#E4405F] dark:hover:text-[#E4405F] transition-colors"
          >
            <FaInstagram className="text-xl sm:text-2xl" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}