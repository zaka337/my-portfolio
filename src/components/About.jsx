// src/components/About.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css'; // Dedicated CSS for the About component

// --- Sample Data for Expertise Icons ---
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
];

export default function About() {
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [showCvModal, setShowCvModal] = useState(false);

    const openResumeModal = () => setShowResumeModal(true);
    const closeResumeModal = () => setShowResumeModal(false);

    const openCvModal = () => setShowCvModal(true);
    const closeCvModal = () => setShowCvModal(false);

    const resumePdfPath = '/docs/ZakaResume.pdf';
    const cvPdfPath = '/docs/Zaka_Ullah_Waheed_CV.pdf';

    return (
        <section id="about" className="about-section relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-6 lg:px-8 overflow-hidden z-10">
            {/* Ambient Background Glows - using the same deep background from Home */}
            <div className="about-bg-glow about-glow-top-left"></div>
            <div className="about-bg-glow about-glow-bottom-right"></div>
            <div className="about-bg-glow about-glow-center"></div>

            <div className="about-content-container relative z-20 flex flex-col items-center text-center max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                {/* Small Intro at Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-20 lg:mb-24 w-full"
                >
                    <h2 className="about-title text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 lg:mb-8 tracking-wide text-white drop-shadow-lg">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="my-intro text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto"> {/* Adjusted base text size for mobile */}
                        "Nice to virtually meet you! I'm a versatile Full-Stack Code & No-Code Developer who loves pushing the boundaries of what's possible online. I specialize in eye-catching design, engineering unrealistic web applications that defy expectations, and forging incredible workflows that make daily operations a breeze. Whether it's intricate custom code or powerful no-code platforms, I'm dedicated to building solutions that are as innovative as they are intuitive."
                    </p>
                </motion.div>

                {/* Resume and CV Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-20 md:mb-24 lg:mb-28"
                >
                    <button onClick={openResumeModal} className="action-button resume-button w-full sm:w-auto px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out"> {/* Adjusted padding and font size for mobile */}
                        View Resume <i className="fas fa-file-alt ml-2"></i>
                    </button>
                    <button onClick={openCvModal} className="action-button cv-button w-full sm:w-auto px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out"> {/* Adjusted padding and font size for mobile */}
                        View CV <i className="fas fa-id-card ml-2"></i>
                    </button>
                </motion.div>

                {/* Expertise Section Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="expertise-title text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 md:mb-12 lg:mb-16 tracking-wide text-white drop-shadow-lg"
                >
                    My <span className="gradient-text">Quantum Skills</span>
                </motion.h3>

                {/* Shining Expertise Icons Grid */}
                <div className="expertise-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl mx-auto">
                    {expertiseIcons.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.15,
                                boxShadow: "0 0 20px var(--neon-blue-light), 0 0 40px var(--neon-purple-dark)",
                                zIndex: 5,
                            }}
                        // Adjusted padding and min-height for even smaller screens
                                                    className="expertise-icon-card flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-cyan-500 border-opacity-30 shadow-md transition-all duration-0 ease-out min-h-[90px] sm:min-h-[100px] md:min-h-[120px]"
                                                >
                            <img src={skill.icon} alt={skill.name} className="skill-icon w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain mb-1 md:mb-2 filter drop-shadow-[0_0_10px_var(--neon-blue-vibrant)] drop-shadow-[0_0_15px_var(--neon-purple-dark)]" /> {/* Adjusted icon size for mobile */}
                            <p className="skill-name text-xs sm:text-sm md:text-base font-medium text-gray-200 tracking-wide">{skill.name}</p> {/* Adjusted font size for mobile */}
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
                        className="modal-overlay fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-70 backdrop-blur-md"
                        onClick={closeResumeModal}
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="modal-content relative bg-gray-900 border border-cyan-400 rounded-lg shadow-xl p-4 md:p-6 flex flex-col max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl w-[95vw] h-[90vh] sm:h-[95vh] overflow-hidden" // More granular max-width, height control
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="modal-close-button absolute top-3 right-3 text-white text-xl md:text-2xl hover:text-green-400 transition-colors duration-200 z-10" onClick={closeResumeModal}> {/* Smaller close button */}
                                <i className="fas fa-times"></i>
                            </button>
                            <h4 className="modal-title text-xl md:text-2xl lg:text-3xl font-orbitron text-cyan-400 mb-4 text-center drop-shadow-lg">My Resume</h4> {/* Smaller modal title */}
                            <iframe
                                src={resumePdfPath}
                                title="My Resume"
                                className="resume-viewer flex-grow w-full border border-cyan-400 border-opacity-30 rounded-md bg-black min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" // Min-height responsive
                                frameBorder="0"
                            ></iframe>
                            <p className="modal-tip text-xs sm:text-sm text-gray-400 text-center mt-3"> {/* Smaller tip text */}
                                <i className="fas fa-info-circle mr-1"></i> If the PDF does not load, you can also <a href={resumePdfPath} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-cyan-400 underline transition-colors">download it here</a>.
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
                        className="modal-overlay fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-70 backdrop-blur-md"
                        onClick={closeCvModal}
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="modal-content relative bg-gray-900 border border-cyan-400 rounded-lg shadow-xl p-4 md:p-6 flex flex-col max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl w-[95vw] h-[90vh] sm:h-[95vh] overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="modal-close-button absolute top-3 right-3 text-white text-xl md:text-2xl hover:text-green-400 transition-colors duration-200 z-10" onClick={closeCvModal}>
                                <i className="fas fa-times"></i>
                            </button>
                            <h4 className="modal-title text-xl md:text-2xl lg:text-3xl font-orbitron text-cyan-400 mb-4 text-center drop-shadow-lg">My Curriculum Vitae (CV)</h4>
                            <iframe
                                src={cvPdfPath}
                                title="My CV"
                                className="resume-viewer flex-grow w-full border border-cyan-400 border-opacity-30 rounded-md bg-black min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
                                frameBorder="0"
                            ></iframe>
                            <p className="modal-tip text-xs sm:text-sm text-gray-400 text-center mt-3">
                                <i className="fas fa-info-circle mr-1"></i> If the PDF does not load, you can also <a href={cvPdfPath} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-cyan-400 underline transition-colors">download it here</a>.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}