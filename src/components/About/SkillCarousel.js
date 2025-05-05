"use client";
import { useEffect, useRef } from "react";
import {
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaJs,
  FaDatabase, FaFigma
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMysql, SiDbeaver,
  SiRedux, SiPostgresql, SiPostman, SiGitlab
} from "react-icons/si";

export default function AutoScrollCarousel() {
  const topRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomRef = useRef(null);
  const bottomContentRef = useRef(null);

  const techStacks = [
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#8CC84B" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Git", icon: <FaGitAlt />, color: "#F34F29" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "DBeaver", icon: <SiDbeaver />, color: "#372A47" },
    { name: "Database", icon: <FaDatabase />, color: "#F0DB4F" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "GitLab", icon: <SiGitlab />, color: "#FCA121" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  ];

  const setupAutoScroll = (containerRef, contentRef, direction = "right") => {
    const scrollContainer = containerRef.current;
    const content = contentRef.current;
    
    // Create two copies of the content for seamless looping
    const items = Array.from(content.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      content.appendChild(clone);
    });

    let animationFrameId;
    let scrollPos = 0;
    const scrollSpeed = 1;
    let lastTimestamp = 0;

    const smoothScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate distance based on time for smooth animation
      const distance = scrollSpeed * (deltaTime / 16); // Normalize to 60fps

      if (direction === "right") {
        scrollPos += distance;
        
        // When we reach the halfway point, reset to beginning without visual jump
        if (scrollPos >= content.scrollWidth / 2) {
          scrollPos = 0;
          scrollContainer.scrollLeft = 0;
        }
      } else {
        scrollPos -= distance;
        
        // When we reach the beginning, reset to halfway without visual jump
        if (scrollPos <= 0) {
          scrollPos = content.scrollWidth / 2;
          scrollContainer.scrollLeft = content.scrollWidth / 2;
        }
      }

      scrollContainer.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    // Initialize
    scrollContainer.scrollLeft = 0;
    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  };

  useEffect(() => {
    const cancelTop = setupAutoScroll(topRef, topContentRef, "right");
    const cancelBottom = setupAutoScroll(bottomRef, bottomContentRef, "left");

    return () => {
      cancelTop();
      cancelBottom();
    };
  }, []);

  const renderItems = (prefix) =>
    techStacks.map((tech, index) => (
      <div
        key={`${prefix}-${index}`}
        className="flex items-center justify-center w-[140px] h-[50px] bg-white dark:bg-[#070707] border border-gray-200 dark:border-indigo-900 rounded-full shadow-sm hover:shadow-md transition-all mx-1 flex-shrink-0"
      >
        <span className="mr-2 text-xl" style={{ color: tech.color }}>
          {tech.icon}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-white">
          {tech.name}
        </span>
      </div>
    ));

  return (
    <section className="mb-12 w-full overflow-hidden px-4 sm:px-0">
      <div className="mb-6">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-1">
          Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Technologies I&apos;ve worked with
        </p>
      </div>

      {/* Top Row */}
      <div 
        ref={topRef} 
        className="flex py-4 overflow-x-hidden whitespace-nowrap"
      >
        <div ref={topContentRef} className="flex gap-4">
          {renderItems("top")}
        </div>
      </div>

      {/* Bottom Row */}
      <div 
        ref={bottomRef} 
        className="flex py-4 overflow-x-hidden whitespace-nowrap"
      >
        <div ref={bottomContentRef} className="flex gap-4">
          {renderItems("bottom")}
        </div>
      </div>
    </section>
  );
}