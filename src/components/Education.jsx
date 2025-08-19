import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      title: "B.Tech in Electronics and Communication Engineering",
      institution: "Saintgits College of Engineering",
      year: "2022 – 2026",
      score: "CGPA: 7",
      icon: <FaUniversity className="text-red-400" />,
    },
    {
      title: "Higher Secondary (Class 12)",
      institution: "Jerusalem Mount Higher Secondary School",
      year: "2020 – 2022",
      score: "91%",
      icon: <FaSchool className="text-red-400" />,
    },
    {
      title: "Secondary School (Class 10)",
      institution: "MD Seminary Higher Secondary School",
      year: "2019 – 2020",
      score: "63%",
      icon: <FaGraduationCap className="text-red-400" />,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-3 sm:px-6 py-12 sm:py-20 relative overflow-hidden font-body"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_70%)]"></div>

      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-8 sm:mb-12 relative z-10 glitch font-futuristic"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-3xl w-full z-10">
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-red-600/40 transform -translate-x-1/2"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="bg-zinc-900/80 p-2 sm:p-6 rounded-xl border border-red-600/30 shadow-lg w-64 sm:w-80 relative text-xs sm:text-sm">
              <div className="absolute -left-10 top-6 bg-black border-2 border-red-600 rounded-full p-3">
                {edu.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-red-400 font-futuristic">{edu.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{edu.year}</p>
              <p className="text-gray-200 text-xs sm:text-sm">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
