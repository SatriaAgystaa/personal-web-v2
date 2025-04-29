import Head from "next/head";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoRocketOutline } from "react-icons/io5";
import Image from "next/image";
import { FiAward, FiCalendar, FiCheckCircle, FiUser } from "react-icons/fi";

const certificates = [
  {
    id: 1,
    title: "Practical Next.js & React - Build a Real WebApp with Next.js",
    issuer: "Udemy",
    date: "April 2025",
    imageUrl: "/images/certificates/sert0.jpg",
  },
  {
    id: 2,
    title: "UI UX RESEARCH AND DESIGN",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert1.png",
  },
  {
    id: 3,
    title: "FIGMA FOR UI/UX DESIGN",
    issuer: "MySkill",
    date: "February 2025",
    imageUrl: "/images/certificates/sert2.png",
  },
  {
    id: 4,
    title: "USER EXPERIENCE DESIGN",
    issuer: "MySkill",
    date: "February 2022",
    imageUrl: "/images/certificates/sert3.png",
  },
  {
    id: 5,
    title: "USER EXPERIENCE RESEARCH",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert4.png",
  },
  {
    id: 6,
    title: "USER INTERFACE DESIGN",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert5.png",
  },
  {
    id: 7,
    title: "UX WRITING",
    issuer: "MySkill",
    date: "April 2025",
    imageUrl: "/images/certificates/sert6.png",
  }
];

const CertificatesPage = () => {
  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0 mx-auto">
      <Head>
        <title>My Certificates | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>

      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-2 flex items-center justify-center gap-2">
            <FiAward className="text-black dark:text-white w-6 h-6" />
            Certificates
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Professional credentials that showcase my dedication to learning and growth.
          </p>
        </div>

        <hr className="border-t border-gray-300 dark:border-gray-700 mb-10" />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-[#0d0d0d] rounded-lg shadow-lg hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 text-black dark:text-white">
                    <FiCheckCircle className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <FiUser className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <FiCalendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                See more of my certifications on&nbsp;
                <a
                href="https://www.linkedin.com/in/satria-agysta-b520572a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500 transition-colors duration-300"
                >
                my LinkedIn profile
                </a>.
            </p>
        </div>

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

        {/* Footer */}
        <footer className="w-full">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Satria Agysta. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CertificatesPage;
