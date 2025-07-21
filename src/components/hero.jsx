import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0e0e10] text-white overflow-hidden flex items-center justify-center px-4">
      {/* Mouse-follow glow */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0">
        <div
          className="absolute w-72 h-72 bg-cyan-400 opacity-30 rounded-full blur-[90px] transition-all duration-300"
          style={{ left: mousePos.x - 144, top: mousePos.y - 144 }}
        />
      </div>

      {/* Background glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-pink-500 rounded-full blur-[160px] opacity-25 z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-25 z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center text-center max-w-3xl"
      >
        {/* Profile Image */}
        <div className="mb-6 w-36 h-36 rounded-full bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden border-4 border-cyan-500">
          <img
            src="./images/zaka.jpg" // 👈 Replace this with your actual image path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Zaka Satti
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-6">
          MERN Stack & No-Code Developer | Future Web Enthusiast
        </p>

        {/* CTA */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl transition"
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
