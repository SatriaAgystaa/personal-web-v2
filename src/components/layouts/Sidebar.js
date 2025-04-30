import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  TbLayoutDashboard,
  TbCertificate 
} from "react-icons/tb";
import { MdOutlineTask } from "react-icons/md";
import { PiAtBold } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { FaBars, FaTimes, FaInstagram, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", icon: <TbLayoutDashboard />, label: "Home" },
  { path: "/about", icon: <PiAtBold />, label: "About" },
  { path: "/projects", icon: <MdOutlineTask />, label: "Projects" },
  { path: "/gallery", icon: <LuPencilLine />, label: "Gallery" },
  { path: "/certificates", icon: <TbCertificate />, label: "Certificates" },
  { path: "/contact", icon: <RiContactsLine />, label: "Contact" }
];

const socialLinks = [
  { 
    url: "https://www.instagram.com/sagystaa/", 
    icon: <FaInstagram />, 
    color: "hover:text-pink-600" 
  },
  { 
    url: "https://github.com/satriaagystaa", 
    icon: <FaGithub />, 
    color: "hover:text-gray-700 dark:hover:text-gray-300" 
  },
  { 
    url: "https://gitlab.com/agystasatria", 
    icon: <FaGitlab />, 
    color: "hover:text-orange-500" 
  },
  { 
    url: "https://www.linkedin.com/in/satria-agysta-b520572a5/", 
    icon: <FaLinkedin />, 
    color: "hover:text-blue-600" 
  }
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // Close mobile menu when resizing to desktop
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const MobileNavItem = ({ item, index }) => {
    const isActive = router.pathname === item.path;
    return (
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        className="w-full"
      >
        <Link
          href={item.path}
          className={`flex items-center space-x-4 py-3 px-4 rounded-lg transition-all duration-300 ${
            isActive
              ? "bg-gray-200 dark:bg-[#262626] text-black dark:text-white"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#262626]"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <span className="text-xl">
            {React.cloneElement(item.icon, { className: "text-lg" })}
          </span>
          <span className="font-medium">{item.label}</span>
        </Link>
      </motion.div>
    );
  };

  const DesktopNavItem = ({ item, isOpen, index }) => {
    const isActive = router.pathname === item.path;
    return (
      <motion.li
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        className={`flex items-center mb-2 w-full p-2 rounded-lg transition-all duration-300 relative overflow-hidden ${
          isActive
            ? "bg-gray-300 dark:bg-[#262626] text-black dark:text-white shadow-lg"
            : "hover:bg-gray-100 hover:text-gray-700 dark:hover:text-[#e6e6e6] dark:hover:bg-[#262626]"
        }`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 15px rgba(0,0,0,0.2)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/20 dark:to-blue-300/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
        <Link
          href={item.path}
          className={`flex items-center w-full ${isOpen ? 'justify-start' : 'justify-center'}`}
        >
          {React.cloneElement(item.icon, { className: "text-lg" })}
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="ml-3 text-base whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </motion.li>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      {/* Mobile Header */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-gray-800 p-4 flex items-center justify-between z-50">
          <div className="flex items-center space-x-3">
            <motion.img
              whileHover={{ rotate: 5 }}
              src="/images/prib.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md"
            />
            <span className="font-semibold text-gray-800 dark:text-white">
              Satria Agysta
            </span>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-800 dark:text-white p-1 rounded-full"
            >
              {darkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white p-1 rounded-full"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </header>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-16 left-0 right-0 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-gray-800 z-40"
          >
            <div className="p-4 flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <MobileNavItem key={index} item={item} index={index} />
              ))}
              
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`text-gray-700 dark:text-gray-300 ${social.color} text-xl`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.aside
          initial={{ width: 64 }}
          animate={{ width: isOpen ? 256 : 64 }}
          className={`fixed h-screen bg-white dark:bg-[#060606] text-gray-800 dark:text-white shadow-lg shadow-gray-400 dark:shadow-[#262626] rounded-r-3xl p-4 flex flex-col z-50 overflow-hidden`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center w-full relative pt-8">
            {isOpen && (
              <div className="absolute top-0 w-full h-24 rounded-md bg-cover bg-center bg-[url('/images/bg.jpg')] dark:bg-[url('/images/bg.jpeg')]">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-1 left-1 flex items-center space-x-2 px-3 py-1 bg-white dark:bg-[#0d0d0d] rounded-full shadow-md"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-md text-gray-800 dark:text-white">
                    Hire me.
                  </span>
                </motion.div>
              </div>
            )}

            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`relative transition-all duration-300 ease-in-out ${
                isOpen ? "w-24 h-24 mt-4" : "w-12 h-12 mt-4"
              } rounded-full border-2 dark:border-[#0a0a0a] shadow-lg shadow-gray-400 dark:shadow-[#262626]`}
            >
              <img
                src="/images/prib.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>

            {isOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-center"
              >
                <div className="text-lg font-semibold">Satria Agysta</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  @agystasatria
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`text-gray-800 dark:text-[#E6E6E6] ${social.color} transition-colors duration-300`}
                    >
                      {React.cloneElement(social.icon, { size: 20 })}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <hr className="w-4/5 mx-auto mt-6 border-gray-300 dark:border-gray-600" />

          <nav className="mt-4 w-full">
            <ul className="w-full flex flex-col items-center">
              {navItems.map((item, index) => (
                <DesktopNavItem key={index} item={item} isOpen={isOpen} index={index} />
              ))}
            </ul>
          </nav>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`absolute ${
              isOpen ? "top-5 right-5" : "bottom-4"
            } p-2 rounded-full bg-gray-100 dark:bg-[#0d0d0d] text-black dark:text-white`}
          >
            {darkMode ? <BsSun size={18} /> : <BsMoonStars size={18} />}
          </motion.button>
        </motion.aside>
      )}

      {/* Main Content */}
      <div 
        className={`flex flex-col items-center justify-center w-full min-h-screen transition-all duration-300 ${
          isMobile ? "mt-0" : "ml-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;