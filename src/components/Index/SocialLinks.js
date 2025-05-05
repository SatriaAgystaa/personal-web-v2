import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaGitlab,
  FaInstagram
} from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <motion.a 
        href="https://github.com/SatriaAgystaa" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -3 }} 
        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <FaGithub className="text-xl" />
      </motion.a>
      <motion.a 
        href="https://gitlab.com/SatriaAgysta" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -3 }} 
        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <FaGitlab className="text-xl" />
      </motion.a>
      <motion.a 
        href="https://linkedin.com/in/satria-agysta" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -3 }} 
        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <FaLinkedin className="text-xl" />
      </motion.a>
      <motion.a 
        href="https://instagram.com/satriaagysta" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -3 }} 
        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <FaInstagram className="text-xl" />
      </motion.a>
    </div>
  );
}