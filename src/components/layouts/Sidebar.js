import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineTask } from "react-icons/md";
import { PiAtBold } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaInstagram,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { useRouter } from "next/router";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile && (
        <div
          className={`fixed top-16 left-0 w-full bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-[#262626] p-4 gap-2 flex flex-col items-center z-40 transition-transform duration-300 transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {["/", "/about", "/projects", "/contact"].map(
            (path, index) => {
              const icons = [
                <TbLayoutDashboard />,
                <PiAtBold />,
                <MdOutlineTask />,
                <RiContactsLine />,
                <LuPencilLine />,
              ];
              const labels = ["Home", "About", "Projects", "Contact"];
              const isActive = router.pathname === path;
              return (
                <Link
                  key={index}
                  href={path}
                  className={`w-full flex items-center space-x-3 py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gray-300 dark:bg-[#262626] text-black dark:text-white shadow-lg"
                      : "hover:bg-gray-100 hover:text-gray-700 dark:hover:text-[#e6e6e6] dark:text-white dark:hover:bg-[#262626]"
                  }`}
                >
                  {React.cloneElement(icons[index], { className: "text-m" })}{" "}
                  <span>{labels[index]}</span>
                </Link>
              );
            }
          )}
        </div>
      )}

      {isMobile ? (
        // Navbar Responsive
        <div className="fixed top-0 left-0 w-full bg-white dark:bg-[#0a0a0a] shadow-md shadow-gray-200 dark:shadow-[#262626] p-4 flex items-center justify-between z-50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <img
              src="/images/prib.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 dark:border-[#0a0a0a] shadow-lg shadow-gray-400 dark:shadow-[#262626]"
            />
            <span className="font-semibold text-gray-800 dark:text-white">
              Satria Agysta
            </span>
          </div>
          <div className="flex items-center justify-center gap-1">
            {/* Toggle Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-800 dark:text-white p-2 rounded-full"
            >
              {darkMode ? <BsSun size={24} /> : <BsMoonStars size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      ) : (
        // Sidebar Desktop
        <div
          className={`fixed h-screen bg-white dark:bg-[#060606] text-gray-800 dark:text-white transition-all duration-300 ease-in-out transform shadow-lg shadow-gray-400 dark:shadow-[#262626] rounded-r-3xl ${
            isOpen ? "w-64" : "w-16"
          } p-4 flex flex-col items-center`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Profil */}
          <div className="flex flex-col items-center w-full relative pt-8">
            {isOpen && (
              <div
                className="absolute top-0 w-full h-24 rounded-md bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/736x/cc/17/d6/cc17d6275892413023e2af67c9fdfdaf.jpg)",
                }}
              ></div>
            )}

            <div
              className={`relative transition-all duration-300 ease-in-out ${
                isOpen ? "w-24 h-24 mt-4" : "w-12 h-12 -mt-4"
              } rounded-full border-2 dark:border-[#0a0a0a] shadow-lg shadow-gray-400 dark:shadow-[#262626]`}
            >
              <img
                src="./images/12209409.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isOpen && (
              <div className="mt-2 text-center">
                <div className="text-lg font-semibold">Satria Agysta</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">@agysta</div>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link
                    href="https://instagram.com/satriaagysta"
                    target="_blank"
                    className="text-gray-800 dark:text-[#E6E6E6] hover:text-gray-600"
                  >
                    <FaInstagram size={20} />
                  </Link>
                  <Link
                    href="https://github.com/satriaagysta"
                    target="_blank"
                    className="text-gray-800 dark:text-[#E6E6E6] hover:text-gray-600"
                  >
                    <FaGithub size={20} />
                  </Link>
                  <Link
                    href="https://gitlab.com/satriaagysta"
                    target="_blank"
                    className="text-gray-800 dark:text-[#E6E6E6] hover:text-gray-600"
                  >
                    <FaGitlab size={20} />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/satriaagysta"
                    target="_blank"
                    className="text-gray-800 dark:text-[#E6E6E6] hover:text-gray-600"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Navigasi */}
          <nav className="mt-8 w-full">
            <ul className="w-full flex flex-col items-center">
              {["/", "/about", "/projects", "/contact"].map(
                (path, index) => {
                  const icons = [
                    <TbLayoutDashboard />,
                    <PiAtBold />,
                    <MdOutlineTask />,
                    <RiContactsLine />,
                    <LuPencilLine />,
                  ];
                  const labels = [
                    "Home",
                    "About",
                    "Projects",
                    "Contact"
                  ];
                  const isActive = router.pathname === path;
                  return (
                    <li
                      key={index}
                      className={`flex items-center justify-center mb-6 w-full p-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-gray-300 dark:bg-[#262626] text-black dark:text-white shadow-lg"
                          : "hover:bg-gray-100 hover:text-gray-700 dark:hover:text-[#e6e6e6] dark:hover:bg-[#262626]"
                      }`}
                    >
                      <Link
                        href={path}
                        className="flex items-center justify-center w-full"
                      >
                        {React.cloneElement(icons[index], {
                          className: "text-m",
                        })}
                        {isOpen && (
                          <span className="ml-3 text-base">
                            {labels[index]}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>

          {/* Toggle Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`absolute transition-all duration-300 ${
              isOpen ? "top-5 right-5" : "bottom-4"
            } p-2 rounded-full bg-gray-300 dark:bg-[#262626] text-black dark:text-white`}
          >
            {darkMode ? <BsSun /> : <BsMoonStars />}
          </button>
        </div>
      )}

      {/* Konten Utama */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen mt-16">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;