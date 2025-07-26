"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Abstract Neon Grid Background Component
const AbstractNeonGridBackground = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03] z-0">
      <div
        className="w-full h-full animate-pulse"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "grid-pulse 20s infinite ease-in-out alternate",
        }}
      />
    </div>
  )
}

// Email Contact Component
const EmailContact = ({ isExpanded, onHoverStart, onHoverEnd, isMobile }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1800))
      if (Math.random() > 0.1) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Email Relay Offline. Transmission Failed.")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 0 5px rgba(0, 255, 255, 0.3)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(157, 0, 255, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
    submitting: {
      scale: [1, 1.01, 1],
      transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.6, ease: "easeInOut" },
    },
    success: {
      scale: 1.03,
      backgroundColor: "#00cc66",
      boxShadow: "0 0 10px #00cc66",
      transition: { duration: 0.4 },
    },
    error: {
      scale: 1.03,
      backgroundColor: "#ff3333",
      boxShadow: "0 0 10px #ff3333",
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      className={`relative flex-1 bg-black/85 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 ${
        isMobile
          ? "p-4 min-h-[400px]"
          : isExpanded
            ? "p-8 shadow-2xl shadow-cyan-500/20"
            : "p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
      }`}
      onHoverStart={!isMobile ? onHoverStart : undefined}
      onHoverEnd={!isMobile ? onHoverEnd : undefined}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Panel Content */}
      <div
        className={`transition-all duration-400 ${
          isMobile || isExpanded ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="text-center mb-6">
          <h3
            className={`font-bold text-cyan-400 mb-2 ${isMobile ? "text-xl" : "text-2xl lg:text-3xl"}`}
            style={{
              textShadow: "0 0 10px rgba(0, 229, 255, 0.6)",
              letterSpacing: "1.5px",
            }}
          >
            {isMobile ? "Contact" : "Direct Comms"}
          </h3>
          <p className={`text-gray-300 ${isMobile ? "text-sm" : "text-base"}`}>
            {isMobile ? "Send me a message" : "Send a secured message."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="emailName"
              className={`block text-cyan-400 mb-2 font-medium uppercase tracking-wider ${
                isMobile ? "text-xs" : "text-sm"
              }`}
            >
              {isMobile ? "Name" : "Your Identifier"}
            </label>
            <input
              type="text"
              id="emailName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-gray-900/90 border border-cyan-500/20 rounded-lg text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 ${
                isMobile ? "p-3 text-sm" : "p-4 text-base"
              }`}
              placeholder={isMobile ? "Your name" : "Designation"}
              required
              style={{
                fontFamily: "monospace",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="emailAddress"
              className={`block text-cyan-400 mb-2 font-medium uppercase tracking-wider ${
                isMobile ? "text-xs" : "text-sm"
              }`}
            >
              {isMobile ? "Email" : "Return Channel"}
            </label>
            <input
              type="email"
              id="emailAddress"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-gray-900/90 border border-cyan-500/20 rounded-lg text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 ${
                isMobile ? "p-3 text-sm" : "p-4 text-base"
              }`}
              placeholder={isMobile ? "your@email.com" : "your@nexus.com"}
              required
              style={{
                fontFamily: "monospace",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="emailMessage"
              className={`block text-cyan-400 mb-2 font-medium uppercase tracking-wider ${
                isMobile ? "text-xs" : "text-sm"
              }`}
            >
              {isMobile ? "Message" : "Message Payload"}
            </label>
            <textarea
              id="emailMessage"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={isMobile ? 3 : 4}
              className={`w-full bg-gray-900/90 border border-cyan-500/20 rounded-lg text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 resize-none ${
                isMobile ? "p-3 text-sm" : "p-4 text-base"
              }`}
              placeholder={isMobile ? "Your message..." : "Brief query / project brief..."}
              required
              style={{
                fontFamily: "monospace",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>

          <motion.button
            type="submit"
            className={`w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
              isMobile ? "py-3 text-sm" : "py-4 text-base"
            }`}
            variants={buttonVariants}
            initial="rest"
            whileHover={!isMobile ? "hover" : {}}
            whileTap="tap"
            animate={isSubmitting ? "submitting" : submitStatus || "rest"}
            disabled={isSubmitting}
            style={{
              boxShadow: "0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(204, 0, 255, 0.3)",
            }}
          >
            {isSubmitting
              ? "Transmitting..."
              : submitStatus === "success"
                ? "Message Sent!"
                : submitStatus === "error"
                  ? "Transmission Error!"
                  : isMobile
                    ? "Send"
                    : "Send Message"}
          </motion.button>

          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-green-400 text-center font-medium ${isMobile ? "text-sm" : "text-base"}`}
                style={{
                  fontFamily: "monospace",
                  backgroundColor: "rgba(57, 255, 20, 0.1)",
                  border: "1px solid rgba(57, 255, 20, 0.3)",
                  borderRadius: "8px",
                  padding: isMobile ? "8px" : "10px",
                }}
              >
                {isMobile ? "Message sent successfully!" : "Channel confirmed. Reply incoming."}
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-red-400 text-center font-medium ${isMobile ? "text-sm" : "text-base"}`}
                style={{
                  fontFamily: "monospace",
                  backgroundColor: "rgba(255, 51, 51, 0.1)",
                  border: "1px solid rgba(255, 51, 51, 0.3)",
                  borderRadius: "8px",
                  padding: isMobile ? "8px" : "10px",
                }}
              >
                {isMobile ? "Failed to send. Please try again." : "Signal loss. Retry or use alternate."}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Panel Icon Overlay (Desktop Only) */}
      {!isMobile && !isExpanded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-2xl opacity-100 transition-opacity duration-400 z-10"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <i
            className="fas fa-envelope text-6xl text-cyan-400 mb-4"
            style={{
              textShadow: "0 0 18px rgba(0, 229, 255, 0.8), 0 0 35px rgba(204, 0, 255, 0.6)",
              animation: "icon-float 3.5s infinite ease-in-out alternate",
            }}
          />
          <span className="text-xl font-semibold text-white uppercase tracking-wider" style={{ letterSpacing: "2px" }}>
            Email Interface
          </span>
        </div>
      )}
    </motion.div>
  )
}

// Social Contact Component
const SocialContact = ({ isExpanded, onHoverStart, onHoverEnd, isMobile }) => {
  const socialLinks = [
    { icon: "fab fa-linkedin", name: "LinkedIn", href: "https://www.linkedin.com/in/zaka-ullah-waheed-80380832a/" },
    { icon: "fab fa-github", name: "GitHub", href: "https://github.com/zaka337" },
    {
      icon: "fas fa-calendar-alt",
      name: "UpWork",
      href: "https://www.upwork.com/freelancers/~019da4e9930dd07f35?mp_source=share",
    },
    { icon: "fab fa-behance", name: "Fiverr", href: "https://www.fiverr.com/zaka_satti1/" },
  ]

  return (
    <motion.div
      className={`relative flex-1 bg-black/85 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 ${
        isMobile
          ? "p-4 min-h-[300px]"
          : isExpanded
            ? "p-8 shadow-2xl shadow-purple-500/20"
            : "p-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
      }`}
      onHoverStart={!isMobile ? onHoverStart : undefined}
      onHoverEnd={!isMobile ? onHoverEnd : undefined}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Panel Content */}
      <div
        className={`transition-all duration-400 ${
          isMobile || isExpanded ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="text-center mb-6">
          <h3
            className={`font-bold text-purple-400 mb-2 ${isMobile ? "text-xl" : "text-2xl lg:text-3xl"}`}
            style={{
              textShadow: "0 0 10px rgba(168, 85, 247, 0.6)",
              letterSpacing: "1.5px",
            }}
          >
            {isMobile ? "Connect" : "Social Grid"}
          </h3>
          <p className={`text-gray-300 ${isMobile ? "text-sm" : "text-base"}`}>
            {isMobile ? "Find me online" : "Connect on our networks."}
          </p>
        </div>

        <div className={`grid gap-3 ${isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center bg-gray-900/60 border border-purple-500/20 rounded-xl text-white text-decoration-none transition-all duration-300 hover:bg-gray-800/80 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 ${
                isMobile ? "p-3" : "p-4"
              }`}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <i
                className={`${link.icon} text-purple-400 mb-2 ${isMobile ? "text-2xl" : "text-3xl"}`}
                style={{
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.7)",
                  transition: "all 0.3s ease",
                }}
              />
              <span className={`font-semibold text-center ${isMobile ? "text-xs" : "text-sm"}`}>{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Panel Icon Overlay (Desktop Only) */}
      {!isMobile && !isExpanded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-2xl opacity-100 transition-opacity duration-400 z-10"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <i
            className="fas fa-share-alt text-6xl text-purple-400 mb-4"
            style={{
              textShadow: "0 0 18px rgba(168, 85, 247, 0.8), 0 0 35px rgba(0, 229, 255, 0.6)",
              animation: "icon-float 3.5s infinite ease-in-out alternate",
            }}
          />
          <span className="text-xl font-semibold text-white uppercase tracking-wider" style={{ letterSpacing: "2px" }}>
            Social Channels
          </span>
        </div>
      )}
    </motion.div>
  )
}

