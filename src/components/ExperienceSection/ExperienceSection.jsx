import { React, useState } from "react";
import './ExperienceSection.css';

const workExp = [
  {
    title: 'Web Programming Course Assistant',
    company: 'Stevens Institute of Technology',
    location: 'Hobken, NJ',
    dates: 'Sept. 2024 - Dec. 2024',
    duties: [
        'Conducted weekly office hours, providing guidance to 30+ students on assignments and course concepts.',
        'Tested automated grading scripts, ensuring error-free grading for lab assignments.',
        'Clarified complex topics to enhance student comprehension.',
        'Evaluated and graded student assignments with detailed, constructive feedback, enhancing students coding skills.'
    ]
  },
  {
    title: 'Web Developer (Contract)',
    company: 'The Lawn Spa',
    location: 'Cliffwood, NJ',
    dates: 'Sept 2023',
    duties: [
          'Designed and developed a fully responsive website for a landscaping company.',
          'Ensured seamless adaptability across devices with a mobile-friendly layout.',
          'Implemented a contact form for direct communication with the company.',
          'Continuously addressed bugs and implemented improvements as needed to maintain website functionality.',
          'Deployed on Vercel.'
    ]
  }
];

const educationExp = [

];

const ExperienceSection = () => {
  const [isWork, setIsWork] = useState(true);


  return (
    <section className="experienceSectionContainer">
      <div className="toggleSwitchContainer">
      <div className="toggleSlider" style={{ transform: isWork ? "translateX(0%)" : "translateX(100%)" }}></div>
        <button onClick={() => setIsWork(true)} className={`expBtn workBtn ${isWork ? 'active' : 'notActive'}`}>Work</button>
        <button onClick={() => setIsWork(false)} className={`expBtn workBtn ${!isWork ? 'active' : 'notActive'}`} >Education</button>
      </div>
      <div className="experienceInfoContainer">
        <div className="workExperienceContainer" style={{ transform: isWork ? "translateX(0%)" : "translateX(-110%)" }}>
          {workExp.map((job) => {
            return(
              <article className="specificJobContainer">
                <header className='jobHeader'>
                  <div className="jobHeaderLeft">
                    <h2 className="jobTitle">{job.title}</h2>
                    <p className="companyName">{job.company}</p>
                  </div>
                  <div className='jobHeaderRight'>
                      <p className="jobDates">{job.dates}</p>
                      <p className="jobLocation">{job.location}</p>
                  </div>
                </header>
                <ul className="jobDuties">
                  {job.duties.map((duty) => {return (<li>{duty}</li>)})}
                </ul>
              </article>
            )
          })}
        </div>
        <div className="educationExpereinceContainer">
          
        </div>
      </div>
    </section>
  )
};

export default ExperienceSection;
