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

  console.log(repoObj.title[5]);

  let div;

  if (repoObj.description[project] !== null) {
    div = (
      <div className="card">
        <h2>{repoObj.title[project]}</h2>
        <p>{repoObj.description[project]}</p>
        <a href={repoObj.link[project]} target="blank">
          Ver Projeto
        </a>
      </div>
    );
  }

  return <>{div}</>;
};
