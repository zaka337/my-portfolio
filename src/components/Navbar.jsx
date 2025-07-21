// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10
        ${scrolled ? 'bg-[#0e0e10]/90 backdrop-blur-sm py-3' : 'py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-widest text-white drop-shadow-lg shadow-cyan-400/50">
          <span className="text-cyan-400">ZAKA</span><span className="text-purple-500">.DEV</span>
        </a>
        <ul className="flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="relative text-gray-300 text-lg group overflow-hidden px-2 py-1 transition-colors duration-300
                hover:text-white hover:shadow-cyan-400/50 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
              >
                {item}
                {/* Pseudo-element for border glow on hover */}
                <span className="absolute inset-0 border border-transparent group-hover:border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}