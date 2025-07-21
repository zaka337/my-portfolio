// src/components/About.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css'; // Dedicated CSS for the About component

// --- Sample Data for Expertise Icons ---
// IMPORTANT: Replace '/images/skills/...' with the actual paths to your SVG/PNG icon files.
// Ensure these files exist in your public/images/skills/ folder.
const expertiseIcons = [
    { id: 'react', name: 'React', icon: '/images/react.png' },
    { id: 'bubble', name: 'Bubble.io', icon: '/images/bubble.png' },
    { id: 'js', name: 'JavaScript', icon: '/images/javascricpt.png' },
    { id: 'python', name: 'Python', icon: '/images/python.png' },
    { id: 'node', name: 'Node.js', icon: '/images/node.png' },
    { id: 'cpp', name: 'C++', icon: '/images/cpp.png' },
    { id: 'figma', name: 'Figma', icon: '/images/figma.jpg' },
    { id: 'git', name: 'Git', icon: '/images/git.png' },
    { id: 'html', name: 'HTML5', icon: '/images/html.png' },
    { id: 'css', name: 'CSS3', icon: '/images/css.png' },
    { id: 'Framer', name: 'Framer', icon: '/images/frammer.png' },
    { id: 'ai', name: 'AI/ML', icon: '/images/ai.png' },
    // Add more as needed. Remember to put their actual image files in public/images/skills/
];

export default function About() {
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [showCvModal, setShowCvModal] = useState(false);

    const openResumeModal = () => setShowResumeModal(true);
    const closeResumeModal = () => setShowResumeModal(false);

    const openCvModal = () => setShowCvModal(true);
    const closeCvModal = () => setShowCvModal(false);

    // --- IMPORTANT: PATHS TO YOUR RESUME/CV PDF FILES ---
    // These files MUST be placed in your project's public/docs/ folder.
    // E.g., your-project-name/public/docs/my-resume.pdf
    const resumePdfPath = '/docs/ZakaResume.pdf'; // Verify this path matches your file location
    const cvPdfPath = '/docs/Zaka_Ullah_Waheed_CV.pdf';          // Verify this path matches your file location

    return (
        <section id="about" className="about-section">
            {/* Ambient Background Glows - using the same deep background from Home */}
            <div className="about-bg-glow about-glow-top-left"></div>
            <div className="about-bg-glow about-glow-bottom-right"></div>
            <div className="about-bg-glow about-glow-center"></div>

            <div className="about-content-container">
                {/* Small Intro at Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="intro-text-wrapper"
                >
                    <h2 className="about-title">About <span className="gradient-text">Me</span></h2>
                    <p className="my-intro">
                        "Nice to virtually meet you! I'm a versatile Full-Stack Code & No-Code Developer who loves pushing the boundaries of what's possible online. I specialize in eye-catching design, engineering unrealistic web applications that defy expectations, and forging incredible workflows that make daily operations a breeze. Whether it's intricate custom code or powerful no-code platforms, I'm dedicated to building solutions that are as innovative as they are intuitive."
                    </p>
                </motion.div>

                {/* Resume and CV Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="resume-buttons-container"
                >
                    <button onClick={openResumeModal} className="action-button resume-button">
                        View Resume <i className="fas fa-file-alt ml-2"></i>
                    </button>
                    <button onClick={openCvModal} className="action-button cv-button">
                        View CV <i className="fas fa-id-card ml-2"></i>
                    </button>
                </motion.div>

                {/* Expertise Section Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="expertise-title"
                >
                    My <span className="gradient-text">Quantum Skills</span>
                </motion.h3>

                {/* Shining Expertise Icons Grid */}
                <div className="expertise-grid">
                    {expertiseIcons.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.15, // More pronounced lift
                                boxShadow: "0 0 20px var(--neon-blue-light), 0 0 40px var(--neon-purple-dark)", // Use new specific colors
                                zIndex: 5,
                            }}
                            className="expertise-icon-card"
                        >
                            {/* Icon display: Ensure your image files exist at the specified path */}
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <p className="skill-name">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Resume Modal */}
            <AnimatePresence>
                {showResumeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="modal-overlay"
                        onClick={closeResumeModal}
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="modal-content"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="modal-close-button" onClick={closeResumeModal}>
                                <i className="fas fa-times"></i>
                            </button>
                            <h4 className="modal-title">My Resume</h4>
                            {/* The iframe will display your PDF */}
                            <iframe
                                src={resumePdfPath}
                                title="My Resume"
                                className="resume-viewer"
                                frameBorder="0"
                            ></iframe>
                            <p className="modal-tip">
                                <i className="fas fa-info-circle"></i> If the PDF does not load, you can also <a href={resumePdfPath} target="_blank" rel="noopener noreferrer">download it here</a>.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CV Modal (similar to Resume Modal) */}
            <AnimatePresence>
                {showCvModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="modal-overlay"
                        onClick={closeCvModal}
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="modal-content"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="modal-close-button" onClick={closeCvModal}>
                                <i className="fas fa-times"></i>
                            </button>
                            <h4 className="modal-title">My Curriculum Vitae (CV)</h4>
                            {/* The iframe will display your PDF */}
                            <iframe
                                src={cvPdfPath}
                                title="My CV"
                                className="resume-viewer"
                                frameBorder="0"
                            ></iframe>
                            <p className="modal-tip">
                                <i className="fas fa-info-circle"></i> If the PDF does not load, you can also <a href={cvPdfPath} target="_blank" rel="noopener noreferrer">download it here</a>.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}