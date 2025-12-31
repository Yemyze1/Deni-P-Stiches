import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-900 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold cursor-pointer">
          Deni-P Stiches
        </h1>

        {/* Hamburger Button */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li className="hover:text-indigo-300 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-indigo-300 cursor-pointer">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-indigo-300 cursor-pointer">
            <a href="#collections">Collections</a>
          </li>
          <li className="hover:text-indigo-300 cursor-pointer">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="hover:text-indigo-300 cursor-pointer">
            <a href="#bottom">Bottom</a>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-full right-0 bg-indigo-800 w-48 rounded-lg shadow-lg md:hidden text-white text-lg flex flex-col space-y-4 p-4">
            <li className="hover:text-indigo-300 cursor-pointer">
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer">
              <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer">
              <a href="#collections" onClick={() => setIsOpen(false)}>Collections</a>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer">
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            </li>
            <li className="hover:text-indigo-300 cursor-pointer">
              <a href="#bottom" onClick={() => setIsOpen(false)}>Bottom</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
