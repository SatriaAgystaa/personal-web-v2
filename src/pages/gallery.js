import React, { useState } from "react";
import Head from "next/head";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';
import { IoRocketOutline } from "react-icons/io5";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "/images/orc.jpg", title: "Orchadeer Logo Design" },
  { src: "/images/sync.png", title: "Sync DigTech Logo Design" },
  { src: "/images/flavouree.png", title: "Flavouree Logo Design" },
  { src: "/images/ball.png", title: "Boler Icon" },
  { src: "/images/final.png", title: "Banner Eid al-Fitr" },
  { src: "/images/banner2.png", title: "Banner Eid al-Fitr" },
  { src: "/images/banner3.png", title: "Banner Eid al-Fitr" },
  { src: "/images/bolerlogo.png", title: "Logo Boler" },
  { src: "/images/boler.png", title: "Crack Boler" },
  { src: "/images/buah.png", title: "Logo Fruit Choctail" },
  { src: "/images/anim1.gif", title: "Running Man Animation" },
  { src: "/images/anim2.gif", title: "Animation Man Looking Ahead" },
  { src: "/images/wa8.jpeg", title: "Banner Fruit Choctail" },
  { src: "/images/female.png", title: "Fierce Female Warrior with Axe" },
  { src: "/images/moma.png", title: "Adorable Girl Looking at a Cat" },
  { src: "/images/sagata.png", title: "Skater Boy Reading" },
  { src: "/images/wa3.jpeg", title: "Wikrama Assassin Student" },
  { src: "/images/wa7.jpeg", title: "Male and Female Characters" },
  { src: "/images/wa4.jpeg", title: "Male Sword Pose" },
  { src: "/images/art.png", title: "Male Depressed" },
  { src: "/images/wa5.jpeg", title: "Female Pose Perspective" },
  { src: "/images/wa2.jpeg", title: "Skate Male Perspective" },
  { src: "/images/wa6.jpeg", title: "Female Short Hair" },
  { src: "/images/wa9.jpeg", title: "Male Walk" },
];

export default function ArtGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex flex-col justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
       <Head>
        <title>Gallery | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-2 flex items-center justify-center gap-2">
          <FiImage className="w-6 h-6 text-black dark:text-white" />
          Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          A visual collection of moments, designs, and inspirations.
        </p>
      </div>

      <hr className="border-t border-gray-300 dark:border-gray-700 mb-10" />

      <Masonry
        breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
        className="flex gap-4"
        columnClassName="masonry-column space-y-4 w-full"
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-900 group"
            onClick={() => setIndex(i)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white">
              <h2 className="text-lg font-semibold">{photo.title}</h2>
            </div>
          </div>
        ))}
      </Masonry>

      <Lightbox 
        slides={photos.map((photo) => ({ src: photo.src }))} 
        open={index >= 0} 
        close={() => setIndex(-1)} 
        index={index} 
      />

      <section className="p-6 mt-4 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 dark:from-indigo-900 dark:via-indigo-700 dark:to-indigo-500 text-white text-center mb-8 w-full">
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
      
      <footer className="w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Satria Agysta. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}