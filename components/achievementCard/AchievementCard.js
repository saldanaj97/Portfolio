import React from "react";
import "./achievementcard.css";

export default function AchivementCard({ cardInfo }) {
  return (
      <div className="certificate-card">
        <div className="certificate-image-div">
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-subtitle">{cardInfo.description}</p>
        </div>
      </div>
  );
}