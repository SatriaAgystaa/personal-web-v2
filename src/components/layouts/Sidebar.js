import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineTask } from "react-icons/md";
import { PiAtBold } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaPhone, FaInstagram, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        // Navbar Responsive
        <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-50">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pinimg.com/736x/30/3d/73/303d73b95ca34084dc7312afb134cc55.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
            <span className="font-semibold text-gray-800">Satria Agysta</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      ) : (
        // Sidebar Desktop
        <div
          className={`fixed h-screen bg-white text-gray-800 transition-all duration-300 ease-in-out transform shadow-xl shadow-gray-400 rounded-r-3xl ${
            isOpen ? 'w-64' : 'w-16'
          } p-4 flex flex-col items-center`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Profil */}
          <div className="flex flex-col items-center w-full relative pt-4">
            {isOpen && (
              <div
                className="absolute top-0 w-full h-24 rounded-md bg-cover bg-center"
                style={{ backgroundImage: "url(https://i.pinimg.com/736x/81/d6/1c/81d61c5dc31435f67ae6a60065500283.jpg)" }}
              ></div>
            )}

            <div className={`relative transition-all duration-300 ease-in-out ${isOpen ? 'w-24 h-24 mt-4' : 'w-12 h-12 -mt-4'} rounded-full border-4 bg-gradient-to-r from-gray-100 to-gray-100 shadow-lg`}>
              <img
                src="https://i.pinimg.com/736x/30/3d/73/303d73b95ca34084dc7312afb134cc55.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isOpen && (
              <div className="mt-2 text-center">
                <div className="text-lg font-semibold">Satria Agysta</div>
                <div className="text-sm text-gray-500">@satriaagysta</div>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href="https://instagram.com/satriaagysta" target="_blank" className="text-gray-800 hover:text-indigo-600">
                    <FaInstagram size={20} />
                  </Link>
                  <Link href="https://github.com/satriaagysta" target="_blank" className="text-gray-800 hover:text-indigo-600">
                    <FaGithub size={20} />
                  </Link>
                  <Link href="https://gitlab.com/satriaagysta" target="_blank" className="text-gray-800 hover:text-indigo-600">
                    <FaGitlab size={20} />
                  </Link>
                  <Link href="https://linkedin.com/in/satriaagysta" target="_blank" className="text-gray-800 hover:text-indigo-600">
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Navigasi */}
          <nav className="mt-8 w-full">
            <ul className="w-full flex flex-col items-center">
              {["/", "/about", "/projects", "/contact"].map((path, index) => {
                const icons = [<TbLayoutDashboard />, <PiAtBold />, <MdOutlineTask  />, <RiContactsLine />];
                const labels = ["Home", "About", "Projects", "Contact"];
                const isActive = router.pathname === path;
                return (
                  <li
                    key={index}
                    className={`flex items-center justify-center mb-6 w-full p-2 rounded-lg transition-all duration-300 ${
                      isActive ? 'bg-indigo-500 text-white shadow-lg' : 'hover:bg-indigo-100 hover:text-indigo-600'
                    }`}
                  >
                    <Link href={path} className="flex items-center justify-center w-full">
                      {React.cloneElement(icons[index], { className: 'text-m' })}
                      {isOpen && <span className="ml-3 text-base">{labels[index]}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      {isMobile && (
        <div
          className={`fixed top-16 left-0 w-full bg-white shadow-md p-4 gap-2 flex flex-col items-center z-40 transition-transform duration-300 transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {["/", "/about", "/projects", "/contact"].map((path, index) => {
            const icons = [<TbLayoutDashboard />, <PiAtBold />, <MdOutlineTask  />, <RiContactsLine />];
            const labels = ["Home", "About", "Projects", "Contact"];
            const isActive = router.pathname === path;
            return (
              <Link
                key={index}
                href={path}
                className={`w-full flex items-center space-x-3 py-2 px-4 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-indigo-500 text-white shadow-lg' : 'hover:bg-indigo-100 hover:text-indigo-600'
                } text-gray-800`}
              >
                {React.cloneElement(icons[index], { className: 'text-m' })} <span>{labels[index]}</span>
              </Link>
            );
          })}
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
