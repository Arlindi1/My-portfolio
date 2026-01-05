import React from 'react';
import "./Content.css";
import MainIntroduction from './MainIntroduction/MainIntroduction';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from '../Footer/Footer';

const Content = () => {
  return (
    <main className="content">
      <div className="content-inner">
        <MainIntroduction />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Content;
