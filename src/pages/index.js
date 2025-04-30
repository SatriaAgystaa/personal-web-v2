import React, { useState, useEffect, useRef } from 'react';
import Head from "next/head";
import { FaRegLightbulb, FaLaptopCode, FaComments } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { LuPalette } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import Link from 'next/link';

const names = ["Satria Agysta", "Frontend Developer", "UI/UX Designer", "Digital Artist"];

const gradientColors = [
  'from-indigo-500 to-indigo-700',
  'from-blue-500 to-blue-700',
  'from-purple-500 to-purple-700',
  'from-pink-500 to-pink-700',
  'from-teal-500 to-teal-700',
  'from-orange-500 to-orange-700'
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const softSkillsRef = useRef(null);
  const servicesRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e, ref) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e, ref) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
       <Head>
              <title>Home | Satria Agysta</title>
              <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
            </Head>
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Header Section */}
        <header className="mb-8 w-full">
          <h1 className="text-3xl font-bold mb-3 transition-all duration-300">
            Hi, I'm
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0d0d0d] dark:bg-white text-transparent bg-clip-text pl-2"
            >
              {names[index]}
            </motion.span>
          </h1>
          <ul className="flex flex-row gap-7 text-gray-600 dark:text-gray-400 mb-2 transition-all duration-300 list-disc pl-5">
            <li>Fresh Graduate</li>
            <li>Based in Bogor</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-[#d4d4d4] transition-all duration-300">
            A passionate junior frontend developer and UI/UX enthusiast, recently graduated from SMK Wikrama Bogor. Skilled in building responsive interfaces with Next.js and React, with a strong foundation in modern web technologies.
          </p>
        </header>

        {/* Soft Skills Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 transition-all duration-300">Soft Skills</h2>
          <div 
            ref={softSkillsRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={(e) => handleMouseDown(e, softSkillsRef)}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={(e) => handleMouseMove(e, softSkillsRef)}
          >
            {[ 
              { 
                icon: FiUsers, 
                title: 'Teamwork', 
                desc: 'Enjoy collaborating with others and learning from teammates. Worked well in group projects during my vocational school years.'
              },
              { 
                icon: FaRegLightbulb, 
                title: 'Problem-Solving', 
                desc: 'Good at troubleshooting issues in my code. Always try to find solutions before asking for help.'
              },
              { 
                icon: FaLaptopCode, 
                title: 'Adaptability', 
                desc: 'Quick to learn new technologies. Recently picked up Next.js and Tailwind CSS for my projects.'
              },
              { 
                icon: FaComments, 
                title: 'Communication', 
                desc: 'Comfortable explaining technical concepts to non-technical people. Developed this skill during school presentations.'
              },
              { 
                icon: FaRegLightbulb, 
                title: 'Creativity', 
                desc: 'Enjoy finding innovative ways to implement designs and solve UI challenges.'
              },
              { 
                icon: FiUsers, 
                title: 'Willingness to Learn', 
                desc: 'Eager to expand my skills and knowledge. Regularly practice coding and study documentation.'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 p-6 rounded-lg shadow-md border dark:border-gray-900 bg-gradient-to-r ${gradientColors[index]} text-white flex flex-col w-72`}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  {React.createElement(skill.icon)} {skill.title}
                </h3>
                <p className="text-sm text-gray-200">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6 transition-all duration-300">What I Can Do</h2>
          <div 
            ref={servicesRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={(e) => handleMouseDown(e, servicesRef)}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={(e) => handleMouseMove(e, servicesRef)}
          >
            {[ 
              { 
                icon: FaLaptopCode, 
                title: 'Web Development', 
                desc: 'Build responsive websites using modern technologies like Next.js, React, and Tailwind CSS.' 
              },
              { 
                icon: LuPalette, 
                title: 'UI/UX Design', 
                desc: 'Create clean, intuitive interfaces with good user experience principles in mind.' 
              },
              { 
                icon: FaRegCommentDots, 
                title: 'Frontend Assistance', 
                desc: 'Help implement designs into functional components and pages.' 
              },
              { 
                icon: HiOutlinePaintBrush, 
                title: 'Digital Art', 
                desc: 'Create digital illustrations and design elements for projects.' 
              },
              { 
                icon: FaLaptopCode, 
                title: 'Code Maintenance', 
                desc: 'Help maintain and update existing codebases with clean, readable code.' 
              },
              { 
                icon: LuPalette, 
                title: 'Design Implementation', 
                desc: 'Translate design mockups into working frontend code.' 
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white flex flex-col w-72"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  {React.createElement(service.icon)} {service.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-500 text-white text-center mb-8 w-full">
          <h2 className="text-2xl font-medium flex items-center justify-center gap-2 mb-2">
            <IoRocketOutline /> Let's Work Together!
          </h2>
          <p className="mb-4 text-gray-300 dark:text-gray-300">I'm looking for opportunities to grow as a developer. Let's connect!</p>
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

        {/* Footer */}
        <footer className="w-full">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Satria Agysta. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}