import { motion } from 'framer-motion';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { HiOutlinePaintBrush, HiOutlineSparkles } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";

const softSkills = [
  { name: "Problem Solving", icon: FaRegLightbulb, color: "#3B82F6" },
  { name: "Fast Learner", icon: IoRocketOutline, color: "#10B981" },
  { name: "Teamwork", icon: FiUsers, color: "#F59E0B" },
  { name: "Creativity", icon: HiOutlinePaintBrush, color: "#8B5CF6" },
  { name: "Adaptability", icon: HiOutlineSparkles, color: "#EC4899" }
];

export default function SoftSkills() {
  return (
    <motion.section 
      className="mb-12 sm:mb-20 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white mb-1">Soft Skills</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">My soft skills and qualities</p>
      </div>
      
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {softSkills.map((skill, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-300 rounded-full flex items-center gap-1.5 sm:gap-2 border border-gray-100 dark:border-gray-900 shadow-md hover:shadow-lg transition-all"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <skill.icon 
                className="text-base sm:text-lg" 
                style={{ 
                  color: skill.color,
                  filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))"
                }} 
              />
            </motion.div>
            <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}