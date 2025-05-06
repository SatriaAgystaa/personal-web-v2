import React from 'react';
import Head from "next/head";
import CTA from "../components/Contact/CallToAction";
import Footer from "../components/Contact/Footer";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import {
  FaLinkedin, FaGithub, FaWhatsapp
} from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import Link from 'next/link';

export default function Home() {
  const cardData = [
    {
      title: 'Explore the code',
      desc: 'Explore the source code for all my projects on GitHub.',
      buttonText: 'View on GitHub',
      link: 'https://github.com/SatriaAgystaa',
      color: "bg-[#0a0a0a] hover:bg-gray-700",
      bg: "bg-gray-100/50 dark:bg-[#070707]/50",
      icon: <FaGithub className="text-4xl text-gray-900 dark:text-white" />
    },
    {
      title: 'Let`s connect',
      desc: 'Connect for collaboration or explore my professional experience.',
      buttonText: 'Connect with me',
      link: 'https://www.linkedin.com/in/satria-agysta-b520572a5/',
      color: "bg-blue-600 hover:bg-blue-500",
      bg: "bg-blue-100/50 dark:bg-blue-800/50",
      icon: <FaLinkedin className="text-4xl text-blue-600 dark:text-white" />
    },
    {
      title: 'Let\'s talk!',
      desc: 'Have a question or want to work together? Let\'s chat on WhatsApp.',
      buttonText: 'Chat on WhatsApp',
      link: 'https://wa.me/6285710386045',
      color: "bg-green-600 hover:bg-green-500",
      bg: "bg-green-100/50 dark:bg-green-800/50",
      icon: <FaWhatsapp className="text-4xl text-green-600 dark:text-white" />
    },
    {
      title: 'Reach me by email',
      desc: 'For any inquiries or proposals, feel free to send me an email.',
      buttonText: 'Send Email',
      link: 'mailto:agystasatria@gmail.com',
      color: "bg-red-600 hover:bg-red-500",
      bg: "bg-red-100/50 dark:bg-red-800/50",
      icon: <FiMail className="text-4xl text-red-600 dark:text-white" />
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl font-sans mt-16 sm:mt-16 md:mt-0">
      <Head>
        <title>Contact | Satria Agysta</title>
        <meta name="description" content="Contact information for Satria Agysta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="w-full font-sans flex flex-col justify-center items-center">
        {/* Animated Header Section */}
        <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center mb-6 sm:mb-8 px-4 sm:px-0"
            >
              <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-3 sm:mb-4">
                <FiMessageSquare className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Get In Touch
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
              Feel free to reach out for collaborations or just a friendly hello.
              </p>
              <hr className="border-t border-gray-200 dark:border-gray-700" />
            </motion.div>
        
        {/* Contact Cards Section */}
        <section className="w-full px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-12">
            {cardData.map((project, index) => (
              <motion.div
                key={index}
                className={`p-0 rounded-lg shadow-md border border-[#d9d9d9] dark:border-[#262626] text-gray-900 dark:text-white flex flex-col w-full ${project.bg} hover:glow-effect`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-5 relative">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{project.desc}</p>
                  <motion.button
                    className={`px-4 py-2 rounded-md text-white text-sm font-medium flex items-center gap-2 shadow-md transition-colors duration-300 ${project.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.buttonText}
                    <FaArrowUpRightFromSquare />
                  </motion.button>
                  <div className="absolute bottom-4 right-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
                    {project.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        <CTA />
        </section>
        <Footer />
      </div>
    </div>
  );
}