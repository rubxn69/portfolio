import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFirebase,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaSuperscript } from "react-icons/fa"; // ✅ used for MATLAB

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <SiPython className="text-green-400" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      ],
    },
    {
      title: "Technologies & Frameworks",
      skills: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Computer Vision (OpenCV)", icon: <SiOpencv className="text-green-500" /> },
        { name: "Machine Learning (PyTorch)", icon: <SiPytorch className="text-orange-500" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "MATLAB", icon: <FaSuperscript className="text-yellow-400" /> }, // ✅ replaced
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", icon: <span className="text-red-400 font-bold">👑</span> },
        { name: "Time Management", icon: <span className="text-green-400 font-bold">⏳</span> },
        { name: "Communication", icon: <span className="text-blue-400 font-bold">💬</span> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-3 sm:px-6 py-10 sm:py-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_70%)]"></div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-red-500 mb-12 relative z-10 glitch"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl z-10">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900/80 p-6 rounded-xl border border-red-600/30 shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-red-400 mb-4">{group.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {group.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-gray-200 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
