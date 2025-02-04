import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const links = [
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const socialIcons = [
    { icon: FaLinkedin, link: "#" },
    { icon: FaInstagram, link: "#" },
    { icon: FaGithub, link: "#" },
  ];

  return (
    <footer className="text-center text-sm text-gray-600 w-full p-4">
      <div className="flex justify-center gap-6 mb-4">
        {links.map(({ path, label }, index) => (
          <Link key={index} href={path} className="hover:underline">
            {label}
          </Link>
        ))}
      </div>
      <p>Let's Connect</p>
      <div className="flex justify-center gap-4 mt-2">
        {socialIcons.map(({ icon: Icon, link }, index) => (
          <a key={index} href={link} className="text-xl text-gray-700 hover:text-gray-900" aria-label="Social Link">
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
