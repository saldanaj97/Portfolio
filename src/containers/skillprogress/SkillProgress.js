import React from "react";
import "./skillprogress.css";
import { techStack, languageStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">
                <div className="skills-bar">
                    <h1 className="skills-heading">Project Experience</h1>
                    {techStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div key={exp.Stack} className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
                <p></p>
                <div className="skills-bar">
                    <h1 className="skills-heading">Language Proficiency</h1>
                    {languageStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div key={exp.Stack} className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
            </Fade>
        );
    }
    return null;
}