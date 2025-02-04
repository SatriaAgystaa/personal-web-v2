import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaRocket, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
      <div className="max-w-[1200px] w-full font-sans flex flex-col justify-center items-center">
        {/* Projects Section */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Projects</h2>
          <p className="text-gray-500 mb-4">Showcasing my passion for technology, design, and problem-solving through code.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {[
              { title: 'Barenganaja', desc: 'Building responsive and high-performance websites.', image: 'https://i.pinimg.com/736x/c4/00/7d/c4007d74ef3240555cd344dc1f49a792.jpg', techIcons: [{ icon: FaHtml5, color: '#E44D26' }, { icon: FaCss3Alt, color: '#1572B6' }, { icon: FaJs, color: '#F7DF1E' }] },
              { title: 'Barenganaja', desc: 'Designing intuitive interfaces and captivating experiences.', image: 'https://i.pinimg.com/736x/c4/00/7d/c4007d74ef3240555cd344dc1f49a792.jpg', techIcons: [{ icon: FaHtml5, color: '#E44D26' }, { icon: FaCss3Alt, color: '#1572B6' }] },
              { title: 'Barenganaja', desc: 'Providing expert advice on web technology strategies.', image: 'https://i.pinimg.com/736x/c4/00/7d/c4007d74ef3240555cd344dc1f49a792.jpg', techIcons: [{ icon: FaJs, color: '#F7DF1E' }, { icon: FaReact, color: '#61DBFB' }] },
              { title: 'Barenganaja', desc: 'Providing expert advice on web technology strategies.', image: 'https://i.pinimg.com/736x/c4/00/7d/c4007d74ef3240555cd344dc1f49a792.jpg', techIcons: [{ icon: FaReact, color: '#61DBFB' }] }
            ].map((project, index) => (
                <motion.div
                    key={index}
                    className="p-0 rounded-lg shadow-md border border-indigo-500 bg-white text-gray-900 flex flex-col w-full hover:glow-effect"
                    whileHover={{
                    scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                >
                <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-t-lg" />
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.desc}</p>
                  <div className="flex gap-2 mt-3">
                    {project.techIcons.map((tech, index) => (
                      <tech.icon key={index} className="text-xl" style={{ color: tech.color }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="p-6 rounded-lg shadow-md bg-indigo-600 text-white text-center mb-8 w-full">
          <h2 className="text-2xl font-medium flex items-center justify-center gap-2 mb-4">
            <FaRocket /> Let's Work Together!
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
        <footer className="w-full">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex justify-center gap-6 mb-4 text-sm font-medium">
              {["About", "Project", "Contact", "Blog"].map((item, index) => (
                <a key={index} href="#" className="hover:text-gray-700 transition duration-300">
                  {item}
                </a>
              ))}
            </nav>
            
            <p className="text-base text-indigo-500 font-semibold">Let's Connect</p>
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
