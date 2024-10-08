import React from 'react';
import "./Experience.css";

const experiences = [
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQFGEo_OJBqQgg/company-logo_200_200/company-logo_200_200/0/1630532393024/makerminds_llc_logo?e=1734566400&v=beta&t=YcF6jQrirV3BDolCLiFZAM-dcbiXn2VrJkUgH-9N7ws',
    period: 'Nov 23 - Jan 24 ',
    description: 'Intensive training course covering the basics of web development using HTML, CSS, and JavaScript. This course transforms participants from beginners to capable developers within 3 months, advancing their knowledge and preparing them to meet the demands of the modern digital era as web developers.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://makerminds.io' // replace with actual link if available
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <a key={index} href={experience.link} className="experience-item" target="_blank" rel="noopener noreferrer">
            <div className="experience-content">
            <div className="experience-period">
            <img src={experience.imageUrl} alt={experience.title} className="company-logo" />
            <div className="period text-gray-400">{experience.period}</div>
              </div>
              <div className="details">
                <h3 className="text-xl font-bold text-teal-400">{experience.title}</h3>
                <p className="mt-2 text-gray-300">{experience.description}</p>
                <div className="tags mt-2">
                  {experience.tags.map((tag, idx) => (
                    <span key={idx} className="tag bg-gray-800 text-gray-300 rounded-full px-2 py-1 mr-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
