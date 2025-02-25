import React from "react";
import "./NavBar.css";

const NavBar = ({ scrollToSection, sections }) => {
  return (
    <div className="navBarContainer">
      <h1 className="navBarItem" onClick={() => scrollToSection(sections.home)}>Home</h1>
      <h1 className="navBarItem" onClick={() => scrollToSection(sections.skills)}>Skills</h1>
      <h1 className="navBarItem" onClick={() => scrollToSection(sections.projects)}>Projects</h1>
      <h1 className="navBarItem" onClick={() => scrollToSection(sections.experience)}>Experience</h1>
    </div>
  );
};

export default NavBar;
