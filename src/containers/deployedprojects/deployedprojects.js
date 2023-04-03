import React from "react";
import { deployedProjects } from "../../portfolio";
import Button from "../../components/button/Button";
import Carousel from "react-material-ui-carousel";
import "./deployedprojects.css";

export default function DeployedProjects() {
  return (
    <div className='deployed-container' id='deployed-projects'>
      <h1 className='deployed-projects-header'>{deployedProjects.title}</h1>
      <div className='row'>
        <Carousel className='project-cards'>
          {deployedProjects.projects.map((project, i) => (
            <div className='project-card-container'>
              <div className='project-card' style={{ backgroundColor: "#a39bd3", borderRadius: "25px" }} key={i}>
                <img className='project-screenshot' alt={project.name} src={project.screenshot} />
                <h2 className='project-name'>{project.name}</h2>
                <div className='project-tech-flares-container'>
                  {project.techUsed.map((tech) => (
                    <div className='tech-flare'>{tech}</div>
                  ))}
                </div>
                <div className='project-description'>{project.description}</div>
                <div className='button-div'>
                  <Button text={"View Code"} className='project-button' href={project.repoUrl} newTab={true} />
                  <Button text={"View Website"} className='project-button' href={project.url} newTab={true} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
