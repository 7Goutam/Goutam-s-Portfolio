import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="bg-[#151515] w-full fixed top-0 left-0 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ id, text }, index) => (
            <li
              key={id}
              className={`font-medium transition cursor-pointer ${
                index === links.length - 1
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              <a href={`#${text.toLowerCase()}`}>{text}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#151515] border-t border-gray-700 px-4 py-4">
          {links.map(({ id, text }, index) => (
            <li
              key={id}
              className={`py-3 font-medium transition w-full text-center ${
                index === links.length - 1
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              <a onClick={() => setNavOpen(false)} href={`#${text.toLowerCase()}`}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
