"use client";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: FadeInProps) {
  const directionVariants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: 40 },
    right: { opacity: 0, x: -40 }
  };

  return (
    <motion.div
      initial={directionVariants[direction]}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.6, 0.01, 0.05, 0.95]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
