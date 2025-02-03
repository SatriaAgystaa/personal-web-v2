import React from 'react';
import { FaUsers, FaRegLightbulb, FaLaptopCode, FaPalette, FaComments, FaRocket, FaLinkedin, FaInstagram, FaGithub, FaPaintBrush } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { LuPalette } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="sm:w-full md:w-3/5 font-sans p-8 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-3">
            Hi, I'm Satria
          </h1>
          <p className="text-gray-500 mb-2">Based in Bandung, Indonesia</p>
          <p className="text-lg text-gray-700">
            Enthusiastic Frontend Developer with a knack for crafting seamless web interfaces and delightful user experiences.
          </p>
        </header>

        {/* Soft Skills Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { icon: FiUsers, title: 'Teamwork', desc: 'I excel in collaborative environments, fostering strong team dynamics.'},
              { icon: FaRegLightbulb, title: 'Problem-Solving', desc: 'Adept at analyzing challenges and implementing effective solutions.'},
              { icon: FaLaptopCode, title: 'Adaptability', desc: 'Embrace change and quickly adjust to new technologies and tools.'}
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md border border-indigo-500 bg-white text-gray-900 flex flex-col w-full max-w-[350px]"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  {React.createElement(skill.icon)} {skill.title}
                </h3>
                <p className="text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {[
              { icon: FaLaptopCode, title: 'Web Development', desc: 'Building responsive and high-performance websites.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' },
              { icon: LuPalette, title: 'UI/UX Design', desc: 'Designing intuitive interfaces and captivating experiences.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' },
              { icon: FaRegCommentDots, title: 'Consultation', desc: 'Providing expert advice on web technology strategies.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' },
              { icon: HiOutlinePaintBrush, title: 'Ilustrator', desc: 'Providing expert advice on web technology strategies.', image: 'https://i.pinimg.com/736x/75/7d/f0/757df0e3c8d1975c9a27e4e896ae5ab0.jpg' }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-0 rounded-lg shadow-md border border-indigo-500 bg-white text-gray-900 flex flex-col w-full max-w-[350px]"
                whileHover={{ scale: 1.05 }}
              >
                <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-t-lg" />
                <div className="p-5">
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                    {React.createElement(service.icon)} {service.title}
                  </h3>
                  <p className="text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="p-6 rounded-lg shadow-md bg-indigo-600 text-white text-center mb-8 w-full max-w-[750px]">
          <h2 className="text-2xl font-medium flex items-center justify-center gap-2 mb-4">
            <IoRocketOutline  /> Let's Work Together!
          </h2>
          <p className="mb-4">I'm open for freelance projects. Let's collaborate!</p>
          <motion.button
            className="px-6 py-2 rounded-md bg-gray-900 text-white text-sm font-medium shadow-md hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-sm text-gray-600 w-full">
          <div className="flex justify-center gap-6 mb-4">
            {['About', 'Blog', 'Project', 'Contact'].map((item, index) => (
              <a key={index} href="#" className="hover:underline">{item}</a>
            ))}
          </div>
          <p>Let's Connect</p>
          <div className="flex justify-center gap-4 mt-2">
            {[FaLinkedin, FaInstagram, FaGithub].map((Icon, index) => (
              <a key={index} href="#" className="text-xl text-gray-700 hover:text-gray-900" aria-label="Social Link">
                <Icon />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
