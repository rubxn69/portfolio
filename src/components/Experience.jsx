import { motion } from "framer-motion";
import { FaMicrochip, FaRobot } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Research Intern",
      company: "IIIT Hyderabad",
      duration: "May 2025 – Aug 2025",
      details: [
        "Worked with NVIDIA Jetson and Python for real-time computer vision at the edge.",
        "Created a scheduler to manage and coordinate multiple edge nodes.",
        "Built a real-time computer vision-based edge system with efficient resource management."
      ],
      icon: <FaRobot className="text-red-400" />,
    },
    {
      role: "Intern",
      company: "Keltron",
      duration: "2023",
      details: [
        "Designed & tested IoT prototypes using Arduino & sensors.",
        "Integrated with Blynk for monitoring & control.",
        "Developed real-time automation projects.",
      ],
      icon: <FaMicrochip className="text-red-400" />,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_70%)]"></div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-red-500 mb-12 relative z-10 glitch"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      {/* Timeline with Experience Cards */}
      <div className="relative max-w-3xl w-full z-10 font-body px-2 sm:px-4 py-8">
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-red-600/40 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="bg-zinc-900/80 p-2 sm:p-6 rounded-xl border border-red-600/30 shadow-lg w-full sm:w-96 relative text-sm sm:text-base">
              <div className="absolute -left-10 top-6 bg-black border-2 border-red-600 rounded-full p-3">
                {exp.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-red-400 font-futuristic mt-2 mb-1">{exp.role}</h3>
              <p className="text-gray-300 text-xs sm:text-sm font-body">{exp.company}</p>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 font-body">{exp.duration}</p>
              <ul className="list-disc pl-4 sm:pl-6 text-gray-200 space-y-1 text-xs sm:text-sm font-body">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
