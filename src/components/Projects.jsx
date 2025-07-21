import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sample Project Data (Keep this the same) ---
const projectsData = [
  {
    id: 'p1',
    title: 'Metro Mart',
    description: 'Revolutionary AI platform for complex data analysis with predictive modeling and natural language processing capabilities.',
    image: '/images/mart.png',
    full_description: 'Metro Mart: A MEAN Stack e-commerce platform developed as a 3rd-semester project, featuring a fully functional administrative portal for comprehensive store management.',
    details_link: 'https://metro-mart-jl42.vercel.app/'
  },
  {
    id: 'p2',
    title: 'Air University',
    description: 'This project involved developing a responsive website for Air University using HTML and Bootstrap. The aim was to create an accessible and visually appealing online platform for students, faculty, and visitors. It features a clean structure, intuitive navigation, and a modern aesthetic, demonstrating proficiency in front-end development and delivering a robust digital gateway for the university.',
    image: '/images/air.png',
    full_description: 'This project involved developing a responsive website for Air University using HTML and Bootstrap. The aim was to create an accessible and visually appealing online platform for students, faculty, and visitors. It features a clean structure, intuitive navigation, and a modern aesthetic, demonstrating proficiency in front-end development and delivering a robust digital gateway for the university.',
    details_link: 'https://mid-lab-three.vercel.app/'
  },
  {
    id: 'p3',
    title: 'Ethnic Wear',
    description: 'An advanced neural network visualization and diagnostic tool for understanding complex AI models.',
    image: '/images/ethnic.png',
    full_description: 'This project features an immersive ethnic wear website, meticulously crafted with Framer, dedicated to showcasing Pakistanis rich cultural dresses and clothing. The platform emphasizes a visually stunning and interactive user experience, bringing traditional designs to life with a modern aesthetic. It serves as a vibrant digital storefront, celebrating authentic Pakistani ethnic fashion and connecting it with a global audience..',
    details_link: 'https://ethnicwear.framer.website/'
  },
  {
    id: 'p4',
    title: 'NFTs Chrono-Forge',
    description: 'A time-travel enabled enterprise resource planning system for future-proof business operations.',
    image: '/images/nfts.png',
    full_description: 'This project introduces "NFTs Chrono-Forge," a cutting-edge website meticulously developed with Framer, designed to showcase and facilitate access to the most exclusive and top-tier NFTs of 2024. The platform offers a visually captivating and highly interactive experience, providing a curated gateway for collectors and enthusiasts to explore premium digital assets. It stands as a sophisticated online destination, blending innovative design with the dynamic world of high-value non-fungible tokens.',
    details_link: 'https://higher-tour-774262.framer.app/'
  },
  {
    id: 'p5',
    title: 'Kicks Land',
    description: 'A secure, quantum-encrypted communication platform for ultra-private messaging and data exchange.',
    image: '/images/kick.png',
    full_description: 'This project details "Kicks Land," a premium website designed to showcase a curated collection of Nike shoes with a focus on high-end front-end design. The platform delivers an exceptionally polished and visually engaging user experience, highlighting the aesthetics and exclusivity of each footwear model. It serves as a sophisticated digital storefront, blending cutting-edge design principles with the allure of top-tier athletic wear.',
    details_link: 'https://kicksland.framer.website/'
  },
];

// --- Updated: Motivating Words, Font Sizes, and NEON COLORS ---
const motivatingWords = [
  "Innovate", "Create", "Inspire", "Dream", "Build", "Imagine",
  "Lead", "Evolve", "Transform", "Pioneer", "Achieve", "Impact",
  "Future", "Vision", "Curiosity", "Bold", "Spark", "Unleash",
  "Progress", "Empower", "Connect", "Explore", "Design", "Solve",
  "Synergy", "Quantum", "Hyper", "Meta", "Neural", "Nexus", "Matrix",
  "Optimize", "Streamline", "Disrupt", "Pulsar", "Gravity", "Flux"
];

const fontSizeClasses = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"];

// Define various neon colors for the glow effect
const neonGlowColors = [
  '#00FFFF', // Cyan
  '#FF00FF', // Magenta
  '#00FF00', // Lime Green
  '#FFFF00', // Yellow
  '#FF1493', // Deep Pink
  '#00BFFF', // Deep Sky Blue
  '#8A2BE2', // Blue Violet
];

