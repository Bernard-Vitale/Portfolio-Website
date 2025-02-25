import React, { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./components/HomeSection/HomeSection";
import './App.css'
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import myResume from './assets/Bernard Vitale Resume.pdf';

function App() {

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, 
      behavior: "smooth", 
    });
  };

  const year = new Date().getFullYear();
  
  return (
    <main>
    <NavBar scrollToSection={scrollToSection} sections={{ home: homeRef, skills: skillsRef, experience: experienceRef, projects: projectsRef }} />
    <div className="mainContainer">
        <HomeSection ref={homeRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectSection ref={projectsRef} />
        <ExperienceSection ref={experienceRef} />
      </div>
      <footer>
        <p>&copy; {year} Bernard Vitale | All Rights Reserved</p>
        <div className="social-links">
            <a href="https://github.com/Bernard-Vitale" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/bernard-vitale/" target="_blank">LinkedIn</a>
            <a href={myResume} alt='My Resume' target="_blank">Resume</a>
        </div>
        <p>Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>
    </footer>
    </main>
  )
}

export default App
