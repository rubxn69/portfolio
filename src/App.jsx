import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <footer className="bg-black text-center py-4 border-t border-red-600">
        <p className="text-sm">© {new Date().getFullYear()} Jacob Rajeev | Built with React & Tailwind</p>
      </footer>
    </div>
  );
}
