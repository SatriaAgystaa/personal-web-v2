"use client";
import { FiUser } from "react-icons/fi";

export default function HeaderSection() {
  return (
    <header className="mb-8 flex flex-col px-4 sm:px-0 pt-16 sm:pt-0">
      {/* Title Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-2">
          <FiUser className="w-5 h-5 sm:w-6 sm:h-6" />
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mx-auto">
          Get to know more about my background, skills, and passion in tech.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 dark:border-gray-700 mb-6 sm:mb-8" />

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/prib.jpg"
          alt="Profile of Satria Agysta"
          loading="lazy"
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-lg border-2 border-gray-300 dark:border-gray-900 object-cover"
        />
         {/* Bio Text */}
         <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 flex flex-col gap-3 sm:gap-4">
          <p className="leading-relaxed">
            I&apos;m Satria Agysta, a Software Engineering graduate from SMK Wikrama Bogor with a strong interest in front-end development and UI/UX design.
          </p>
          <p className="leading-relaxed">
            I develop responsive web applications using <span className="font-medium text-gray-900 dark:text-white">Next.js</span>, <span className="font-medium text-gray-900 dark:text-white">React</span>, and <span className="font-medium text-gray-900 dark:text-white">Tailwind CSS</span>, and have hands-on experience integrating RESTful APIs in agile workflows.
          </p>
          <p className="leading-relaxed">
            I&apos;m also passionate about design — from crafting wireframes in <span className="font-medium text-gray-900 dark:text-white">Figma</span> to exploring digital art and character animation using <span className="font-medium text-gray-900 dark:text-white">Clip Studio Paint</span>.
          </p>
          <p className="leading-relaxed">
            Currently open to full-time or freelance opportunities — feel free to connect and collaborate!
          </p>
        </div>
      </div>
    </header>
  );
}
