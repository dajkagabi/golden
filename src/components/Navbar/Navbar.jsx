import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-chinese-red-600">龙</span>
          <span className="text-xl font-bold text-gray-800">Golden Dragon</span>
        </div>

        {/* Desktop  */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-semibold">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-gray-900 font-semibold">Menu</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 font-semibold">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-semibold">Contact</Link>

          <Link to="/menu">
            <button
              type="button"
              className="bg-chinese-red-600 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-chinese-red-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-soft"
            >
              Buy now
            </button>
          </Link>
        </div>

        {/* Hamburger  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2 bg-white rounded-md shadow-md p-4 border border-gray-200">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-chinese-red-600">Home</Link>
            <Link to="/menu" onClick={toggleMenu} className="text-gray-700 hover:text-chinese-red-600">Menu</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-chinese-red-600">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-chinese-red-600">Contact</Link>
            <Link to="/menu" onClick={toggleMenu}>
              <button className="w-full mt-2 bg-chinese-red-600 text-black font-semibold py-2 px-4 rounded-full shadow hover:bg-chinese-red-900 transition-all duration-300">
                Buy now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
