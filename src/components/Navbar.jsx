import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = ["About", "Education", "Experience", "Projects", "Skills", "Achievements", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg border-b border-red-600/40 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-3 sm:px-6 py-2 sm:py-3">
        {/* Logo */}
        <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-red-500 tracking-wide glitch">
          Jacob Rajeev
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-3 sm:space-x-6">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative cursor-pointer uppercase text-xs sm:text-sm tracking-wider text-gray-200 hover:text-red-400 transition-colors"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
