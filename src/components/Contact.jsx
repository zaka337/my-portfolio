import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Adjust path if your CSS file is elsewhere
// Ensure this CSS file is in the same directory

// --- Helper Component: Abstract Neon Grid Background ---
const AbstractNeonGridBackground = () => {
    // This background will be handled mostly by CSS now, with subtle JS for dynamic touches if needed
    // For this specific design, a purely CSS driven background might be sufficient for performance
    // and to emphasize the foreground elements more.
    return <div className="neon-grid-background"></div>;
};

// --- Left Component: Email Contact ---
const EmailContact = ({ isExpanded, onHoverStart, onHoverEnd }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        console.log('Initiating Secure Email Protocol:', formData);
        try {
            await new Promise(resolve => setTimeout(resolve, 1800));
            if (Math.random() > 0.1) { // 90% success rate
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error("Email Relay Offline. Transmission Failed.");
            }
        } catch (error) {
            console.error('Email Transmission Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Framer Motion variants for the submit button
    const buttonVariants = {
        rest: {
            scale: 1,
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
            transition: { duration: 0.3 }
        },
        hover: {
            scale: 1.02,
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(157, 0, 255, 0.3)',
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.98 },
        submitting: {
            scale: [1, 1.01, 1],
            transition: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }
        },
        success: {
            scale: 1.03,
            backgroundColor: '#00cc66',
            boxShadow: '0 0 10px #00cc66',
            transition: { duration: 0.4 }
        },
        error: {
            scale: 1.03,
            backgroundColor: '#ff3333',
            boxShadow: '0 0 10px #ff3333',
            transition: { duration: 0.4 }
        }
    };

    return (
        <motion.div
            className={`contact-panel email-panel ${isExpanded ? 'expanded' : ''}`}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            layout // Enable Framer Motion layout animations
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="panel-content">
                <h3 className="panel-title">Direct Comms</h3>
                <p className="panel-subtitle">Send a secured message.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="emailName" className="contact-label">Your Identifier</label>
                        <input
                            type="text"
                            id="emailName"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-input"
                            placeholder="Designation"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailAddress" className="contact-label">Return Channel</label>
                        <input
                            type="email"
                            id="emailAddress"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="contact-input"
                            placeholder="your@nexus.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailMessage" className="contact-label">Message Payload</label>
                        <textarea
                            id="emailMessage"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="contact-textarea"
                            rows="4" // Fixed rows for no internal scroll
                            placeholder="Brief query / project brief..."
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="submit-button"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        animate={isSubmitting ? "submitting" : (submitStatus || "rest")}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Transmitting...' :
                         submitStatus === 'success' ? 'Message Sent!' :
                         submitStatus === 'error' ? 'Transmission Error!' : 'Send Message'}
                    </motion.button>
                    {submitStatus === 'success' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="status-message success">
                            Channel confirmed. Reply incoming.
                        </motion.p>
                    )}
                    {submitStatus === 'error' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="status-message error">
                            Signal loss. Retry or use alternate.
                        </motion.p>
                    )}
                </form>
            </div>
            {!isExpanded && (
                <div className="panel-icon-overlay">
                    <i className="fas fa-envelope"></i>
                    <span>Email Interface</span>
                </div>
            )}
        </motion.div>
    );
};

// --- Right Component: Social Media Contact ---
const SocialContact = ({ isExpanded, onHoverStart, onHoverEnd }) => {
    // Only display specific social links for compactness and relevance
    const socialLinks = [
        { icon: 'fab fa-linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/in/zaka-ullah-waheed-80380832a/' },
        { icon: 'fab fa-github', name: 'GitHub', href: 'https://github.com/zaka337' },
        { icon: 'fas fa-calendar-alt', name: 'UpWork', href: 'https://www.upwork.com/freelancers/~019da4e9930dd07f35?mp_source=share' },
        { icon: 'fab fa-behance', name: 'fiver', href: 'https://www.fiverr.com/zaka_satti1/' },
        // Add or remove as needed to maintain no-scroll
    ];

    return (
        <motion.div
            className={`contact-panel social-panel ${isExpanded ? 'expanded' : ''}`}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            layout // Enable Framer Motion layout animations
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="panel-content">
                <h3 className="panel-title">Social Grid</h3>
                <p className="panel-subtitle">Connect on our networks.</p>
                <div className="social-grid">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-item"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className={link.icon}></i>
                            <span>{link.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
            {!isExpanded && (
                <div className="panel-icon-overlay">
                    <i className="fas fa-share-alt"></i> {/* Generic share icon for social */}
                    <span>Social Channels</span>
                </div>
            )}
        </motion.div>
    );
};

// --- Main Contact Component ---
const Contact = () => {
    const [hoveredPanel, setHoveredPanel] = useState(null); // 'left' | 'right' | null

    const handleHoverStart = (panel) => {
        setHoveredPanel(panel);
    };

    const handleHoverEnd = () => {
        setHoveredPanel(null);
    };

    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
            <AbstractNeonGridBackground /> {/* Subtle background pattern */}

            <motion.div
                className="contact-header-container"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <h2 className="main-title">Contact Me</h2>
                <div className="title-underline"></div>
            </motion.div>

            <div className="contact-panels-wrapper">
                <EmailContact
                    isExpanded={hoveredPanel === 'left'}
                    onHoverStart={() => handleHoverStart('left')}
                    onHoverEnd={handleHoverEnd}
                />
                <SocialContact
                    isExpanded={hoveredPanel === 'right'}
                    onHoverStart={() => handleHoverStart('right')}
                    onHoverEnd={handleHoverEnd}
                />
            </div>
        </motion.section>
    );
};

export default Contact;