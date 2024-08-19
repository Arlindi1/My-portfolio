import React from 'react';
import "./MainIntroduction.css";
import profilePic from '../../../images/Profile.jpg';

const MainIntroduction = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src={profilePic} alt="Arlind Arifaj" className="profile-pic" />
        <p className="about-text">
        I’m a passionate Computer Science graduate from FSHMN with a solid foundation in programming. My enthusiasm for front-end development led me to pursue additional courses in JavaScript and React, complementing my formal education. This blend of academic learning and self-driven study has equipped me with a strong skill set for creating dynamic and engaging web applications.
        </p>
      </div>
    </section>
  );
};

export default MainIntroduction;
