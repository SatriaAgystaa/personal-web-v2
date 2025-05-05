import React, { useState, useEffect } from 'react';
import Head from "next/head";
import HeroSection from '../components/Index/HeroSection';
// import SocialLinks from '../components/Index/SocialLinks';
import HighlightBar from '../components/Index/HighlightBar';
import SoftSkills from '../components/Index/SoftSkills';
import FeaturesProjects from '../components/Index/FeaturesProjects';
import WhatIOffer from '../components/Index/WhatIOffer';
import CTA from '../components/Index/CTA';
import Footer from '../components/Index/Footer';

const names = ["Satria Agysta", "Frontend Developer", "UI/UX Designer"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingComplete(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % names.length);
        setTypingComplete(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container mx-auto px-6 py-8 max-w-5xl">
      <Head>
        <title>Satria Agysta | Frontend Developer & Designer</title>
        <meta
          name="description"
          content="Portfolio of Satria Agysta - Fresh Graduate Frontend Developer from SMK Wikrama Bogor specializing in React, Next.js, and modern web design"
        />
        <meta
          name="keywords"
          content="frontend developer, UI designer, React developer, Next.js, portfolio, fresh graduate"
        />
      </Head>

      <HeroSection index={index} typingComplete={typingComplete} names={names} />
      {/* <SocialLinks /> */}
      <HighlightBar />
      <SoftSkills />
      <FeaturesProjects />
      <WhatIOffer />
      <CTA />
      <Footer />
    </main>
  );
}