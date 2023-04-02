import React from "react";
import "./githubprofilecard.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import Fade from "react-reveal/Fade";

export default function GithubProfileCard({ prof }) {
  return (
    <Fade bottom duration={1000} distance='20px'>
      <div className='main' id='contact'>
        <div className='image-content-profile'>
          <img src={prof.avatarUrl} alt={prof.name} className='profile-image' />
        </div>
        <div className='main-content-profile'>
          <h1 className='prof-title'>{contactInfo.title}</h1>
          <p className='prof-subtitle'>{contactInfo.subtitle}</p>
          <div className='opp-div'>
            <span className='desc-prof' href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </span>
          </div>
          <div className='opp-div'>
            <a className='desc-prof' href={"mailto:" + contactInfo.email_address}>
              {contactInfo.email_address}
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}