// Helper component for each motivating word
const MotivatingWord = ({ word, top, left, delay, sizeClass, glowColor }) => {
  // Random initial rotation for a more scattered look
  const initialRotateZ = Math.random() * 20 - 10; // -10 to 10 degrees

  return (
    <motion.div
      // Added gradient background and text-transparent for the initial state
      // The background gradient will be clipped to the text, making the text itself gradient.
      // On hover, the `color` property will override `text-transparent` to show a solid neon color.
      className={`absolute ${sizeClass} font-mono bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-20 cursor-default select-none whitespace-nowrap`}
      style={{ top: `${top}%`, left: `${left}%` }}
      initial={{ opacity: 0, rotateZ: initialRotateZ }}
      // Continuous subtle floating animation + faster fade-in
      animate={{
        opacity: 0.2, // Base opacity for the gradient text
        y: ["0%", "5%", "0%"], // Gentle vertical float
        x: ["0%", "3%", "0%"], // Gentle horizontal drift
        rotateZ: initialRotateZ, // Keep initial rotation
      }}
      transition={{
        opacity: { duration: 0.8, delay: delay, ease: "easeOut" }, // FASTER opacity transition
        y: { repeat: Infinity, duration: 8 + Math.random() * 8, ease: "easeInOut" }, // Slower, varied float speed
        x: { repeat: Infinity, duration: 10 + Math.random() * 10, ease: "easeInOut" }, // Slower, varied drift speed
      }}
      whileHover={{
        opacity: 1,
        scale: 1.25, // Larger scale on hover for more impact
        color: glowColor, // Use the dynamically passed glow color (overrides text-transparent)
        textShadow: `0 0 8px ${glowColor}, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}, 0 0 80px ${glowColor}, 0 0 100px ${glowColor}`, // Stronger glow
        transition: { duration: 0.1, ease: 'easeOut' }, // Quick transition for hover
      }}
    >
      {word}
    </motion.div>
  );
};
// --- End New Components ---


