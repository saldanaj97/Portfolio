import React from "react";
import "./socialmedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github">
        <i className="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}
    </div>
  );
}