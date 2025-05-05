import React from 'react';
import Head from "next/head";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoRocketOutline } from "react-icons/io5";
import { FiCode, FiDownload, FiExternalLink } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiDbeaver, SiPostgresql, SiFigma, SiVite, SiPostman } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const projects = [
  {
    title: "AbsenQu",
    desc: "A web-based application to help schools efficiently record student tardiness. Allows teachers and staff to record tardiness, monitor student statistics, and generate easily accessible reports.",
    image: "/images/rekap.jpg",
    techIcons: [
      { icon: FaLaravel, color: "#FF2424" },
      { icon: DiMysql, color: "#FF7733" },
      { icon: FaBootstrap, color: "#A034FF" },
      { icon: RiTailwindCssFill, color: "#34A4FF" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/AppsRekapSatria.git",
    demoLink: "",
    isPrivate: false,
    type: "School Project - SMK Wikrama Bogor"
  },
  {
    title: "Personal Web",
    desc: "The first portfolio website showcasing projects and experience in web development. Built with HTML, CSS, and Tailwind CSS for a responsive design.",
    image: "/images/prib.png",
    techIcons: [
      { icon: FaHtml5, color: "#E44D26" },
      { icon: FaCss3Alt, color: "#1572B6" },
      { icon: RiTailwindCssFill, color: "#34A4FF" }
    ],
    status: "Finished",
    link: "https://personal-web-satria.vercel.app/",
    demoLink: "https://personal-web-satria.vercel.app/",
    isPrivate: false,
    type: "Personal Project"
  },
  {
    title: "Ciu Insurance",
    desc: "Digital insurance website that provides claim services, policy information, and other features. Built with Next.js and Laravel for high performance and a more intuitive user experience.",
    image: "/images/ciu.png",
    techIcons: [
      { icon: SiPostgresql, color: "#2E96CF" },
      { icon: SiDbeaver, color: "#634946" },
      { icon: RiNextjsFill, color: "#131313" },
      { icon: RiTailwindCssFill, color: "#34A4FF" },
      { icon: FaBootstrap, color: "#A034FF" },
      { icon: SiExpress, color: "#FFDB27" },
      { icon: FaLaravel, color: "#FF2424" },
      { icon: SiPostman, color: "#FF6C37" }
    ],
    status: "Finished",
    demoLink: "",
    isPrivate: true,
    type: "Company Project - PT Narantraya",
    proofLink: "/images/proofs/Sertifikat-Magang-Satria.pdf"
  },
  {
    title: "BarenganAja",
    desc: "A secure and practical premium account sharing platform. Allows users to share access to subscription services with a legal and organized system.",
    image: "/images/barenganaja.jpg",
    techIcons: [
      { icon: SiPostgresql, color: "#2E96CF" },
      { icon: SiDbeaver, color: "#634946" },
      { icon: RiNextjsFill, color: "#131313" },
      { icon: RiTailwindCssFill, color: "#34A4FF" },
      { icon: SiExpress, color: "#FFDB27" },
      { icon: SiPostman, color: "#FF6C37" }
    ],
    status: "Finished",
    demoLink: "",
    isPrivate: true,
    type: "Company Project - PT Narantraya",
    proofLink: "/images/proofs/Surat-Selesai-Project-Satria.pdf"
  },
  {
    title: "Public Complaints",
    desc: "A web-based complaint platform that allows users to report complaints easily and quickly. Equipped with user role features (User, Staff, Head Staff) and interaction through likes and number of views on the report.",
    image: "/images/adu.png",
    techIcons: [
      { icon: DiMysql, color: "#FF6C37" },
      { icon: RiTailwindCssFill, color: "#34A4FF" },
      { icon: FaLaravel, color: "#FF2D20" },
      { icon: SiVite, color: "#646CFF" },
      { icon: SiPostman, color: "#FF6C37" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/Ujikom-Pengaduan.git",
    demoLink: "",
    isPrivate: false,
    type: "School Project - SMK Wikrama Bogor"
  },
  {
    title: "Feastic",
    desc: "Digital platform for purchasing tickets for events such as concerts, festivals, and exhibitions. Providing a fast, safe, and convenient purchasing experience for users.",
    image: "/images/feastic.png",
    techIcons: [
      { icon: SiFigma, color: "#F24E1E" }
    ],
    status: "On Going",
    link: "https://www.figma.com/design/VNQkGENWuymFZQ3iuAKtdk/Feastic?node-id=0-1&t=zxnZaSwAjVtqvxyQ-1",
    demoLink: "",
    isPrivate: false,
    type: "Team Project - Student SMK Wikrama Bogor"
  },
  {
    title: "Cloudy Z",
    desc: "Weather forecast application with real-time data from weather API. Features include 5-day forecast, location-based weather, and beautiful UI animations. Built with Next.js and Tailwind CSS.",
    image: "/images/cloudyz.png",
    techIcons: [
      { icon: RiNextjsFill, color: "#131313" },
      { icon: RiTailwindCssFill, color: "#34A4FF" },
      { icon: SiVite, color: "#646CFF" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/cloudy-z",
    demoLink: "https://cloudyz-web.vercel.app/",
    isPrivate: false,
    type: "Personal Project"
  }   
];

export default function Projects() {
  const handleDemoClick = (demoLink) => {
    if (!demoLink) {
      toast.info('Demo link not available for this project', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
       <Head>
        <title>Projects | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Projects Section */}
        <section className="mb-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2 flex items-center justify-center gap-2">
              <FiCode className="w-6 h-6 text-black dark:text-white" />
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A showcase of my best work and practical coding experiences.
            </p>
          </div>

          <hr className="border-t border-gray-300 dark:border-gray-700 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-0 rounded-lg shadow-lg dark:shadow-gray-900 dark:shadow-lg bg-white dark:bg-[#070707] text-gray-900 dark:text-white flex flex-col w-full hover:glow-effect"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-52 object-cover rounded-t-lg" 
                />
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-sm">{project.desc}</p>
                    <div className="flex gap-2 mt-3">
                      {project.techIcons.map((tech, techIndex) => (
                        <tech.icon 
                          key={techIndex} 
                          className="text-xl" 
                          style={{ color: tech.color }} 
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-sm font-semibold">
                      Status: <span className="text-indigo-600 dark:text-indigo-400">{project.status}</span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{project.type}</p>
                  </div>
                  <div className="mt-4">
  {!project.isPrivate ? (
    // Tampilan untuk project PUBLIC
    <div className="flex gap-2">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-all flex-1"
      >
        <FiCode className="mr-2" /> Source Code
      </a>
      
      {project.demoLink ? (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-all flex-1"
        >
          <FiExternalLink className="mr-2" /> Live Demo
        </a>
      ) : (
        <button
          onClick={() => handleDemoClick(project.demoLink)}
          className="inline-flex items-center justify-center bg-gray-400 text-white px-4 py-2 rounded-lg text-sm cursor-not-allowed flex-1"
          disabled
        >
          <FiExternalLink className="mr-2" /> Demo
        </button>
      )}
    </div>
  ) : (
    // Tampilan untuk project PRIVATE
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center">Private Project</p>
      <div className="flex gap-2">
        {project.proofLink && (
          <a
            href={project.proofLink}
            download
            className="inline-flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition-all flex-1"
          >
            <FiDownload className="mr-2" /> Proof
          </a>
        )}
        <button
          onClick={() => handleDemoClick(project.demoLink)}
          className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm flex-1 ${
            project.demoLink 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
          disabled={!project.demoLink}
        >
          <FiExternalLink className="mr-2" /> {project.demoLink ? 'Live Demo' : 'Demo'}
        </button>
      </div>
    </div>
  )}
</div>
                </div>
              </motion.div>
            ))}
          </div>
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