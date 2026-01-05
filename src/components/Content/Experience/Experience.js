import React from 'react';
import "./Experience.css";

const experiences = [
  {
    title: 'Frontend Intern - Sigal Uniqa',
    company: 'Sigal UNIQA',
    imageUrl: 'https://th.bing.com/th/id/R.a0c347076ded495fdbd55bc443e900d5?rik=Y9zaVDA1%2bFBibg&riu=http%3a%2f%2fsigal.com.al%2fwp-content%2fuploads%2f2019%2f05%2flogo-SIGAL.png&ehk=a5V3moSFNzK%2bswsbJBwDdcctCz9BQ1hqPlgryxe0EaA%3d&risl=&pid=ImgRaw&r=0',
    period: 'Aug 24 - Jan 25',
    description: 'As a Frontend Web Developer at Sigal Uniqa, I work on creating intuitive and user-friendly web interfaces for our insurance platforms. My role involves collaborating with cross-functional teams to develop responsive websites and web applications using technologies like HTML5, CSS3, JavaScript, and modern frameworks such as React. I focus on optimizing web performance, ensuring accessibility compliance, and enhancing the overall user experience to meet both client and business needs.',
    tags: ['JavaScript', 'React', 'Wordpress'],
    link: 'https://sigal-ks.com/' // replace with actual link if available
  },
  {
    title: 'Student Participant - Advanced JavaScript and React',
    company: 'Beetroot Academy',
    imageUrl: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/beetroot_resized/original.png?1664306157',
    period: 'Jan 24 - Mar 24 ',
    description: 'Beetroot Academy is a Swedish-Ukrainian technology school that helps people take their careers to the next level. We offer intensive IT courses in a friendly atmosphere where no one is left behind. The Beetroot Academy in Pristina is managed by the company Kutia.',
    tags: ['JavaScript', 'React'],
    link: 'https://beetroot.academy' // replace with actual link if available
  },
  {
    title: 'Student Participant - Web Development',
    company: 'Makerminds',
    imageUrl: 'https://makerminds.de/wp-content/uploads/2021/05/Banner_Logo_MM-300x169.png',
    period: 'Nov 23 - Jan 24 ',
    description: 'Intensive training course covering the basics of web development using HTML, CSS, and JavaScript. This course transforms participants from beginners to capable developers within 3 months, advancing their knowledge and preparing them to meet the demands of the modern digital era as web developers.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://makerminds.io' // replace with actual link if available
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section reveal">
      <header className="section-header">
        <p className="section-kicker">Career</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Roles and programs that shaped my frontend skills.
        </p>
      </header>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <a
            key={experience.title}
            href={experience.link}
            className="card card-hover experience-item reveal-item"
            style={{ '--reveal-delay': `${index * 90}ms` }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="experience-logoWrap" aria-hidden="true">
              <img
                src={experience.imageUrl}
                alt=""
                className="experience-logo"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="experience-main">
              <div className="experience-topRow">
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-period">{experience.period}</div>
              </div>
              <div className="experience-company">{experience.company}</div>
              <p className="experience-description">{experience.description}</p>

              <div className="experience-tags" aria-label="Technologies">
                {experience.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
