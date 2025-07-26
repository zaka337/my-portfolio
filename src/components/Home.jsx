"use client"
import { motion } from "framer-motion"
import "./Home.css"

// Define variants for Framer Motion animations
const textNodeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.3, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  hover: {
    opacity: 1,
    scale: 1.05,
    textShadow: "0 0 10px var(--neon-blue-light)",
    transition: { duration: 0.3 },
  },
  tap: {
    opacity: 1,
    scale: 1.1,
    textShadow: "0 0 20px var(--neon-blue-light), 0 0 30px var(--neon-purple-light)",
    transition: { duration: 0.2 },
  },
}

const mobileNodeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 0.8, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    opacity: 1,
    scale: 1.02,
    textShadow: "0 0 10px var(--neon-blue-light)",
    transition: { duration: 0.3 },
  },
  tap: {
    opacity: 1,
    scale: 1.05,
    textShadow: "0 0 20px var(--neon-blue-light), 0 0 30px var(--neon-purple-light)",
    transition: { duration: 0.2 },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Home() {
  return (
    <section id="home" className="home-hero-section">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/futuristic-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="video-overlay"></div>

      {/* Main Content Container */}
      <motion.div className="home-content-container" variants={containerVariants} initial="hidden" animate="visible">
        {/* Desktop Text Nodes */}
        <div className="desktop-nodes">
          <motion.div className="info-node node-top-left" variants={textNodeVariants} whileHover="hover" whileTap="tap">
            <p className="node-label">01 // INNOVATION</p>
            <p className="node-detail">Driving what's next.</p>
          </motion.div>

          <motion.div
            className="info-node node-top-right"
            variants={textNodeVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p className="node-label">02 // ARCHITECTURE</p>
            <p className="node-detail">Scalable solutions.</p>
          </motion.div>

          <motion.div
            className="info-node node-middle-left"
            variants={textNodeVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p className="node-label">03 // DESIGN</p>
            <p className="node-detail">Seamless experiences.</p>
          </motion.div>

          <motion.div
            className="info-node node-middle-right"
            variants={textNodeVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p className="node-label">04 // EFFICIENCY</p>
            <p className="node-detail">Automated workflows.</p>
          </motion.div>

          <motion.div
            className="info-node node-bottom-right"
            variants={textNodeVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p className="node-label">05 // FUTURE</p>
            <p className="node-detail">Redefining digital realms.</p>
          </motion.div>
        </div>

        {/* Mobile Text Nodes */}
        <div className="mobile-nodes">
          <motion.div className="mobile-nodes-grid" variants={containerVariants}>
            <motion.div
              className="info-node mobile-node"
              variants={mobileNodeVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <p className="node-label">01 // INNOVATION</p>
              <p className="node-detail">Driving what's next.</p>
            </motion.div>

            <motion.div
              className="info-node mobile-node"
              variants={mobileNodeVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <p className="node-label">02 // ARCHITECTURE</p>
              <p className="node-detail">Scalable solutions.</p>
            </motion.div>

            <motion.div
              className="info-node mobile-node"
              variants={mobileNodeVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <p className="node-label">03 // DESIGN</p>
              <p className="node-detail">Seamless experiences.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Tagline */}
        <motion.h2 className="bottom-tagline" variants={itemVariants}>
          Connecting Worlds. <span className="gradient-text">Building Futures.</span>
          <br className="desktop-break" />
          <span className="mobile-break"> </span>
          Redefining Possibility.
        </motion.h2>
      </motion.div>
    </section>
  )
}
