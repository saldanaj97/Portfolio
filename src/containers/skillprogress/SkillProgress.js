import React from "react";
import "./skillprogress.css";
import { languageStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
  if (languageStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance='20px'>
        <div className='skills-bar'>
          <h1 className='skills-heading'>Technologies Used in Projects</h1>
          {languageStack.experience.map((exp) => {
            const progressStyle = {
              width: exp.progressPercentage,
            };
            return (
              <div key={exp.Stack} className='skill'>
                <p>{exp.Stack}</p>
                <div className='meter'>
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    );
  }
  return null;
}
