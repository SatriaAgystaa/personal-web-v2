import React, { useState } from "react";
import Head from "next/head";
import CTA from "../components/Gallery/CallToAction";
import Footer from "../components/Gallery/Footer";
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
    <div className="container mx-auto px-6 py-8 max-w-5xl font-sans mt-16 sm:mt-16 md:mt-0">
      <Head>
        <title>Gallery | Satria Agysta</title>
        <meta name="description" content="Certificates and achievements earned by Satria Agysta" />
      </Head>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-8 px-4 sm:px-0"
      >
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-3 sm:mb-4">
          <FiImage className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
          My Gallery
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
          A visual collection of moments, designs, and inspirations.
        </p>
        <hr className="border-t border-gray-200 dark:border-gray-700" />
      </motion.div>

      <Masonry
        breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
        className="flex gap-4"
        columnClassName="masonry-column space-y-4 w-full px-4 sm:px-0 mb-12"
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-900 group hover:shadow-xl hover:shadow-gray-500 dark:hover:shadow-gray-800 transition-shadow duration-300"
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white">
              <h2 className="text-lg font-semibold">{photo.title}</h2>
            </div>
          </motion.div>
        ))}
      </Masonry>

      <Lightbox 
        slides={photos.map((photo) => ({ src: photo.src }))} 
        open={index >= 0} 
        close={() => setIndex(-1)} 
        index={index} 
      />

      <CTA />

      <Footer />
      
    </div>
  );
}