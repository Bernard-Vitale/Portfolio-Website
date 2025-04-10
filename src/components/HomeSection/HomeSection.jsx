import React from "react"
import "./HomeSection.css"
import SocialBar from "./SocialBar";

const HomeSection = ({ref}) => {
  return (
    <section ref={ref} className="homeInfoContainer subcontainer">
      <div className="introContainer">
        <div className="homeTitleContainer">
            <h1>Hey, I'm Bernard<span className="wave-element">👋</span></h1>
            <div className="locationContainer">
              <img className="locationLogo" src="/images/Location-Logo.png" alt="Location Icon" />
              <p className="locationText">New Jersey, USA</p>
            </div>
          </div>
          <SocialBar />
      </div>
      <div className="littleDescription">
        <p>I’m a <b>Software Developer</b> who enjoys creating things that work seamlessly and make life easier. Solving problems and writing clean, efficient code is what drives me.</p>
      </div>
    </section>
  )
};

export default HomeSection;
