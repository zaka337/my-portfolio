import React, { useState, useEffect } from 'react';

export default function SideDotsNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
      {['hero', 'about', 'projects', 'contact'].map(sectionId => (
        <a
          key={sectionId}
          href={`#${sectionId}`}
          className={`w-3 h-3 rounded-full border border-gray-400 transition-all duration-300
            ${activeSection === sectionId ? 'bg-cyan-400 scale-150' : 'bg-transparent hover:bg-gray-600'}`}
          aria-label={`Go to ${sectionId} section`}
        />
      ))}
    </div>
  );
}
