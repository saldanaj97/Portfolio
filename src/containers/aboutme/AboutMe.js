import React from "react";
import "./aboutme.css";
import { aboutMe } from "../../portfolio";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function AboutMe() {
  return (
    <div className='main' id='about-me'>
      <div className='about-me-main-div'>
        <Fade left duration={1000}>
          <div className='about-me-image-div'>
            <img alt='person-working-on-laptop' src={require("../../assets/images/developerActivity.svg")}></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className='about-me-text-div'>
            <h1 className='about-me-heading'>{aboutMe.title} </h1>
            <div>
              <p className='subTitle about-me-text' key={aboutMe.goals[0]}>
                {aboutMe.goals[0]}
              </p>
              <p className='subTitle about-me-text' key={aboutMe.goals[1]}>
                {aboutMe.goals[1]}
              </p>
              <SoftwareSkill />
              <p className='subTitle about-me-text' key={aboutMe.goals[2]}>
                {aboutMe.goals[2]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