export default function Projects() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [isStackHovered, setIsStackHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const activeProject = projectsData.find(p => p.id === activeCardId);

  const handleCardClick = (id) => {
    setActiveCardId(prevId => (prevId === id ? null : id));
  };

  const handleCloseActiveCard = () => {
    setActiveCardId(null);
  };

  useEffect(() => {
    if (activeCardId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeCardId]);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  const getResponsiveStackValues = useCallback(() => {
    let stackYOffset = 10;
    let stackRotation = 1.5;
    let stackXSpread = 20;
    let hoverXSpread = 50;
    let hoverRotation = 4;
    let sidePushDistance = 300;
    let sidePushDistancePerCard = 30;

    if (screenWidth < 640) { // sm breakpoint
      stackYOffset = 8;
      stackRotation = 1;
      stackXSpread = 15;
      hoverXSpread = 40;
      hoverRotation = 3;
      sidePushDistance = 250;
      sidePushDistancePerCard = 20;
    } else if (screenWidth < 768) { // md breakpoint
      stackYOffset = 10;
      stackRotation = 1.5;
      stackXSpread = 20;
      hoverXSpread = 50;
      hoverRotation = 4;
      sidePushDistance = 300;
      sidePushDistancePerCard = 30;
    } else if (screenWidth < 1024) { // lg breakpoint
      stackYOffset = 12;
      stackRotation = 2;
      stackXSpread = 25;
      hoverXSpread = 60;
      hoverRotation = 5;
      sidePushDistance = 350;
      sidePushDistancePerCard = 40;
    }
    return {
      stackYOffset, stackRotation, stackXSpread,
      hoverXSpread, hoverRotation, sidePushDistance, sidePushDistancePerCard
    };
  }, [screenWidth]);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0e0e10] text-white py-20 flex flex-col items-center justify-start px-4 overflow-hidden"
    >
      {/* --- Animated Background Glows (Z-index 0) --- */}
      <motion.div
        className="absolute top-1/4 left-[-100px] w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-15 z-0"
        animate={{
          scale: [1, 1.05, 1],
          x: [-100, -80, -100],
          y: ['25%', '28%', '25%']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-15 z-0"
        animate={{
          scale: [1, 1.05, 1],
          x: [-100, -120, -100],
          y: ['-25%', '-22%', '-25%']
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* --- Background Text Words Container (Z-index 10) --- */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Render 25 words for a denser background */}
        {Array.from({ length: 25 }).map((_, i) => {
          const word = motivatingWords[Math.floor(Math.random() * motivatingWords.length)];
          const top = Math.random() * 90; // 0% to 90%
          const left = Math.random() * 90; // 0% to 90%
          const delay = Math.random() * 0.8; // FASTER: Random delay for scattered fade-in up to 0.8 seconds
          const sizeClass = fontSizeClasses[Math.floor(Math.random() * fontSizeClasses.length)];
          const glowColor = neonGlowColors[Math.floor(Math.random() * neonGlowColors.length)]; // Random glow color

          return (
            <MotivatingWord
              key={`${word}-${i}-${top}-${left}`}
              word={word}
              top={top}
              left={left}
              delay={delay}
              sizeClass={sizeClass}
              glowColor={glowColor}
            />
          );
        })}
      </div>

      {/* Section Title (Z-index 20) */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-16 text-center leading-tight z-20"
      >
        My Creations
      </motion.h2>

      {/* Main content container (Z-index 20) */}
      <div className="flex-grow flex items-start justify-center w-full z-20">
        {/* Stack of Cards Container */}
        <div
          className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] flex items-center justify-center"
          onMouseEnter={() => !activeCardId && setIsStackHovered(true)}
          onMouseLeave={() => !activeCardId && setIsStackHovered(false)}
          style={{ perspective: '1200px' }}
        >
          {projectsData.map((project, index) => {
            const isCurrentActive = activeCardId === project.id;
            const totalCards = projectsData.length;
            const initialZIndex = totalCards - index;

            const {
              stackYOffset, stackRotation, stackXSpread,
              hoverXSpread, hoverRotation, sidePushDistance, sidePushDistancePerCard
            } = getResponsiveStackValues();

            let cardAnimation = {};
            if (activeCardId !== null) {
              const activeIndex = projectsData.findIndex(p => p.id === activeCardId);
              const sideOffsetDirection = index < activeIndex ? -1 : 1;
              const distance = Math.abs(index - activeIndex);

              cardAnimation = {
                x: sideOffsetDirection * (sidePushDistance + distance * sidePushDistancePerCard),
                y: '-50%',
                z: -100,
                rotateX: 0,
                rotateY: 0,
                rotateZ: sideOffsetDirection * 10,
                scale: 0.6,
                opacity: 0,
                pointerEvents: 'none',
                top: '50%',
                left: '50%',
              };
            } else {
              cardAnimation = {
                top: '50%',
                left: '50%',
                x: isStackHovered
                  ? index * hoverXSpread - ((totalCards - 1) * (hoverXSpread / 2))
                  : index * stackXSpread - ((totalCards - 1) * (stackXSpread / 2)),
                y: `calc(-50% + ${Math.abs(index - Math.floor(totalCards / 2)) * stackYOffset}px)`,
                z: initialZIndex,
                rotateX: 0,
                rotateY: 0,
                rotateZ: isStackHovered
                  ? index * hoverRotation - ((totalCards - 1) * (hoverRotation / 2))
                  : index * stackRotation - ((totalCards - 1) * (stackRotation / 2)),
                scale: 1,
                opacity: 1,
                pointerEvents: 'auto',
              };
            }

            if (isCurrentActive) return null;

            return (
              <motion.div
                key={project.id}
                className={`absolute bg-white/5 backdrop-blur-sm rounded-xl px-4 py-4 border border-white/10 shadow-lg cursor-pointer flex flex-col items-center text-center overflow-hidden`}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                animate={cardAnimation}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleCardClick(project.id)}
              >
                <div className="flex flex-col items-center justify-start h-full w-full">
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-700 rounded-lg overflow-hidden mb-2 border border-cyan-500/30 flex items-center justify-center">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <p className="text-gray-400 text-sm">Image Placeholder</p>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mt-2 leading-tight">{project.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- Active Card Overlay (rendered outside the stack) --- */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Backdrop for active card view (fixed to viewport, z-40) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={handleCloseActiveCard}
            />

            {/* The active card itself (fixed to viewport, z-50) */}
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1.0,
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                z: 100,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed w-[280px] h-[380px]
                          sm:w-[360px] sm:h-[480px]
                          md:w-[440px] md:h-[580px]
                          lg:w-[500px] lg:h-[650px]
                          bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-lg
                          flex flex-col items-center justify-start text-center
                          overflow-hidden z-50`}
            >
              <div className="flex flex-col items-center justify-start h-full w-full">
                <div className="w-full max-w-[450px] h-48 sm:h-56 md:h-64 lg:h-72
                                bg-gray-700 rounded-lg overflow-hidden mb-6 border border-cyan-500/30 flex items-center justify-center">
                  {activeProject.image ? (
                    <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-gray-400 text-sm">Image Placeholder</p>
                  )}
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-cyan-400 mb-4 leading-tight">{activeProject.title}</h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-base sm:text-lg leading-relaxed flex-grow text-left max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] overflow-y-auto custom-scrollbar pr-2"
                >
                  {activeProject.full_description}
                </motion.p>

                {activeProject.details_link && (
                  <motion.a
                    href={activeProject.details_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
                  >
                    Learn More &rarr;
                  </motion.a>
                )}
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => { e.stopPropagation(); handleCloseActiveCard(); }}
                className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-red-700 transition"
              >
                &times;
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}