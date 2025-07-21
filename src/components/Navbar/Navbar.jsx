import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo, name */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">龙</span>
          <span className="text-xl font-bold text-gray-800">Golden Dragon</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            Contact
          </Link>
          <Link to="/order">
            <button
              type="button"
              class="bg-chinese-red-600 text-red font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-chinese-red-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-soft"
            >
              Buy now
            </button>
          </Link>
        </div>

        {/* Hamburger  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobil */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200 py-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
