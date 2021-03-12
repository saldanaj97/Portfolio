import React, { useState, useEffect, lazy, Suspense } from "react";
import "./projects.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";

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
      <div className="column">
        <div className="repocards">
          <h1>Project List: </h1>
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
    </Suspense>
  );
} else{
    return(<FailedLoading />);
  }
}
