import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    "2nd Prize — IEEE PROCOMM Hardware Hackathon (Wireless Charging System).",
    "Media Team Head — TEDx Saintgits Season 2.",
    "Participant — GTA Codestorm Hackathon (µLearn).",
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-3 sm:px-6 py-12 sm:py-20 relative overflow-hidden font-body"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_70%)]"></div>

      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-8 sm:mb-12 relative z-10 glitch font-futuristic"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Achievements & Extracurricular
      </motion.h2>

      {/* Card List for Continuity */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-10 max-w-4xl w-full z-10 mt-4 sm:mt-8 font-body">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-stretch justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="bg-zinc-900/80 p-2 sm:p-6 rounded-xl border border-red-600/30 shadow-lg w-full relative flex flex-col text-xs sm:text-base">
              <div className="absolute -left-6 sm:-left-8 top-4 sm:top-6 bg-black border-2 border-red-600 rounded-full p-2 sm:p-3">
                <span className="text-lg sm:text-2xl text-red-400 font-futuristic">🏆</span>
              </div>
              <p className="text-gray-200 text-xs sm:text-base font-body">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
