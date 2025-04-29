import React from 'react';
import Head from "next/head";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaRocket, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp
} from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import Link from 'next/link';

export default function Home() {
  const cardData = [
    {
      title: 'Explore the code',
      desc: 'Explore the source code for all my projects on GitHub.',
      buttonText: 'View on GitHub',
      link: 'https://github.com/SatriaAgystaa',
      color: "bg-gray-900 hover:bg-gray-700",
      bg: "bg-gray-100 dark:bg-gray-800",
      icon: <FaGithub className="text-4xl text-gray-900 dark:text-white" />
    },
    {
      title: 'Let`s connect',
      desc: 'Connect for collaboration or explore my professional experience.',
      buttonText: 'Connect with me',
      link: 'https://www.linkedin.com/in/satria-agysta-b520572a5/',
      color: "bg-blue-600 hover:bg-blue-500",
      bg: "bg-blue-100 dark:bg-blue-800",
      icon: <FaLinkedin className="text-4xl text-blue-600 dark:text-white" />
    },
    {
      title: 'Let’s talk!',
      desc: 'Have a question or want to work together? Let’s chat on WhatsApp.',
      buttonText: 'Chat on WhatsApp',
      link: 'https://wa.me/6285710386045',
      color: "bg-green-600 hover:bg-green-500",
      bg: "bg-green-100 dark:bg-green-800",
      icon: <FaWhatsapp className="text-4xl text-green-600 dark:text-white" />
    },
    {
      title: 'Reach me by email',
      desc: 'For any inquiries or proposals, feel free to send me an email.',
      buttonText: 'Send Email',
      link: 'mailto:agystasatria@gmail.com',
      color: "bg-red-600 hover:bg-red-500",
      bg: "bg-red-100 dark:bg-red-800",
      icon: <FiMail className="text-4xl text-red-600 dark:text-white" />
    }
  ];

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
       <Head>
        <title>Contact | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        
        {/* Contact Section */}
        <section className="mb-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2 flex items-center justify-center gap-2">
              <FiMail className="w-6 h-6 text-black dark:text-white" />
              Contact
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Feel free to reach out or connect with me anytime.
            </p>
          </div>
          <hr className="border-t border-gray-300 dark:border-gray-700 mb-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {cardData.map((project, index) => (
              <motion.div
                key={index}
                className={`p-0 rounded-lg shadow-md border border-[#d9d9d9] dark:border-[#262626] text-gray-900 dark:text-white flex flex-col w-full ${project.bg} hover:glow-effect`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 relative">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.desc}</p>
                  <motion.button
                    className={`px-4 py-2 rounded-md text-white text-sm font-medium flex items-center gap-2 shadow-md transition-colors duration-300 ${project.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.buttonText}
                    <FaArrowUpRightFromSquare />
                  </motion.button>
                  <div className="absolute bottom-0 right-2">{project.icon}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-500 text-white text-center mb-8 w-full transition-all duration-300">
          <h2 className="text-2xl font-medium flex items-center justify-center gap-2 mb-2">
            <IoRocketOutline /> Let's Work Together!
          </h2>
          <p className="mb-4 text-gray-300 dark:text-gray-300">I'm open for freelance projects. Let's collaborate!</p>
          <Link href="https://wa.me/6285710386045" passHref>
            <motion.button
              className="px-6 py-2 rounded-md bg-gray-900 dark:bg-[#0a0a0a] text-white text-sm font-medium shadow-md hover:bg-gray-800 transition duration-300"
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
            <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Satria Agysta. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
