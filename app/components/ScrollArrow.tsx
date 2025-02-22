// components/ScrollArrow.tsx
"use client";

import { useState, useEffect } from 'react';
import { CaretDown } from "@phosphor-icons/react";

const ScrollArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed right-8 bottom-8 z-50 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      onClick={handleClick}
    >
      <div className="bg-primary rounded-full p-3 shadow-lg w-16 h-16 flex items-center justify-center hover:bg-opacity-90 transition-colors">
        <CaretDown size={32} weight="bold" className="text-white animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollArrow;
