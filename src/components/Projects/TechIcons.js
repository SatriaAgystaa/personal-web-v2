import { motion } from 'framer-motion';

const TechIcons = ({ techIcons }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {techIcons.map((tech, i) => (
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
  );
};

export default TechIcons;