import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2; // Adjust the offset

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sidebar fixed left-0 top-0 h-full w-1/4 p-8 bg-dark-900">
      <div className="sidebar-content">
        <h1 className="text-4xl font-bold text-white">Arlind Arifaj</h1>
        <h2 className="text-2xl text-gray-400 mt-2">Frontend Developer</h2>
        <p className="text-gray-400 mt-4">I enjoy creating visually appealing and accessible web interfaces.</p>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social-links mt-8 flex space-x-4 justify-center">
          <a href="https://github.com/Arlindi1" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/arlind-arifaj/" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
