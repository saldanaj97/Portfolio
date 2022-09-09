import React from "react";
import "./githubprofilecard.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import Fade from "react-reveal/Fade";

export default function GithubProfileCard({ prof }) {
  if (prof.hireable !== null) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance='20px'>
      <div className='main' id='contact'>
        <h1 className='prof-title'>Reach Out To Me!</h1>
        <div className='row'>
          <div className='main-content-profile'>
            <div className='opp-div'>
              <span className='desc-prof'>Open for opportunities: {prof.hireable}</span>
            </div>
            <SocialMedia />
            <div className='opp-div'>
              <span className='desc-prof'>Phone: {contactInfo.number}</span>
            </div>
            <div className='opp-div'>
              <span className='desc-prof'>Email: {contactInfo.email_address}</span>
            </div>
          </div>
          <div className='image-content-profile'>
            <img src={prof.avatarUrl} alt={prof.name} className='profile-image' />
          </div>
        </div>
      </div>
    </Fade>
  );
}
