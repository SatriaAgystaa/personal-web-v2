import React, { useState, useEffect } from 'react';
import { FaUsers, FaRegLightbulb, FaLaptopCode, FaPalette, FaComments, FaRocket, FaLinkedin, FaInstagram, FaGithub, FaPaintBrush } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { LuPalette } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import Link from 'next/link';

const names = ["Satria Agysta", "Frontend Developer", "Tech Enthusiast"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3 transition-all duration-300">
            Hi, I'm
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 text-transparent bg-clip-text pl-2"
            >
              {names[index]}
            </motion.span>
          </h1>
          <ul className="flex flex-row gap-7 text-gray-600 dark:text-gray-400 mb-2 transition-all duration-300 list-disc pl-5">
            <li>Hybrid Worker</li>
            <li>Based in Bogor</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-[#d4d4d4] transition-all duration-300">
          Experienced and passionate Software Engineer with a strong emphasis on frontend development. Skilled in TypeScript and well-versed in a wide range of web technologies. A collaborative team player committed to delivering efficient, scalable, and visually engaging web applications.
          </p>
        </header>

        {/* Soft Skills Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 transition-all duration-300">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {[ 
              { icon: FiUsers, title: 'Teamwork', desc: 'I excel in collaborative environments, fostering strong team dynamics.'},
              { icon: FaRegLightbulb, title: 'Problem-Solving', desc: 'Adept at analyzing challenges and implementing effective solutions.'},
              { icon: FaLaptopCode, title: 'Adaptability', desc: 'Embrace change and quickly adjust to new technologies and tools.'}
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md border border-indigo-500 dark:border-gray-900 bg-cover bg-center text-gray-900 dark:text-white dark:text-white flex flex-col w-full max-w-[350px] transition-all duration-300"
                style={{ backgroundImage: `url('https://i.pinimg.com/736x/fb/e6/b4/fbe6b4d79a7b423121350dd74ebbb91d.jpg')` }} // Tambahkan path gambar di sini
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg text-white font-medium flex items-center gap-2 mb-2">
                  {React.createElement(skill.icon)} {skill.title}
                </h3>
                <p className="text-sm text-gray-200 dark:text-gray-300">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Services Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 transition-all duration-300">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {[ 
              { icon: FaLaptopCode, title: 'Web Development', desc: 'Building responsive websites with high performance, ensuring a fast, smooth, and optimized user experience across all devices.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' },
              { icon: LuPalette, title: 'UI/UX Design', desc: 'Creating intuitive UI/UX designs that ensure seamless navigation, enhance user engagement, and deliver a visually appealing experience.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' },
              { icon: FaRegCommentDots, title: 'Consultation', desc: 'Providing expert consultation to help you refine strategies, solve challenges, and enhance your digital presence with tailored solutions.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' },
              { icon: HiOutlinePaintBrush, title: 'Ilustrator', desc: 'Bringing ideas to life through custom illustrations, blending creativity and detail to deliver unique visual stories.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-0 rounded-lg shadow-md bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 border border-gray-500 dark:border-gray-900 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white dark:text-white flex flex-col w-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {/* <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg" /> */}
                <div className="p-5">
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                    {React.createElement(service.icon)} {service.title}
                  </h3>
                  <p className="text-sm text-gray-800 dark:text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-500 text-white text-center mb-8 w-full transition-all duration-300">
          <h2 className="text-2xl font-medium flex items-center justify-center gap-2 mb-2">
            <IoRocketOutline /> Let's Work Together!
          </h2>
          <p className="mb-4 text-gray-300 dark:text-gray-300">I'm open for freelance projects. Let's collaborate!</p>
          <Link href="https://wa.me/6285710386045" passHref>
            <motion.button
              className="px-6 py-2 rounded-md bg-gray-900 dark:bg-[#0a0a0a] text-white text-sm font-medium shadow-md hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </section>

        {/* Footer Section */}
        <footer className="w-full">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex justify-center gap-6 mb-4 text-sm font-medium">
              {["About", "Project", "Contact"].map((item, index) => (
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
