import { motion } from 'framer-motion';

export const WebDevIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-20 h-20 mb-4"
  >
    {/* Monitor */}
    <div className="absolute w-16 h-12 border-2 border-gray-800 dark:border-gray-200 rounded-md top-0 left-1/2 transform -translate-x-1/2">
      <div className="absolute w-2 h-1 bg-gray-800 dark:bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>
      <div className="absolute w-8 h-4 bg-blue-500/20 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    {/* Keyboard */}
    <div className="absolute w-14 h-6 border-2 border-gray-800 dark:border-gray-200 rounded-sm top-12 left-1/2 transform -translate-x-1/2">
      <div className="absolute w-1 h-2 bg-gray-800 dark:bg-gray-200 top-full left-1/2 transform -translate-x-1/2"></div>
    </div>
    {/* Code brackets */}
    <div className="absolute text-2xl font-bold text-gray-800 dark:text-gray-200 top-14 left-1/2 transform -translate-x-1/2">
      {'</>'}
    </div>
  </motion.div>
);

export const UIDesignIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="relative w-20 h-20 mb-4"
  >
    {/* Artboard */}
    <div className="absolute w-14 h-14 border-2 border-gray-800 dark:border-gray-200 rounded-sm top-1 left-1/2 transform -translate-x-1/2">
      {/* UI Elements */}
      <div className="absolute w-10 h-2 bg-blue-500 rounded-full top-2 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-8 h-8 border border-gray-800 dark:border-gray-200 rounded-full top-6 left-1/2 transform -translate-x-1/2"></div>
    </div>
    {/* Pen tool */}
    <div className="absolute w-4 h-4 border-t-2 border-r-2 border-gray-800 dark:border-gray-200 top-14 left-3/4"></div>
  </motion.div>
);

export const DigitalArtIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative w-20 h-20 mb-4"
  >
    {/* Canvas */}
    <div className="absolute w-14 h-14 border-2 border-gray-800 dark:border-gray-200 rounded-sm top-1 left-1/2 transform -translate-x-1/2">
      {/* Brush strokes */}
      <div className="absolute w-3 h-8 bg-pink-500 rounded-full top-2 left-3 transform -rotate-12"></div>
      <div className="absolute w-8 h-3 bg-blue-500 rounded-full top-8 left-4 transform rotate-6"></div>
      <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-4 left-8"></div>
    </div>
    {/* Palette */}
    <div className="absolute w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 top-14 left-1/4">
      <div className="absolute w-2 h-2 bg-red-500 rounded-full top-1 left-1"></div>
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-1 right-1"></div>
      <div className="absolute w-2 h-2 bg-yellow-500 rounded-full bottom-1 left-1"></div>
    </div>
  </motion.div>
);

export const DesignImplIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="relative w-20 h-20 mb-4"
  >
    {/* Phone */}
    <div className="absolute w-8 h-14 border-2 border-gray-800 dark:border-gray-200 rounded-lg top-1 left-1/2 transform -translate-x-1/2">
      {/* Screen content */}
      <div className="absolute w-6 h-2 bg-gray-200 dark:bg-gray-700 rounded top-1 left-1"></div>
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-4 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-5 h-1 bg-gray-300 dark:bg-gray-600 rounded-full top-6 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-5 h-1 bg-gray-300 dark:bg-gray-600 rounded-full top-8 left-1/2 transform -translate-x-1/2"></div>
    </div>
    {/* Arrow */}
    <div className="absolute text-xl top-12 left-3/4 transform -translate-y-1/2">→</div>
    {/* Browser */}
    <div className="absolute w-10 h-8 border-2 border-gray-800 dark:border-gray-200 rounded-sm top-4 left-1/4">
      <div className="absolute w-8 h-1 bg-gray-300 dark:bg-gray-600 rounded-full top-1 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-6 h-4 bg-blue-500/20 rounded-sm top-4 left-1/2 transform -translate-x-1/2"></div>
    </div>
  </motion.div>
);