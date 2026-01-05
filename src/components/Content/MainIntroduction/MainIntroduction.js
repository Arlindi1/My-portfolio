import React from 'react';
import "./MainIntroduction.css";
import profilePic from '../../../images/Profile.jpg';

const MainIntroduction = () => {
  return (
    <section id="about" className="section about-section reveal">
      <header className="section-header">
        <p className="section-kicker">Introduction</p>
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          Frontend developer focused on building clean, accessible, and
          responsive user interfaces.
        </p>
      </header>

      <div className="card about-card card-hover">
        <div className="about-media">
          <img
            src={profilePic}
            alt="Arlind Arifaj"
            className="profile-pic"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about-body">
          <p className="about-text">
            I'm a passionate Computer Science graduate from FSHMN with a solid
            foundation in programming. My enthusiasm for front-end development
            led me to pursue additional courses in JavaScript and React,
            complementing my formal education.
          </p>
          <p className="about-text">
            This blend of academic learning and self-driven study has equipped
            me with a strong skill set for creating dynamic and engaging web
            applications.
          </p>

          <div className="about-chips" aria-label="Skills">
            <span className="pill">React</span>
            <span className="pill">JavaScript</span>
            <span className="pill">HTML &amp; CSS</span>
            <span className="pill">Responsive UI</span>
            <span className="pill">Accessibility</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIntroduction;
