import React, { useState, useEffect, lazy, Suspense } from "react";
import "./projects.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { socialMediaLinks } from '../../portfolio';

export default function Projects() {
  const GithubRepoCard = lazy(() => import('../../components/githubRepoCard/GithubRepoCard'));
  const FailedLoading = () => null ;
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState ([]);

  useEffect(() => {
    fetch('https://api.github.com/users/saldanaj97/repos')
        .then(res => res.json())
        .then(data => {
            setData(data);
            console.log(data);
        });
  }, []);

  const setData = (array) => {
    setRepo(array);
  }

  if (!(typeof repo === 'string' || repo instanceof String)){
  return (
    <Suspense fallback={renderLoader()}>
      <h1 className="projects-heading" id="projects">Projects</h1>
      <div className="material-cards">
        <div className="row">
          <div className="repocards-div-main">
            {
              repo.map((v,i) => {
                if(v.stargazers_count > 0){
                  return <GithubRepoCard repo={v} key={v.node_id}/>
                }
              })
            } 
          </div>
        </div>
      </div>
      <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
    </Suspense>
  );
} else{
    return(<FailedLoading />);
  }
}
