import React from "react"
import myResume from '../../assets/Bernard Vitale Resume.pdf';

const SocialBar = () => {
  return (
<div className="homeButtonsContainer">
          <div className="logoContainer">
            <a href="https://www.linkedin.com/in/bernard-vitale/" target="_blank">
                <img className="static homeLogo" src="/images/LinkedIn-Logo.png" alt="LinkedIn Logo" />
                <img className="gif homeLogo" src="/images/LinkedIn-Gif.gif" alt="LinkedIn Animation" />
            </a>
          </div>

          <div className="logoContainer">
            <a href="https://github.com/Bernard-Vitale" target="_blank">
                <img className="static homeLogo" src="/images/Github-Logo.png" alt="Github Logo" />
                <img className="gif homeLogo" src="/images/Github-Gif.gif" alt="Github Animation" />
            </a>
          </div>

          <div className="logoContainer">
            <a href="mailto:bvitale01@gmail.com">
              <img className="static homeLogo" src="/images/Email-Logo.png" alt="Email Icon" />
              <img className="gif homeLogo" src="/images/Email-Gif.gif" alt="Email Animation" />
            </a>
          </div>

          <div className="logoContainer">
            <a href={myResume} alt='My Resume' target="_blank">
              <img className="homeLogo resumeLogo" src="/images/Resume-Logo.png" alt="Resume Logo" />
            </a>
          </div>
        </div>
  )
};

export default SocialBar;
