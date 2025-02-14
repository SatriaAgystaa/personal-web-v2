import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaRocket, FaLinkedin, FaInstagram, FaGithub, FaDiscord, FaNpm } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';

export default function Home() {
  const buttonColors = {
    github: "bg-gray-900 hover:bg-gray-700",
    linkedin: "bg-blue-600 hover:bg-blue-500",
    npm: "bg-red-600 hover:bg-red-500",
    discord: "bg-purple-600 hover:bg-purple-500",
  };

  const cardBackgrounds = {
    github: "bg-gray-100 dark:bg-gray-800",
    linkedin: "bg-blue-100 dark:bg-blue-800",
    npm: "bg-red-100 dark:bg-red-800",
    discord: "bg-purple-100 dark:bg-purple-800",
  };

  const cardIcons = {
    github: <FaGithub className="text-4xl text-gray-900 dark:text-white"/>, 
    linkedin: <FaLinkedin className="text-4xl text-blue-600 dark:text-white" />, 
    npm: <FaNpm className="text-4xl text-red-600 dark:text-white" />,
    discord: <FaDiscord className="text-4xl text-purple-600 dark:text-white" />
  };

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Contact Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">Contact</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Let`s get in touch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {[
              { title: 'Explore the code', desc: 'Explore the source code for all my projects on GitHub.', buttonText: 'View on GitHub', link: 'https://github.com/SatriaAgystaa', color: buttonColors.github, bg: cardBackgrounds.github, icon: cardIcons.github },
              { title: 'Let`s connect', desc: 'Connect for collaboration or explore my professional experience.', buttonText: 'Connect with me', link: 'https://www.linkedin.com/in/satria-agysta-b520572a5/', color: buttonColors.linkedin, bg: cardBackgrounds.linkedin, icon: cardIcons.linkedin },
              { title: 'Open source', desc: 'Install and contribute to my open-source projects.', buttonText: 'Go to NPM', link: 'https://npmjs.com', color: buttonColors.npm, bg: cardBackgrounds.npm, icon: cardIcons.npm },
              { title: 'Chat with the community', desc: 'Join over 1,000+ other developers on The Code Agysta', buttonText: 'Join the community', link: 'https://discord.com', color: buttonColors.discord, bg: cardBackgrounds.discord, icon: cardIcons.discord }
            ].map((project, index) => (
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
                        className={`px-4 py-2 rounded-md text-white text-sm font-medium flex items-center gap-2 shadow-md ${project.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = project.link}
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
