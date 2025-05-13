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
    desc: "A web-based app designed to assist schools in efficiently recording and monitoring student tardiness. It helps teachers and staff structure attendance records, analyze lateness trends, and make informed decisions.",
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
    type: "School Project - SMK Wikrama Bogor",
    features: [
      "Teachers and staff can record and monitor student lateness.",
      "Displays student statistics to identify patterns of tardiness.",
      "Generates comprehensive and easily accessible tardiness reports.",
      "Role-based access for admin, teachers, and staff."
    ]
  },
  {
    title: "Cloudy Z",
    desc: "A real-time weather forecasting application that displays current conditions and a 5-day forecast. Designed with a modern, responsive UI and animated visuals for an enhanced user experience.",
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
    type: "Personal Project",
    features: [
      "Displays current weather and 5-day forecast with detail.",
      "Search weather by city using geolocation API.",
      "Responsive and modern UI with smooth animations.",
      "Weather icons and background change based on weather condition."
    ]
  }, 
  {
    title: "Ciu Insurance",
    desc: "A digital insurance platform that simplifies policy management, online claim submission, and status tracking. Developed as part of an internal system during an internship at PT Narantraya.",
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
    proofLink: "/images/proofs/Sertifikat-Magang-Satria.pdf",
    features: [
      "Digital claim submission and status tracking.",
      "User dashboard to manage policy details.",
      "Integrated with backend Laravel and PostgreSQL via Express.js API.",
      "Backend tested using Postman with comprehensive API coverage.",
      "Designed for scalability and responsive layout."
    ]
  },
  {
    title: "BarenganAja",
    desc: "A web platform for legally sharing premium service accounts in an organized and secure way. It enables users to form subscription groups, make payments transparently, and access shared services easily.",
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
    proofLink: "/images/proofs/Surat-Selesai-Project-Satria.pdf",
    features: [
      "Share and manage subscription services like Netflix, Spotify, etc.",
      "User authentication and account management system.",
      "Secure data flow using PostgreSQL and Express.js.",
      "REST API tested via Postman.",
      "UI built with Next.js and Tailwind CSS for better responsiveness."
    ]
  },
  {
    title: "Public Complaints",
    desc: "A complaint management platform to promote transparency and public engagement. Supports report submissions with user roles and interactive features like comments, views, and likes.",
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
    type: "School Project - SMK Wikrama Bogor",
    features: [
      "User registration and login system with role-based access: User, Staff, Head Staff.",
      "Users can post complaints with descriptions and images.",
      "Staff can respond directly to user complaints.",
      "Each report shows view count and likes to measure engagement.",
      "Admin dashboard to manage users and reports."
    ]
  },
  {
    title: "Personal Web",
    desc: "A minimalist personal portfolio site showcasing web development projects and experience. Built for fast performance and clean navigation using Tailwind CSS.",
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
    type: "Personal Project",
    features: [
      "Homepage, project showcase, about section, and contact form.",
      "Responsive design using HTML, CSS, and Tailwind CSS.",
      "GitHub and live project links integration.",
      "Clean UI for easy navigation.",
      "Deployed on Vercel for fast performance."
    ]
  },
  {
    title: "Feastic",
    desc: "An upcoming event ticketing platform for concerts, festivals, and exhibitions. Designed to offer fast, secure, and user-friendly ticket purchases. Currently in UI/UX design phase using Figma.",
    image: "/images/feastic.png",
    techIcons: [
      { icon: SiFigma, color: "#F24E1E" }
    ],
    status: "On Going",
    link: "https://www.figma.com/design/VNQkGENWuymFZQ3iuAKtdk/Feastic?node-id=0-1&t=zxnZaSwAjVtqvxyQ-1",
    demoLink: "",
    isPrivate: false,
    type: "Team Project - Student SMK Wikrama Bogor",
    features: [
      "Event listing page with category filters.",
      "Interactive ticket purchase flow with real-time seat selection (planned).",
      "UI/UX design using Figma focused on user-friendliness and mobile-first approach.",
      "Collaborative design project with student team.",
      "Currently in design phase."
    ]
  }
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