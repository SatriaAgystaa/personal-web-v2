import React, { useEffect, useRef } from 'react';
import { FaUsers, FaLightbulb, FaLaptopCode, FaPalette, FaComments, FaRocket, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiDownload } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoRocketOutline } from "react-icons/io5";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJs, FaDatabase, FaDocker, FaFigma } from 'react-icons/fa';

function AutoScrollCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollSpeed = 1;

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (
        scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.offsetWidth ||
        scrollContainer.scrollLeft === 0
      ) {
        scrollSpeed *= -1;
      }
    };

    const scrollInterval = setInterval(autoScroll, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const techStacks = [
    { name: 'React', icon: <FaReact />, color: '#61DBFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#8CC84B' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F34F29' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Database', icon: <FaDatabase />, color: '#F0DB4F' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  ];
  
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-4 py-6 overflow-x-hidden whitespace-nowrap"
      >
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[120px] h-[50px] bg-white dark:bg-[#070707] border border-gray-300 dark:border-indigo-900 rounded-full shadow-md px-4"
          >
            <span className="mr-2 text-xl" style={{ color: tech.color }}>{tech.icon}</span>
            <span className="text-sm font-medium dark:text-white">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
            About
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4">A short story of me</p>
          <div className="text-lg text-gray-700 dark:text-gray-300 flex flex-col gap-4">
            <div>Saya Satria Agysta, pelajar dari SMK Wikrama Bogor, fokus pada front-end development. Saya mengembangkan website menggunakan teknologi seperti Next.js, React, dan Tailwind CSS untuk menciptakan tampilan yang interaktif, responsif, dan user-friendly. Saya percaya desain yang baik dapat memperkaya pengalaman pengguna.</div>

            <div>Selain coding, saya juga memiliki ketertarikan pada tren streetwear dan selalu mencari cara untuk mengekspresikan kreativitas dalam berbagai aspek kehidupan.</div>

            <div>Jika Anda tertarik berdiskusi atau bekerja sama dalam proyek front-end, saya siap untuk berbincang!</div>
          </div>
        </header>

        {/* Career Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">Career</h2>
          <div className="flex flex-row justify-between mb-4">
            <p className="text-gray-500 dark:text-gray-400 items-center text-center flex">
              My professional career journey
            </p>
            <motion.button
              className="px-3 py-2 rounded-md bg-gray-900 dark:bg-indigo-900 text-white text-sm font-medium shadow-md flex flex-row gap-2 items-center hover:bg-gray-800 dark:hover:bg-indigo-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
            <FiDownload />
            Resume
          </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {[
              {
                image: 'https://narantraya.com/images/logo/Icon%20Narantraya%20Putih.jpg',
                role: 'Frontend Developer',
                corp: 'Narantraya',
                location: 'Jakarta',
                period: 'Jan 2024 - Jun 2024',
                time: '6 months',
              },
              {
                image: 'https://narantraya.com/images/logo/Icon%20Narantraya%20Putih.jpg',
                role: 'Frontend Developer',
                corp: 'Narantraya',
                location: 'Jakarta',
                period: 'Jan 2024 - Jun 2024',
                time: '6 months',
              },
              {
                image: 'https://narantraya.com/images/logo/Icon%20Narantraya%20Putih.jpg',
                role: 'Frontend Developer',
                corp: 'Narantraya',
                location: 'Jakarta',
                period: 'Jan 2024 - Jun 2024',
                time: '6 months',
              },
              {
                image: 'https://narantraya.com/images/logo/Icon%20Narantraya%20Putih.jpg',
                role: 'Frontend Developer',
                corp: 'Narantraya',
                location: 'Jakarta',
                period: 'Jan 2024 - Jun 2024',
                time: '6 months',
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl shadow-md border border-gray-300 dark:border-[#262626] bg-white dark:bg-[#070707] text-gray-900 dark:text-white flex flex-row w-full gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={skill.image}
                  alt={skill.role}
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 dark:border-[#262626]"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-1 text-indigo-600 dark:text-white">{skill.role}</h3>
                  <div className="flex flex-row items-center text-gray-600 dark:text-gray-400 gap-1">
                    <h2 className="text-base">{skill.corp}</h2>
                    <span className="text-sm">-</span>
                    <h2 className="text-base">{skill.location}</h2>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{skill.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">~ {skill.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skill Section */}
        <section className="mb-4 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">Tech Stack</h2>
          <p className="text-gray-500 dark:text-gray-400 items-center text-center mb-4 flex">
            My coding skills
          </p>

          {/* Carousel Component */}
          <AutoScrollCarousel />
        </section>

        {/* Call to Action Section */}
        <section className="p-6 rounded-lg shadow-md bg-indigo-600 dark:bg-indigo-900 text-white text-center mb-8 w-full transition-all duration-300">
          <h2 className="text-2xl font-medium flex items-center justify-center gap-2 mb-2">
            <IoRocketOutline  /> Let's Work Together!
          </h2>
          <p className="mb-4 text-gray-300 dark:text-gray-300">I'm open for freelance projects. Let's collaborate!</p>
          <motion.button
            className="px-6 py-2 rounded-md bg-gray-900 dark:bg-[#0a0a0a] text-white text-sm font-medium shadow-md hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </section>

        {/* Footer Section */}
        <footer className="w-full">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex justify-center gap-6 mb-4 text-sm font-medium">
              {["About", "Project", "Contact", "Blog"].map((item, index) => (
                <a key={index} href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              ))}
            </nav>
            
            <p className="text-base text-indigo-500 dark:text-gray-300 font-semibold">Let's Connect</p>
            <div className="flex justify-center gap-4 mt-3">
              {[ 
                { Icon: FaLinkedin, link: "#" },
                { Icon: FaInstagram, link: "#" },
                { Icon: FaGithub, link: "#" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="text-xl text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                  aria-label="Social Link"
                >
                  <Icon />
                </a>
              ))}
            </div>
            
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Satria Agysta. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}