import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; // Ensure this path is correct relative to your Footer.jsx file

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const yourName = "Zaka Ullah Waheed"; // <<< IMPORTANT: Customize this with your name or project name!

    return (
        <motion.footer
            className="futuristic-footer"
            // Initial animation: fade in and slide up slightly
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }} // Delay after main content loads
        >
            {/* Background animation layers for a dynamic look */}
            <div className="footer-bg-layer layer-a"></div>
            <div className="footer-bg-layer layer-b"></div>
            <div className="footer-bg-layer layer-c"></div>

            <div className="footer-content-wrapper">
                <motion.p
                    className="footer-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                >
                    &copy; {currentYear} {yourName}. All rights reserved. <span className="text-glitch">DATA SECURE.</span>
                </motion.p>

                <motion.div
                    className="footer-line-container"
                    // Animate the line container's width on entrance
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }} // The "small line"
                    transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }}
                >
                    <div className="footer-animated-line"></div>
                    <motion.span
                        className="footer-smile"
                        // Smile pops in with a spring effect
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.7, duration: 0.5, type: "spring", stiffness: 300 }}
                        // Interactive hover effect for the smile
                        whileHover={{ rotate: 360, scale: 1.2, color: 'var(--neon-magenta)' }}
                    >
                        :)
                    </motion.span>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;