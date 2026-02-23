'use client';

import { useEffect, useRef } from 'react';

export default function CloudsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            // Calculate mouse position relative to center of screen (-1 to 1)
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            
            // Move background slightly opposite to mouse movement for depth effect
            const x = mouseX * -20; // Max 20px move horizontally
            const y = mouseY * -20; // Max 20px move vertically
            
            containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.1)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
    >
      <div 
        ref={containerRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('/mountain.gif')`,
          // Ensure the image covers the area nicely
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)', // Initial scale to allow movement
        }}
      />
      
      {/* Gradient overlay for text readability over the image */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"
      />
    </div>
  );
}
