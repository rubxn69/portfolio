import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col justify-center items-center text-center px-3 sm:px-6 relative overflow-hidden"
    >
      {/* Noise / Scanline Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] animate-pulse"></div>

      {/* Name with glitch */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-red-500 glitch relative z-10 font-futuristic"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Jacob Rajeev
      </motion.h1>

      {/* Typing effect subtitle */}
      <motion.h2
        className="mt-2 text-sm sm:text-lg md:text-2xl text-gray-300 relative z-10 font-futuristic tracking-widest drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Typewriter
          words={[
            "Final Year B.Tech ECE Student 🎓",
            "React & Web Developer ⚛️",
            "IoT & Embedded Systems 🔌",
            "AI & ML Enthusiast 🤖",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.h2>


      {/* About Me Paragraph with animation and neon border */}
      <motion.div
        className="mt-4 sm:mt-8 max-w-md sm:max-w-2xl mx-auto bg-black/60 border-2 border-red-500 rounded-xl p-3 sm:p-6 shadow-[0_0_40px_rgba(239,68,68,0.3)] relative z-10 animate-pulse"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        <p className="text-xs sm:text-base md:text-lg text-gray-200 font-body leading-relaxed text-center">
          Hi! I'm <span className="text-red-400 font-futuristic">Jacob Rajeev</span>, a passionate developer and electronics enthusiast. I love building futuristic web experiences with <span className="text-red-400">React</span>, exploring the world of <span className="text-red-400">IoT</span> and <span className="text-red-400">AI</span>, and turning ideas into reality. My journey blends creativity, code, and curiosity—always pushing boundaries and learning something new. Let's create the future together!
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#" // Add your resume link here
        className="mt-10 px-8 py-4 bg-red-600 text-lg font-semibold rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:shadow-[0_0_40px_rgba(239,68,68,0.9)] transition relative z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 120 }}
      >
        My Resume
      </motion.a>

      {/* Social Media Links */}
      <motion.div
        className="flex gap-8 mt-8 justify-center items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <a
          href="https://github.com/rubxn69"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-300 hover:text-red-500 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/jacob-rajeev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-300 hover:text-red-500 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/jacob_rajeev_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-300 hover:text-red-500 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  );
}
