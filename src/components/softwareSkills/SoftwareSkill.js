import React from "react";
import "./softwareskill.css";
import { aboutMe } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className='software-skills-main-div'>
      <ul className='dev-icons'>
        {aboutMe.softwareSkills.map((skill) => {
          return (
            <li className='software-skill-inline' key={skill.skillName} name={skill.skillName}>
              <i className={skill.fontAwesomeClassname}></i>
              <p>{skill.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
