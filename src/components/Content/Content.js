import React from 'react';
import "./Content.css";
import MainIntroduction from './MainIntroduction/MainIntroduction';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Content = () => {
  return (
    <div className="content ml-1/4 p-8 bg-dark-800">
      <MainIntroduction />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Content;
