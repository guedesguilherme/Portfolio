import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  return (
    <nav className="w-full bg-darkGray text-smoke sticky top-0 left-0 py-4 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="w-[50px]">
          <img src="/img/logo.svg" alt="Dev.Guilherme" className="cursor-pointer" />
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-2xl font-semibold items-center">
          {["home", "about", "projects", "contacts"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="hover:text-primaryPurple transition duration-300 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      <ul
        className={`md:hidden flex flex-col bg-darkGray absolute top-16 left-0 w-full text-center space-y-6 py-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {["home", "about", "projects", "contacts"].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="hover:text-primaryPurple transition duration-300 cursor-pointer text-lg"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
