import React from "react";
import "./education.css";
import { educationSection } from "../../portfolio";

export default function Education() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul>
          {educationSection.courses.map(courses=> {
            return (
              <li className="software-skill-inline" name={courses.courseName}>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}