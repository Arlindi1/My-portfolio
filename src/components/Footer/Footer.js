import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-gray-400 p-4 text-center">
      <div className="container mx-auto">
        <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly.</p>
        <p>Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
      </div>
    </footer>
  );
};

export default Footer;
