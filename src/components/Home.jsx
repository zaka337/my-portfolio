// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Dedicated CSS for the Home component

// Define variants for Framer Motion animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delay between child animations
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textNodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.3, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }, // Start subtle
    hover: {
        opacity: 1,
        scale: 1.05,
        textShadow: "0 0 10px var(--neon-blue-light)",
        transition: { duration: 0.3 }
    }
};


export default function Home() {
    return (
        <section id="home" className="home-hero-section">
            {/* 1. Full-screen Futuristic Video Background */}
            <video autoPlay loop muted playsInline className="background-video">
                {/* IMPORTANT: Replace with the actual path to your video file */}
                <source src="/videos/futuristic-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Video Overlay for Readability */}
            <div className="video-overlay"></div>

            {/* Main Content Container */}
            <motion.div
                className="home-content-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 4. Small Text Nodes on Different Places */}
                <motion.div
                    className="info-node node-top-left"
                    variants={textNodeVariants}
                    whileHover="hover"
                >
                    <p className="node-label">01 // INNOVATION</p>
                    <p className="node-detail">Driving what's next.</p>
                </motion.div>

                <motion.div
                    className="info-node node-top-right"
                    variants={textNodeVariants}
                    whileHover="hover"
                >
                    <p className="node-label">02 // ARCHITECTURE</p>
                    <p className="node-detail">Scalable solutions.</p>
                </motion.div>

                <motion.div
                    className="info-node node-middle-left"
                    variants={textNodeVariants}
                    whileHover="hover"
                >
                    <p className="node-label">03 // DESIGN</p>
                    <p className="node-detail">Seamless experiences.</p>
                </motion.div>

                <motion.div
                    className="info-node node-middle-right"
                    variants={textNodeVariants}
                    whileHover="hover"
                >
                    <p className="node-label">04 // EFFICIENCY</p>
                    <p className="node-detail">Automated workflows.</p>
                </motion.div>

                 <motion.div
                    className="info-node node-bottom-right"
                    variants={textNodeVariants}
                    whileHover="hover"
                >
                    <p className="node-label">05 // FUTURE</p>
                    <p className="node-detail">Redefining digital realms.</p>
                </motion.div>

                {/* 2. Large Font at Bottom */}
                <motion.h2
                    className="bottom-tagline"
                    variants={itemVariants}
                >
                    Connecting Worlds. <span className="gradient-text">Building Futures.</span> <br /> Redefining Possibility.
                </motion.h2>

            </motion.div>
        </section>
    );
}