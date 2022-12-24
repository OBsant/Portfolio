import React from "react";
import { Cards } from "./Cards";
import { Titles } from "./Titles";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export const ContainerProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-proj" id="container-proj">
      <div data-aos="zoom-in">
        <Titles title="Projetos" />
        <div className="container-proj-projects">
          <div className="project">
            <Cards project={0} />
            <Cards project={1} />
            <Cards project={2} />
          </div>
          <div className="project">
            <Cards project={3} />
            <Cards project={4} />
            <Cards project={5} />
          </div>
        </div>
      </div>
    </div>
  );
};
