import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles.css'; // Add necessary styles here

const CustomCursor = () => {
  const [isRotating, setIsRotating] = useState(false);

  // Update cursor position based on mouse movement
  const handleMouseMove = (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    document.documentElement.style.setProperty('--cursor-x', `${e.pageX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.pageY}px`);
  };

  // Handle hover states for rotating cursor
  const handleMouseEnter = () => setIsRotating(true);
  const handleMouseLeave = () => setIsRotating(false);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="wrapper">
     
      <motion.div
        id="cursor"
        className={isRotating ? 'rotating' : ''}
        animate={{
          x: 'calc(var(--cursor-x) - 50%)',
          y: 'calc(var(--cursor-y) - 50%)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </div>
  );
};

export default CustomCursor;
