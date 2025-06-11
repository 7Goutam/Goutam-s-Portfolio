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
    <div className=" bg-[#151515] w-full fixed top-0 left-0 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>

        <ul className="hidden md:flex gap-8">
          {links.map(({ id, text }) => (
            <li
              key={id}
              className="text-white hover:text-cyan-400 cursor-pointer font-medium transition"
            >
              <a href={`#${text.toLowerCase()}`}>{text}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-700"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow px-4 py-4">
          {links.map(({ id, text }) => (
            <li
              key={id}
              className="py-2 text-gray-700 hover:text-cyan-400 font-medium transition"
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
