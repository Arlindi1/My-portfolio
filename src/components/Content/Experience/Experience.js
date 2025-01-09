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
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <a key={index} href={experience.link} className="experience-item" target="_blank" rel="noopener noreferrer">
            <div className="experience-content">
            <div className="experience-image-text">
            <div className="experience-image">
            <img src={experience.imageUrl} alt={experience.title} className="company-logo" />
            </div>
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
