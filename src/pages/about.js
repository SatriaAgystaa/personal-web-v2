import React, { useEffect, useRef } from 'react';
import Head from "next/head";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJs, FaDatabase, FaFigma } from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiMysql, SiDbeaver
} from 'react-icons/si';
import { FiDownload, FiUser } from "react-icons/fi";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoRocketOutline } from "react-icons/io5";

function AutoScrollCarousel() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const content = contentRef.current;
    
    // Clone items for infinite scroll effect
    const items = Array.from(content.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      content.appendChild(clone);
    });

    let animationFrameId;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      
      if (scrollContainer.scrollLeft >= content.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const techStacks = [
    { name: 'React', icon: <FaReact />, color: '#61DBFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#8CC84B' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F34F29' },
    { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
    { name: 'DBeaver', icon: <SiDbeaver />, color: '#372A47' },
    { name: 'Database', icon: <FaDatabase />, color: '#F0DB4F' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },

  ];
  
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>About Me | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>
      <div ref={containerRef} className="flex py-6 overflow-x-hidden whitespace-nowrap">
        <div ref={contentRef} className="flex gap-4">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[120px] h-[50px] bg-white dark:bg-[#070707] border border-gray-300 dark:border-indigo-900 rounded-full shadow-md px-4"
            >
              <span className="mr-2 text-xl" style={{ color: tech.color }}>{tech.icon}</span>
              <span className="text-sm font-medium dark:text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Header Section */}
        <header className="mb-8 flex flex-col">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2 flex items-center justify-center gap-2">
              <FiUser className="w-6 h-6 text-black dark:text-white" />
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Get to know more about my background, skills, and passion in tech.
            </p>
          </div>
          <hr className="border-t border-gray-300 dark:border-gray-700 mb-8" />
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/images/prib.jpg"
              alt="Profile"
              className="w-56 h-56 rounded-lg border-2 border-gray-300 dark:border-gray-900"
            />
            <div className="text-lg text-gray-700 dark:text-gray-300 flex flex-col gap-4">
              <p>I'm Satria Agysta, a graduate of SMK Wikrama Bogor with a passion for front-end development and UI/UX design. I build responsive and interactive websites using technologies like Next.js, React, and Tailwind CSS.</p>
              <p>I create wireframes and prototypes in Figma to ensure a seamless user experience before moving into code. For me, good design is about both appearance and usability.</p>
              <p>Outside of web development, I enjoy drawing and creating character animations using Clip Studio Paint as a form of creative expression.</p>
              <p>I'm currently open to job opportunities or freelance projects — feel free to reach out if you'd like to work together!</p>
            </div>
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
              className="px-3 py-2 rounded-md bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900 dark:bg-indigo-900 text-white text-sm font-medium shadow-md flex flex-row gap-2 items-center hover:bg-gray-800 dark:hover:bg-indigo-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/images/cv/cv-satria.pdf";
                link.download = "Satria_Agysta_CV.pdf";
                link.click();
              }}
            >
              <FiDownload />
              Resume
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {[
              {
                image: '/images/nara.jpg',
                role: 'Frontend Dev',
                corp: 'Narantraya',
                location: 'Bogor',
                period: 'Jan 2024 - Jun 2024',
                time: 'Internship',
                description: 'Developing CIU Insurance website using Next.js and Tailwind CSS.',
              },
              {
                image: '/images/nara.jpg',
                role: 'Frontend Dev',
                corp: 'Narantraya',
                location: 'Bogor',
                period: 'Aug 2024 - Nov 2024',
                time: 'Freelance',
                description: 'Developing the BarenganAja website using Next.js and Tailwind CSS.',
              },
              {
                image: '/images/orc.jpg',
                role: 'Marketing Designer',
                corp: 'Orchadeer',
                location: 'Bogor',
                period: 'Nov 2024 - Des 2024',
                time: 'Entrepreneurial Skills Project',
                description: 'Designing visual marketing strategies and digital branding designs.',
              },
              {
                image: '/images/sync.png',
                role: 'UI UX Designer',
                corp: 'Sync DigTec',
                location: 'Bogor',
                period: 'Jan 2025 - Apr 2025',
                time: 'Entrepreneurial Skills Project',
                description: 'Designing user experience and interface for Feastic web.',
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl shadow-md border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white flex flex-row w-full gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={skill.image}
                  alt={skill.role}
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 dark:border-[#262626]"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">{skill.role}</h3>
                  <div className="flex flex-row items-center text-gray-600 dark:text-gray-400 gap-1">
                    <h2 className="text-base">{skill.corp}</h2>
                    <span className="text-sm">-</span>
                    <h2 className="text-base">{skill.location}</h2>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{skill.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">~ {skill.time}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">Education</h2>
          <p className="text-gray-500 dark:text-gray-400 items-center text-center flex mb-4">
            My education journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {[
              {
                image: 'https://smkwikrama.sch.id/assets2/wikrama-logo.png',
                school: 'SMK Wikrama Bogor',
                degree: 'Software Engineering',
                period: '2022 - 2025',
              },
              {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCcfHPyLbf3SLgqUs_IxzbDFRaHiXFhfZOg&s',
                school: 'SMP Negeri 1 Cigombong',
                degree: 'Junior High School',
                period: '2019 - 2022',
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl shadow-md border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white flex flex-row w-full gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 dark:border-[#262626]"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">{edu.school}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.degree}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
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
          <AutoScrollCarousel />
        </section>

        {/* Call to Action Section */}
        <section className="p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-500 text-white text-center mb-8 w-full">
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