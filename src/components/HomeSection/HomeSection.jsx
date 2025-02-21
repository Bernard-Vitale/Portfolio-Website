import React from "react"
import "./HomeSection.css"
import SocialBar from "./SocialBar";

const HomeSection = () => {
  return (
    <section className="homeInfoContainer subcontainer">
      <div className="introContainer">
        <div className="homeTitleContainer">
            <h1>Hey, I'm Bernard<span className="wave-element">👋</span></h1>
            <div className="locationContainer">
              <img className="locationLogo" src="/images/Location-Logo.png" alt="Location Icon" />
              <p className="locationText">Matawan, New Jersey</p>
            </div>
          </div>
          <SocialBar />
      </div>
      <div className="littleDescription">
        <p>I am a <b>Software Developer</b> with a passion for developing innovative software. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
      </div>
    </section>
  )
};

export default HomeSection;
