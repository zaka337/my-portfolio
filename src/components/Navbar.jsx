// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Assuming you might use framer-motion for animations later, keeping it.

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile menu

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10
        ${scrolled ? 'bg-[#0e0e10]/90 backdrop-blur-sm py-3' : 'py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold tracking-widest text-white drop-shadow-lg shadow-cyan-400/50">
          <span className="text-cyan-400">ZAKA</span><span className="text-purple-500">.DEV</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8"> {/* Hidden on small screens, flex on medium and up */}
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

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center"> {/* Visible only on small screens */}
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                // Close Icon (X)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                // Hamburger Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#0e0e10]/90 border-t border-white/10`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item} onClick={() => setMobileMenuOpen(false)}> {/* Close menu on item click */}
              <a href={`#${item.toLowerCase()}`} className="text-gray-300 text-lg hover:text-white transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}