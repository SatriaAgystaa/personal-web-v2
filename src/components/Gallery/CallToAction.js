"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoRocketOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useRef, useState } from 'react';

const StarCTA = () => {
  const ctaRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const [star, setStar] = useState({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    trail: Array(40).fill().map(() => ({ x: 0, y: 0 })),
    opacity: 0,
    hue: 0,
    sparkles: Array(12).fill().map(() => ({
      x: 0, y: 0, size: 1 + Math.random() * 2, 
      angle: Math.random() * Math.PI * 2,
      distance: 10 + Math.random() * 15,
      speed: 0.02 + Math.random() * 0.05
    }))
  });

  const FOLLOW_SPEED = 0.12;
  const TRAIL_DECAY = 0.88;
  const COLOR_SPEED = 2;

  useEffect(() => {
    if (ctaRef.current) {
      const rect = ctaRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      setStar(prev => ({
        ...prev,
        x: centerX,
        y: centerY,
        targetX: centerX,
        targetY: centerY,
        trail: prev.trail.map(() => ({ x: centerX, y: centerY }))
      }));
    }

    const animate = (timestamp) => {
      setStar(prevStar => {
        const dx = prevStar.targetX - prevStar.x;
        const dy = prevStar.targetY - prevStar.y;
        
        const newX = prevStar.x + dx * FOLLOW_SPEED;
        const newY = prevStar.y + dy * FOLLOW_SPEED;
        
        const newTrail = [{ x: newX, y: newY }, ...prevStar.trail.slice(0, -1)];
        const newHue = (prevStar.hue + COLOR_SPEED) % 360;
        
        const newSparkles = prevStar.sparkles.map(sparkle => {
          const newAngle = sparkle.angle + sparkle.speed;
          return {
            ...sparkle,
            angle: newAngle,
            x: newX + Math.cos(newAngle) * sparkle.distance,
            y: newY + Math.sin(newAngle) * sparkle.distance
          };
        });
        
        return {
          ...prevStar,
          x: newX,
          y: newY,
          trail: newTrail,
          hue: newHue,
          sparkles: newSparkles,
          opacity: isHovering ? 1 : Math.max(0, prevStar.opacity - 0.03)
        };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);
  
  const handleMouseMove = (e) => {
    if (!ctaRef.current) return;
    
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });
    setStar(prev => ({ ...prev, targetX: x, targetY: y }));
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    setStar(prev => ({ ...prev, opacity: 1 }));
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const generateMeteorTrail = (trail) => {
    if (trail.length < 3) return '';
    
    let path = `M${trail[0].x},${trail[0].y}`;
    
    for (let i = 1; i < trail.length; i++) {
      const prev = trail[i-1];
      const curr = trail[i];
      const next = trail[Math.min(i+1, trail.length-1)];
      
      const cp1x = prev.x + (curr.x - prev.x) * 0.8;
      const cp1y = prev.y + (curr.y - prev.y) * 0.8;
      const cp2x = curr.x - (next.x - curr.x) * 0.2;
      const cp2y = curr.y - (next.y - curr.y) * 0.2;
      
      path += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${curr.x},${curr.y}`;
    }
    
    return path;
  };

  return (
    <motion.section 
      className="mb-12 sm:mb-16 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        ref={ctaRef}
        className="relative rounded-xl p-6 sm:p-8 text-center bg-white dark:bg-[#0a0a0a] bg-opacity-70 dark:bg-opacity-70 border border-gray-200 dark:border-gray-900 overflow-hidden shadow-sm dark:shadow-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={`hsl(${star.hue}, 90%, 60%)`} stopOpacity="0.8" />
              <stop offset="100%" stopColor={`hsl(${star.hue}, 90%, 60%)`} stopOpacity="0" />
            </linearGradient>
            
            <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor={`hsl(${star.hue}, 90%, 70%)`} />
              <stop offset="100%" stopColor={`hsl(${star.hue}, 90%, 60%)`} stopOpacity="0" />
            </radialGradient>
          </defs>
          
          <g style={{ opacity: star.opacity }}>
            <path
              d={generateMeteorTrail(star.trail)}
              stroke={`url(#trailGradient)`}
              strokeWidth={4}
              fill="none"
              strokeLinecap="round"
              style={{ filter: 'url(#glow)' }}
            />
            
            {star.sparkles.map((sparkle, i) => (
              <circle
                key={`sparkle-${i}`}
                cx={sparkle.x}
                cy={sparkle.y}
                r={sparkle.size}
                fill={`hsl(${(star.hue + i * 30) % 360}, 90%, 70%)`}
                style={{ filter: 'url(#glow)' }}
              />
            ))}
            
            <g filter="url(#glow)">
              <path
                d={`M${star.x},${star.y-12} L${star.x+4},${star.y-4} L${star.x+12},${star.y} L${star.x+4},${star.y+4} 
                   L${star.x},${star.y+12} L${star.x-4},${star.y+4} L${star.x-12},${star.y} L${star.x-4},${star.y-4} Z`}
                fill={`hsl(${star.hue}, 90%, 70%)`}
                stroke={`hsl(${star.hue}, 90%, 85%)`}
                strokeWidth={1.5}
              />
              
              <circle
                cx={star.x}
                cy={star.y}
                r={16}
                fill="url(#starGradient)"
                opacity="0.8"
              />
            </g>
          </g>
        </svg>
        
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Ready to add value to your team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl mx-auto">
            As a motivated fresh graduate with hands-on experience in modern web development, 
            I&apos;m eager to contribute my skills and grow with your company.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="https://wa.me/6285710386045" legacyBehavior>
              <motion.a
                className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:to-indigo-800 text-white font-medium flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <IoRocketOutline className="text-lg" /> 
                Let&apos;s Talk
              </motion.a>
            </Link>
            <motion.a
              href="/images/cv/CV-ATS-SatriaAgysta.pdf" 
              download="CV-Satria-Agysta.pdf"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg border border-[#0a0a0a] dark:border-gray-600 text-[#0a0a0a] dark:text-white hover:bg-gray-100/50 dark:hover:bg-[#070707]/50 font-medium flex items-center gap-2 text-sm sm:text-base"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FiExternalLink className="text-lg" /> 
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default StarCTA;