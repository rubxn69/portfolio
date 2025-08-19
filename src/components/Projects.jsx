import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Bidirectional Sign Language to Speech Converter",
      tech: "Python, OpenCV, MediaPipe, CVZone, pyttsx3, Speech Recognition, Custom Dataset",
      description:
        "Developed a two-way communication system enabling real-time translation of sign language gestures into speech and speech into text. Integrated computer vision models with custom datasets for gesture recognition and speech-to-text APIs for transcription, bridging accessibility gaps.",
      demo: "/src/assets/sign.png", // updated to use sign.png from assets
    },
    {
      title: "Chat Application",
      tech: "React, Firebase",
      description:
        "Built a real-time chat application with authentication and database support using React and Firebase, offering a smooth messaging experience.",
      demo: "/demos/chat-app.png", // replace later
    },
    {
      title: "IoT Air Quality Monitoring Node",
      tech: "ESP32, Sensors, ThingSpeak",
      description:
        "Developed IoT nodes for monitoring air quality deployed across multiple locations. Data was processed and visualized on ThingSpeak, providing actionable insights on pollution levels.",
      demo: "/demos/air-quality.png", // replace later
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-950 text-white px-3 sm:px-6 py-10 sm:py-20 flex flex-col items-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_70%)]"></div>

      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-8 sm:mb-12 relative z-10 glitch"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900/70 p-2 sm:p-6 rounded-xl border border-red-600/30 shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition flex flex-col text-xs sm:text-base"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Demo Placeholder */}
            <div className="w-full h-32 sm:h-48 mb-2 sm:mb-4 mt-2 sm:mt-4 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden border border-red-600/30">
              {proj.demo ? (
                <img
                  src={proj.demo}
                  alt={`${proj.title} demo`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <p className="text-gray-500 animate-pulse">Demo Coming Soon...</p>
              )}
            </div>

            {/* Project Info */}
            <h3 className="text-base sm:text-xl font-semibold text-red-400">{proj.title}</h3>
            <p className="text-sm text-gray-400">{proj.tech}</p>
            <p className="mt-3 text-gray-200">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
