import React from "react";
import { useEffect, useState } from "react";

export const Cards = ({ project }) => {
  const [repositories, setRespositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/OBsant/repos")
      .then((response) => response.json())
      .then((data) => setRespositories(data));
  }, []);

  const decrescente = repositories.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const repoObj = {
    title: decrescente.map((repository) => repository.name),
    description: decrescente.map((repository) => repository.description),
    link: decrescente.map((repository) => repository.html_url),
  };

  let name = repoObj.title[project];

  if (repoObj.title[project] === "LandingPage") {
    name = "landing-page";
  }

  let div;

  if (repoObj.description[project] !== null) {
    div = (
      <div className="card">
        <img
          src={`https://raw.githubusercontent.com/OBsant/${repoObj.title[project]}/master/${name}/public/${repoObj.title[project]}.png`}
          alt="img"
          className="imgProject"
        />
        <div className="infoProject">
          <h2>{repoObj.title[project]}</h2>
          <p>{repoObj.description[project]}</p>
          <div className="buttons">
            <a href={repoObj.link[project]} target="blank">
              Ver Projeto
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{div}</>;
};
