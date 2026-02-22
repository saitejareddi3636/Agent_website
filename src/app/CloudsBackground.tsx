'use client';

import { useEffect, useState } from 'react';

export default function CloudsBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect: background moves slower than scroll (0.5x speed)
  const parallaxOffset = scrollY * 0.5;

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Same mountain image - positioned to show sky/clouds throughout */}
      <div 
        className="absolute inset-0 w-full h-[200vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundPosition: 'center top',
        }}
      />
      
      {/* Soft dark overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-gray-900/40"
      />
    </div>
  );
}
