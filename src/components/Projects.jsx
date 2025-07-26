"use client"
import React, { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

// Sample Project Data
const projectsData = [
  {
    id: "p1",
    title: "Metro Mart",
    description:
      "Revolutionary AI platform for complex data analysis with predictive modeling and natural language processing capabilities.",
    image: "/images/mart.png",
    full_description:
      "Metro Mart: A MEAN Stack e-commerce platform developed as a 3rd-semester project, featuring a fully functional administrative portal for comprehensive store management.",
    details_link: "https://metro-mart-jl42.vercel.app/",
    tags: ["MEAN Stack", "E-commerce", "Admin Portal"],
  },
  {
    id: "p2",
    title: "Air University",
    description: "This project involved developing a responsive website for Air University using HTML and Bootstrap.",
    image: "/images/air.png",
    full_description:
      "This project involved developing a responsive website for Air University using HTML and Bootstrap. The aim was to create an accessible and visually appealing online platform for students, faculty, and visitors. It features a clean structure, intuitive navigation, and a modern aesthetic, demonstrating proficiency in front-end development and delivering a robust digital gateway for the university.",
    details_link: "https://mid-lab-three.vercel.app/",
    tags: ["HTML", "Bootstrap", "Responsive"],
  },
  {
    id: "p3",
    title: "Ethnic Wear",
    description: "An advanced neural network visualization and diagnostic tool for understanding complex AI models.",
    image: "/images/ethnic.png",
    full_description:
      "This project features an immersive ethnic wear website, meticulously crafted with Framer, dedicated to showcasing Pakistanis rich cultural dresses and clothing. The platform emphasizes a visually stunning and interactive user experience, bringing traditional designs to life with a modern aesthetic. It serves as a vibrant digital storefront, celebrating authentic Pakistani ethnic fashion and connecting it with a global audience.",
    details_link: "https://ethnicwear.framer.website/",
    tags: ["Framer", "E-commerce", "Cultural"],
  },
  {
    id: "p4",
    title: "NFTs Chrono-Forge",
    description: "A time-travel enabled enterprise resource planning system for future-proof business operations.",
    image: "/images/nfts.png",
    full_description:
      'This project introduces "NFTs Chrono-Forge," a cutting-edge website meticulously developed with Framer, designed to showcase and facilitate access to the most exclusive and top-tier NFTs of 2024. The platform offers a visually captivating and highly interactive experience, providing a curated gateway for collectors and enthusiasts to explore premium digital assets. It stands as a sophisticated online destination, blending innovative design with the dynamic world of high-value non-fungible tokens.',
    details_link: "https://higher-tour-774262.framer.app/",
    tags: ["NFTs", "Framer", "Blockchain"],
  },
  {
    id: "p5",
    title: "Kicks Land",
    description: "A secure, quantum-encrypted communication platform for ultra-private messaging and data exchange.",
    image: "/images/kick.png",
    full_description:
      'This project details "Kicks Land," a premium website designed to showcase a curated collection of Nike shoes with a focus on high-end front-end design. The platform delivers an exceptionally polished and visually engaging user experience, highlighting the aesthetics and exclusivity of each footwear model. It serves as a sophisticated digital storefront, blending cutting-edge design principles with the allure of top-tier athletic wear.',
    details_link: "https://kicksland.framer.website/",
    tags: ["E-commerce", "Framer", "Fashion"],
  },
]

// Motivating words for background
const motivatingWords = [
  "Innovate",
  "Create",
  "Inspire",
  "Dream",
  "Build",
  "Imagine",
  "Lead",
  "Evolve",
  "Transform",
  "Pioneer",
  "Achieve",
  "Impact",
  "Future",
  "Vision",
  "Curiosity",
  "Bold",
  "Spark",
  "Unleash",
  "Progress",
  "Empower",
  "Connect",
  "Explore",
  "Design",
  "Solve",
  "Synergy",
  "Quantum",
  "Hyper",
  "Meta",
  "Neural",
  "Nexus",
  "Matrix",
  "Optimize",
  "Streamline",
  "Disrupt",
  "Pulsar",
  "Gravity",
  "Flux",
]

const fontSizeClasses = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"]
const neonGlowColors = ["#00FFFF", "#FF00FF", "#00FF00", "#FFFF00", "#FF1493", "#00BFFF", "#8A2BE2"]

// Optimized Background Word Component
const MotivatingWord = React.memo(({ word, top, left, delay, sizeClass, glowColor, reducedMotion }) => {
  const initialRotateZ = useMemo(() => Math.random() * 20 - 10, [])

  return (
    <motion.div
      className={`absolute ${sizeClass} font-mono bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-20 cursor-default select-none whitespace-nowrap pointer-events-none`}
      style={{ top: `${top}%`, left: `${left}%` }}
      initial={{ opacity: 0, rotateZ: initialRotateZ }}
      animate={
        reducedMotion
          ? {
              opacity: 0.2,
              rotateZ: initialRotateZ,
            }
          : {
              opacity: 0.2,
              y: ["0%", "5%", "0%"],
              x: ["0%", "3%", "0%"],
              rotateZ: initialRotateZ,
            }
      }
      transition={
        reducedMotion
          ? {
              opacity: { duration: 0.8, delay: delay, ease: "easeOut" },
            }
          : {
              opacity: { duration: 0.8, delay: delay, ease: "easeOut" },
              y: { repeat: Number.POSITIVE_INFINITY, duration: 8 + Math.random() * 8, ease: "easeInOut" },
              x: { repeat: Number.POSITIVE_INFINITY, duration: 10 + Math.random() * 10, ease: "easeInOut" },
            }
      }
      whileHover={
        reducedMotion
          ? {}
          : {
              opacity: 1,
              scale: 1.25,
              color: glowColor,
              textShadow: `0 0 8px ${glowColor}, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
              transition: { duration: 0.1, ease: "easeOut" },
            }
      }
    >
      {word}
    </motion.div>
  )
})

MotivatingWord.displayName = "MotivatingWord"

export default function Projects() {
  const [activeCardId, setActiveCardId] = useState(null)
  const [isStackHovered, setIsStackHovered] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const reducedMotion = useReducedMotion()
  const activeProject = projectsData.find((p) => p.id === activeCardId)

  // Optimized screen width detection
  useEffect(() => {
    const updateScreenWidth = () => {
      const width = window.innerWidth
      setScreenWidth(width)
      setIsMobile(width < 768)
    }

    updateScreenWidth()
    window.addEventListener("resize", updateScreenWidth)
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  // Handle body scroll lock
  useEffect(() => {
    if (activeCardId !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [activeCardId])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe || isRightSwipe) {
      console.log(isLeftSwipe ? "Swiped left" : "Swiped right")
    }
  }

  const handleCardClick = useCallback((id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id))
  }, [])

  const handleCloseActiveCard = useCallback(() => {
    setActiveCardId(null)
  }, [])

  // Responsive stack values with better mobile optimization
  const getResponsiveStackValues = useCallback(() => {
    if (screenWidth < 480) {
      return {
        stackYOffset: 6,
        stackRotation: 0.5,
        stackXSpread: 8,
        hoverXSpread: 25,
        hoverRotation: 2,
        sidePushDistance: 200,
        sidePushDistancePerCard: 15,
        cardWidth: "260px",
        cardHeight: "340px",
      }
    } else if (screenWidth < 640) {
      return {
        stackYOffset: 8,
        stackRotation: 1,
        stackXSpread: 12,
        hoverXSpread: 35,
        hoverRotation: 2.5,
        sidePushDistance: 220,
        sidePushDistancePerCard: 18,
        cardWidth: "280px",
        cardHeight: "360px",
      }
    } else if (screenWidth < 768) {
      return {
        stackYOffset: 10,
        stackRotation: 1.5,
        stackXSpread: 15,
        hoverXSpread: 40,
        hoverRotation: 3,
        sidePushDistance: 250,
        sidePushDistancePerCard: 22,
        cardWidth: "300px",
        cardHeight: "380px",
      }
    } else if (screenWidth < 1024) {
      return {
        stackYOffset: 12,
        stackRotation: 2,
        stackXSpread: 20,
        hoverXSpread: 50,
        hoverRotation: 4,
        sidePushDistance: 300,
        sidePushDistancePerCard: 30,
        cardWidth: "320px",
        cardHeight: "420px",
      }
    } else {
      return {
        stackYOffset: 15,
        stackRotation: 2.5,
        stackXSpread: 25,
        hoverXSpread: 60,
        hoverRotation: 5,
        sidePushDistance: 350,
        sidePushDistancePerCard: 40,
        cardWidth: "380px",
        cardHeight: "480px",
      }
    }
  }, [screenWidth])

  // Memoized background words for performance
  const backgroundWords = useMemo(() => {
    const wordCount = isMobile ? 15 : 25
    return Array.from({ length: wordCount }).map((_, i) => {
      const word = motivatingWords[Math.floor(Math.random() * motivatingWords.length)]
      const top = Math.random() * 90
      const left = Math.random() * 90
      const delay = Math.random() * 0.8
      const sizeClass = fontSizeClasses[Math.floor(Math.random() * fontSizeClasses.length)]
      const glowColor = neonGlowColors[Math.floor(Math.random() * neonGlowColors.length)]

      return {
        key: `${word}-${i}-${top}-${left}`,
        word,
        top,
        left,
        delay,
        sizeClass,
        glowColor,
      }
    })
  }, [isMobile])

  const stackValues = getResponsiveStackValues()

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0e0e10] text-white py-12 sm:py-16 md:py-20 flex flex-col items-center justify-start px-2 sm:px-4 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "manipulation" }}
    >
      {/* Animated Background Glows */}
      <motion.div
        className="absolute top-1/4 left-[-100px] w-72 h-72 sm:w-96 sm:h-96 bg-purple-600 rounded-full blur-[150px] opacity-15 z-0"
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                x: [-100, -80, -100],
                y: ["25%", "28%", "25%"],
              }
        }
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[-100px] w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-[150px] opacity-15 z-0"
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                x: [-100, -120, -100],
                y: ["-25%", "-22%", "-25%"],
              }
        }
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      {/* Background Text Words */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {backgroundWords.map(({ key, word, top, left, delay, sizeClass, glowColor }) => (
          <MotivatingWord
            key={key}
            word={word}
            top={top}
            left={left}
            delay={delay}
            sizeClass={sizeClass}
            glowColor={glowColor}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-12 sm:mb-16 text-center leading-tight z-20 relative"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          lineHeight: "1.1",
        }}
      >
        My Creations
      </motion.h2>

      {/* Main Content Container */}
      <div className="flex-grow flex items-start justify-center w-full z-20 relative">
        {/* Stack of Cards Container */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: stackValues.cardWidth,
            height: stackValues.cardHeight,
            perspective: "1200px",
            touchAction: "manipulation",
          }}
          onMouseEnter={() => !activeCardId && !isMobile && setIsStackHovered(true)}
          onMouseLeave={() => !activeCardId && !isMobile && setIsStackHovered(false)}
        >
          {projectsData.map((project, index) => {
            const isCurrentActive = activeCardId === project.id
            const totalCards = projectsData.length
            const initialZIndex = totalCards - index

            let cardAnimation = {}

            if (activeCardId !== null) {
              const activeIndex = projectsData.findIndex((p) => p.id === activeCardId)
              const sideOffsetDirection = index < activeIndex ? -1 : 1
              const distance = Math.abs(index - activeIndex)

              cardAnimation = {
                x:
                  sideOffsetDirection * (stackValues.sidePushDistance + distance * stackValues.sidePushDistancePerCard),
                y: "-50%",
                z: -100,
                rotateX: 0,
                rotateY: 0,
                rotateZ: sideOffsetDirection * 10,
                scale: 0.6,
                opacity: 0,
                pointerEvents: "none",
                top: "50%",
                left: "50%",
              }
            } else {
              const isHovered = isStackHovered && !isMobile
              cardAnimation = {
                top: "50%",
                left: "50%",
                x: isHovered
                  ? index * stackValues.hoverXSpread - (totalCards - 1) * (stackValues.hoverXSpread / 2)
                  : index * stackValues.stackXSpread - (totalCards - 1) * (stackValues.stackXSpread / 2),
                y: `calc(-50% + ${Math.abs(index - Math.floor(totalCards / 2)) * stackValues.stackYOffset}px)`,
                z: initialZIndex,
                rotateX: 0,
                rotateY: 0,
                rotateZ: isHovered
                  ? index * stackValues.hoverRotation - (totalCards - 1) * (stackValues.hoverRotation / 2)
                  : index * stackValues.stackRotation - (totalCards - 1) * (stackValues.stackRotation / 2),
                scale: 1,
                opacity: 1,
                pointerEvents: "auto",
              }
            }

            if (isCurrentActive) return null

            return (
              <motion.div
                key={project.id}
                className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20 active:scale-95"
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  WebkitTapHighlightColor: "transparent",
                }}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                animate={cardAnimation}
                transition={{
                  duration: reducedMotion ? 0.3 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handleCardClick(project.id)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center justify-start h-full w-full">
                  {/* Card Image */}
                  <div className="w-full h-[60%] bg-gray-700 rounded-lg overflow-hidden mb-3 border border-cyan-500/30 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center justify-center text-gray-400 text-sm">
                        <p>Image Placeholder</p>
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3
                    className="text-lg sm:text-xl font-semibold text-cyan-400 mt-2 leading-tight text-center"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Card Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 justify-center">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-md text-xs font-medium border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Active Card Modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={handleCloseActiveCard}
              style={{ backdropFilter: "blur(8px)" }}
            />

            {/* Active Card */}
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1.0,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                z: 100,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: reducedMotion ? 0.3 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed w-[95vw] max-w-[500px] h-auto max-h-[90vh] bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 shadow-lg z-50 overflow-y-auto"
              style={{
                backdropFilter: "blur(12px)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="flex flex-col items-center justify-start h-full w-full">
                {/* Active Card Image */}
                <div className="w-full h-48 sm:h-56 bg-gray-700 rounded-lg overflow-hidden mb-4 sm:mb-6 border border-cyan-500/30 flex items-center justify-center">
                  {activeProject.image ? (
                    <img
                      src={activeProject.image || "/placeholder.svg"}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center text-gray-400 text-sm">
                      <p>Image Placeholder</p>
                    </div>
                  )}
                </div>

                {/* Active Card Title */}
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 leading-tight text-center"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
                >
                  {activeProject.title}
                </h3>

                {/* Active Card Tags */}
                {activeProject.tags && (
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 justify-center">
                    {activeProject.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-md text-sm font-medium border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Active Card Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow text-left max-h-48 sm:max-h-56 overflow-y-auto pr-2 mb-4 sm:mb-6"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(34, 211, 238, 0.5) rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {activeProject.full_description}
                </motion.div>

                {/* Learn More Button */}
                {activeProject.details_link && (
                  <motion.a
                    href={activeProject.details_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                  >
                    Learn More →
                  </motion.a>
                )}
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation()
                  handleCloseActiveCard()
                }}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-red-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-red-700 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Close modal"
              >
                ×
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
