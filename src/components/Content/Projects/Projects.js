import React from 'react';
import "./Projects.css";

const projects = [
  {
    title: 'Netflix Clone',
    description: 'A responsive web application built using React, showcasing popular movies and TV shows in a user-friendly interface inspired by Netflix. It features dynamic content fetched from The Movie Database (TMDB), interactive functionalities such as favorites, editing, and deletion of movie details directly through modal dialogs, and a responsive design for an optimal viewing experience across various devices.',
    imageUrl: "https://i.postimg.cc/59FY42jC/netflix.png",
    link: 'https://arlindis-net01flix-clone.netlify.app/'
  },
  {
    title: 'Math Conference Website',
    description: 'A comprehensive web application designed to facilitate the Annual Mathematics and Applications Conference 2024. The platform includes features for user registration, abstract submission, and participant management. Users can view conference details, venue information, and contact the organizers through the integrated contact form. Built using PHP, MySQL, HTML, and CSS.',
    imageUrl: "https://i.postimg.cc/q7mxwTrQ/Conference-project.png",
    link: 'https://amac2024.000webhostapp.com/',
  },

  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-item" target="_blank" rel="noopener noreferrer">
            <div className="project-content">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="details">
                <h3 className="text-xl font-bold text-teal-400">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
