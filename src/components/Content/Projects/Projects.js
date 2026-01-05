import React from 'react';
import "./Projects.css";

const projects = [
  {
    title: 'Sigal Website',
    description: 'Rebuilt the SIGAL UNIQA website from scratch, focusing on enhanced functionality, responsiveness, and user experience. Using React and MySQL for data handling, I implemented key features such as a custom KASKO insurance calculator, a dynamic dropdown menu for services, and an authentication system.',
    imageUrl: "https://i.postimg.cc/Zn1K3Dxf/sigal-website.png",
    link: ''
  },
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
    <section id="projects" className="section projects-section reveal">
      <header className="section-header">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A few projects that highlight my frontend and full-stack experience.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Wrapper = project.link ? 'a' : 'article';
          const wrapperProps = project.link
            ? {
                href: project.link,
                target: '_blank',
                rel: 'noopener noreferrer',
                'aria-label': `Open ${project.title} (new tab)`
              }
            : { 'aria-label': project.title };

          return (
            <Wrapper
              key={project.title}
              {...wrapperProps}
              className={[
                'card',
                project.link ? 'card-hover' : '',
                'project-card',
                'reveal-item',
                project.link ? '' : 'is-disabled'
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="project-media">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="project-body">
                <div className="project-topRow">
                  <h3 className="project-title">{project.title}</h3>
                  <span
                    className={[
                      'project-cta',
                      project.link ? '' : 'is-muted'
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {project.link ? 'View ↗' : 'Private'}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
