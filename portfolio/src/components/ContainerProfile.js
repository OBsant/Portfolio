import React from "react";
import { Titles } from "./Titles";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export const ContainerProfile = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="perfil-container">
      <div data-aos="flip-left">
        <h1 className="title-big">Bem vindo, me chamo Ocivaldo Bruno!</h1>
        <Titles title="Desenvolvedor Web" />
      </div>
    </div>
  );
};
