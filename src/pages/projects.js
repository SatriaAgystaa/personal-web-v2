import Head from "next/head";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoRocketOutline } from "react-icons/io5";
import { FiCode, FiDownload, FiExternalLink, FiGithub } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiDbeaver, SiPostgresql, SiFigma, SiVite, SiPostman } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectHeader from '../components/Projects/ProjectHeader';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectCTA from '../components/Projects/ProjectCTA';
import ProjectFooter from '../components/Projects/ProjectFooter';

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
    title: "Personal Web",
    desc: "The first portfolio website showcasing projects and experience in web development. Built with HTML, CSS, and Tailwind CSS for a responsive design.",
    image: "/images/prib.png",
    techIcons: [
      { icon: FaHtml5, color: "#E44D26" },
      { icon: FaCss3Alt, color: "#1572B6" },
      { icon: RiTailwindCssFill, color: "#34A4FF" }
    ],
    status: "Finished",
    link: "https://github.com/SatriaAgystaa/personal-web-satria",
    demoLink: "https://personal-web-satria.vercel.app/",
    isPrivate: false,
    type: "Personal Project"
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
];

export default function Projects() {
  return (
    <main className="container mx-auto px-6 py-8 max-w-5xl font-sans mt-16 sm:mt-16 md:mt-0">
      <Head>
        <title>Projects | Satria Agysta</title>
        <meta name="description" content="Projects created by Satria Agysta" />
      </Head>
      
      <ProjectHeader />
      
      <div className="grid grid-cols-1 gap-0 sm:gap-8 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <ProjectCTA />
      <ProjectFooter />
    </main>
  );
}