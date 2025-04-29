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
import { motion } from "framer-motion";

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

  // Initialize state from localStorage and check screen size
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Mobile menu item component
  const MobileNavItem = ({ item }) => {
    const isActive = router.pathname === item.path;
    return (
      <Link
        href={item.path}
        className={`w-full flex items-center space-x-3 py-2 px-4 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-gray-300 dark:bg-[#262626] text-black dark:text-white shadow-lg"
            : "hover:bg-gray-100 hover:text-gray-700 dark:hover:text-[#e6e6e6] dark:hover:bg-[#262626]"
        }`}
      >
        {React.cloneElement(item.icon, { className: "text-lg" })}
        <span>{item.label}</span>
      </Link>
    );
  };

  // Desktop sidebar item component
  const DesktopNavItem = ({ item, isOpen }) => {
    const isActive = router.pathname === item.path;
    return (
      <motion.li
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center mb-4 w-full p-2 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-gray-300 dark:bg-[#262626] text-black dark:text-white shadow-lg"
            : "hover:bg-gray-100 hover:text-gray-700 dark:hover:text-[#e6e6e6] dark:hover:bg-[#262626]"
        }`}
      >
        <Link
          href={item.path}
          className="flex items-center justify-center w-full"
        >
          {React.cloneElement(item.icon, { className: "text-lg" })}
          {isOpen && <span className="ml-3 text-base">{item.label}</span>}
        </Link>
      </motion.li>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Header */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-[#262626] p-4 flex items-center justify-between z-50">
          <div className="flex items-center space-x-3">
            <motion.img
              whileHover={{ rotate: 5 }}
              src="/images/prib.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 dark:border-[#0a0a0a] shadow-lg shadow-gray-400 dark:shadow-[#262626]"
            />
            <span className="font-semibold text-gray-800 dark:text-white">
              Satria Agysta
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-800 dark:text-white p-2 rounded-full"
            >
              {darkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: isOpen ? 0 : -300 }}
          transition={{ type: "spring", damping: 25 }}
          className={`fixed top-16 left-0 w-full bg-white dark:bg-[#0a0a0a] p-4 gap-2 flex flex-col items-center z-40`}
        >
          {navItems.map((item, index) => (
            <MobileNavItem key={index} item={item} />
          ))}
        </motion.div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          initial={{ width: 64 }}
          animate={{ width: isOpen ? 256 : 64 }}
          className={`fixed h-screen bg-white dark:bg-[#060606] text-gray-800 dark:text-white shadow-lg shadow-gray-400 dark:shadow-[#262626] rounded-r-3xl p-4 flex flex-col items-center z-50`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center w-full relative pt-8">
            {/* Background Banner */}
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

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`relative transition-all duration-300 ease-in-out ${
                isOpen ? "w-24 h-24 mt-4" : "w-12 h-12 -mt-4"
              } rounded-full border-2 dark:border-[#0a0a0a] shadow-lg shadow-gray-400 dark:shadow-[#262626]`}
            >
              <img
                src="/images/prib.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>

            {/* Profile Info (only shown when expanded) */}
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

          {/* Navigation */}
          <nav className="mt-8 w-full">
            <ul className="w-full flex flex-col items-center">
              {navItems.map((item, index) => (
                <DesktopNavItem key={index} item={item} isOpen={isOpen} />
              ))}
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
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
        </motion.div>
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