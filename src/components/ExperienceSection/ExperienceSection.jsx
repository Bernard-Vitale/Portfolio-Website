import { React, useState } from "react";
import './ExperienceSection.css';

const workExp = [
  {
    title: 'Application Development - Professional I',
    company: 'Fiserv',
    location: 'Berkeley Heights, NJ',
    dates: 'Dec. 2025 - Present',
    duties: [
        'Develop, maintain, and enhance custom client applications using SQR on the DNA core banking platform',
        'Translate client business requirements into scalable technical solutions within the DNA ecosystem.',
        'Design and optimize SQR programs for performance, reliability, and maintainability.',
        'Write SQL queries and implement data transformations to support custom reporting.'
    ]
  },
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
          'Deployed on Vercel.',
          (<a href='https://thelawnspanj.com/' target='_blank' >View Here</a>)
    ]
  }
];

const educationExp = [
  {
    school: 'Stevens Institute of Technology',
    gpa: '3.75',
    schoolDates: 'Sept. 2022 - Dec. 2024',
    degree: 'Bachelor of Science in Computer Science',
    awards:[ "Dean's List  (Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024)"],
    location: 'Hoboken, NJ'
  },
  {
    school: 'Brookdale Community College',
    gpa: '3.88',
    schoolDates: 'Sept. 2020 - Dec. 2022',
    degree: 'Majored in Computer Science',
    awards: ["Phi Theta Kappa Honor Society", "Dean’s List (Fall 2020, Spring 2021, Fall 2021)"],
    location: 'Lincroft, NJ'
  }

];

const ExperienceSection = ({ref}) => {
  const [isWork, setIsWork] = useState(true);


  return (
    <section ref={ref} className="experienceSectionOuterContainer subcontainer">
      <h1 className='sectionHeading'>Experience</h1>
      <div className="experienceSectionInnerContainer">
        <div className="toggleSwitchContainer">
          <div className="toggleSlider" style={{ transform: isWork ? "translateX(0%)" : "translateX(100%)" }}></div>
          <button onClick={() => setIsWork(true)} className={`expBtn workBtn ${isWork ? 'active' : 'notActive'}`}>Work</button>
          <button onClick={() => setIsWork(false)} className={`expBtn workBtn ${!isWork ? 'active' : 'notActive'}`} >Education</button>
        </div>
        <div className="experienceInfoContainer">
          <div className="workExperienceContainer" style={{ transform: isWork ? "translateX(0%)" : "translateX(-110%)" }}>
            {workExp.map((job) => {
              return(
                <article className="specificExpContainer" key={job.title}>
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
                    {job.duties.map((duty) => {return (<li key={duty}>{duty}</li>)})}
                  </ul>
                </article>
              )
            })}
          </div>
          <div className="educationExpereinceContainer" style={{ transform: !isWork ? "translateX(-100%)" : "translateX(10%)" }}>
            {educationExp.map((edu) => {
              return(
                <article className='specificExpContainer' key={edu.school}>
                    <header className="schoolHeader">
                      <div className='headerTop'>
                        <h2 className='schoolName'>{edu.school}</h2>
                        <p className="schoolDates">{edu.schoolDates}</p>
                      </div>
                      <div className="headerBottom">
                        <p className='schoolDegree'>{edu.degree}</p>
                        <p className="schoolLocation"> {edu.location}</p>
                      </div>
                    </header>
                    <ul className="schoolAwards">
                      <li><b>GPA:</b> {edu.gpa}</li>
                      <li>{edu.awards.map((item, index) => {return(<li key={index}>{item}</li>)})}</li>
                    </ul>

                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ExperienceSection;
