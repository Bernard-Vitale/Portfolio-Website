import React from "react"
import "./HomeSection.css"

const HomeSection = (props) => {
  return (
    <section className="homeSectionContainer">
      <div className="homeLeftContainer">
        <h1>Hey, I'm Bernard 👋</h1>
        <p>I am a <b>Software Developer</b> with a passion for developing innavtive software.</p>
      </div>
      <div className="homeRightContainer">
        <div className="profileImageWrapper">
          <img className="profileImage" src="/images/Senior-Picture.JPG" alt="Bernard Vitale Profile Picture" />
        </div>
      </div>
    </section>
  )
};

export default HomeSection;
