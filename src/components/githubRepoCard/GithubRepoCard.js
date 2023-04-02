import React from "react";
import "../githubRepoCard/githubrepocard.css";

export default function RepoCards({ repo }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className='repo-card-div'
      style={{ backgroundColor: "#a39bd3", borderRadius: "25px" }}
      key={repo.id}
      onClick={() => openRepoinNewTab(repo.svn_url)}
    >
      <div className='repo-name-div'>
        <svg aria-hidden='true' height='20' role='img' viewBox='0 0 12 16' width='14' className='repo-svg'>
          <path
            fillRule='evenodd'
            d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
          ></path>
        </svg>
        <p className='repo-name'>{repo.name}</p>
      </div>
      <div className='repo-description'>{repo.description}</div>
      <div className='repo-left-stat'>{repo.language}</div>
    </div>
  );
}