// Main Contact Component
const Contact = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)

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

  const handleHoverStart = (panel) => {
    if (!isMobile) {
      setHoveredPanel(panel)
    }
  }

  const handleHoverEnd = () => {
    if (!isMobile) {
      setHoveredPanel(null)
    }
  }

  return (
    <motion.section
      className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center overflow-hidden ${
        screenWidth < 375 ? "px-2 py-8" : screenWidth < 425 ? "px-3 py-10" : "px-4 py-12"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      style={{ touchAction: "manipulation" }}
    >
      <AbstractNeonGridBackground />

      {/* Header */}
      <motion.div
        className="text-center mb-8 z-20 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2
          className={`font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 ${
            screenWidth < 375
              ? "text-2xl"
              : screenWidth < 425
                ? "text-3xl"
                : screenWidth < 768
                  ? "text-4xl"
                  : "text-5xl lg:text-6xl"
          }`}
          style={{
            textShadow: "0 0 12px rgba(0, 229, 255, 0.7), 0 0 25px rgba(204, 0, 255, 0.5)",
            letterSpacing: "2px",
            lineHeight: "1.1",
          }}
        >
          Contact Me
        </h2>
        <div
          className={`mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full ${
            screenWidth < 425 ? "w-16 h-1" : "w-24 h-1.5"
          }`}
          style={{
            boxShadow: "0 0 10px #00e5ff, 0 0 20px #cc00ff",
            animation: "underline-pulse 4s infinite ease-in-out",
          }}
        />
      </motion.div>

      {/* Contact Panels */}
      <div
        className={`w-full max-w-6xl z-20 relative ${isMobile ? "flex flex-col space-y-4" : "flex gap-6 h-[650px]"}`}
      >
        <EmailContact
          isExpanded={hoveredPanel === "left"}
          onHoverStart={() => handleHoverStart("left")}
          onHoverEnd={handleHoverEnd}
          isMobile={isMobile}
        />
        <SocialContact
          isExpanded={hoveredPanel === "right"}
          onHoverStart={() => handleHoverStart("right")}
          onHoverEnd={handleHoverEnd}
          isMobile={isMobile}
        />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes icon-float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        
        @keyframes underline-pulse {
          0% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.08); opacity: 0.9; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes grid-pulse {
          0% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.05; transform: scale(1.002); }
          100% { opacity: 0.03; transform: scale(1); }
        }
      `}</style>
    </motion.section>
  )
}

export default Contact
