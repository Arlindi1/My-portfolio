import React from 'react';
import "./Header.css";


const Header = () => {
  return (
    <header className="fixed w-full bg-dark-900 p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Arlind Arifaj</div>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
