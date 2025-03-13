import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
    { src: "/images/orc.jpg", title: "Logo Orchadeer", description: "A minimalist logo with a modern touch." },
    { src: "/images/sync.png", title: "Logo Sync Digital Technology", description: "A futuristic logo representing technology." },
    { src: "/images/ball.png", title: "Boler Icon", description: "A simple and modern Boler icon." },
    { src: "/images/final.png", title: "Banner Eid al-Fitr", description: "A festive Eid al-Fitr banner with an Islamic theme." },
    { src: "/images/bolerlogo.png", title: "Logo Boler", description: "A bold and elegant typographic logo." },
    { src: "/images/boler.png", title: "Crack Boler", description: "An artistic experiment with a cracked effect." },
    { src: "/images/buah.png", title: "Logo Fruit Choctail", description: "A fresh logo featuring vibrant fruit elements." },
    { src: "/images/wa8.jpeg", title: "Banner Fruit Choctail", description: "A bright promotional banner for Fruit Choctail." },
    { src: "/images/wa3.jpeg", title: "Wikrama Assassin Student", description: "An assassin character illustration from Wikrama." },
    { src: "/images/wa7.jpeg", title: "Male and Female Characters", description: "A character concept of a male and female duo." },
    { src: "/images/wa4.jpeg", title: "Male Sword Pose", description: "A dynamic battle-ready sword pose." },
    { src: "/images/art.png", title: "Male Depressed", description: "An emotional illustration reflecting sadness." },
    { src: "/images/wa5.jpeg", title: "Female Pose Perspective", description: "A perspective study of a female character." },
    { src: "/images/wa2.jpeg", title: "Skate Male Perspective", description: "A unique angle of a male character skating." },
    { src: "/images/wa6.jpeg", title: "Female Short Hair", description: "A stylish short-haired female character." },
    { src: "/images/wa9.jpeg", title: "Male Walk", description: "A motion study of a walking male character." },
];

export default function ArtGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="sm:w-full md:w-3/5 font-sans px-8 py-6 flex flex-col justify-center overflow-hidden mt-16 sm:mt-16 md:mt-0">
        <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
            Gallery
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">My digital art collection</p>

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
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-lg font-semibold">{photo.title}</h2>
        <p className="text-sm">{photo.description}</p>
      </div>
    </div>
  ))}
</Masonry>


      <Lightbox slides={photos.map((photo) => ({ src: photo.src }))} open={index >= 0} close={() => setIndex(-1)} index={index} />
    </div>
  );
}
